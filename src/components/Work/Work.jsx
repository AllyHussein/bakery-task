import WorkImg from "../../assets/images/Work.png";
import Food1 from "../../assets/images/Food1.png";
import Food2 from "../../assets/images/Food2.png";
import Food3 from "../../assets/images/Food3.png";
import Food4 from "../../assets/images/Food4.png";

function Work() {
  return (
    <div className="relative flex flex-col md:flex-row justify-between items-stretch md:h-[calc(100vh-4rem)] text-white">
      {/* Left Section */}
      <div className="w-full md:w-1/3 h-full relative">
        <img src={WorkImg} alt="work" className="h-full object-cover" />
        <div className="absolute inset-0 flex md:my-20 items-center md:items-start md:justify-end">
          <h1 className="text-base font-bold text-[#C98A40] md:w-1/2 text-center md:text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit totam
            ratione iusto id, deserunt eius iste fuga omnis, quidem molestiae
            minus provident iure recusandae culpa accusamus ut, non hic harum.
          </h1>
        </div>
      </div>

      {/* Middle Section */}
      <div className="w-full md:w-2/3 bg-[#C98A40] h-full flex flex-col justify-start items-center md:items-start">
        <h1 className="text-4xl md:text-8xl font-bold mt-8 mb-5 md:mb-20 text-center md:text-left md:w-1/2 mx-auto">
          HOW WE WORK
        </h1>
        <div className="md:hidden flex mt-4 md:mt-8 z-10 flex-col gap-5">
          <img
            src={Food1}
            alt="img1"
            className="w-60 h-60 object-cover rounded-lg"
          />
          <img
            src={Food2}
            alt="img2"
            className="w-60 h-60 object-cover rounded-lg"
          />
          <img
            src={Food3}
            alt="img3"
            className="w-60 h-60 object-cover rounded-lg"
          />
          <img
            src={Food4}
            alt="img4"
            className="w-60 h-60 object-cover rounded-lg"
          />
        </div>
        <button className="md:hidden bg-[#FDBA10] py-2 px-4 rounded-full w-fit mx-auto my-5 md:my-10">
          Contact Us
        </button>
      </div>

      {/* Right Section (Images and Contact Button) */}
      <div className="hidden md:flex md:flex-col justify-center items-center md:absolute md:bottom-0 md:left-60">
        <div className="flex md:space-x-4 mt-4 z-10 flex-col md:flex-row items-center gap-5">
          <img
            src={Food1}
            alt="img1"
            className="w-60 h-60 object-cover rounded-lg"
          />
          <img
            src={Food2}
            alt="img2"
            className="w-60 h-60 object-cover rounded-lg"
          />
          <img
            src={Food3}
            alt="img3"
            className="w-60 h-60 object-cover rounded-lg"
          />
          <img
            src={Food4}
            alt="img4"
            className="w-60 h-60 object-cover rounded-lg"
          />
        </div>
        <button className="bg-[#FDBA10] py-2 px-4 rounded-full w-fit mx-auto my-5">
          Contact Us
        </button>
      </div>
    </div>
  );
}

export default Work;
