import { FaInstagram, FaEnvelope, FaLinkedin,FaWhatsapp } from "react-icons/fa";

const FooterIcons = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full flex justify-center gap-6 py-4  z-50">

      <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=rresh6427@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
>
  <FaEnvelope className="text-white text-2xl hover:scale-125 transition-transform hover:text-red-600" />
</a>

      <a
        href="https://linkedin.com/in/ReshmaLakshmanan"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin className="text-white text-2xl hover:scale-125 transition-transform hover:text-blue-600"  />
      </a>
      <a
        href="https://wa.me/918610402405"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp className="text-white text-2xl hover:scale-125 transition-transform hover:text-green-400" />
      </a>
    </div>
  );
};

export default FooterIcons;

