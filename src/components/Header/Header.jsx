import HeaderImg from "../../assets/images/Header.png";
import HeaderImg2 from "../../assets/images/Header2.png";
import Facebook from "../../assets/images/brandico_facebook-rect.png";
import Instagram from "../../assets/images/bx_bxl-instagram-alt.png";
import Twitter from "../../assets/images/ant-design_twitter-outlined.png";
import VK from "../../assets/images/bx_bxl-vk.png";
import Bread from "../../assets/images/Bread.png";

function Header() {
  return (
    <div className="relative flex flex-col md:flex-row text-white overflow-hidden">
      <div className="md:w-2/3 bg-[#C98A40]">
        <div className="w-3/4 md:w-1/2 mx-auto">
          <div className="flex flex-col gap-10 md:gap-40">
            <p className="text-2xl md:text-3xl my-5">Peachy Pup Bakery</p>
            <div className="flex flex-col justify-between gap-3">
              <h1 className="font-bold text-lg md:text-xl">TASTY PASTRIES</h1>
              <p className="text-sm md:text-base">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Consectetur, ducimus nulla aspernatur unde officiis, quisquam
                sequi doloremque laborum quaerat maxime dignissimos eos? Eaque
                iusto velit iure odit corporis ratione temporibus.
              </p>
              <button className="bg-[#FDBA10] w-1/2 md:w-32 rounded-full">
                See More
              </button>
            </div>
          </div>
        </div>
        <div className="relative flex flex-col md:flex-row mt-5">
          <div className="bg-white md:w-1/2 relative md:mt-7">
            <img src={HeaderImg2} alt="header" />
            <div className="absolute md:top-2 md:right-0 p-2 flex md:space-y-2 md:flex-col top-16 right-24 gap-5 md:gap-0">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Facebook} alt="Facebook" className="w-6 h-6" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Twitter} alt="Twitter" className="w-6 h-6" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Instagram} alt="Instagram" className="w-6 h-6" />
              </a>
              <a
                href="https://vk.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={VK} alt="VK" className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div className="bg-[#C98A40] w-full flex items-end m-2">
            <p>Telephone: +7 700 000 00 00</p>
          </div>
        </div>
      </div>
      <div className="md:w-1/3 hidden md:block">
        <img className="h-full" src={HeaderImg} alt="header" />
      </div>
      <div className="hidden md:flex absolute top-0 left-1/4 md:left-72 w-full h-full justify-center items-center">
        <img src={Bread} alt="Bread" className="w-40 md:w-96" />
      </div>
    </div>
  );
}

export default Header;
