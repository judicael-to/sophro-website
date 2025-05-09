/* empty css                                 */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_C_PJYvjJ.mjs';
import 'kleur/colors';
import { $ as $$Layouts } from '../chunks/Layouts_Dnf1_vNH.mjs';
import emailjs from 'emailjs-com';
import { jsxs, jsx } from 'preact/jsx-runtime';
/* empty css                                   */
export { renderers } from '../renderers.mjs';

function ContactForm() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    try {
      await emailjs.sendForm(
        "service_8pv1tkc",
        // Replace with your EmailJS service ID
        "template_shcara8",
        // Replace with your EmailJS template ID
        form,
        "AqK-j9CyQ_7n6MvJG"
        // Replace with your EmailJS public key
      );
      alert("Message Envoyé !!");
      form.reset();
    } catch (error) {
      console.error("Failed to send message:", error);
      alert("Failed to send message. Please try again.");
    }
  };
  return jsxs("form", {
    onSubmit: handleSubmit,
    class: "space-y-6",
    children: [jsxs("div", {
      children: [jsx("label", {
        for: "name",
        class: "block text-gray-600 mb-2",
        children: "Nom"
      }), jsx("input", {
        id: "first_name",
        name: "first_name",
        required: true,
        class: "w-full p-3 border border-slate-400 rounded-lg focus:ring-violet-300 focus:border-violet-300",
        placeholder: "Nom"
      })]
    }), jsxs("div", {
      children: [jsx("label", {
        for: "first_name",
        class: "block text-gray-600 mb-2",
        children: "Prénom"
      }), jsx("input", {
        id: "name",
        name: "name",
        required: true,
        class: "w-full p-3 border border-slate-400 rounded-lg focus:ring-violet-300 focus:border-violet-300",
        placeholder: "Prénom"
      })]
    }), jsxs("div", {
      children: [jsx("label", {
        for: "email",
        class: "block text-gray-600 mb-2",
        children: "Adresse email"
      }), jsx("input", {
        id: "email",
        name: "email",
        required: true,
        class: "w-full p-3 border border-slate-400 rounded-lg focus:ring-violet-300 focus:border-violet-300",
        placeholder: "votre.adresse@example.com"
      })]
    }), jsxs("div", {
      children: [jsx("label", {
        for: "message",
        class: "block text-gray-600 mb-2",
        children: "Message - Merci de m'indiquer vos besoins et vos problématiques"
      }), jsx("textarea", {
        id: "message",
        name: "message",
        rows: "6",
        required: true,
        class: "w-full p-3 border border-slate-400 rounded-lg focus:ring-violet-300 focus:border-violet-300"
      })]
    }), jsx("div", {
      children: jsx("button", {
        class: "w-full px-6 py-3 bg-blue-400 text-white font-semibold rounded-lg hover:bg-blue-500 transition-colors duration-300",
        children: "Envoyer le message"
      })
    })]
  });
}

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  const contactInfo = [
    { method: "Adresse", details: "11 Rue du Loup Pendu, 92350 LE PLESSIS ROBINSON" },
    { method: "T\xE9l\xE9phone", details: "07 44 42 67 88" },
    { method: "Email", details: "Sophro-Qi.JC@outlook.com" }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layouts, { "title": "Contact | Johanne CHIEU - Sophrologue", "description": "Contactez Johanne CHIEU pour toute demande de rendez-vous ou de renseignement sur les s\xE9ances de sophrologie.", "data-astro-cid-uw5kdbxl": true }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="relative pt-32 pb-16 bg-gradient-to-b from-purple-100 to-blue-100" data-astro-cid-uw5kdbxl> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-astro-cid-uw5kdbxl> <h1 class="text-4xl font-light mb-4" data-astro-cid-uw5kdbxl>Contactez-moi</h1> <p class="text-lg text-gray-600" data-astro-cid-uw5kdbxl>
Pour toute demande de rendez-vous ou d’information, n’hésitez pas à me contacter via le formulaire ou par téléphone.
</p> </div> </div> <div class="my-16 mx-4 md:mx-32 flex flex-col md:flex-row bg-blue-100 p-4 md:p-8 rounded-lg shadow-md" data-astro-cid-uw5kdbxl> <!-- Contact Information Section --> <section class="py-8 md:py-16 bg-violet-200 md:w-2/6 md:mb-0 mb-8 shadow-md" data-astro-cid-uw5kdbxl> <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8" data-astro-cid-uw5kdbxl> <h2 class="text-2xl md:text-3xl font-light mb-4 md:mb-8" data-astro-cid-uw5kdbxl>Johanne CHIEU</h2> <div class="grid gap-4 md:gap-6 md:grid-cols-1 lg:grid-rows-3 text-center" data-astro-cid-uw5kdbxl> ${contactInfo.map((info) => renderTemplate`<div class="bg-white p-4 md:p-6 rounded-lg shadow-md" data-astro-cid-uw5kdbxl> <h3 class="text-blue-400 font-semibold mb-2" data-astro-cid-uw5kdbxl>${info.method}</h3> <p class="text-gray-600" data-astro-cid-uw5kdbxl>${info.details}</p> </div>`)} </div> </div> </section> <!-- Contact Form Section --> <section class="py-1 flex-none md:w-4/6" data-astro-cid-uw5kdbxl> <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8" data-astro-cid-uw5kdbxl> <h2 class="text-2xl md:text-3xl font-light mb-4 md:mb-8" data-astro-cid-uw5kdbxl>Envoyez-moi un message</h2> ${renderComponent($$result2, "ContactForm", ContactForm, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/judicael/Documents/projets/sophro-website/src/components/ContactForm.jsx", "client:component-export": "default", "data-astro-cid-uw5kdbxl": true })} </div> </section> </div>  <section class="pt-8" data-astro-cid-uw5kdbxl> <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" data-astro-cid-uw5kdbxl> <h2 class="text-3xl font-light mb-8" data-astro-cid-uw5kdbxl>Plan d'accès</h2> <div class="relative h-80 mb-8" data-astro-cid-uw5kdbxl> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d956.8077453008468!2d2.25483482034942!3d48.777711205466524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e67a1df44e6747%3A0x3cb5de6c12332a4d!2s11%20Rue%20du%20Loup%20Pendu%2C%2092350%20Le%20Plessis-Robinson!5e0!3m2!1sfr!2sfr!4v1731577975513!5m2!1sfr!2sfr" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" title="Carte d'accès au cabinet" data-astro-cid-uw5kdbxl></iframe> </div> </div> </section> <div class="md:grid md:grid-cols-2 grid-row md:mx-40 mx-10" data-astro-cid-uw5kdbxl> <div class="mb-8 bg-gray-100 rounded-lg p-2 md:mr-2 mr-0 flex items-center" data-astro-cid-uw5kdbxl> <img class="p-4 w-20 h-20" src="images/buslogo.svg" alt="bus_icon" data-astro-cid-uw5kdbxl> <div class="pl-4 justify-self-center" data-astro-cid-uw5kdbxl> <p data-astro-cid-uw5kdbxl>
Lignes 195 et 179 : arrêt Cité jardins – Place des Alliés
</p> <p data-astro-cid-uw5kdbxl>
Ligne 390 : arrêt Charles Pasqua
</p> <p data-astro-cid-uw5kdbxl>
Ligne 395 : arrêt Parc des sports
</p> </div> </div> <div class="mb-8 bg-gray-100 rounded-lg p-2 md:ml-2 m-0 flex items-center shadow-sm" data-astro-cid-uw5kdbxl> <img class="w-16 h-12" src="images/Tramlogo.svg" alt="tram_icon" data-astro-cid-uw5kdbxl> <p class="pl-4" data-astro-cid-uw5kdbxl>
Ligne 10 : arrêt Parc des sports
</p> </div> </div> <section class="p-0 md:py-24 bg-gradient-to-t from-pink-200 to-blue-200" data-astro-cid-uw5kdbxl> <div class="max-w-4xl mx-auto text-center" data-astro-cid-uw5kdbxl> <a href="/legal-notice" class="inline-block px-8 py-4 bg-white text-blue-400 rounded-full hover:bg-blue-50 transition-colors duration-300" data-astro-cid-uw5kdbxl>
Mentions légales
</a> </div> </section> ` })} `;
}, "/Users/judicael/Documents/projets/sophro-website/src/pages/contact.astro", void 0);

const $$file = "/Users/judicael/Documents/projets/sophro-website/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
