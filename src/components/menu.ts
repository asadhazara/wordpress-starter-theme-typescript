//
import { fromEvent, merge } from 'rxjs';
import { filter } from 'rxjs/operators';

const menuWrapperEl = document.querySelector<HTMLElement>('[data-menu=wrapper]');
const menuToggleEl = menuWrapperEl.querySelector<HTMLElement>('[data-menu=toggle]');
const menuDrawerEl = menuWrapperEl.querySelector<HTMLElement>('[data-menu=drawer]');
const menuOverlayEl = menuWrapperEl.querySelector<HTMLElement>('[data-menu=overlay]');

let isOpen = menuWrapperEl.classList.contains('is-open');

menuDrawerEl.classList.remove('hidden');
menuOverlayEl.classList.remove('hidden');

const onMenuChange = async () => {
  isOpen = !isOpen;
  menuDrawerEl.setAttribute('aria-hidden', isOpen ? 'false' : 'true');
  menuOverlayEl.setAttribute('aria-hidden', isOpen ? 'false' : 'true');
  menuToggleEl.setAttribute('aria-label', isOpen ? 'Menu toggle (opened)' : 'Menu toggle (closed)');
  menuWrapperEl.classList.toggle('is-open');
};

const keydown$ = fromEvent<KeyboardEvent>(window, 'keydown');
const toggleClick$ = fromEvent<MouseEvent>(menuToggleEl, 'click');
const overlayClick$ = fromEvent<MouseEvent>(menuOverlayEl, 'click');
const escape$ = keydown$.pipe(filter((event) => ['Escape', 'Esc'].includes(event.key)));
const close$ = merge(overlayClick$, escape$).pipe(filter(() => isOpen));

merge(toggleClick$, close$).subscribe(onMenuChange);
