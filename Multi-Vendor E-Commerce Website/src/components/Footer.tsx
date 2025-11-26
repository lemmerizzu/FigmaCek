import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Separator } from "./ui/separator";
import { useLanguage } from "./LanguageContext";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin,
  CreditCard,
  Smartphone
} from "lucide-react";

export function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
              boost-
            </h3>
            <p className="text-slate-300 text-base leading-relaxed">
              {t('footer.company.description')}
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="text-slate-400 hover:text-blue-400 hover:bg-slate-800 p-2 rounded-full transition-all">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-slate-400 hover:text-blue-400 hover:bg-slate-800 p-2 rounded-full transition-all">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-slate-400 hover:text-blue-400 hover:bg-slate-800 p-2 rounded-full transition-all">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-slate-400 hover:text-blue-400 hover:bg-slate-800 p-2 rounded-full transition-all">
                <Linkedin className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">{t('footer.quick.links')}</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-300 hover:text-blue-400 text-sm transition-colors">{t('footer.about')}</a></li>
              <li><a href="#" className="text-slate-300 hover:text-blue-400 text-sm transition-colors">{t('footer.how.works')}</a></li>
              <li><a href="#" className="text-slate-300 hover:text-blue-400 text-sm transition-colors">{t('footer.become.vendor')}</a></li>
              <li><a href="#" className="text-slate-300 hover:text-blue-400 text-sm transition-colors">{t('footer.support')}</a></li>
              <li><a href="#" className="text-slate-300 hover:text-blue-400 text-sm transition-colors">{t('footer.privacy')}</a></li>
              <li><a href="#" className="text-slate-300 hover:text-blue-400 text-sm transition-colors">{t('footer.terms')}</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">{t('footer.categories')}</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-300 hover:text-green-400 text-sm transition-colors">{t('categories.industrial.equipment')}</a></li>
              <li><a href="#" className="text-slate-300 hover:text-green-400 text-sm transition-colors">{t('categories.manufacturing.tools')}</a></li>
              <li><a href="#" className="text-slate-300 hover:text-green-400 text-sm transition-colors">{t('categories.safety.equipment')}</a></li>
              <li><a href="#" className="text-slate-300 hover:text-green-400 text-sm transition-colors">{t('categories.electronics')}</a></li>
              <li><a href="#" className="text-slate-300 hover:text-green-400 text-sm transition-colors">{t('categories.business.services')}</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">{t('footer.contact')}</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <span className="text-slate-300 text-sm">support@boost.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-green-400" />
                <span className="text-slate-300 text-sm">+62 857 0775 6249</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-400 mt-0.5" />
                <span className="text-slate-300 text-sm">
                  Pergudangan Kencana Trosobo No C4<br />
                  Sidoarjo, Indonesia
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="py-12 border-t border-slate-800">
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0">
            <div className="text-center lg:text-left">
              <h3 className="text-xl font-semibold text-white mb-3">{t('footer.newsletter.title')}</h3>
              <p className="text-slate-300 text-base">{t('footer.newsletter.description')}</p>
            </div>
            <div className="flex w-full max-w-md space-x-3">
              <Input
                type="email"
                placeholder={t('footer.newsletter.placeholder')}
                className="bg-slate-800 border-slate-700 text-white placeholder-slate-400 focus:border-blue-500 focus:ring-blue-500"
              />
              <Button className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white border-0 shadow-lg">
                {t('footer.newsletter.subscribe')}
              </Button>
            </div>
          </div>
        </div>

        <Separator className="bg-slate-800" />

        {/* Bottom Footer */}
        <div className="py-8">
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0">
            <div className="text-center lg:text-left">
              <p className="text-slate-400 text-sm">
                {t('footer.copyright')}
              </p>
            </div>
            
            {/* Payment Methods */}
            <div className="flex items-center space-x-4">
              <span className="text-slate-400 text-sm font-medium">{t('footer.payments')}</span>
              <div className="flex items-center space-x-3">
                <div className="bg-white rounded-lg p-2 shadow-sm">
                  <CreditCard className="h-6 w-6 text-slate-700" />
                </div>
                <div className="bg-white rounded-lg p-2 shadow-sm">
                  <Smartphone className="h-6 w-6 text-slate-700" />
                </div>
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-2 shadow-sm">
                  <span className="text-white text-xs font-bold px-1">VISA</span>
                </div>
                <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-lg p-2 shadow-sm">
                  <span className="text-white text-xs font-bold px-1">MC</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}