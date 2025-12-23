const steps = [
  {
    number: "01",
    title: "Консультация и подбор",
    description: "Обсуждаем ваши требования, бюджет и подбираем варианты с аукционов",
  },
  {
    number: "02",
    title: "Проверка и покупка",
    description: "Проверяем историю, участвуем в торгах, выкупаем автомобиль",
  },
  {
    number: "03",
    title: "Доставка и растаможка",
    description: "Организуем транспортировку, оформляем все таможенные процедуры",
  },
  {
    number: "04",
    title: "Передача ключей",
    description: "Передаём вам готовый автомобиль с полным пакетом документов",
  },
];

export function ProcessSection() {
  return (
    <section id="process-section" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="mb-16 text-center">
          Как купить автомобиль из США
        </h2>

        <div className="relative">
          {/* Desktop view */}
          <div className="hidden md:flex items-start justify-between">
            {steps.map((step, index) => (
              <div key={index} className="flex-1 relative">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-900 text-white rounded-full mb-6">
                    <span className="text-xl font-bold">{step.number}</span>
                  </div>
                  <h3 className="mb-3">{step.title}</h3>
                  <p className="text-gray-600 text-sm max-w-xs mx-auto">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="absolute top-8 left-[60%] w-[80%] h-0.5 bg-gray-300">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-l-8 border-l-gray-300 border-y-4 border-y-transparent"></div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile view */}
          <div className="md:hidden space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-14 h-14 bg-blue-900 text-white rounded-full">
                    <span className="text-lg font-bold">{step.number}</span>
                  </div>
                </div>
                <div>
                  <h3 className="mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
