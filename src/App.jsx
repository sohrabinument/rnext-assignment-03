import AnnouncementBar from "./components/AnnouncementBar";
import Navbar from "./components/Navbar";
import Products from "./pages/Products";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="min-h-screen bg-white">
      <AnnouncementBar />
      <Navbar />
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default App;
