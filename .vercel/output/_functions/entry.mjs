import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_Da9GtQXK.mjs';
import { manifest } from './manifest_H9kqifPc.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/about.astro.mjs');
const _page2 = () => import('./pages/contact.astro.mjs');
const _page3 = () => import('./pages/legal-notice.astro.mjs');
const _page4 = () => import('./pages/modalities.astro.mjs');
const _page5 = () => import('./pages/services.astro.mjs');
const _page6 = () => import('./pages/sophro.astro.mjs');
const _page7 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/about.astro", _page1],
    ["src/pages/contact.astro", _page2],
    ["src/pages/legal-notice.astro", _page3],
    ["src/pages/modalities.astro", _page4],
    ["src/pages/services.astro", _page5],
    ["src/pages/sophro.astro", _page6],
    ["src/pages/index.astro", _page7]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "90ae4bd2-e013-48fd-8f4c-64bd26e9a56d",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
