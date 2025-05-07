import { c as createComponent, m as maybeRenderHead, b as renderScript, d as addAttribute, a as renderTemplate, e as createAstro, r as renderComponent, f as renderHead, g as renderSlot } from './astro/server_BJqiyw7n.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */

const $$Navigation = createComponent(($$result, $$props, $$slots) => {
  const menuItems = [
    {
      title: "\xC0 propos",
      path: "/about"
    },
    {
      title: "Sophrologie",
      path: "/sophro"
    },
    {
      title: "Accompagnements",
      path: "/services"
    },
    {
      title: "Modalit\xE9s",
      path: "/modalities"
    },
    {
      title: "Contact",
      path: "/contact"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<nav class="bg-white shadow-lg fixed w-full z-50"> <div class="max-w-7xl mx-auto px-4"> <div class="flex justify-between"> <div class="flex space-x-7"> <div> <a href="/" class="flex items-center py-4"> <img src="/images/logo.svg" alt="Logo" class="h-16 w-auto mr-8"> <span class="font-Engagement text-gray-700 text-lg hover:text-purple-400 transition duration-300">Sophro-Qi JC</span> </a> </div> <!-- Navigation principale - Desktop --> <div class="hidden md:flex items-center space-x-1"> ${menuItems.map((item) => renderTemplate`<div class="relative group"> <a${addAttribute(item.path, "href")} class="py-4 px-3 text-gray-700 hover:text-purple-400 transition duration-300"> ${item.title} </a> </div>`)} </div> </div> <!-- Bouton RDV --> <div class="hidden md:flex items-center justify-center"> <a href="/contact" class="px-4 py-2 bg-purple-400 text-white rounded-full hover:bg-purple-600 transition duration-300 text-center">
Me contacter
</a> </div> <!-- Bouton Mobile --> <div class="md:hidden flex items-center"> <button class="mobile-menu-button" aria-label="Menu"> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path> </svg> </button> </div> </div> </div> <!-- Menu Mobile --> <div class="mobile-menu hidden md:hidden"> <div class="px-2 pt-2 pb-3 space-y-1"> ${menuItems.map((item) => renderTemplate`<div> <a${addAttribute(item.path, "href")} class="block px-3 py-2 text-gray-700 hover:bg-purple-100 hover:text-purple-700 transition duration-300"> ${item.title} </a> </div>`)} </div> </div> </nav> ${renderScript($$result, "/Users/judicael/Documents/projets/sophro-website/src/components/Navigation.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/judicael/Documents/projets/sophro-website/src/components/Navigation.astro", void 0);

const $$Astro$1 = createAstro("https://www.votredomaine.fr");
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index;
  const propsStr = JSON.stringify(Astro2.props);
  const paramsStr = JSON.stringify(Astro2.params);
  return renderTemplate`${renderComponent($$result, "vercel-analytics", "vercel-analytics", { "data-props": propsStr, "data-params": paramsStr, "data-pathname": Astro2.url.pathname })} ${renderScript($$result, "/Users/judicael/node_modules/@vercel/analytics/dist/astro/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/judicael/node_modules/@vercel/analytics/dist/astro/index.astro", void 0);

const $$Astro = createAstro("https://www.votredomaine.fr");
const $$Layouts = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layouts;
  const { title, description } = Astro2.props;
  return renderTemplate`<html lang="fr" data-astro-cid-ghh7d3ot> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/images/logo.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title><meta name="description"${addAttribute(description, "content")}>${renderComponent($$result, "Analytics", $$Index, { "data-astro-cid-ghh7d3ot": true })}${renderHead()}</head> <body data-astro-cid-ghh7d3ot> ${renderComponent($$result, "Navigation", $$Navigation, { "data-astro-cid-ghh7d3ot": true })} <main class="pt-16" data-astro-cid-ghh7d3ot> ${renderSlot($$result, $$slots["default"])} </main> </body></html>`;
}, "/Users/judicael/Documents/projets/sophro-website/src/layouts/Layouts.astro", void 0);

export { $$Layouts as $ };
