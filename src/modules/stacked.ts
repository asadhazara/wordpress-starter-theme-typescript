import { forEach } from 'lodash';
import { fromEvent } from 'rxjs';
import { animationFrame } from 'rxjs/internal/scheduler/animationFrame';
import { filter, throttleTime } from 'rxjs/operators';

const stackedListElements: NodeListOf<HTMLElement> = document.querySelectorAll('[data-stacked=list]');

const stickySupported = typeof CSS !== 'undefined' && CSS.supports && CSS.supports('position', 'sticky');

const initStack = (element: HTMLElement) => {
  const firstElementChild = element.firstElementChild as HTMLElement;
  const listTop = element.getBoundingClientRect().top;

  const marginY = parseInt(getComputedStyle(firstElementChild).getPropertyValue('top'));
  const cardHeight = parseInt(getComputedStyle(firstElementChild).getPropertyValue('height'));

  forEach(element.children as HTMLCollectionOf<HTMLElement>, (child, index, arr) => {
    const scrolling = marginY - listTop - index * (cardHeight + marginY);
    const scaling = index == arr.length - 1 ? 1 : (cardHeight - scrolling * 0.05) / cardHeight;

    child.style.transform = `translateY(${marginY * index}px) scale(${Math.min(1, scaling)})`;
  });
};

forEach(stackedListElements, (element) => {
  const firstElementChild = element.firstElementChild as HTMLElement;

  const marginY = parseInt(getComputedStyle(firstElementChild).getPropertyValue('top'));

  if (isNaN(marginY)) return;

  // add padding bottom to list
  element.style.paddingBottom = marginY * (element.children.length - 1) + 'px';
  element.style.visibility = 'visible';

  if (!stickySupported) {
    forEach(element.children as HTMLCollectionOf<HTMLElement>, (child, index) => {
      child.style.transform = `translateY(${marginY * index}px)`;
    });

    element.style.opacity = '1';

    return;
  }

  let isIntersecting: boolean;

  const observer = new IntersectionObserver(
    (entries) => {
      isIntersecting = entries[0].isIntersecting;
      initStack(element);
      element.style.opacity = '1';
    },
    {
      threshold: [0, 1],
    }
  );

  observer.observe(element);

  fromEvent(window, 'scroll')
    .pipe(
      filter(() => isIntersecting),
      throttleTime(0, animationFrame)
    )
    .subscribe(() => initStack(element));
});

fromEvent(window, 'resize')
  .pipe(
    filter(() => stickySupported),
    throttleTime(0, animationFrame)
  )
  .subscribe(() => forEach(stackedListElements, (element) => initStack(element)));
