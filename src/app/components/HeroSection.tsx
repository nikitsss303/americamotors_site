interface HeroSectionProps {
  heroImage: string;
}

export function HeroSection({ heroImage }: HeroSectionProps) {
  const scrollToForm = () => {
    document.getElementById("consultation-form")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToProcess = () => {
    document.getElementById("process-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Автомобили AmericaMotors"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 to-blue-900/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center text-white">
        <h1 className="mb-6 max-w-4xl mx-auto">
          Подберём и привезём автомобиль из США под ваши задачи — с прозрачной ценой и гарантией
        </h1>
        <p className="text-xl mb-12 text-gray-200 max-w-2xl mx-auto">
          Подбор, проверка, аукцион, доставка и растаможка в одном сервисе
        </p>

        <div className="flex gap-4 justify-center flex-wrap">
          <button
            onClick={scrollToForm}
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Получить бесплатную консультацию
          </button>
          <button
            onClick={scrollToProcess}
            className="border-2 border-white hover:bg-white/10 text-white px-8 py-4 rounded-lg transition-all duration-300"
          >
            Как мы работаем
          </button>
        </div>
      </div>
    </section>
  );
}
