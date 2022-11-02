export default function outsideClick(element, events, callBack) {
  const html = document.documentElement;
  const outside = 'data-outside';

  function handleOutsideClick(event) {
    if (!element.contains(event.target)) {
      events.forEach((item) => {
        html.removeEventListener(item, handleOutsideClick);
      });
      element.removeAttribute(outside);
      callBack();
    }
  }

  if (!element.hasAttribute(outside)) {
    events.forEach((item) => {
      setTimeout(() => html.addEventListener(item, handleOutsideClick));
    });
    element.setAttribute(outside, '');
  }
}
