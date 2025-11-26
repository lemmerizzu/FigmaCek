import { useState } from "react";
import { Header } from "./components/Header";
import { HeroBanner } from "./components/HeroBanner";
import { Categories } from "./components/Categories";
import { TopSellingProducts } from "./components/TopSellingProducts";
import { Footer } from "./components/Footer";
import { VendorDashboard } from "./components/VendorDashboard";
import { LanguageProvider } from "./components/LanguageContext";

export default function App() {
  const [currentView, setCurrentView] = useState<'homepage' | 'vendor-dashboard'>('homepage');
  const [userType, setUserType] = useState<'buyer' | 'vendor' | null>(null);

  const handleVendorLogin = () => {
    setUserType('vendor');
    setCurrentView('vendor-dashboard');
  };

  const handleBackToHomepage = () => {
    setCurrentView('homepage');
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        {currentView === 'homepage' ? (
          <>
            <Header onVendorLogin={handleVendorLogin} />
            <main>
              <HeroBanner />
              <Categories />
              <TopSellingProducts />
            </main>
            <Footer />
          </>
        ) : (
          <VendorDashboard onBack={handleBackToHomepage} />
        )}
      </div>
    </LanguageProvider>
  );
}