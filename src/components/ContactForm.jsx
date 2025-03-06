import emailjs from "emailjs-com";

export default function ContactForm() {
  const handleSubmit = async (e) => {
  e.preventDefault();
  const form = e.target;

  try {
    await emailjs.sendForm(
      "service_8pv1tkc", // Replace with your EmailJS service ID
      "template_shcara8", // Replace with your EmailJS template ID
      form,
      "AqK-j9CyQ_7n6MvJG" // Replace with your EmailJS public key
    );
    alert("Message Envoyé !!");
    form.reset();
  } catch (error) {
    console.error("Failed to send message:", error);
    alert("Failed to send message. Please try again.");
  }
};

return (
  <form onSubmit={handleSubmit} class="space-y-6">
    <div>
      <label for="name" class="block text-gray-600 mb-2">Nom</label>
      <input 
        id="first_name" 
        name="first_name" 
        required
        class="w-full p-3 border border-gray-300 rounded-lg focus:ring-purple-400 focus:border-purple-400"
        placeholder="Nom"
      />
    </div>
    <div>
      <label for="first_name" class="block text-gray-600 mb-2">Prénom</label>
      <input 
        id="name" 
        name="name" 
        required 
        class="w-full p-3 border border-gray-300 rounded-lg focus:ring-purple-400 focus:border-purple-400"
        placeholder="Prénom"
      />
    </div>
    <div>
      <label for="email" class="block text-gray-600 mb-2">Adresse email</label>
      <input 
        id="email" 
        name="email" 
        required 
        class="w-full p-3 border border-gray-300 rounded-lg focus:ring-purple-400 focus:border-purple-400"
        placeholder="Adresse email"
      />
    </div>
    <div>
      <label for="message" class="block text-gray-600 mb-2">Message - Merci de m'indiquer vos besoins et vos problématiques</label>
      <textarea 
        id="message" 
        name="message" 
        rows="6" 
        required 
        class="w-full p-3 border border-gray-300 rounded-lg focus:ring-purple-400 focus:border-purple-400"
      ></textarea>
    </div>
    <div>
      <button 
        class="w-full px-6 py-3 bg-blue-400 text-white font-semibold rounded-lg hover:bg-blue-500 transition-colors duration-300"
      >
        Envoyer le message
      </button>
    </div>
  </form>
);
}