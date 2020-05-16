import { forEach } from 'lodash';
import { fromEvent } from 'rxjs';
import { animationFrame } from 'rxjs/internal/scheduler/animationFrame';
import { filter, throttleTime } from 'rxjs/operators';

const cssSupports = (property: string, value: string) => {
  if ('CSS' in window) {
    return CSS.supports(property, value);
  } else {
    const jsProperty = property.replace(/-([a-z])/g, function (g) {
      return g[1].toUpperCase();
    });
    return jsProperty in document.body.style;
  }
};

const stickySupported = cssSupports('position', 'sticky') || cssSupports('position', '-webkit-sticky');

const releavingElements = document.querySelectorAll<HTMLElement>('[data-revealing]');

const setBottom = (element: HTMLElement) => (element.style.bottom = `${window.innerHeight - element.offsetHeight}px`);

const forEachRevealingElement = (callback: (el: HTMLElement, index: number) => void) =>
  forEach(releavingElements, callback);

const setOverlayOpacity = (element: HTMLElement) => {
  const prevElement = element.previousElementSibling as HTMLElement;
  const prevElementTop = prevElement.offsetTop;
  const overlay = element.firstElementChild as HTMLElement;
  const opacity = (window.innerHeight + window.scrollY - prevElementTop) / window.innerHeight;

  overlay.style.opacity = `${Math.min(1, Math.max(0, 1 - opacity))}`;
};

const createPrevElement = (element: HTMLElement) => {
  const prevElement = document.createElement('div');

  prevElement.setAttribute('aria-hidden', 'true');
  prevElement.classList.add('opacity-0');

  element.parentElement?.insertBefore(prevElement, element);
};

const createOverlayElement = (element: HTMLElement) => {
  const prevElement = document.createElement('span');

  prevElement.setAttribute('aria-hidden', 'true');
  prevElement.classList.add('absolute', 'top-0', 'left-0', 'h-full', 'w-full', 'bg-black', 'opacity-0', 'z-1');

  element.prepend(prevElement);
};

// set bottom to each element
forEachRevealingElement((el, index) => {
  if (!stickySupported) return;

  // add z-index and position
  el.style.zIndex = `${releavingElements.length - index}`;
  el.classList.add(
    index === 0 ? 'relative' : 'sticky',
    index !== releavingElements.length - 1 ? 'shadow-lg' : 'shadow-0'
  );

  // first element cannot be sticky
  if (index === 0) return;

  setBottom(el);
  createPrevElement(el);
  createOverlayElement(el);

  let isIntersecting: boolean;

  const observer = new IntersectionObserver((entries) => {
    isIntersecting = entries[0].isIntersecting;

    setOverlayOpacity(el);
  });

  observer.observe(el.previousElementSibling as HTMLElement);

  fromEvent(window, 'scroll')
    .pipe(
      filter(() => isIntersecting),
      throttleTime(0, animationFrame)
    )
    .subscribe(() => setOverlayOpacity(el));
});

fromEvent(window, 'resize')
  .pipe(throttleTime(0, animationFrame))
  .subscribe(() => forEachRevealingElement((el, index) => index !== 0 && setBottom(el)));
