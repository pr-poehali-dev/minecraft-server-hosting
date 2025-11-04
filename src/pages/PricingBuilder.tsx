import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function PricingBuilder() {
  const [activeSection, setActiveSection] = useState('home');

  const features = [
    { icon: 'Ghost', title: 'Мрачная атмосфера', description: 'Погрузитесь в мир тьмы и ужаса' },
    { icon: 'Skull', title: 'Древние тайны', description: 'Раскройте секреты прошлого' },
    { icon: 'Flame', title: 'Магия огня', description: 'Овладейте силой пламени' },
    { icon: 'Moon', title: 'Ночные ритуалы', description: 'Проводите обряды под луной' },
  ];

  const pricingPlans = [
    {
      name: 'Призрак',
      price: '666',
      period: 'месяц',
      popular: false,
      features: ['Базовый доступ', 'Основные заклинания', '3 ритуала', 'Доступ к библиотеке'],
    },
    {
      name: 'Ведьма',
      price: '1313',
      period: 'месяц',
      popular: true,
      features: ['Полный доступ', 'Все заклинания', 'Безлимит ритуалов', 'VIP библиотека', 'Личный наставник'],
    },
    {
      name: 'Некромант',
      price: '2666',
      period: 'месяц',
      popular: false,
      features: ['Премиум доступ', 'Тёмная магия', 'Безлимит', 'Древние знания', 'Личный совет', 'Артефакты'],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-halloween relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsIDE1MCwgMCwgMC4xKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20"></div>

      <header className="sticky top-0 z-50 border-b border-primary/20 bg-background/80 backdrop-blur-lg">
        <div className="container flex h-20 items-center justify-between px-4 mx-auto">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center shadow-lg shadow-primary/30">
              <Icon name="Skull" size={24} className="text-background" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-primary">EmeraldGrief</h1>
              <p className="text-xs text-muted-foreground">Темная сторона магии</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Button variant="ghost" onClick={() => setActiveSection('home')} className="text-foreground hover:text-primary">
              Главная
            </Button>
            <Button variant="ghost" onClick={() => setActiveSection('features')} className="text-foreground hover:text-primary">
              Возможности
            </Button>
            <Button variant="ghost" onClick={() => setActiveSection('pricing')} className="text-foreground hover:text-primary">
              Тарифы
            </Button>
            <Button className="bg-primary text-background hover:bg-primary/90">
              Присоединиться
            </Button>
          </nav>
        </div>
      </header>

      <section className="relative py-32 px-4">
        <div className="container mx-auto text-center relative z-10">
          <Badge className="mb-6 bg-primary/20 text-primary border-primary/30 px-4 py-2 text-sm">
            <Icon name="Sparkles" size={14} className="mr-2 inline" />
            Хеллоуин 2024
          </Badge>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-primary via-orange-400 to-primary bg-clip-text text-transparent animate-pulse">
            EmeraldGrief
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Окунитесь в мир мистики и темной магии. Откройте древние тайны и овладейте силами тьмы.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-primary text-background hover:bg-primary/90 shadow-lg shadow-primary/30 px-8">
              <Icon name="Ghost" size={20} className="mr-2" />
              Начать путешествие
            </Button>
            <Button size="lg" variant="outline" className="border-primary/30 hover:bg-primary/10">
              <Icon name="BookOpen" size={20} className="mr-2" />
              Узнать больше
            </Button>
          </div>
        </div>

        <div className="absolute top-1/4 left-10 animate-bounce">
          <Icon name="Ghost" size={48} className="text-primary/30" />
        </div>
        <div className="absolute top-1/3 right-20 animate-bounce delay-100">
          <Icon name="Skull" size={40} className="text-secondary/30" />
        </div>
        <div className="absolute bottom-1/4 left-1/4 animate-bounce delay-200">
          <Icon name="Flame" size={36} className="text-orange-500/30" />
        </div>
      </section>

      <section className="py-24 px-4 relative z-10">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Темные возможности</h2>
            <p className="text-muted-foreground text-lg">Откройте для себя силу древней магии</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="border-primary/20 bg-card/50 backdrop-blur hover:border-primary/40 transition-all hover:shadow-lg hover:shadow-primary/20">
                <CardHeader>
                  <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4">
                    <Icon name={feature.icon} size={28} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl text-foreground">{feature.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 relative z-10">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Выберите свой путь</h2>
            <p className="text-muted-foreground text-lg">Каждый путь ведёт к силе</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <Card 
                key={index} 
                className={`relative border-primary/20 bg-card/50 backdrop-blur hover:border-primary/40 transition-all ${
                  plan.popular ? 'ring-2 ring-primary shadow-2xl shadow-primary/30 scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-primary text-background px-4 py-1">Популярно</Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-8 pt-8">
                  <CardTitle className="text-2xl mb-2 text-primary">{plan.name}</CardTitle>
                  <div className="flex items-baseline justify-center gap-2 mb-6">
                    <span className="text-5xl font-bold text-foreground">{plan.price}</span>
                    <span className="text-muted-foreground">₽/{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center gap-3 text-foreground">
                        <Icon name="Check" size={18} className="text-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${
                      plan.popular 
                        ? 'bg-primary text-background hover:bg-primary/90' 
                        : 'bg-primary/10 text-primary hover:bg-primary/20'
                    }`}
                  >
                    Выбрать тариф
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 relative z-10 border-t border-primary/20">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">Готовы погрузиться во тьму?</h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Присоединяйтесь к сообществу тёмных магов и раскройте свой потенциал
          </p>
          <Button size="lg" className="bg-primary text-background hover:bg-primary/90 shadow-lg shadow-primary/30 px-12">
            <Icon name="Zap" size={20} className="mr-2" />
            Начать сейчас
          </Button>
        </div>
      </section>

      <footer className="border-t border-primary/20 py-12 px-4 relative z-10">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <Icon name="Skull" size={20} className="text-background" />
              </div>
              <div>
                <p className="font-bold text-primary">EmeraldGrief</p>
                <p className="text-xs text-muted-foreground">© 2024 Все права защищены</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                Политика
              </Button>
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                Условия
              </Button>
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                Контакты
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
