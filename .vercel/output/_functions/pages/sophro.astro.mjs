/* empty css                                 */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BJqiyw7n.mjs';
import 'kleur/colors';
import { $ as $$Layouts } from '../chunks/Layouts_CCAdBHQz.mjs';
export { renderers } from '../renderers.mjs';

const $$Sophro = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layouts, { "title": "Sophrologie | Johanne CHIEU - Sophrologue", "description": "D\xE9couvrez mon parcours, ma philosophie et mon approche de la sophrologie." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="relative pt-32 pb-16 bg-gradient-to-b from-fuchsia-100 to-blue-100"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <h1 class="text-4xl font-light mb-6">Qu'est-ce que la Sophrologie</h1> <p class="text-lg text-gray-600">
Elle consiste à vivre la vie qui est en soi, à l'activer pour développer ses
          compétences, ses valeurs et son potentiel, en vue d'être davantage soi-même et de se
          redéployer pour exister positivement.
</p> </div> </div> <section class="bg-white"> <div class="max-w-4xl mx-auto"> <div class="prose prose-lg max-w-none p-8"> <h1 class="text-4xl font-light mb-6">La sophrologie</h1> <p class="mb-6">
La sophrologie a été créée en 1960 par le Pr CAYCEDO Alfonso, médecin
          neuropsychiatre d’origine espagnole.
</p> <p class="mb-6">
On peut comprendre la sophrologie en se référant au mot sophrologie.
          L’étymologie du terme "sophrologie" se compose selon trois racines du Grec ancien :
</p> <ul class="list-disc ml-10 mb-6"> <li>sos = l’harmonie, la sérénité</li> <li>phren = la conscience, l’esprit</li> <li>logos = l’étude, la science, le discours</li> </ul> <p class="mb-6">
Ce qui signifie que la sophrologie est à la fois la science de la conscience, mais aussi la
          recherche de la sérénité, le développement des potentiels personnels, dans le but d’avoir
          une meilleure existence et trouver en soi l’harmonie entre le corps et l’esprit.
</p> </div> </div> </section> <section class="bg-gray-50"> <div class="max-w-4xl mx-auto p-8"> <div class="prose prose-lg max-w-none"></div> <p class="mb-6">
La sophrologie utilise des outils traditionnels que l’homme utilise depuis des siècles pour
          son développement personnel : des techniques respiratoires, de relaxation et de détente,
          des postures, la concentration, l’entretien des 5 sens, le développement de sa sensibilité,
          sa perception, et un travail sur la force vitale.
</p> <p class="mb-6">
L’utilisation de ces techniques lui vaut parfois d’être confondue avec le yoga, la relaxation
          ou avec l’hypnose. La sophrologie n’est rien de tout cela.
</p> <p class="mb-6">
C’est une méthodologie très particulière qui utilise la vivance. La
          vivance en sophrologie, désigne l'acte de la conscience qui "vit cette vie qui est en
          soit". C’est le mot qui a été choisi pour bien spécifier la méthode caycédienne. C’est-à-dire
          Vivre la vie qui coule en nous, être à l’écoute de ce qui se passe en nous, ce qui apparaît
          en nous.
</p> <p>
Cette écoute de notre être va nous permettre de découvrir qui nous sommes réellement,
          et d’apprendre à nous projeter dans le futur positivement, afin de vivre une nouvelle
          quotidienneté qui va progressivement nous transformer et nous donner un nouveau regard
          sur les choses. Nous permettant de développer tous nos possibles, tous nos potentiels, et
          de nous ouvrir ainsi à l’existence.
</p> </div> </section> <section class=""> <div class="overflow-hidden"> <img src="images/Photo_pied_page_1.jpg" class="object-cover h-56 w-full" decoding="async" loading="lazy" alt="Photo pied de page"> </div> </section> ` })}`;
}, "/Users/judicael/Documents/projets/sophro-website/src/pages/sophro.astro", void 0);

const $$file = "/Users/judicael/Documents/projets/sophro-website/src/pages/sophro.astro";
const $$url = "/sophro";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Sophro,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
