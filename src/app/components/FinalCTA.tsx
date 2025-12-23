interface FinalCTAProps {
  bgImage: string;
}

export function FinalCTA({ bgImage }: FinalCTAProps) {
  const scrollToForm = () => {
    document.getElementById("consultation-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={bgImage}
          alt="AmericaMotors"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-blue-950/85"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
        <h2 className="mb-6">
          Готовы купить автомобиль мечты из США?
        </h2>
        <p className="text-xl mb-10 text-gray-200">
          Получите бесплатную консультацию и узнайте точную стоимость доставки вашего автомобиля
        </p>
        <button
          onClick={scrollToForm}
          className="bg-green-600 hover:bg-green-700 text-white px-12 py-5 rounded-lg transition-all duration-300 shadow-2xl hover:shadow-3xl text-lg"
        >
          Получить консультацию прямо сейчас
        </button>
      </div>
    </section>
  );
}
