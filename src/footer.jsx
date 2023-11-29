import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-100 flex w-full justify-between h-48">
      <div className="w-14"></div>
      <div class="footer_inner">
                <li id="footer_name">Thomas Le Baron</li>
                <li>
                    <a href="https://github.com/TLB62">
                        <img src="/img/GitHub_Logo.png" alt="Profil GitHub de Thomas Le Baron" title="Découvrez mon GitHub !" />
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/thomas-le-baron-237b8051/">
                        <img src="/img/Linkedin_Logo.png" alt="Profil Linkedin de Thomas Le Baron" title="Découvrez mon Linkedin !" />
                    </a>
                </li>
                <li id="footer_right">
                    <a href="#A-propos">
                        A propos
                    </a>
                </li>
                <li>
                    <a href="#Expériences">Expériences</a>
                </li>
                <li>
                    <a href="#Projets">Projets</a>
                </li>
                <li>
                    <a href="#Contact">Contact</a>
                </li>
            </div>
    </footer>
  );
};

export default Footer;
