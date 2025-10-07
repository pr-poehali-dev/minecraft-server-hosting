import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const features = [
    {
      icon: 'Zap',
      title: 'Мгновенное развертывание',
      description: 'Запустите сервер в один клик за 30 секунд'
    },
    {
      icon: 'Activity',
      title: 'Мониторинг в реальном времени',
      description: 'Отслеживайте производительность сервера онлайн'
    },
    {
      icon: 'Database',
      title: 'Автобэкапы',
      description: 'Автоматическое резервное копирование миров'
    },
    {
      icon: 'Package',
      title: 'Библиотека модов',
      description: 'Установка модов и плагинов из каталога'
    },
    {
      icon: 'Terminal',
      title: 'Веб-консоль',
      description: 'Управление сервером через браузер'
    },
    {
      icon: 'Shield',
      title: 'DDoS защита',
      description: 'Надежная защита от атак'
    },
    {
      icon: 'FolderOpen',
      title: 'FTP доступ',
      description: 'Полный доступ к файлам сервера'
    },
    {
      icon: 'Layers',
      title: 'Все версии Minecraft',
      description: 'Поддержка любых версий игры'
    }
  ];

  const plans = [
    {
      id: 'micro',
      name: 'Нуб 🌱',
      price: '149',
      oldPrice: '299',
      players: '5',
      ram: '1 GB',
      storage: '5 GB SSD',
      features: ['Базовая защита DDoS', 'Еженедельные бэкапы', 'Веб-панель управления']
    },
    {
      id: 'starter',
      name: 'Попугай 🦜',
      price: '199',
      oldPrice: '399',
      players: '8',
      ram: '1.5 GB',
      storage: '8 GB SSD',
      features: ['Базовая защита DDoS', 'Ежедневные бэкапы', 'Веб-панель управления', 'FTP доступ']
    },
    {
      id: 'basic',
      name: 'Житель 🧑',
      price: '299',
      oldPrice: '499',
      players: '10',
      ram: '2 GB',
      storage: '10 GB SSD',
      features: ['Базовая защита DDoS', 'Ежедневные бэкапы', 'Веб-панель управления', 'FTP доступ']
    },
    {
      id: 'standard',
      name: 'Тигр 🐯',
      price: '449',
      oldPrice: '649',
      players: '20',
      ram: '3 GB',
      storage: '20 GB SSD',
      features: ['Усиленная защита DDoS', 'Бэкапы 2 раза в день', 'Веб-панель управления', 'FTP доступ', 'Установка модов']
    },
    {
      id: 'pro',
      name: 'Профи ⚔️',
      price: '599',
      oldPrice: '799',
      players: '30',
      ram: '4 GB',
      storage: '25 GB SSD',
      features: ['Усиленная защита DDoS', 'Бэкапы каждые 6 часов', 'Приоритетная поддержка', 'Установка модов в 1 клик', 'Базы данных MySQL'],
      popular: true
    },
    {
      id: 'advanced',
      name: 'Голем 🗿',
      price: '799',
      oldPrice: '999',
      players: '50',
      ram: '6 GB',
      storage: '35 GB NVMe',
      features: ['Продвинутая защита DDoS', 'Бэкапы каждые 4 часа', 'Приоритетная поддержка', 'Неограниченные моды', 'Выделенный IP']
    },
    {
      id: 'premium',
      name: 'Драгон 🐲',
      price: '1199',
      oldPrice: '1599',
      players: '100',
      ram: '8 GB',
      storage: '50 GB NVMe',
      features: ['Максимальная защита DDoS', 'Бэкапы каждый час', 'VIP поддержка 24/7', 'Неограниченные моды', 'Выделенный IP', 'Кастомные плагины']
    },
    {
      id: 'elite',
      name: 'Бог ⚡',
      price: '1699',
      oldPrice: '2199',
      players: '150',
      ram: '12 GB',
      storage: '75 GB NVMe',
      features: ['Максимальная защита DDoS', 'Бэкапы каждые 30 минут', 'VIP поддержка 24/7', 'Dedicated vCPU', 'Выделенный IP', 'Кастомные плагины', 'Приоритетная очередь']
    },
    {
      id: 'ultimate',
      name: 'Эндермен 👾',
      price: '2499',
      oldPrice: '3299',
      players: '200',
      ram: '16 GB',
      storage: '100 GB NVMe',
      features: ['Максимальная защита DDoS', 'Бэкапы каждые 15 минут', 'Персональный менеджер', 'Dedicated CPU', 'Несколько IP адресов', 'Кастомная конфигурация', 'Мгновенная поддержка']
    },
    {
      id: 'enterprise',
      name: 'Нотч 👑',
      price: '4999',
      oldPrice: '6499',
      players: 'Неограничено',
      ram: '32 GB',
      storage: '250 GB NVMe',
      features: ['Корпоративная защита', 'Непрерывные бэкапы', 'Персональная команда поддержки', 'Dedicated Server', 'Кластерная архитектура', 'SLA 99.99%', 'Кастомизация под ключ']
    },
    {
      id: 'network',
      name: 'Хиробрин 👻',
      price: '9999',
      oldPrice: '12999',
      players: 'Неограничено',
      ram: '64 GB+',
      storage: '500 GB NVMe',
      features: ['Максимальная защита', 'Мультисерверная сеть', 'Команда DevOps', 'Выделенное оборудование', 'Геораспределенная сеть', 'SLA 99.99%', 'Индивидуальные решения']
    },
    {
      id: 'custom',
      name: 'Креатив ✨',
      price: 'По запросу',
      oldPrice: '',
      players: 'Любое',
      ram: 'Любой',
      storage: 'Любой',
      features: ['Полностью кастомное решение', 'Индивидуальная архитектура', 'Персональная команда', 'Выделенная инфраструктура', 'Интеграции на заказ', 'Консультации 24/7']
    }
  ];

  const faqs = [
    {
      question: 'Как быстро активируется сервер?',
      answer: 'Сервер активируется автоматически в течение 30 секунд после оплаты. Вы сразу получите доступ к панели управления и сможете начать настройку.'
    },
    {
      question: 'Можно ли изменить тариф?',
      answer: 'Да, вы можете в любой момент повысить или понизить тариф. При повышении доплачиваете разницу, при понижении остаток переносится на следующий период.'
    },
    {
      question: 'Как установить моды и плагины?',
      answer: 'В панели управления есть библиотека популярных модов и плагинов. Установка происходит в один клик. Также вы можете загрузить свои моды через FTP.'
    },
    {
      question: 'Что делать если сервер лагает?',
      answer: 'Сначала проверьте мониторинг производительности в панели. Часто помогает оптимизация плагинов или переход на более мощный тариф. Наша поддержка 24/7 поможет разобраться.'
    },
    {
      question: 'Защищены ли данные сервера?',
      answer: 'Да, мы делаем автоматические резервные копии. На тарифе Basic — ежедневно, Pro — каждые 6 часов, Premium — ежечасно. Все данные хранятся на защищенных серверах с DDoS защитой.'
    }
  ];

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center animate-glow">
                <Icon name="Box" size={24} className="text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                MinecraftHost
              </span>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Возможности</a>
              <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">Тарифы</a>
              <a href="#faq" className="text-muted-foreground hover:text-foreground transition-colors">FAQ</a>
              <a href="#contacts" className="text-muted-foreground hover:text-foreground transition-colors">Контакты</a>
            </nav>
            <Button 
              className="bg-primary hover:bg-primary/90 text-white"
              onClick={() => window.location.href = '/login'}
            >
              Войти
            </Button>
          </div>
        </div>
      </header>

      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSg0NiwgMjA0LCAxMTMsIDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30" />
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center animate-fade-in">
            <Badge className="mb-6 bg-primary/20 text-primary border-primary/30">
              🎮 Лучший хостинг 2025
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              Хостинг серверов<br />Minecraft
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Создайте свой сервер за 30 секунд. Мощные сервера, DDoS защита и поддержка 24/7
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6 animate-glow">
                <Icon name="Rocket" size={20} className="mr-2" />
                Создать сервер
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-2">
                <Icon name="PlayCircle" size={20} className="mr-2" />
                Смотреть демо
              </Button>
            </div>
            <div className="flex flex-wrap justify-center gap-8 mt-12 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Icon name="Check" size={16} className="text-primary" />
                <span>Запуск за 30 секунд</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Check" size={16} className="text-primary" />
                <span>DDoS защита</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Check" size={16} className="text-primary" />
                <span>Поддержка 24/7</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Всё для вашего сервера</h2>
            <p className="text-xl text-muted-foreground">Профессиональные инструменты управления</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={feature.icon as any} size={24} className="text-primary" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Тарифы</h2>
            <p className="text-xl text-muted-foreground">Выберите оптимальный план для вашего проекта</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {plans.map((plan, index) => (
              <Card 
                key={plan.id}
                className={`relative border-2 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 animate-slide-up ${
                  plan.popular 
                    ? 'border-primary shadow-xl shadow-primary/20' 
                    : 'border-border hover:border-primary/50'
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-0.5 text-xs animate-glow">
                      ⭐ Популярный
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-xl mb-2">{plan.name}</CardTitle>
                  <div className="mb-3">
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                        {plan.price}
                      </span>
                      {plan.price !== 'По запросу' && <span className="text-sm text-muted-foreground">₽/мес</span>}
                    </div>
                    {plan.oldPrice && (
                      <div className="text-xs text-muted-foreground line-through mt-0.5">
                        {plan.oldPrice} ₽
                      </div>
                    )}
                  </div>
                  <div className="space-y-1 text-xs">
                    <div className="flex items-center justify-center gap-1.5">
                      <Icon name="Users" size={14} className="text-primary" />
                      <span>{plan.players === 'Неограничено' || plan.players === 'Любое' ? plan.players : `До ${plan.players}`} {plan.players !== 'Неограничено' && plan.players !== 'Любое' && 'игроков'}</span>
                    </div>
                    <div className="flex items-center justify-center gap-1.5">
                      <Icon name="Cpu" size={14} className="text-primary" />
                      <span>{plan.ram} RAM</span>
                    </div>
                    <div className="flex items-center justify-center gap-1.5">
                      <Icon name="HardDrive" size={14} className="text-primary" />
                      <span>{plan.storage}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {plan.features.slice(0, 4).map((feature, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <Icon name="CheckCircle2" size={16} className="text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-xs">{feature}</span>
                      </li>
                    ))}
                    {plan.features.length > 4 && (
                      <li className="text-xs text-muted-foreground text-center pt-1">
                        +{plan.features.length - 4} возможностей
                      </li>
                    )}
                  </ul>
                  <Button 
                    className={`w-full ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white' 
                        : 'bg-primary hover:bg-primary/90 text-white'
                    }`}
                    size="sm"
                    onClick={() => setSelectedPlan(plan.id)}
                  >
                    Выбрать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Частые вопросы</h2>
            <p className="text-xl text-muted-foreground">Ответы на популярные вопросы</p>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border-2 border-border rounded-lg px-6 bg-card hover:border-primary/50 transition-colors"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="font-semibold text-lg">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-secondary/5">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl md:text-4xl font-bold mb-4">Нужна помощь?</CardTitle>
              <CardDescription className="text-lg">
                Наша команда поддержки готова помочь вам 24/7
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <Card className="border-2 hover:border-primary/50 transition-all hover:shadow-lg text-center">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon name="Mail" size={24} className="text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">Email</h3>
                    <a href="mailto:support@minecrafthost.ru" className="text-primary hover:underline">
                      support@minecrafthost.ru
                    </a>
                  </CardContent>
                </Card>
                <Card className="border-2 hover:border-primary/50 transition-all hover:shadow-lg text-center">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon name="MessageCircle" size={24} className="text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">Telegram</h3>
                    <a href="https://t.me/minecrafthost_support" className="text-primary hover:underline">
                      @minecrafthost_support
                    </a>
                  </CardContent>
                </Card>
                <Card className="border-2 hover:border-primary/50 transition-all hover:shadow-lg text-center">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon name="Phone" size={24} className="text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">Телефон</h3>
                    <a href="tel:+78001234567" className="text-primary hover:underline">
                      8 (800) 123-45-67
                    </a>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-12 px-4 border-t border-border bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <Icon name="Box" size={24} className="text-white" />
              </div>
              <span className="text-xl font-bold">MinecraftHost</span>
            </div>
            <div className="text-sm text-muted-foreground text-center md:text-left">
              © 2025 MinecraftHost. Все права защищены.
            </div>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Github" size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Twitter" size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="MessageCircle" size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}