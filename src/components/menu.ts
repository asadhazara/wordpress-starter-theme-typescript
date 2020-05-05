//
import { fromEvent, merge } from 'rxjs';
import { filter } from 'rxjs/operators';

const elements = {
  menuWrapperEl: document.querySelector('[data-menu=wrapper]') as HTMLElement,
  menuToggleEl: document.querySelector('[data-menu=toggle]') as HTMLElement,
  menuDrawerEl: document.querySelector('[data-menu=drawer]') as HTMLElement,
  menuOverlayEl: document.querySelector('[data-menu=overlay]') as HTMLElement,
};

if (!Object.values(elements).some((val) => val === null)) {
  let isOpen = elements.menuWrapperEl.classList.contains('is-open');

  elements.menuDrawerEl.classList.remove('hidden');
  elements.menuOverlayEl.classList.remove('hidden');

  const onMenuChange = async () => {
    isOpen = !isOpen;
    elements.menuDrawerEl.setAttribute('aria-hidden', isOpen ? 'false' : 'true');
    elements.menuOverlayEl.setAttribute('aria-hidden', isOpen ? 'false' : 'true');
    elements.menuToggleEl.setAttribute('aria-label', isOpen ? 'Menu toggle (opened)' : 'Menu toggle (closed)');
    elements.menuWrapperEl.classList.toggle('is-open');
  };

  const keydown$ = fromEvent<KeyboardEvent>(window, 'keydown');
  const scroll$ = fromEvent(window, 'scroll');
  const toggleClick$ = fromEvent<MouseEvent>(elements.menuToggleEl, 'click');
  const overlayClick$ = fromEvent<MouseEvent>(elements.menuOverlayEl, 'click');
  const escape$ = keydown$.pipe(filter((event) => ['Escape', 'Esc'].includes(event.key)));
  const scrollLowerthanDrawer$ = scroll$.pipe(
    filter(() => window.pageYOffset - 200 > elements.menuDrawerEl.offsetTop + elements.menuDrawerEl.clientHeight)
  );
  const close$ = merge(overlayClick$, escape$, scrollLowerthanDrawer$).pipe(filter(() => isOpen));

  merge(toggleClick$, close$).subscribe(onMenuChange);
}
