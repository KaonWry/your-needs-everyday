import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="text-xl">
          <p>Thank you</p>
          <p>Inspired by : I Was Wrong, but, Go Made Me Right</p>
          <p>Made with ❤️ by Kelompok 3</p>
          <p>&copy; {new Date().getFullYear()} Your Needs Everyday. All rights reserved.</p>
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
