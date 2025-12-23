import { useState } from "react";
import { Input } from "./ui/input";
import { Checkbox } from "./ui/checkbox";
import { Label } from "./ui/label";

export function ConsultationForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    agreed: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Спасибо! Мы свяжемся с вами в течение 15 минут.");
  };

  return (
    <section id="consultation-form" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-10">
          <h2 className="mb-4 text-center">
            Оставьте заявку на бесплатную консультацию
          </h2>
          <p className="text-center text-gray-600 mb-8">
            Перезвоним за 15 минут и ответим на все ваши вопросы
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="name">Ваше имя</Label>
              <Input
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="mt-2"
                placeholder="Иван Иванов"
              />
            </div>

            <div>
              <Label htmlFor="phone">Телефон</Label>
              <Input
                id="phone"
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="mt-2"
                placeholder="+7 (___) ___-__-__"
              />
            </div>

            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="mt-2"
                placeholder="your@email.com"
              />
            </div>

            <div className="flex items-start gap-3">
              <Checkbox
                id="agree"
                checked={formData.agreed}
                onCheckedChange={(checked) =>
                  setFormData({ ...formData, agreed: checked as boolean })
                }
              />
              <Label htmlFor="agree" className="text-sm text-gray-600 cursor-pointer">
                Согласен на обработку персональных данных и с политикой конфиденциальности
              </Label>
            </div>

            <button
              type="submit"
              disabled={!formData.agreed}
              className="w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white px-8 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Получить консультацию
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
