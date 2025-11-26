import { Search, ShoppingCart, User, Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { UserTypeSelection } from "./UserTypeSelection";
import { LoginModal } from "./LoginModal";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useLanguage } from "./LanguageContext";
import { useState } from "react";

interface HeaderProps {
  onVendorLogin?: () => void;
}

export function Header({ onVendorLogin }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showUserTypeSelection, setShowUserTypeSelection] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const { t } = useLanguage();

  const handleSignUp = () => {
    setShowUserTypeSelection(true);
  };

  const handleUserTypeSelection = (type: 'buyer' | 'vendor') => {
    setShowUserTypeSelection(false);
    if (type === 'vendor' && onVendorLogin) {
      onVendorLogin();
    }
    console.log(`User selected: ${type}`);
  };

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-700 to-green-600 bg-clip-text text-transparent">
                boost-
              </h1>
            </div>
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-lg mx-8">
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-slate-400" />
              </div>
              <Input
                type="text"
                placeholder={t('header.search.placeholder')}
                className="pl-10 pr-4 py-2 w-full bg-slate-50 border-slate-300 rounded-lg focus:ring-blue-600 focus:border-blue-600"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <LanguageSwitcher />
            <Button 
              variant="ghost" 
              className="text-slate-700 hover:text-blue-700"
              onClick={() => setShowLoginModal(true)}
            >
              <User className="h-5 w-5 mr-1" />
              {t('header.signin')}
            </Button>
            <Button 
              className="bg-gradient-to-r from-blue-700 to-blue-800 hover:from-blue-800 hover:to-blue-900 text-white shadow-sm"
              onClick={handleSignUp}
            >
              {t('header.signup')}
            </Button>
            <Button variant="outline" className="relative border-slate-300 hover:bg-slate-50">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-2 -right-2 bg-gradient-to-r from-green-600 to-green-700 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center shadow-sm">
                0
              </span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              {/* Mobile Search */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <Input
                  type="text"
                  placeholder={t('header.search.placeholder')}
                  className="pl-10 pr-4 py-2 w-full bg-gray-50 border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              
              {/* Mobile Navigation Links */}
              <div className="flex flex-col space-y-2">
                <div className="flex justify-start mb-2">
                  <LanguageSwitcher />
                </div>
                <Button 
                  variant="ghost" 
                  className="justify-start text-gray-700 hover:text-blue-900"
                  onClick={() => {
                    setShowLoginModal(true);
                    setIsMenuOpen(false);
                  }}
                >
                  <User className="h-5 w-5 mr-2" />
                  {t('header.signin')}
                </Button>
                <Button 
                  className="justify-start bg-blue-900 hover:bg-blue-800 text-white"
                  onClick={handleSignUp}
                >
                  {t('header.signup')}
                </Button>
                <Button variant="outline" className="justify-start relative">
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  {t('header.cart')} (0)
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
      
      <UserTypeSelection
        open={showUserTypeSelection}
        onOpenChange={setShowUserTypeSelection}
        onSelectUserType={handleUserTypeSelection}
      />
      
      <LoginModal
        open={showLoginModal}
        onOpenChange={setShowLoginModal}
        onVendorLogin={onVendorLogin}
      />
    </header>
  );
}