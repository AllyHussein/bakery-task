// import "./App.css";
import About from "./components/About/About";
import ContactForm from "./components/ContactForm/ContactForm";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Recipes from "./components/Recipes/Recipes";
import Testimonials from "./components/Testimonials/Testimonials";
import Work from "./components/Work/Work";

function App() {
  return (
    <>
      <Header />
      <Work />
      <About />
      <Recipes />
      <Testimonials />
      <ContactForm />
      <Footer />
    </>
  );
}

export default App;
