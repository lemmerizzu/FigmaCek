import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { ShoppingBag, Store, CheckCircle, Users, TrendingUp } from "lucide-react";
import { useLanguage } from "./LanguageContext";

interface UserTypeSelectionProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSelectUserType: (type: 'buyer' | 'vendor') => void;
}

export function UserTypeSelection({ open, onOpenChange, onSelectUserType }: UserTypeSelectionProps) {
  const { t } = useLanguage();
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[95vh] overflow-y-auto p-4 sm:p-6">
        <DialogHeader className="pb-2">
          <DialogTitle className="text-center text-xl sm:text-2xl mb-1">
            {t('usertype.title')}
          </DialogTitle>
          <DialogDescription className="text-center text-gray-600 text-sm">
            {t('usertype.description')}
          </DialogDescription>
        </DialogHeader>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mt-4">
          {/* Buyer Option */}
          <Card className="cursor-pointer hover:shadow-lg transition-all duration-300 hover:scale-[1.02] group border-2 hover:border-blue-500">
            <CardHeader className="text-center pb-3">
              <div className="mx-auto w-12 h-12 sm:w-14 sm:h-14 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                <ShoppingBag className="h-6 w-6 sm:h-7 sm:w-7 text-blue-600" />
              </div>
              <CardTitle className="text-lg sm:text-xl">{t('usertype.buyer.title')}</CardTitle>
              <p className="text-gray-600 text-xs sm:text-sm">
                {t('usertype.buyer.description')}
              </p>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2">
                {t('usertype.buyer.features').split(' • ').map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-600 flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              
              <Button 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white h-9 sm:h-10 text-sm"
                onClick={() => onSelectUserType('buyer')}
              >
                {t('usertype.continue')}
              </Button>
              
              <p className="text-xs text-gray-500 text-center">
                Perfect for individuals and businesses looking to purchase
              </p>
            </CardContent>
          </Card>

          {/* Vendor Option */}
          <Card className="cursor-pointer hover:shadow-lg transition-all duration-300 hover:scale-[1.02] group border-2 hover:border-green-500">
            <CardHeader className="text-center pb-3">
              <div className="mx-auto w-12 h-12 sm:w-14 sm:h-14 bg-green-100 rounded-full flex items-center justify-center group-hover:bg-green-200 transition-colors">
                <Store className="h-6 w-6 sm:h-7 sm:w-7 text-green-600" />
              </div>
              <CardTitle className="text-lg sm:text-xl">{t('usertype.vendor.title')}</CardTitle>
              <p className="text-gray-600 text-xs sm:text-sm">
                {t('usertype.vendor.description')}
              </p>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2">
                {t('usertype.vendor.features').split(' • ').map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    {index === 0 ? <TrendingUp className="h-3 w-3 sm:h-4 sm:w-4 text-green-600 flex-shrink-0" /> :
                     index === 1 ? <Users className="h-3 w-3 sm:h-4 sm:w-4 text-green-600 flex-shrink-0" /> :
                     <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-600 flex-shrink-0" />}
                    <span className="text-xs sm:text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              
              <Button 
                className="w-full bg-green-600 hover:bg-green-700 text-white h-9 sm:h-10 text-sm"
                onClick={() => onSelectUserType('vendor')}
              >
                {t('usertype.continue')}
              </Button>
              
              <p className="text-xs text-gray-500 text-center">
                Great for SMEs looking to expand their reach
              </p>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-4 text-center">
          <p className="text-xs sm:text-sm text-gray-500">
            Already have an account? 
            <Button variant="link" className="p-0 h-auto ml-1 text-blue-600 text-xs sm:text-sm">
              Sign in here
            </Button>
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}