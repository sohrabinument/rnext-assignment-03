import AnnouncementBar from "./components/AnnouncementBar";
import Navbar from "./components/Navbar";
import Products from "./pages/Products";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import { CartProvider } from "./context/CartContext";

const App = () => {
  return (
    <div className="min-h-screen bg-white">
      <AnnouncementBar />
      <CartProvider>
        <Navbar />
        <Products />
        <Newsletter />
        <Footer />
      </CartProvider>
    </div>
  );
};

export default App;
