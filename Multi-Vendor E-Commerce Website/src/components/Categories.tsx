import { Card, CardContent } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "./LanguageContext";

export function Categories() {
  const { t } = useLanguage();

  const categories = [
    {
      id: 1,
      name: t('categories.industrial.equipment'),
      description: t('categories.industrial.equipment.desc'),
      image: "https://images.unsplash.com/photo-1649017109134-f7686437a966?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBlcXVpcG1lbnQlMjBtYWNoaW5lcnl8ZW58MXx8fHwxNzU4MDk1NTIyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      productCount: "320+ products"
    },
    {
      id: 2,
      name: t('categories.manufacturing.tools'),
      description: t('categories.manufacturing.tools.desc'),
      image: "https://images.unsplash.com/photo-1601998539036-006e7fbddb0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1hbnVmYWN0dXJpbmclMjB0b29sc3xlbnwxfHx8fDE3NTgwOTU1MjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      productCount: "185+ products"
    },
    {
      id: 3,
      name: t('categories.safety.equipment'),
      description: t('categories.safety.equipment.desc'),
      image: "https://images.unsplash.com/photo-1730845674297-7aab1ad65099?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwc2FmZXR5JTIwZXF1aXBtZW50fGVufDF8fHx8MTc1ODA1Nzk1MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      productCount: "95+ products"
    },
    {
      id: 4,
      name: t('categories.electronics'),
      description: t('categories.electronics.desc'),
      image: "https://images.unsplash.com/photo-1755016388713-299f23eaa50a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2FsJTIwY29tcG9uZW50cyUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzU4MDUyMDQ1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      productCount: "150+ products"
    },
    {
      id: 5,
      name: t('categories.business.services'),
      description: t('categories.business.services.desc'),
      image: "https://images.unsplash.com/photo-1540921002383-b2a7ff6a716d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBzdXBwbGllcyUyMGJ1c2luZXNzfGVufDF8fHx8MTc1ODAxMzQyMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      productCount: "75+ services"
    }
  ];
  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-4">
            {t('categories.badge')}
          </div>
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            {t('categories.title')}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-green-600">
              {t('categories.title.highlight')}
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            {t('categories.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {categories.map((category) => (
            <Card key={category.id} className="group cursor-pointer hover:shadow-2xl transition-all duration-500 border border-slate-200 hover:border-blue-500 bg-white overflow-hidden hover:-translate-y-2 rounded-xl">
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-xl">
                  <ImageWithFallback
                    src={category.image}
                    alt={category.name}
                    className="w-full h-48 sm:h-52 lg:h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent group-hover:from-blue-900/80 group-hover:via-blue-900/40 transition-all duration-500"></div>
                  <div className="absolute top-4 left-4">
                    <div className="bg-white/95 backdrop-blur-sm rounded-full px-3 py-1 border border-white/20">
                      <span className="text-xs font-medium text-slate-700">
                        {category.productCount}
                      </span>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="text-white">
                      <h3 className="font-semibold text-lg mb-2 group-hover:text-blue-200 transition-colors">
                        {category.name}
                      </h3>
                      <p className="text-sm text-white/90 mb-4 leading-relaxed">
                        {category.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="bg-green-500/20 backdrop-blur-sm border border-green-400/30 rounded-lg px-3 py-2">
                          <span className="text-sm text-green-100 font-medium">
                            Explore Category
                          </span>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-full p-2 group-hover:bg-blue-500/20 transition-all duration-300">
                          <ArrowRight className="h-4 w-4 text-white group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}