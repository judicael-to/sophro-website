/* empty css                                 */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_C_PJYvjJ.mjs';
import 'kleur/colors';
import { $ as $$Layouts } from '../chunks/Layouts_c2WMcaZo.mjs';
export { renderers } from '../renderers.mjs';

const $$LegalNotice = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layouts, { "title": "Sophrologie | Johanne CHIEU - Mentions l\xE9gales" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="relative pt-32 pb-16 bg-gradient-to-b from-fuchsia-100 to-blue-100"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <h1 class="text-4xl font-light mb-6">Mentions légales</h1> <p class="text-lg text-gray-600">
Retrouvez toutes les informations légales concernant le site johanneCHIEU.com
</p></div> </div> <section class="py-16"> <div class="max-w-xl mx-auto px-4"> <div class="bg-gray-100 p-4 rounded-lg mb-6 shadow-sm"> <h2 class="text-2xl font-light mb-4">Identité de l'entreprise</h2> <div class="prose prose-lg max-w-none"> <p class="mb-2">
EI Sophro-Qi JC, 92350 LE PLESSIS ROBINSON
</p> </div> </div> <div class="bg-gray-100 p-4 rounded-lg mb-6 shadow-sm"> <h2 class="text-2xl font-light mb-4">Siret</h2> <div class="prose prose-lg max-w-none"> <p class="mb-2">
939 261 046 00014
</p> </div> </div> <div class="bg-gray-100 p-4 rounded-lg mb-6 shadow-sm"> <h2 class="text-2xl font-light mb-4">Éditeur du site</h2> <div class="prose prose-lg max-w-none"> <p class="mb-2">
Johanne CHIEU
</p> </div> </div> <div class="bg-gray-100 p-4 rounded-lg mb-6 shadow-sm"> <h2 class="text-2xl font-light mb-4">Réalisteur du site</h2> <div class="prose prose-lg max-w-none"> <p class="mb-2">
Jérémy To -
</p> <p class="mb-2">
Judicael To - judicaelto@protonmail.com
</p> </div> </div> <div class="bg-gray-100 p-4 rounded-lg mb-6 shadow-sm"> <h2 class="text-2xl font-light mb-4">Image du site</h2> <div class="prose prose-lg max-w-none"> <p class="mb-2">
Logo du site : Judicael To
</p> <p class="mb-2">
Tous droits réservés à Freepik et Adobe Stock
</p> </div> </div> <div class="bg-gray-100 p-4 rounded-lg mb-6 shadow-sm"> <h2 class="text-2xl font-light mb-4">Hébergeur</h2> <div class="prose prose-lg max-w-none"> <p class="mb-2"> <a href="https://vercel.com/" class="hover:text-gray-500">Vercel</a> </p> </div> </div> </div> </section> <section class="p-0 md:py-24 bg-gradient-to-t from-pink-200 to-blue-200"></section> ` })}`;
}, "/Users/judicael/Documents/projets/sophro-website/src/pages/legal-notice.astro", void 0);

const $$file = "/Users/judicael/Documents/projets/sophro-website/src/pages/legal-notice.astro";
const $$url = "/legal-notice";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$LegalNotice,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
