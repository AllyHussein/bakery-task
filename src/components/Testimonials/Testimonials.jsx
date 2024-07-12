import backgroundImage from "../../assets/images/testimonial-bg.png";

function Testimonials() {
  const testimonials = [
    {
      name: "Kathryn Murphy",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.",
      rating: 5,
    },
    {
      name: "Kathryn Murphy",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.",
      rating: 5,
    },
    {
      name: "Kathryn Murphy",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.",
      rating: 5,
    },
    {
      name: "Kathryn Murphy",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.",
      rating: 5,
    },
  ];

  return (
    <div
      className="py-10 px-4 bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <h1 className="text-center text-3xl md:text-7xl font-bold mb-8 text-white">
        TESTYMONIALS
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:w-2/3 mx-auto">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white rounded-lg p-6 shadow-lg">
            <h2 className="text-xl font-bold mb-4 text-[#C98A40]">
              {testimonial.name}
            </h2>
            <p className="mb-4">{testimonial.text}</p>
            <div className="flex">
              {Array(testimonial.rating)
                .fill(0)
                .map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.293 3.112 1.011-5.905L1 8.57l5.907-.858L10 2.5l2.093 5.212L18 8.57l-4.718 3.637 1.011 5.905L10 15z" />
                  </svg>
                ))}
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <button className="bg-[#FDBA10] py-2 px-4 rounded-full text-white font-bold">
          CONTACT US
        </button>
      </div>
    </div>
  );
}

export default Testimonials;
