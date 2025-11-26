import { Button } from "./ui/button";
import { ArrowRight, Store } from "lucide-react";
import { UserTypeSelection } from "./UserTypeSelection";
import { useLanguage } from "./LanguageContext";
import { useState } from "react";

export function HeroBanner() {
  const [showUserTypeSelection, setShowUserTypeSelection] = useState(false);
  const { t } = useLanguage();

  const handleBecomeVendor = () => {
    setShowUserTypeSelection(true);
  };

  const handleUserTypeSelection = (type: 'buyer' | 'vendor') => {
    setShowUserTypeSelection(false);
    console.log(`User selected: ${type}`);
  };

  return (
    <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center py-20 lg:py-28">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-500/20 border border-green-500/30">
                <span className="text-green-300 text-sm font-medium">{t('hero.badge')}</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                {t('hero.title')}{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">
                  {t('hero.title.highlight')}
                </span>
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
                {t('hero.description')}
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white border-0 shadow-lg hover:shadow-xl transition-all">
                {t('hero.browse.all')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            
            {/* Vendor CTA */}
            <div className="bg-gradient-to-r from-slate-800/80 to-slate-700/80 rounded-xl p-6 backdrop-blur-sm border border-slate-600/30 max-w-2xl mx-auto">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="text-center sm:text-left">
                  <h3 className="font-semibold text-white mb-2 text-lg">
                    {t('hero.vendor.title')}
                  </h3>
                  <p className="text-slate-300 text-sm">
                    {t('hero.vendor.description')}
                  </p>
                </div>
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white border-0 shadow-lg whitespace-nowrap"
                  onClick={handleBecomeVendor}
                >
                  <Store className="mr-2 h-5 w-5" />
                  {t('hero.become.vendor')}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <UserTypeSelection
        open={showUserTypeSelection}
        onOpenChange={setShowUserTypeSelection}
        onSelectUserType={handleUserTypeSelection}
      />
    </section>
  );
}