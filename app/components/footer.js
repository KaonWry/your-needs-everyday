import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-screen">
      <div className="footer">
        <div className="text-xl">
          <p>Thank you</p>
          <p>Inspired by : <span className="font-bold">I Was Wrong, But God Made Me Right</span></p>
          <p>Made with ❤️ by Kelompok 3</p>
          <p>
            &copy; {new Date().getFullYear()} Your Needs Everyday. All rights
            reserved.
          </p>
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
