import assert from 'node:assert/strict';
import { isolateViewerScroll, interactiveViewerUrl } from '../src/lib/viewer-controls.mjs';

// Regression for the cross-origin iframe boundary: cancelling outer wheel
// events alone cannot stop page scrolling; entering and leaving must change
// the page's scroll container without disabling the embedded viewer.
class Surface extends EventTarget {
  dataset = {};
  hovered = false;
  contains(node) { return Boolean(node) && (node === this || node === this.child); }
  matches() { return this.hovered; }
}
const classes = new Set();
const root = {classList: {
  toggle(name,on) { if(on) classes.add(name); else classes.delete(name); },
  remove(name) { classes.delete(name); },
}};
globalThis.document = Object.assign(new EventTarget(), {documentElement:root});
globalThis.window = new EventTarget();
const viewer = new Surface();
isolateViewerScroll(viewer);
viewer.dispatchEvent(new Event('pointerenter'));
assert.equal(classes.size,0,'An inactive poster must allow normal page scrolling');
viewer.dataset.active = 'true';
viewer.dispatchEvent(new Event('pointerenter'));
assert.ok(classes.has('viewer-interacting'),'An active iframe must lock its ancestor scroll container');
const wheel = new Event('wheel',{cancelable:true}); viewer.dispatchEvent(wheel);
assert.ok(wheel.defaultPrevented,'Wheel events on the viewer border must not scroll the page');
viewer.dispatchEvent(new Event('pointerleave'));
assert.equal(classes.size,0,'Leaving the viewer must restore page scrolling');
viewer.dispatchEvent(new Event('focusin'));
viewer.dispatchEvent(new Event('focusout'));
assert.equal(classes.size,0,'Tabbing out must release scrolling');
viewer.dispatchEvent(new Event('pointerenter'));
window.dispatchEvent(new Event('pagehide'));
assert.equal(classes.size,0,'Leaving the page must release scrolling');
const target = new URL(interactiveViewerUrl('https://d1cq0fc6qm76ez.cloudfront.net/example/index.html?existing=1'));
assert.equal(target.searchParams.get('control.trackpadzoom'),'true');
assert.equal(target.searchParams.get('control.disablewheel'),'false');
assert.equal(target.searchParams.get('control.capturetouch'),'true');
assert.equal(target.searchParams.get('existing'),'1');
assert.equal(interactiveViewerUrl('https://gigapan.com/gigapans/208257'),'https://gigapan.com/gigapans/208257');
console.log('Viewer regression passed: inactive/active, wheel, exit, keyboard focus, pagehide and touchpad query settings.');
