// Utility functions
export const $ = (selector: string): Element | null =>
  document.querySelector(selector);
export const $$ = (selector: string): NodeListOf<Element> =>
  document.querySelectorAll(selector);

// Extend HTMLElement prototype to add custom methods

declare global {
  interface HTMLElement {
    on(
      event: string,
      handler: EventListenerOrEventListenerObject,
      options?: boolean | AddEventListenerOptions
    ): void;
    off(
      event: string,
      handler: EventListenerOrEventListenerObject,
      options?: boolean | EventListenerOptions
    ): void;
    $(selector: string): Element | null;
    $$(selector: string): NodeListOf<Element>;
  }
}

HTMLElement.prototype.on = function (
  this: HTMLElement,
  event: string,
  handler: EventListenerOrEventListenerObject,
  options?: boolean | AddEventListenerOptions
): void {
  this.addEventListener(event, handler, options);
};

HTMLElement.prototype.off = function (
  this: HTMLElement,
  event: string,
  handler: EventListenerOrEventListenerObject,
  options?: boolean | EventListenerOptions
): void {
  this.removeEventListener(event, handler, options);
};

HTMLElement.prototype.$ = function (
  this: HTMLElement,
  selector: string
): Element | null {
  return this.querySelector(selector);
};

HTMLElement.prototype.$$ = function (
  this: HTMLElement,
  selector: string
): NodeListOf<Element> {
  return this.querySelectorAll(selector);
};
