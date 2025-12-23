interface ExpertsSectionProps {
  expertImage1: string;
  expertImage2: string;
}

export function ExpertsSection({ expertImage1, expertImage2 }: ExpertsSectionProps) {
  const experts = [
    {
      name: "Александр Петров",
      role: "Основатель и CEO",
      experience: "15 лет опыта в автомобильном бизнесе. Лично привёз более 200 автомобилей из США. Эксперт по американским аукционам.",
      image: expertImage1,
    },
    {
      name: "Михаил Соколов",
      role: "Главный специалист по подбору",
      experience: "12 лет работы с автомобилями премиум-класса. Сертифицированный автоэксперт. Знает все тонкости проверки и оценки авто.",
      image: expertImage2,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="mb-16 text-center">
          Наши эксперты
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {experts.map((expert, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-square overflow-hidden bg-gray-200">
                <img
                  src={expert.image}
                  alt={expert.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="mb-1">{expert.name}</h3>
                <div className="text-blue-700 mb-4">{expert.role}</div>
                <p className="text-gray-600">{expert.experience}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
