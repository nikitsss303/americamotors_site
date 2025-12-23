import { Star } from "lucide-react";

interface TestimonialsSectionProps {
  customerImage: string;
}

export function TestimonialsSection({ customerImage }: TestimonialsSectionProps) {
  const testimonials = [
    {
      name: "Дмитрий К.",
      text: "Привёз Toyota Camry 2020 года. Весь процесс занял 2 месяца. Ребята держали в курсе каждого шага, показывали фото с аукциона, помогли с растаможкой. Сэкономил около 600 тысяч по сравнению с покупкой в России.",
      rating: 5,
      image: customerImage,
    },
    {
      name: "Сергей М.",
      text: "Второй раз обращаюсь в AmericaMotors. Первый раз был Lexus RX, сейчас Ford F-150. Прозрачная работа, никаких сюрпризов. Все расходы озвучены заранее. Рекомендую как профессионалов своего дела.",
      rating: 5,
      image: customerImage,
    },
    {
      name: "Андрей В.",
      text: "Долго выбирал компанию для покупки авто из США. AmericaMotors впечатлили системным подходом и честностью. Александр лично помог подобрать идеальный вариант под мой бюджет. Очень доволен результатом!",
      rating: 5,
      image: customerImage,
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="mb-16 text-center">
          Отзывы наших клиентов
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.text}"</p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">Клиент AmericaMotors</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
