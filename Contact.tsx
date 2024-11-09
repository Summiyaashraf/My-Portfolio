import { FaWhatsapp, FaFacebookF, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';

const ContactUs = () => {
  return (
    <section className="bg-gradient-to-b from-teal-500 to-teal-700 py-10 px-4 text-center text-black">
      <h2 className="text-3xl font-bold mb-8 inline-block border-b-4 border-black pb-2">Contact Us</h2>
      
      <div className="flex flex-wrap justify-center gap-6 mb-8">
        <div className="bg-white text-teal-700 rounded-lg p-4 w-40 flex flex-col items-center shadow-lg">
          <FaWhatsapp size={30} />
          <h3 className="font-semibold mt-2">Whatsapp Number</h3>
          <p className="text-sm mt-1">+92 316 2573083</p>
        </div>

        <div className="bg-white text-teal-700 rounded-lg p-4 w-40 flex flex-col items-center shadow-lg">
          <FaFacebookF size={30} />
          <h3 className="font-semibold mt-2">Facebook I'd</h3>
          <p className="text-sm mt-1 text-blue-600 hover:underline">
            https://www.facebook<br />
            .com/share/GuW2ow<br />
            AnAVBVWzKB/
          </p>
        </div>

        <div className="bg-white text-teal-700 rounded-lg p-4 w-40 flex flex-col items-center shadow-lg">
          <FaLinkedinIn size={30} />
          <h3 className="font-semibold mt-2">LinkedIn I'd</h3>
          <p className="text-sm mt-1 text-blue-600 hover:underline">
            www.linkedin.com/in/<br />
            summiya-ashraf-8249792ba
          </p>
        </div>

        <div className="bg-white text-teal-700 rounded-lg p-4 w-40 flex flex-col items-center shadow-lg">
          <FaEnvelope size={30} />
          <h3 className="font-semibold mt-2">Email</h3>
          <p className="text-sm mt-1">summiyaashraf<br />689@gmail.com</p>
        </div>
      </div>

      <div className="bg-white text-teal-700 rounded-lg p-6 max-w-lg mx-auto shadow-lg">
        <p className="text-lg">
          I'd love to hear from you! Whether you have a question, a project idea, or just want to connect, feel free to reach out.
          I'm always open to discussing new opportunities and collaborations. You can contact me via phone, email, Facebook, or LinkedIn.
          Let's create something amazing together! ❤️❤️
        </p>
      </div>
    </section>
  );
};

export default ContactUs;
