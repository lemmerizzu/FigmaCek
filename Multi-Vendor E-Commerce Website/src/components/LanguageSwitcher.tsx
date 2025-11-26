import { Button } from "./ui/button";
import { useLanguage, Language } from "./LanguageContext";
import { Globe } from "lucide-react";

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'id' : 'en');
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="text-slate-700 hover:text-blue-700 hover:bg-slate-50 flex items-center space-x-2"
    >
      <Globe className="h-4 w-4" />
      <span className="text-sm font-medium">
        {language === 'en' ? 'ID' : 'EN'}
      </span>
    </Button>
  );
}