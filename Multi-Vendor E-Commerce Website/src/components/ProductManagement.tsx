import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { 
  Plus, 
  Search, 
  Filter, 
  MoreHorizontal, 
  Edit, 
  Trash2, 
  Eye,
  Package,
  Star,
  TrendingUp,
  AlertCircle
} from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function ProductManagement() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('all');

  const products = [
    {
      id: 1,
      name: 'Professional Drill Set',
      category: 'Industrial Equipment',
      price: 'Rp 850,000',
      stock: 45,
      sales: 156,
      status: 'active',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=300&h=200&fit=crop'
    },
    {
      id: 2,
      name: 'Safety Helmet Premium',
      category: 'Safety Equipment',
      price: 'Rp 320,000',
      stock: 120,
      sales: 298,
      status: 'active',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop'
    },
    {
      id: 3,
      name: 'Industrial Wrench Kit',
      category: 'Manufacturing Tools',
      price: 'Rp 640,000',
      stock: 8,
      sales: 89,
      status: 'low_stock',
      rating: 4.6,
      image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=300&h=200&fit=crop'
    },
    {
      id: 4,
      name: 'Welding Equipment Pro',
      category: 'Industrial Equipment',
      price: 'Rp 2,450,000',
      stock: 15,
      sales: 67,
      status: 'active',
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop'
    },
    {
      id: 5,
      name: 'Electronic Component Kit',
      category: 'Electronics',
      price: 'Rp 890,000',
      stock: 0,
      sales: 234,
      status: 'out_of_stock',
      rating: 4.5,
      image: 'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=300&h=200&fit=crop'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'low_stock': return 'bg-yellow-100 text-yellow-800';
      case 'out_of_stock': return 'bg-red-100 text-red-800';
      case 'draft': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'active': return 'Active';
      case 'low_stock': return 'Low Stock';
      case 'out_of_stock': return 'Out of Stock';
      case 'draft': return 'Draft';
      default: return status;
    }
  };

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.category.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (activeTab === 'all') return matchesSearch;
    if (activeTab === 'active') return matchesSearch && product.status === 'active';
    if (activeTab === 'low_stock') return matchesSearch && product.status === 'low_stock';
    if (activeTab === 'out_of_stock') return matchesSearch && product.status === 'out_of_stock';
    
    return matchesSearch;
  });

  return (
    <div className="space-y-6">
      {/* Header Actions */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between">
        <div className="flex flex-1 gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
            <Input
              placeholder="Search products..."
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
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Plus className="h-4 w-4 mr-2" />
          Add Product
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="border border-slate-200">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-600">Total Products</p>
                <p className="text-2xl font-bold text-slate-900">234</p>
              </div>
              <Package className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>
        <Card className="border border-slate-200">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-600">Active Products</p>
                <p className="text-2xl font-bold text-green-600">198</p>
              </div>
              <TrendingUp className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
        <Card className="border border-slate-200">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-600">Low Stock</p>
                <p className="text-2xl font-bold text-yellow-600">12</p>
              </div>
              <AlertCircle className="h-8 w-8 text-yellow-600" />
            </div>
          </CardContent>
        </Card>
        <Card className="border border-slate-200">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-600">Avg. Rating</p>
                <p className="text-2xl font-bold text-purple-600">4.7</p>
              </div>
              <Star className="h-8 w-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Product Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-4 lg:w-auto lg:grid-cols-4">
          <TabsTrigger value="all">All Products</TabsTrigger>
          <TabsTrigger value="active">Active</TabsTrigger>
          <TabsTrigger value="low_stock">Low Stock</TabsTrigger>
          <TabsTrigger value="out_of_stock">Out of Stock</TabsTrigger>
        </TabsList>

        <TabsContent value={activeTab} className="mt-6">
          <Card className="border border-slate-200">
            <CardHeader>
              <CardTitle className="text-lg font-semibold">
                Products ({filteredProducts.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {filteredProducts.map((product) => (
                  <div key={product.id} className="flex items-center gap-4 p-4 bg-slate-50 rounded-lg">
                    <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                      <ImageWithFallback
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="font-semibold text-slate-900 truncate">{product.name}</h3>
                          <p className="text-sm text-slate-600">{product.category}</p>
                        </div>
                        <Badge className={`text-xs ${getStatusColor(product.status)}`}>
                          {getStatusText(product.status)}
                        </Badge>
                      </div>
                      
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
                        <div>
                          <span className="text-slate-500">Price:</span>
                          <div className="font-semibold text-slate-900">{product.price}</div>
                        </div>
                        <div>
                          <span className="text-slate-500">Stock:</span>
                          <div className={`font-semibold ${product.stock <= 10 ? 'text-red-600' : 'text-slate-900'}`}>
                            {product.stock} units
                          </div>
                        </div>
                        <div>
                          <span className="text-slate-500">Sales:</span>
                          <div className="font-semibold text-slate-900">{product.sales} sold</div>
                        </div>
                        <div>
                          <span className="text-slate-500">Rating:</span>
                          <div className="flex items-center">
                            <Star className="h-3 w-3 text-yellow-500 mr-1" />
                            <span className="font-semibold text-slate-900">{product.rating}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}