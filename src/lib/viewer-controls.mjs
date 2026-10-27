/** Keep wheel/trackpad gestures inside an active cross-origin panorama iframe.
 * Wheel events do not bubble out of the iframe, so a parent wheel listener
 * alone cannot stop scroll chaining. Lock the page scroll container while the
 * pointer is inside the running viewer and release it immediately on exit.
 */
export function isolateViewerScroll(viewer) {
  const root = document.documentElement;
  const lock = () => root.classList.toggle('viewer-interacting', viewer.dataset.active === 'true');
  const release = () => root.classList.remove('viewer-interacting');
  viewer.addEventListener('pointerenter', lock);
  viewer.addEventListener('pointerleave', release);
  viewer.addEventListener('focusin', lock);
  viewer.addEventListener('focusout', (event) => {
    if (!viewer.contains(event.relatedTarget) && !viewer.matches(':hover')) release();
  });
  viewer.addEventListener('wheel', (event) => {
    if (viewer.dataset.active === 'true') event.preventDefault();
  }, { passive: false });
  document.addEventListener('pointerdown', (event) => {
    if (!viewer.contains(event.target)) release();
  });
  window.addEventListener('pagehide', release);
  if (viewer.matches(':hover')) lock();
  return release;
}

export function interactiveViewerUrl(raw) {
  const url = new URL(raw);
  // The existing krpano pages enable passQueryParameters. Set the supported
  // controls explicitly; full-resolution images stay on their original host.
  if (url.hostname.endsWith('.cloudfront.net')) {
    url.searchParams.set('control.disablewheel', 'false');
    url.searchParams.set('control.capturetouch', 'true');
    url.searchParams.set('control.trackpadzoom', 'true');
  }
  return url.href;
}
