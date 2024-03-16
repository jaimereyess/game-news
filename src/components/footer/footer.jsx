import {
  FaXTwitter,
  FaFacebookF,
  FaInstagram,
  FaRedditAlien,
  FaYoutube,
  FaSpotify,
} from "react-icons/fa6";
import "./logos.css";
import { SiApplemusic } from "react-icons/si";

export const Footer = () => {
  return (
    <footer className="text-white pt-1 bg-gray-800 w-full px-2 md:px-6 lg:px-10 font-medium">
      <div className="flex flex-col lg:flex-row lg:justify-between">
        <section className="text-center">
          <h4>{`Game's News`}</h4>
          <ul className="wrapper">
            <li className="icon twitter">
              <span className="tooltip">𝕏</span>
              <FaXTwitter size={30} />
            </li>

            <li className="icon instagram">
              <span className="tooltip">Instagram</span>
              <FaInstagram size={30} />
            </li>

            <li className="icon facebook">
              <span className="tooltip">Facebook</span>
              <FaFacebookF size={30} />
            </li>

            <li className="icon reddit">
              <span className="tooltip">Reddit</span>
              <FaRedditAlien size={30} />
            </li>
            <li className="icon youtube">
              <span className="tooltip">Youtube</span>
              <FaYoutube size={30} />
            </li>
          </ul>
        </section>

        <section className="text-center">
          <h4>Join us our podcast</h4>

          <ul className="wrapper">
            <li className="icon spotify">
              <span className="tooltip">Spotify</span>
              <FaSpotify size={30} />
            </li>

            <li className="icon applemusic">
              <span className="tooltip">Apple </span>
              <SiApplemusic size={30} />
            </li>
          </ul>
        </section>

        <section className="mt-4">
          <ul className="flex flex-col gap-2">
            <li className="cursor-pointer">Privacy Policy</li>
            <li className="cursor-pointer">Manage Preferences</li>
            <li className="cursor-pointer">Terms of Use</li>
          </ul>
        </section>
      </div>
      <div className="text-xl font-semibold text-center pb-4 ">
        <h5> Jaime Reyes Rodríguez</h5>
      </div>
    </footer>
  );
};
