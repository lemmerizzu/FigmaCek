import { useState } from 'react';
import { Sidebar, SidebarContent, SidebarHeader, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarProvider, SidebarTrigger } from './ui/sidebar';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { 
  LayoutDashboard, 
  Package, 
  ShoppingCart, 
  Users, 
  Settings, 
  User,
  TrendingUp,
  DollarSign,
  Eye,
  Plus,
  Search,
  Filter,
  MoreHorizontal,
  ArrowLeft
} from 'lucide-react';
import { useLanguage } from './LanguageContext';
import { DashboardOverview } from './DashboardOverview';
import { ProductManagement } from './ProductManagement';
import { OrderManagement } from './OrderManagement';
import { CustomerManagement } from './CustomerManagement';
import { VendorProfile } from './VendorProfile';

interface VendorDashboardProps {
  onBack: () => void;
}

export function VendorDashboard({ onBack }: VendorDashboardProps) {
  const [activeTab, setActiveTab] = useState('overview');
  const { t } = useLanguage();

  const menuItems = [
    { id: 'overview', icon: LayoutDashboard, label: 'Overview', description: 'Dashboard analytics' },
    { id: 'products', icon: Package, label: 'Products', description: 'Manage inventory' },
    { id: 'orders', icon: ShoppingCart, label: 'Orders', description: 'Track sales' },
    { id: 'customers', icon: Users, label: 'Customers', description: 'Customer data' },
    { id: 'profile', icon: User, label: 'Profile', description: 'Business settings' },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return <DashboardOverview />;
      case 'products':
        return <ProductManagement />;
      case 'orders':
        return <OrderManagement />;
      case 'customers':
        return <CustomerManagement />;
      case 'profile':
        return <VendorProfile />;
      default:
        return <DashboardOverview />;
    }
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-slate-50">
        {/* Sidebar */}
        <Sidebar className="border-r border-slate-200 bg-white">
          <SidebarHeader className="px-6 py-5 border-b border-slate-200">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold text-slate-900">Vendor Dashboard</h2>
                <p className="text-sm text-slate-600 mt-1">Manage your business</p>
              </div>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={onBack}
                className="h-8 w-8 p-0 hover:bg-slate-100 rounded-lg"
              >
                <ArrowLeft className="h-4 w-4" />
              </Button>
            </div>
          </SidebarHeader>
          <SidebarContent className="px-3 py-4">
            <SidebarMenu className="space-y-2">
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.id} className="w-full">
                  <SidebarMenuButton
                    onClick={() => setActiveTab(item.id)}
                    isActive={activeTab === item.id}
                    size="lg"
                    className={`w-full justify-start px-3 py-3 rounded-xl transition-all duration-200 ${
                      activeTab === item.id 
                        ? 'bg-blue-50 text-blue-700 border border-blue-200 shadow-sm' 
                        : 'hover:bg-slate-50 text-slate-700 border border-transparent hover:border-slate-200'
                    }`}
                  >
                    <item.icon className="h-5 w-5 mr-3 flex-shrink-0" />
                    <div className="text-left flex-1 min-w-0">
                      <div className="font-medium text-sm truncate">{item.label}</div>
                      <div className="text-xs text-slate-500 mt-0.5 truncate">{item.description}</div>
                    </div>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarContent>
        </Sidebar>

        {/* Main Content */}
        <div className="flex-1 overflow-auto bg-slate-50">
          <div className="px-6 py-6 lg:px-8 lg:py-8 max-w-full">
            {/* Header */}
            <div className="mb-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div className="min-w-0 flex-1">
                  <h1 className="text-2xl font-bold text-slate-900 mb-2 truncate">
                    {menuItems.find(item => item.id === activeTab)?.label}
                  </h1>
                  <p className="text-slate-600 text-base">
                    {menuItems.find(item => item.id === activeTab)?.description}
                  </p>
                </div>
                <div className="flex items-center gap-3 flex-shrink-0">
                  <Badge variant="secondary" className="bg-green-100 text-green-800 px-3 py-1">
                    Active Vendor
                  </Badge>
                  <Button variant="outline" size="sm" className="flex items-center gap-2">
                    <Settings className="h-4 w-4" />
                    <span className="hidden sm:inline">Settings</span>
                  </Button>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="w-full">
              {renderContent()}
            </div>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
}