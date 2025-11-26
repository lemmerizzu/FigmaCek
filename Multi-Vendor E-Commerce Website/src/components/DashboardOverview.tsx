import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { 
  TrendingUp, 
  DollarSign, 
  Package, 
  Users, 
  ShoppingCart,
  Eye,
  Star,
  ArrowUpRight,
  ArrowDownRight,
  Activity
} from 'lucide-react';

export function DashboardOverview() {
  const stats = [
    {
      title: 'Total Revenue',
      value: 'Rp 45,230,000',
      change: '+12.5%',
      changeType: 'positive',
      icon: DollarSign,
      description: 'vs last month'
    },
    {
      title: 'Active Products',
      value: '234',
      change: '+8',
      changeType: 'positive',
      icon: Package,
      description: 'products listed'
    },
    {
      title: 'Total Orders',
      value: '1,429',
      change: '+23.1%',
      changeType: 'positive',
      icon: ShoppingCart,
      description: 'this month'
    },
    {
      title: 'Customer Rating',
      value: '4.8',
      change: '+0.2',
      changeType: 'positive',
      icon: Star,
      description: 'average rating'
    }
  ];

  const recentOrders = [
    { id: '#ORD-001', customer: 'PT. Maju Jaya', product: 'Industrial Drill Set', amount: 'Rp 2,500,000', status: 'processing' },
    { id: '#ORD-002', customer: 'CV. Teknik Sejahtera', product: 'Safety Equipment Bundle', amount: 'Rp 1,800,000', status: 'shipped' },
    { id: '#ORD-003', customer: 'PT. Konstruksi Prima', product: 'Heavy Machinery Parts', amount: 'Rp 8,500,000', status: 'completed' },
    { id: '#ORD-004', customer: 'UD. Mandiri Tools', product: 'Manufacturing Tools', amount: 'Rp 3,200,000', status: 'pending' },
  ];

  const topProducts = [
    { name: 'Professional Drill Set', sales: 156, revenue: 'Rp 15,600,000', trend: 'up' },
    { name: 'Safety Helmet Premium', sales: 298, revenue: 'Rp 8,940,000', trend: 'up' },
    { name: 'Industrial Wrench Kit', sales: 89, revenue: 'Rp 7,120,000', trend: 'down' },
    { name: 'Welding Equipment', sales: 67, revenue: 'Rp 13,400,000', trend: 'up' },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800';
      case 'processing': return 'bg-blue-100 text-blue-800';
      case 'shipped': return 'bg-purple-100 text-purple-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="border border-slate-200 hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-slate-600">
                {stat.title}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-slate-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-slate-900 mb-1">{stat.value}</div>
              <div className="flex items-center text-xs">
                {stat.changeType === 'positive' ? (
                  <ArrowUpRight className="h-3 w-3 text-green-600 mr-1" />
                ) : (
                  <ArrowDownRight className="h-3 w-3 text-red-600 mr-1" />
                )}
                <span className={stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'}>
                  {stat.change}
                </span>
                <span className="text-slate-500 ml-1">{stat.description}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Orders */}
        <Card className="border border-slate-200">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg font-semibold">Recent Orders</CardTitle>
              <Button variant="outline" size="sm">
                <Eye className="h-4 w-4 mr-2" />
                View All
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentOrders.map((order, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-medium text-slate-900">{order.id}</span>
                      <Badge className={`text-xs ${getStatusColor(order.status)}`}>
                        {order.status}
                      </Badge>
                    </div>
                    <p className="text-sm text-slate-600 mb-1">{order.customer}</p>
                    <p className="text-xs text-slate-500">{order.product}</p>
                  </div>
                  <div className="text-right ml-4">
                    <div className="font-semibold text-slate-900">{order.amount}</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Top Products */}
        <Card className="border border-slate-200">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg font-semibold">Top Selling Products</CardTitle>
              <Button variant="outline" size="sm">
                <Activity className="h-4 w-4 mr-2" />
                Analytics
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topProducts.map((product, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-medium text-slate-900">{product.name}</span>
                      {product.trend === 'up' ? (
                        <TrendingUp className="h-4 w-4 text-green-600" />
                      ) : (
                        <ArrowDownRight className="h-4 w-4 text-red-600" />
                      )}
                    </div>
                    <p className="text-sm text-slate-600">{product.sales} units sold</p>
                  </div>
                  <div className="text-right ml-4">
                    <div className="font-semibold text-slate-900">{product.revenue}</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Performance Metrics */}
      <Card className="border border-slate-200">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Performance Metrics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-600">Profile Completion</span>
                <span className="text-sm font-medium">85%</span>
              </div>
              <Progress value={85} className="h-2" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-600">Customer Satisfaction</span>
                <span className="text-sm font-medium">92%</span>
              </div>
              <Progress value={92} className="h-2" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-600">Order Fulfillment</span>
                <span className="text-sm font-medium">78%</span>
              </div>
              <Progress value={78} className="h-2" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}