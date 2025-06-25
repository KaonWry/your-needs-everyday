import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="flex justify-between py-5 items-center px-5 shadow-[0_-10px_20px_rgba(0,0,0,0.2)]">
        <div className="text-xl">
          <p>Thank you</p>
        </div>
        <a
          href="https://github.com/KaonWry/your-needs-everyday"
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl hover:text-blue-700"
        >
          <FaGithub />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
