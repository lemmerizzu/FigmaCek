import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { 
  Search, 
  Filter, 
  MoreHorizontal, 
  Package, 
  Truck, 
  CheckCircle, 
  Clock,
  Eye,
  MessageSquare,
  Download,
  Calendar
} from 'lucide-react';

export function OrderManagement() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');

  const orders = [
    {
      id: '#ORD-001',
      customer: 'PT. Maju Jaya',
      email: 'procurement@majujaya.co.id',
      product: 'Professional Drill Set + Safety Equipment',
      quantity: 2,
      amount: 'Rp 2,500,000',
      status: 'processing',
      date: '2025-01-15',
      address: 'Jl. Industri No. 45, Jakarta Timur',
      phone: '+62 21 8765432'
    },
    {
      id: '#ORD-002',
      customer: 'CV. Teknik Sejahtera',
      email: 'order@tekniksejahtera.com',
      product: 'Safety Equipment Bundle',
      quantity: 5,
      amount: 'Rp 1,800,000',
      status: 'shipped',
      date: '2025-01-14',
      address: 'Jl. Raya Bogor Km 23, Depok',
      phone: '+62 21 5556789'
    },
    {
      id: '#ORD-003',
      customer: 'PT. Konstruksi Prima',
      email: 'purchasing@konstruksiprima.id',
      product: 'Heavy Machinery Parts',
      quantity: 1,
      amount: 'Rp 8,500,000',
      status: 'completed',
      date: '2025-01-13',
      address: 'Jl. Gatot Subroto No. 12, Jakarta Selatan',
      phone: '+62 21 7778899'
    },
    {
      id: '#ORD-004',
      customer: 'UD. Mandiri Tools',
      email: 'info@mandiritools.co.id',
      product: 'Manufacturing Tools Set',
      quantity: 3,
      amount: 'Rp 3,200,000',
      status: 'pending',
      date: '2025-01-16',
      address: 'Jl. Ahmad Yani No. 78, Bandung',
      phone: '+62 22 1234567'
    },
    {
      id: '#ORD-005',
      customer: 'PT. Elektronik Maju',
      email: 'order@elektronikmaju.com',
      product: 'Electronic Component Kit',
      quantity: 10,
      amount: 'Rp 8,900,000',
      status: 'confirmed',
      date: '2025-01-17',
      address: 'Jl. Sudirman No. 156, Surabaya',
      phone: '+62 31 9876543'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'confirmed': return 'bg-blue-100 text-blue-800';
      case 'processing': return 'bg-purple-100 text-purple-800';
      case 'shipped': return 'bg-indigo-100 text-indigo-800';
      case 'completed': return 'bg-green-100 text-green-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending': return Clock;
      case 'confirmed': return CheckCircle;
      case 'processing': return Package;
      case 'shipped': return Truck;
      case 'completed': return CheckCircle;
      default: return Clock;
    }
  };

  const filteredOrders = orders.filter(order => {
    const matchesSearch = order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         order.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         order.product.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === 'all' || order.status === statusFilter;
    
    if (activeTab === 'all') return matchesSearch && matchesStatus;
    if (activeTab === 'pending') return matchesSearch && matchesStatus && ['pending', 'confirmed'].includes(order.status);
    if (activeTab === 'active') return matchesSearch && matchesStatus && ['processing', 'shipped'].includes(order.status);
    if (activeTab === 'completed') return matchesSearch && matchesStatus && order.status === 'completed';
    
    return matchesSearch && matchesStatus;
  });

  const orderStats = {
    total: orders.length,
    pending: orders.filter(o => ['pending', 'confirmed'].includes(o.status)).length,
    active: orders.filter(o => ['processing', 'shipped'].includes(o.status)).length,
    completed: orders.filter(o => o.status === 'completed').length
  };

  return (
    <div className="space-y-6">
      {/* Header Actions */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between">
        <div className="flex flex-1 gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
            <Input
              placeholder="Search orders..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-40">
              <SelectValue placeholder="All Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="confirmed">Confirmed</SelectItem>
              <SelectItem value="processing">Processing</SelectItem>
              <SelectItem value="shipped">Shipped</SelectItem>
              <SelectItem value="completed">Completed</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Calendar className="h-4 w-4 mr-2" />
            Date Range
          </Button>
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="border border-slate-200">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-600">Total Orders</p>
                <p className="text-2xl font-bold text-slate-900">{orderStats.total}</p>
              </div>
              <Package className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>
        <Card className="border border-slate-200">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-600">Pending Orders</p>
                <p className="text-2xl font-bold text-yellow-600">{orderStats.pending}</p>
              </div>
              <Clock className="h-8 w-8 text-yellow-600" />
            </div>
          </CardContent>
        </Card>
        <Card className="border border-slate-200">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-600">Active Orders</p>
                <p className="text-2xl font-bold text-purple-600">{orderStats.active}</p>
              </div>
              <Truck className="h-8 w-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>
        <Card className="border border-slate-200">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-600">Completed</p>
                <p className="text-2xl font-bold text-green-600">{orderStats.completed}</p>
              </div>
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Order Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-4 lg:w-auto lg:grid-cols-4">
          <TabsTrigger value="all">All Orders</TabsTrigger>
          <TabsTrigger value="pending">Pending</TabsTrigger>
          <TabsTrigger value="active">Active</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
        </TabsList>

        <TabsContent value={activeTab} className="mt-6">
          <Card className="border border-slate-200">
            <CardHeader>
              <CardTitle className="text-lg font-semibold">
                Orders ({filteredOrders.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {filteredOrders.map((order) => {
                  const StatusIcon = getStatusIcon(order.status);
                  return (
                    <div key={order.id} className="border border-slate-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                            <StatusIcon className="h-5 w-5 text-blue-600" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-slate-900">{order.id}</h3>
                            <p className="text-sm text-slate-600">{order.customer}</p>
                          </div>
                        </div>
                        <Badge className={`text-xs ${getStatusColor(order.status)}`}>
                          {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                        </Badge>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
                        <div>
                          <span className="text-sm text-slate-500">Product:</span>
                          <p className="font-medium text-slate-900">{order.product}</p>
                        </div>
                        <div>
                          <span className="text-sm text-slate-500">Quantity:</span>
                          <p className="font-medium text-slate-900">{order.quantity} units</p>
                        </div>
                        <div>
                          <span className="text-sm text-slate-500">Amount:</span>
                          <p className="font-semibold text-slate-900">{order.amount}</p>
                        </div>
                        <div>
                          <span className="text-sm text-slate-500">Order Date:</span>
                          <p className="font-medium text-slate-900">{order.date}</p>
                        </div>
                        <div>
                          <span className="text-sm text-slate-500">Contact:</span>
                          <p className="font-medium text-slate-900">{order.phone}</p>
                        </div>
                        <div>
                          <span className="text-sm text-slate-500">Email:</span>
                          <p className="font-medium text-slate-900 truncate">{order.email}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                        <div className="text-sm text-slate-600">
                          <span className="font-medium">Delivery Address:</span> {order.address}
                        </div>
                        <div className="flex items-center gap-2">
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
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}