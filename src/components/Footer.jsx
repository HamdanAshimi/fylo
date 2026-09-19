import PhoneIcon from "../assets/images/icon-phone.svg";
import EmailIcon from "../assets/images/icon-email.svg";
import FacebookIcon from "../assets/images/facebook.svg";
import TwitterIcon from "../assets/images/twitter.svg";
import InstagramIcon from "../assets/images/instagram.svg";

export default function Footer() {
  return (
    <footer className="bg-darkBlue2 text-white">
      <div className="container mx-auto px-5 pt-12 pb-10">
        <div className="flex flex-col justify-between space-y-24 md:flex-row md:space-y-0">
          {/* Email & Phone */}
          <div className="mt-10 space-y-6">
            <div className="flex items-center space-x-3 md:-mt-10">
              <div className="w-6">
                <img src={PhoneIcon} alt="" className="h-6 w-6" />
              </div>
              <div>+1-543-123-4567</div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-6">
                <img src={EmailIcon} alt="" className="h-6 w-6" />
              </div>
              <div>example@fylo.com</div>
            </div>
          </div>

          {/* Menus */}
          <div className="flex flex-col space-y-10 text-xl md:flex-row md:space-x-20 md:space-y-0 md:text-base">
            <div className="flex flex-col space-y-3">
              <a href="#">About</a>
              <a href="#">Jobs</a>
              <a href="#">Press</a>
              <a href="#">Blog</a>
            </div>

            <div className="flex flex-col space-y-3">
              <a href="#">Contact Us</a>
              <a href="#">Terms</a>
              <a href="#">Privacy</a>
            </div>
          </div>

          {/* Social */}
          <div className="flex justify-center space-x-3 pb-10">
            <a href="#">
              <img
                src={FacebookIcon}
                alt="Facebook"
                className="ficon rounded-full bg-darkBlue p-2"
              />
            </a>

            <a href="#">
              <img
                src={TwitterIcon}
                alt="Twitter"
                className="ficon rounded-full bg-darkBlue p-2"
              />
            </a>

            <a href="#">
              <img
                src={InstagramIcon}
                alt="Instagram"
                className="ficon rounded-full bg-darkBlue p-2"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
