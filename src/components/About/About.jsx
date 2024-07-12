import Chef from "../../assets/images/Chef.png";

function About() {
  return (
    <div className="text-white flex flex-col md:flex-row">
      {/* Left Section */}
      <div className="w-full md:w-2/3 bg-[#C98A40] md:py-5 px-4">
        <div className="mx-auto md:w-3/4 lg:w-1/2">
          <h1 className="text-5xl md:text-8xl font-bold py-5 md:whitespace-normal">
            ABOUT {/* No line break here */}
            <br className="hidden md:block" />{" "}
            {/* Line break only on desktop */}
            US
          </h1>
          <p className="text-lg md:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            fugit consequatur est nobis fugiat harum, blanditiis nulla laborum
            praesentium sequi sint maxime, consequuntur totam ratione itaque
            maiores, sed omnis hic natus odio quam? Iste, harum. Aliquam facilis
            reprehenderit omnis perferendis ipsam, molestiae ad labore enim
            quidem quibusdam harum eos repellendus delectus praesentium
            excepturi nisi at error molestias explicabo? A magnam officiis,
            assumenda minima ipsam fugiat deleniti odit corrupti veritatis rerum
            voluptate, perspiciatis nihil dolore veniam quae, est soluta vero
            nam ut itaque. Quas blanditiis vel non, culpa id provident illum
            dicta laboriosam sit asperiores veritatis, minus quae? Enim,
            perferendis est!
          </p>
          <button className="bg-[#FDBA10] py-2 px-4 rounded-full w-fit mx-auto my-5">
            Contact Us
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="md:w-1/3 flex items-center justify-center md:transform md:translate-x-[-100px]">
        <img
          src={Chef}
          alt="chef"
          className="w-full h-auto md:max-w-full md:h-auto"
        />
      </div>
    </div>
  );
}

export default About;
