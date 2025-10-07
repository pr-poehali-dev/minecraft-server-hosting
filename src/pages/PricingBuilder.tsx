import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface PlanFeature {
  id: string;
  text: string;
  included: boolean;
}

interface Plan {
  id: string;
  name: string;
  description: string;
  price: string;
  period: string;
  popular: boolean;
  features: PlanFeature[];
  color: string;
}

export default function PricingBuilder() {
  const [plans, setPlans] = useState<Plan[]>([
    {
      id: '1',
      name: 'Базовый',
      description: 'Для начинающих',
      price: '490',
      period: 'месяц',
      popular: false,
      color: 'slate',
      features: [
        { id: 'f1', text: '1 GB RAM', included: true },
        { id: 'f2', text: '10 GB SSD', included: true },
        { id: 'f3', text: 'До 10 игроков', included: true },
        { id: 'f4', text: 'Базовая поддержка', included: true },
        { id: 'f5', text: 'Плагины', included: false },
      ],
    },
    {
      id: '2',
      name: 'Профессиональный',
      description: 'Для серьёзных проектов',
      price: '990',
      period: 'месяц',
      popular: true,
      color: 'blue',
      features: [
        { id: 'f1', text: '4 GB RAM', included: true },
        { id: 'f2', text: '50 GB SSD', included: true },
        { id: 'f3', text: 'До 50 игроков', included: true },
        { id: 'f4', text: 'Приоритетная поддержка', included: true },
        { id: 'f5', text: 'Безлимит плагинов', included: true },
        { id: 'f6', text: 'Автобэкапы', included: true },
      ],
    },
    {
      id: '3',
      name: 'Премиум',
      description: 'Максимум возможностей',
      price: '1990',
      period: 'месяц',
      popular: false,
      color: 'purple',
      features: [
        { id: 'f1', text: '8 GB RAM', included: true },
        { id: 'f2', text: '100 GB SSD', included: true },
        { id: 'f3', text: 'Безлимит игроков', included: true },
        { id: 'f4', text: '24/7 поддержка', included: true },
        { id: 'f5', text: 'Все плагины и моды', included: true },
        { id: 'f6', text: 'DDoS защита', included: true },
        { id: 'f7', text: 'Выделенный IP', included: true },
      ],
    },
  ]);

  const [editingPlan, setEditingPlan] = useState<string | null>(null);
  const [showPreview, setShowPreview] = useState(false);

  const addPlan = () => {
    const newPlan: Plan = {
      id: Date.now().toString(),
      name: 'Новый тариф',
      description: 'Описание тарифа',
      price: '0',
      period: 'месяц',
      popular: false,
      color: 'slate',
      features: [],
    };
    setPlans([...plans, newPlan]);
  };

  const removePlan = (id: string) => {
    setPlans(plans.filter(p => p.id !== id));
  };

  const updatePlan = (id: string, updates: Partial<Plan>) => {
    setPlans(plans.map(p => p.id === id ? { ...p, ...updates } : p));
  };

  const addFeature = (planId: string) => {
    const plan = plans.find(p => p.id === planId);
    if (plan) {
      const newFeature: PlanFeature = {
        id: Date.now().toString(),
        text: 'Новая возможность',
        included: true,
      };
      updatePlan(planId, { features: [...plan.features, newFeature] });
    }
  };

  const removeFeature = (planId: string, featureId: string) => {
    const plan = plans.find(p => p.id === planId);
    if (plan) {
      updatePlan(planId, { features: plan.features.filter(f => f.id !== featureId) });
    }
  };

  const updateFeature = (planId: string, featureId: string, updates: Partial<PlanFeature>) => {
    const plan = plans.find(p => p.id === planId);
    if (plan) {
      updatePlan(planId, {
        features: plan.features.map(f => f.id === featureId ? { ...f, ...updates } : f),
      });
    }
  };

  const colorOptions = [
    { value: 'slate', label: 'Серый', class: 'bg-slate-500' },
    { value: 'blue', label: 'Синий', class: 'bg-blue-500' },
    { value: 'purple', label: 'Фиолетовый', class: 'bg-purple-500' },
    { value: 'green', label: 'Зелёный', class: 'bg-green-500' },
    { value: 'orange', label: 'Оранжевый', class: 'bg-orange-500' },
    { value: 'red', label: 'Красный', class: 'bg-red-500' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur">
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
              <Icon name="Sparkles" size={18} className="text-white" />
            </div>
            <h1 className="text-xl font-bold">Конструктор тарифов</h1>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant={showPreview ? 'default' : 'outline'}
              onClick={() => setShowPreview(!showPreview)}
            >
              <Icon name={showPreview ? 'Edit' : 'Eye'} size={16} className="mr-2" />
              {showPreview ? 'Редактор' : 'Предпросмотр'}
            </Button>
          </div>
        </div>
      </header>

      <div className="container px-4 py-8">
        {!showPreview ? (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold">Управление тарифами</h2>
                <p className="text-muted-foreground">Создавайте и настраивайте тарифные планы</p>
              </div>
              <Button onClick={addPlan} className="bg-primary">
                <Icon name="Plus" size={16} className="mr-2" />
                Добавить тариф
              </Button>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {plans.map(plan => (
                <Card key={plan.id} className={`relative ${editingPlan === plan.id ? 'ring-2 ring-primary' : ''}`}>
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <Input
                          value={plan.name}
                          onChange={(e) => updatePlan(plan.id, { name: e.target.value })}
                          className="font-bold text-lg mb-2"
                          placeholder="Название тарифа"
                        />
                        <Textarea
                          value={plan.description}
                          onChange={(e) => updatePlan(plan.id, { description: e.target.value })}
                          className="text-sm resize-none"
                          rows={2}
                          placeholder="Описание"
                        />
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removePlan(plan.id)}
                        className="text-destructive"
                      >
                        <Icon name="Trash2" size={16} />
                      </Button>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <Input
                          type="number"
                          value={plan.price}
                          onChange={(e) => updatePlan(plan.id, { price: e.target.value })}
                          className="text-2xl font-bold"
                          placeholder="0"
                        />
                        <span className="text-muted-foreground">₽</span>
                      </div>

                      <Input
                        value={plan.period}
                        onChange={(e) => updatePlan(plan.id, { period: e.target.value })}
                        placeholder="период"
                      />

                      <div className="flex items-center justify-between">
                        <span className="text-sm">Популярный тариф</span>
                        <Switch
                          checked={plan.popular}
                          onCheckedChange={(checked) => updatePlan(plan.id, { popular: checked })}
                        />
                      </div>

                      <div>
                        <label className="text-sm font-medium mb-2 block">Цвет акцента</label>
                        <div className="flex gap-2 flex-wrap">
                          {colorOptions.map(color => (
                            <button
                              key={color.value}
                              onClick={() => updatePlan(plan.id, { color: color.value })}
                              className={`w-8 h-8 rounded-full ${color.class} ${
                                plan.color === color.value ? 'ring-2 ring-offset-2 ring-primary' : ''
                              }`}
                              title={color.label}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-semibold">Возможности</span>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => addFeature(plan.id)}
                        >
                          <Icon name="Plus" size={14} />
                        </Button>
                      </div>

                      {plan.features.map(feature => (
                        <div key={feature.id} className="flex items-center gap-2">
                          <Switch
                            checked={feature.included}
                            onCheckedChange={(checked) =>
                              updateFeature(plan.id, feature.id, { included: checked })
                            }
                          />
                          <Input
                            value={feature.text}
                            onChange={(e) =>
                              updateFeature(plan.id, feature.id, { text: e.target.value })
                            }
                            className="flex-1 h-8 text-sm"
                            placeholder="Название возможности"
                          />
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => removeFeature(plan.id, feature.id)}
                          >
                            <Icon name="X" size={14} />
                          </Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ) : (
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold">Выберите свой тарифный план</h2>
              <p className="text-xl text-muted-foreground">Гибкие цены для любых задач</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {plans.map(plan => (
                <Card
                  key={plan.id}
                  className={`relative ${
                    plan.popular ? 'border-primary shadow-lg scale-105' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <Badge className={`bg-${plan.color}-500`}>Популярный</Badge>
                    </div>
                  )}

                  <CardHeader>
                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
                    <CardDescription>{plan.description}</CardDescription>
                    <div className="mt-4">
                      <div className="flex items-baseline gap-2">
                        <span className="text-4xl font-bold">{plan.price} ₽</span>
                        <span className="text-muted-foreground">/ {plan.period}</span>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    <Button
                      className={`w-full ${
                        plan.popular ? `bg-${plan.color}-500 hover:bg-${plan.color}-600` : ''
                      }`}
                      variant={plan.popular ? 'default' : 'outline'}
                    >
                      Выбрать тариф
                    </Button>

                    <div className="space-y-3">
                      {plan.features.map(feature => (
                        <div key={feature.id} className="flex items-center gap-3">
                          <div
                            className={`w-5 h-5 rounded-full flex items-center justify-center ${
                              feature.included
                                ? `bg-${plan.color}-500/20 text-${plan.color}-500`
                                : 'bg-muted text-muted-foreground'
                            }`}
                          >
                            <Icon
                              name={feature.included ? 'Check' : 'X'}
                              size={14}
                            />
                          </div>
                          <span
                            className={`text-sm ${
                              feature.included ? 'text-foreground' : 'text-muted-foreground line-through'
                            }`}
                          >
                            {feature.text}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-muted-foreground mb-4">Нужна помощь с выбором?</p>
              <Button variant="outline" size="lg">
                <Icon name="MessageCircle" size={16} className="mr-2" />
                Связаться с нами
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
