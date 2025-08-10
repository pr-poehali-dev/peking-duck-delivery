import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const duckProducts = [
    {
      id: 1,
      name: 'Утка, жареная «по-пекински», штучная',
      description: 'Утка замороженная, в термоусадочной плёнке, 20 шт в коробке',
      weight: '1200-1300 г',
      shelfLife: '12 месяцев',
      image: '/img/636c3c5e-c8c3-40be-9c2d-10fb2a853afe.jpg',
      price: 'По запросу'
    },
    {
      id: 2,
      name: 'Утка, жареная «по-пекински», половинка',
      description: 'Утка замороженная, в вакуумной упаковке, 30 шт в коробке, средний вес коробки 18,5 кг',
      weight: '550-680 г',
      shelfLife: '12 месяцев',
      image: '/img/636c3c5e-c8c3-40be-9c2d-10fb2a853afe.jpg',
      price: 'По запросу'
    },
    {
      id: 3,
      name: 'Утка, жареная «по-пекински», бескостная',
      description: 'Утка замороженная, в вакуумной упаковке, 30 шт в коробке, средний вес коробки 11 кг',
      weight: '650-750 г',
      shelfLife: '12 месяцев',
      image: '/img/636c3c5e-c8c3-40be-9c2d-10fb2a853afe.jpg',
      price: 'По запросу'
    },
    {
      id: 4,
      name: 'Утка жареная, бескостная',
      description: 'Утка замороженная, в вакуумной упаковке, 30 шт в коробке, средний вес коробки 20 кг',
      weight: '650-750 г',
      shelfLife: '12 месяцев',
      image: '/img/636c3c5e-c8c3-40be-9c2d-10fb2a853afe.jpg',
      price: 'По запросу'
    }
  ];

  const sauces = [
    {
      id: 1,
      name: 'Соус Хойсин LEE KUM KEE',
      description: 'Премиальный соус, идеальный для утки по-пекински',
      packaging: 'Жестяная банка 2,27 кг',
      shelfLife: '12 месяцев',
      image: '/img/b367015a-d0a9-4d4b-92f6-b675042da3d5.jpg'
    },
    {
      id: 2,
      name: 'Соус Хойсин Pear River Bridge',
      description: 'Рекомендуется для создания основы соусов и маринадов',
      packaging: 'Пластиковая банка 2,2 кг',
      shelfLife: '12 месяцев',
      image: '/img/b367015a-d0a9-4d4b-92f6-b675042da3d5.jpg'
    },
    {
      id: 3,
      name: 'Соус Устричный Pear River Bridge',
      description: 'Рекомендуется для соусов и маринадов',
      packaging: 'Пластиковая банка 2,4 кг',
      shelfLife: '12 месяцев',
      image: '/img/b367015a-d0a9-4d4b-92f6-b675042da3d5.jpg'
    },
    {
      id: 4,
      name: 'Лепешки для утки по-пекински HAPPY BELLY',
      description: 'Размер 130х130. 17х6 в упаковке. 12 штук в коробке',
      packaging: 'Упаковка',
      shelfLife: '24 месяца',
      image: '/img/21be324b-e074-464b-a2ca-25913aefd209.jpg'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Заявка отправлена! Мы свяжемся с вами в ближайшее время.');
  };

  return (
    <div className="min-h-screen bg-background font-source">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="text-2xl font-playfair font-bold text-primary">Lucky Ducky</div>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#products" className="text-foreground hover:text-primary transition-colors">Утка по-пекински</a>
              <a href="#accessories" className="text-foreground hover:text-primary transition-colors">Всё для утки</a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors">О нас</a>
              <a href="#contacts" className="text-foreground hover:text-primary transition-colors">Контакты</a>
              <Button variant="default" size="sm">Заказать домой</Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-secondary/20 to-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-playfair font-bold text-primary mb-6">
            Утка по-пекински для ресторанов и магазинов
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Настоящая утка по-пекински от Lucky Ducky. Высокое качество, проверенное долгосрочным партнёрством с лидерами ресторанного рынка Москвы и области.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg">
            <Icon name="Phone" className="mr-2" size={20} />
            ЗАКАЗАТЬ НА ПРОРАБОТКУ
          </Button>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-playfair font-bold text-center mb-12">Утка</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {duckProducts.map((product) => (
              <Card key={product.id} className="group hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="pb-4">
                  <div className="aspect-square rounded-lg overflow-hidden bg-muted">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <CardTitle className="text-lg leading-tight">{product.name}</CardTitle>
                  <CardDescription className="text-sm">{product.description}</CardDescription>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="text-xs">
                      <Icon name="Weight" size={12} className="mr-1" />
                      {product.weight}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      <Icon name="Calendar" size={12} className="mr-1" />
                      {product.shelfLife}
                    </Badge>
                  </div>
                </CardContent>
                <CardFooter>
                  <div className="w-full flex items-center justify-between">
                    <span className="font-semibold text-primary">{product.price}</span>
                    <Button size="sm" variant="outline">
                      <Icon name="ShoppingCart" size={16} className="mr-2" />
                      В корзину
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Accessories Section */}
      <section id="accessories" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-playfair font-bold text-center mb-12">Всё для утки по-пекински</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {sauces.map((sauce) => (
              <Card key={sauce.id} className="group hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="pb-4">
                  <div className="aspect-square rounded-lg overflow-hidden bg-background">
                    <img 
                      src={sauce.image} 
                      alt={sauce.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <CardTitle className="text-lg leading-tight">{sauce.name}</CardTitle>
                  <CardDescription className="text-sm">{sauce.description}</CardDescription>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="text-xs">
                      <Icon name="Package" size={12} className="mr-1" />
                      {sauce.packaging}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      <Icon name="Calendar" size={12} className="mr-1" />
                      {sauce.shelfLife}
                    </Badge>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button size="sm" variant="outline" className="w-full">
                    <Icon name="ShoppingCart" size={16} className="mr-2" />
                    Заказать
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-playfair font-bold text-center mb-12">Настоящая утка по-пекински от Lucky Ducky</h2>
          
          <Tabs defaultValue="production" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="production">
                <Icon name="ChefHat" size={16} className="mr-2" />
                Производство
              </TabsTrigger>
              <TabsTrigger value="delivery">
                <Icon name="Truck" size={16} className="mr-2" />
                Доставка
              </TabsTrigger>
              <TabsTrigger value="marking">
                <Icon name="Tag" size={16} className="mr-2" />
                Маркировка
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="production" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="ChefHat" className="mr-2" />
                    Производство
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    В качестве сырья используется только отборная утка российских производителей с обязательной сертификацией, 
                    прошедшая ветеринарно-санитарную экспертизу.
                  </p>
                  <p>
                    Общий процесс приготовления занимает 4 дня. В этот период сырая утка проходит сухую мариновку 
                    рабом из смеси 15 специй, маринуется соусами и фаршируется овощами, дополнительно ощипывается, 
                    карамелизуется и жарится.
                  </p>
                  <p>
                    На производстве установлены высокие требования к соблюдению норм законодательства, 
                    применяемые к переработке мясной продукции и мяса птицы.
                  </p>
                  <Badge variant="outline">ТУ 10.13.14-002-27550237-2017</Badge>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="delivery" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="Truck" className="mr-2" />
                    Доставка
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    После остывания разделывается, упаковывается и подвергается шоковой заморозке. 
                    Далее формируются коробки для отгрузки заказчикам и отправляются на холодный склад (-18°C).
                  </p>
                  <p>
                    Замороженная продукция доставляется специализированным транспортом при температуре -18°C. 
                    Все коробки дополнительно маркируются и размещаются на паллетах этикеткой наружу, 
                    с приложением сборочного листа и полного комплекта документов.
                  </p>
                  <div className="bg-primary/10 p-4 rounded-lg">
                    <p className="font-semibold text-primary">
                      Приемка большой партии занимает считанные минуты!
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="marking" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="Tag" className="mr-2" />
                    Маркировка
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Вся производимая продукция маркируется этикетками в соответствии с законодательством РФ 
                    с нанесением информации о производителе и адресе производства, составе, дате производства, 
                    сроках годности и весе.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contacts" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-4xl font-playfair font-bold text-center mb-8">
            Оставьте заявку — мы перезвоним и примем заказ по телефону
          </h2>
          
          <Card>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Имя</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Телефон</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+7 (999) 999-99-99"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Сообщение</Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Опишите ваши потребности..."
                  />
                </div>
                
                <Button type="submit" size="lg" className="w-full">
                  <Icon name="Send" className="mr-2" size={20} />
                  ОТПРАВИТЬ
                </Button>
                
                <p className="text-sm text-muted-foreground text-center">
                  Нажимая «Отправить», вы соглашаетесь с политикой обработки персональных данных
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4">
            <div className="text-xl font-playfair font-bold">Lucky Ducky</div>
            <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-8">
              <a href="mailto:office@lducky.ru" className="flex items-center hover:underline">
                <Icon name="Mail" size={16} className="mr-2" />
                office@lducky.ru
              </a>
              <a href="tel:+74950808188" className="flex items-center hover:underline">
                <Icon name="Phone" size={16} className="mr-2" />
                +7 495 080 81 88
              </a>
              <div className="flex items-center">
                <Icon name="MapPin" size={16} className="mr-2" />
                Москва, Шипиловская 44А
              </div>
            </div>
            <Separator className="bg-primary-foreground/20" />
            <div className="text-sm opacity-75">
              <a href="#" className="hover:underline">Политика обработки персональных данных</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;