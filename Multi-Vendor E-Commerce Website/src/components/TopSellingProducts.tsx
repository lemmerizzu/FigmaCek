import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Star, ShoppingCart } from "lucide-react";
import { useLanguage } from "./LanguageContext";

const topProducts = [
  {
    id: 1,
    name: "Heavy-Duty Construction Excavator",
    vendor: "MegaBuild Equipment Co.",
    price: 125000,
    originalPrice: 145000,
    rating: 4.8,
    reviews: 24,
    image: "https://images.unsplash.com/photo-1649017109134-f7686437a966?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBlcXVpcG1lbnQlMjBtYWNoaW5lcnl8ZW58MXx8fHwxNzU4MDk1NTIyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    type: "product",
    isOnSale: true
  },
  {
    id: 2,
    name: "Precision Manufacturing Tools",
    vendor: "IndustriTech Solutions",
    price: 8500,
    originalPrice: null,
    rating: 4.9,
    reviews: 87,
    image: "https://images.unsplash.com/photo-1601998539036-006e7fbddb0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1hbnVmYWN0dXJpbmclMjB0b29sc3xlbnwxfHx8fDE3NTgwOTU1MjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    type: "product",
    isOnSale: false
  },
  {
    id: 3,
    name: "Industrial Safety Equipment",
    vendor: "SafeWork Industries",
    price: 1200,
    originalPrice: null,
    rating: 4.9,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1730845674297-7aab1ad65099?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwc2FmZXR5JTIwZXF1aXBtZW50fGVufDF8fHx8MTc1ODA1Nzk1MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    type: "product",
    isOnSale: false
  },
  {
    id: 4,
    name: "Electrical Components Package",
    vendor: "ElectroMax Systems",
    price: 3400,
    originalPrice: 4200,
    rating: 4.7,
    reviews: 73,
    image: "https://images.unsplash.com/photo-1755016388713-299f23eaa50a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2FsJTIwY29tcG9uZW50cyUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzU4MDUyMDQ1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    type: "product",
    isOnSale: true
  },
  {
    id: 5,
    name: "Business Consulting Services",
    vendor: "Expert Solutions Group",
    price: 2500,
    originalPrice: null,
    rating: 5.0,
    reviews: 43,
    image: "https://images.unsplash.com/photo-1540921002383-b2a7ff6a716d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBzdXBwbGllcyUyMGJ1c2luZXNzfGVufDF8fHx8MTc1ODAxMzQyMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    type: "service",
    isOnSale: false
  },
  {
    id: 6,
    name: "Warehouse Logistics Setup",
    vendor: "LogiFlow Operations",
    price: 15000,
    originalPrice: null,
    rating: 4.8,
    reviews: 28,
    image: "https://images.unsplash.com/photo-1669003154471-b72fe01a899d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwd2FyZWhvdXNlJTIwbG9naXN0aWNzfGVufDF8fHx8MTc1ODA5NTUxNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    type: "service",
    isOnSale: false
  }
];

export function TopSellingProducts() {
  const { t, language } = useLanguage();
  
  // Currency formatting function
  const formatCurrency = (amount: number) => {
    if (language === 'id') {
      // Indonesian Rupiah - approximate conversion rate (1 USD = 15,800 IDR)
      const idrAmount = amount * 15800;
      return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }).format(idrAmount);
    } else {
      // US Dollars
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }).format(amount);
    }
  };
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-800 text-sm font-medium mb-4">
            {t('products.badge')}
          </div>
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            {t('products.title')}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-green-600">
              {t('products.title.highlight')}
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            {t('products.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {topProducts.map((item) => (
            <Card key={item.id} className="group cursor-pointer hover:shadow-2xl transition-all duration-300 border border-slate-200 hover:border-blue-300 bg-white overflow-hidden hover:-translate-y-2">
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <ImageWithFallback
                    src={item.image}
                    alt={item.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  {item.isOnSale && (
                    <Badge className="absolute top-4 left-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white shadow-lg">
                      {t('products.sale')}
                    </Badge>
                  )}
                  <Badge 
                    className={`absolute top-4 right-4 shadow-lg ${
                      item.type === 'service' 
                        ? 'bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800' 
                        : 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800'
                    } text-white`}
                  >
                    {item.type === 'service' ? t('products.service') : t('products.product')}
                  </Badge>
                </div>
                
                <div className="p-6">
                  <h3 className="font-semibold text-xl text-slate-900 mb-3 group-hover:text-blue-700 transition-colors line-clamp-2 leading-tight">
                    {item.name}
                  </h3>
                  
                  <p className="text-sm text-slate-600 mb-4 font-medium">
                    by {item.vendor}
                  </p>
                  
                  <div className="flex items-center mb-5">
                    <div className="flex items-center bg-yellow-50 px-2 py-1 rounded-full">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <span className="ml-1 text-sm font-semibold text-slate-900">
                        {item.rating}
                      </span>
                    </div>
                    <span className="mx-3 text-slate-300">•</span>
                    <span className="text-sm text-slate-600">
                      {item.reviews} {t('products.reviews')}
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-slate-900">
                        {formatCurrency(item.price)}
                      </span>
                      {item.originalPrice && (
                        <span className="text-sm text-slate-500 line-through bg-slate-100 px-2 py-1 rounded">
                          {formatCurrency(item.originalPrice)}
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <Button 
                    className={`w-full shadow-md hover:shadow-lg transition-all ${
                      item.type === 'service' 
                        ? 'bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800' 
                        : 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800'
                    } text-white border-0`}
                    size="lg"
                  >
                    {item.type === 'service' ? (
                      t('products.get.quote')
                    ) : (
                      <>
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        {t('products.add.cart')}
                      </>
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <Button variant="outline" size="lg" className="border-2 border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white transition-all shadow-sm hover:shadow-md px-8">
            {t('products.view.all')}
          </Button>
        </div>
      </div>
    </section>
  );
}