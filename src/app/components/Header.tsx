import { Phone, MapPin } from "lucide-react";
import { useState, useEffect } from "react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToForm = () => {
    document
      .getElementById("consultation-form")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-md"
          : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-900 to-blue-700 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold">AM</span>
          </div>
          <div>
            <div className="font-bold text-gray-900">
              AmericaMotors
            </div>
            <div className="text-sm text-gray-600">
              Автомобили из США под ключ
            </div>
          </div>
        </div>

        <div className="flex items-center gap-8">
          <a
            href="tel:+375251234567"
            className="flex items-center gap-2 text-gray-900 hover:text-blue-700 transition-colors"
          >
            <Phone className="w-5 h-5" />
            <span>+375 (25) 123-45-67</span>
          </a>
          <div className="flex items-center gap-2 text-gray-600">
            <MapPin className="w-5 h-5" />
            <span>Москва, ул. Примерная, 1</span>
          </div>
        </div>
      </div>
    </header>
  );
}