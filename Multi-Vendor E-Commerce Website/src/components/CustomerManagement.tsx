import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { 
  Search, 
  Filter, 
  MoreHorizontal, 
  Users, 
  Star, 
  ShoppingCart, 
  TrendingUp,
  Mail,
  Phone,
  MapPin,
  MessageSquare,
  Eye
} from 'lucide-react';

export function CustomerManagement() {
  const [searchTerm, setSearchTerm] = useState('');

  const customers = [
    {
      id: 1,
      name: 'PT. Maju Jaya',
      email: 'procurement@majujaya.co.id',
      phone: '+62 21 8765432',
      location: 'Jakarta Timur',
      totalOrders: 15,
      totalSpent: 'Rp 45,800,000',
      lastOrder: '2025-01-15',
      rating: 4.8,
      status: 'active',
      joinDate: '2024-03-15',
      avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=PT Maju Jaya'
    },
    {
      id: 2,
      name: 'CV. Teknik Sejahtera',
      email: 'order@tekniksejahtera.com',
      phone: '+62 21 5556789',
      location: 'Depok',
      totalOrders: 8,
      totalSpent: 'Rp 23,400,000',
      lastOrder: '2025-01-14',
      rating: 4.9,
      status: 'active',
      joinDate: '2024-05-20',
      avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=CV Teknik Sejahtera'
    },
    {
      id: 3,
      name: 'PT. Konstruksi Prima',
      email: 'purchasing@konstruksiprima.id',
      phone: '+62 21 7778899',
      location: 'Jakarta Selatan',
      totalOrders: 22,
      totalSpent: 'Rp 67,200,000',
      lastOrder: '2025-01-13',
      rating: 4.7,
      status: 'vip',
      joinDate: '2024-01-10',
      avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=PT Konstruksi Prima'
    },
    {
      id: 4,
      name: 'UD. Mandiri Tools',
      email: 'info@mandiritools.co.id',
      phone: '+62 22 1234567',
      location: 'Bandung',
      totalOrders: 5,
      totalSpent: 'Rp 12,800,000',
      lastOrder: '2025-01-16',
      rating: 4.6,
      status: 'active',
      joinDate: '2024-08-12',
      avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=UD Mandiri Tools'
    },
    {
      id: 5,
      name: 'PT. Elektronik Maju',
      email: 'order@elektronikmaju.com',
      phone: '+62 31 9876543',
      location: 'Surabaya',
      totalOrders: 12,
      totalSpent: 'Rp 34,600,000',
      lastOrder: '2024-12-28',
      rating: 4.5,
      status: 'inactive',
      joinDate: '2024-04-05',
      avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=PT Elektronik Maju'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'vip': return 'bg-purple-100 text-purple-800';
      case 'inactive': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'active': return 'Active';
      case 'vip': return 'VIP Customer';
      case 'inactive': return 'Inactive';
      default: return status;
    }
  };

  const filteredCustomers = customers.filter(customer =>
    customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const customerStats = {
    total: customers.length,
    active: customers.filter(c => c.status === 'active').length,
    vip: customers.filter(c => c.status === 'vip').length,
    totalRevenue: customers.reduce((sum, c) => sum + parseInt(c.totalSpent.replace(/[^0-9]/g, '')), 0)
  };

  return (
    <div className="space-y-6">
      {/* Header Actions */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between">
        <div className="flex flex-1 gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
            <Input
              placeholder="Search customers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Mail className="h-4 w-4 mr-2" />
            Send Newsletter
          </Button>
          <Button variant="outline" size="sm">
            <TrendingUp className="h-4 w-4 mr-2" />
            Analytics
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="border border-slate-200">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-600">Total Customers</p>
                <p className="text-2xl font-bold text-slate-900">{customerStats.total}</p>
              </div>
              <Users className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>
        <Card className="border border-slate-200">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-600">Active Customers</p>
                <p className="text-2xl font-bold text-green-600">{customerStats.active}</p>
              </div>
              <TrendingUp className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
        <Card className="border border-slate-200">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-600">VIP Customers</p>
                <p className="text-2xl font-bold text-purple-600">{customerStats.vip}</p>
              </div>
              <Star className="h-8 w-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>
        <Card className="border border-slate-200">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-600">Total Revenue</p>
                <p className="text-2xl font-bold text-green-600">
                  Rp {(customerStats.totalRevenue / 1000000).toFixed(1)}M
                </p>
              </div>
              <ShoppingCart className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Customer List */}
      <Card className="border border-slate-200">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">
            Customers ({filteredCustomers.length})
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {filteredCustomers.map((customer) => (
              <div key={customer.id} className="border border-slate-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src={customer.avatar} alt={customer.name} />
                    <AvatarFallback>{customer.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="font-semibold text-slate-900">{customer.name}</h3>
                        <div className="flex items-center gap-1 mt-1">
                          <Star className="h-3 w-3 text-yellow-500" />
                          <span className="text-sm text-slate-600">{customer.rating}</span>
                        </div>
                      </div>
                      <Badge className={`text-xs ${getStatusColor(customer.status)}`}>
                        {getStatusText(customer.status)}
                      </Badge>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                      <div className="flex items-center gap-2 text-sm text-slate-600">
                        <Mail className="h-4 w-4" />
                        <span className="truncate">{customer.email}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-slate-600">
                        <Phone className="h-4 w-4" />
                        <span>{customer.phone}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-slate-600">
                        <MapPin className="h-4 w-4" />
                        <span>{customer.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-slate-600">
                        <ShoppingCart className="h-4 w-4" />
                        <span>{customer.totalOrders} orders</span>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-3 bg-slate-50 rounded-lg">
                      <div>
                        <span className="text-xs text-slate-500">Total Spent:</span>
                        <p className="font-semibold text-slate-900">{customer.totalSpent}</p>
                      </div>
                      <div>
                        <span className="text-xs text-slate-500">Last Order:</span>
                        <p className="font-medium text-slate-900">{customer.lastOrder}</p>
                      </div>
                      <div>
                        <span className="text-xs text-slate-500">Member Since:</span>
                        <p className="font-medium text-slate-900">{customer.joinDate}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <Button variant="outline" size="sm">
                      <Eye className="h-4 w-4 mr-1" />
                      View
                    </Button>
                    <Button variant="outline" size="sm">
                      <MessageSquare className="h-4 w-4 mr-1" />
                      Message
                    </Button>
                    <Button variant="outline" size="sm">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}