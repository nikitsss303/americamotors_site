import { Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-400 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">AM</span>
              </div>
              <div>
                <div className="font-bold text-white">AmericaMotors</div>
                <div className="text-sm text-gray-400">Автомобили из США</div>
              </div>
            </div>
            <p className="text-gray-400">
              Профессиональный подбор и доставка автомобилей из США с 2010 года. Прозрачность, надёжность, экспертность.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white mb-6">Контакты</h3>
            <div className="space-y-4">
              <a href="tel:+375251234567" className="flex items-center gap-3 hover:text-white transition-colors">
                <Phone className="w-5 h-5" />
                <span>+375 (25) 123-45-67</span>
              </a>
              <a href="mailto:info@americamotors.ru" className="flex items-center gap-3 hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
                <span>info@americamotors.by</span>
              </a>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-1" />
                <div>
                  <div>Минск, ул. Питерская, д. 19</div>
                  <div className="text-sm text-gray-500">Пн-Пт: 9:00-20:00, Сб-Вс: 10:00-18:00</div>
                </div>
              </div>
            </div>
          </div>

          {/* Map Placeholder */}
          <div>
            <h3 className="text-white mb-6">Наш офис</h3>
            <div className="bg-gray-800 rounded-lg h-48 flex items-center justify-center">
              <MapPin className="w-12 h-12 text-gray-600" />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-gray-500">
            © 2025 AmericaMotors. Все права защищены.
          </div>
          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:text-white transition-colors">
              Политика конфиденциальности
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Пользовательское соглашение
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
