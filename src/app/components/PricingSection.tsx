import { Check } from "lucide-react";

const plans = [
  {
    name: "Базовый",
    description: "Для тех, кто знает что хочет",
    price: "от 50 000 ₽",
    features: [
      "Поиск автомобиля по вашим критериям",
      "Проверка истории автомобиля",
      "Участие в аукционе",
      "Базовая консультация",
    ],
    highlight: false,
  },
  {
    name: "Под ключ",
    description: "Самый популярный пакет",
    price: "от 120 000 ₽",
    features: [
      "Всё из пакета «Базовый»",
      "Доставка до порта России",
      "Растаможка и сертификация",
      "Помощь в постановке на учёт",
      "Личный менеджер 24/7",
    ],
    highlight: true,
  },
  {
    name: "Премиум",
    description: "Для требовательных клиентов",
    price: "от 200 000 ₽",
    features: [
      "Всё из пакета «Под ключ»",
      "Доставка до вашего города",
      "Предпродажная подготовка",
      "Гарантия на 6 месяцев",
      "VIP-сопровождение",
      "Помощь в продаже старого авто",
    ],
    highlight: false,
  },
];

export function PricingSection() {
  const scrollToForm = () => {
    document.getElementById("consultation-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="mb-16 text-center">
          Пакеты услуг
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-8 ${
                plan.highlight
                  ? "ring-2 ring-blue-900 shadow-2xl scale-105"
                  : "shadow-lg"
              } relative`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-900 text-white px-6 py-2 rounded-full text-sm">
                  Популярный
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="mb-2">{plan.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{plan.description}</p>
                <div className="text-3xl font-bold text-blue-900">{plan.price}</div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex gap-3">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={scrollToForm}
                className={`w-full py-3 rounded-lg transition-all duration-300 ${
                  plan.highlight
                    ? "bg-green-600 hover:bg-green-700 text-white shadow-lg hover:shadow-xl"
                    : "bg-gray-100 hover:bg-gray-200 text-gray-900"
                }`}
              >
                Выбрать пакет
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
