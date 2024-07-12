import { useState } from "react";
import Email from "../../assets/images/email.png";
import Phone from "../../assets/images/phone.png";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://upskilling-egypt.com:3001/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      await response.json();
      alert("Form Submitted Successfully");
      setFormData({
        name: "",
        email: "",
        phone: "",
      });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="text-center py-10 md:py-20 px-4 md:px-0">
      <h1 className="text-3xl md:text-7xl font-bold text-[#C98A40] mb-10">
        CONTACT US
      </h1>
      <div className="flex flex-col justify-center items-center md:flex-row">
        <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-lg">
          <div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
              className="w-full p-3 rounded-full bg-[#FBD19A]"
              required
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full p-3 rounded-full bg-[#FBD19A]"
              required
            />
          </div>
          <div>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="w-full p-3 rounded-full bg-[#FBD19A]"
              required
            />
          </div>
          <div>
            <button
              type="submit"
              className="bg-[#C98A40] text-white py-3 px-6 rounded-full font-bold"
            >
              SEND
            </button>
          </div>
        </form>
        <div className="w-full max-w-lg mt-10 md:m-10 md:mt-0 space-y-4">
          <div className="flex justify-center md:justify-start items-center gap-5">
            <img src={Email} alt="email" className="w-6 h-6" />
            <span>upskilling.eg1@gmail.com</span>
          </div>
          <div className="flex justify-center md:justify-start items-center gap-5">
            <img src={Phone} alt="phone" className="w-6 h-6" />
            <span>+20 115 493 2137</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
