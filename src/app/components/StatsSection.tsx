import { Car, Users, Globe, TrendingUp, Shield, Package, Star, Clock } from "lucide-react";

const stats = [
  { icon: Car, value: "500+", label: "Автомобилей привезено" },
  { icon: Users, value: "450+", label: "Довольных клиентов" },
  { icon: Globe, value: "15", label: "Лет на рынке" },
  { icon: TrendingUp, value: "98%", label: "Повторных обращений" },
  { icon: Shield, value: "100%", label: "Юридическая чистота" },
  { icon: Package, value: "60", label: "Дней средняя доставка" },
  { icon: Star, value: "4.9", label: "Средняя оценка" },
  { icon: Clock, value: "24/7", label: "Поддержка клиентов" },
];

export function StatsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="mb-16 text-center">
          AmericaMotors в цифрах
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-8 text-center hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                    <Icon className="w-8 h-8 text-blue-700" />
                  </div>
                </div>
                <div className="text-4xl font-bold text-blue-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
