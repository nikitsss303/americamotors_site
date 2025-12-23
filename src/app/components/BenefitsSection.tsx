import { ShieldCheck, FileText, Search, TrendingUp, Users, Package } from "lucide-react";

const benefits = [
  {
    icon: ShieldCheck,
    title: "Прозрачность на каждом этапе",
    description: "Полный отчёт о состоянии автомобиля, истории и всех затратах. Никаких скрытых платежей.",
  },
  {
    icon: Search,
    title: "Профессиональный подбор",
    description: "Анализируем ваши требования и находим оптимальные варианты на крупнейших аукционах США.",
  },
  {
    icon: FileText,
    title: "Юридическая чистота",
    description: "Проверяем историю, документы и легальность каждого автомобиля перед покупкой.",
  },
  {
    icon: TrendingUp,
    title: "Экономия до 40%",
    description: "Прямые поставки с аукционов без посредников. Вы платите реальную рыночную цену.",
  },
  {
    icon: Users,
    title: "Личный менеджер",
    description: "Один специалист ведёт вашу сделку от начала до получения ключей и документов.",
  },
  {
    icon: Package,
    title: "Полное сопровождение",
    description: "Берём на себя логистику, растаможку, сертификацию и постановку на учёт.",
  },
];

export function BenefitsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="mb-16">
          Что вы получаете
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div key={index} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Icon className="w-7 h-7 text-blue-700" />
                  </div>
                </div>
                <div>
                  <h3 className="mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
