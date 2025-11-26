import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Badge } from './ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Switch } from './ui/switch';
import { 
  User, 
  Building2, 
  Mail, 
  Phone, 
  MapPin, 
  Globe, 
  Edit, 
  Camera,
  Save,
  Bell,
  Shield,
  CreditCard,
  FileText,
  Star,
  Upload,
  Check
} from 'lucide-react';

export function VendorProfile() {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    businessName: 'PT. Boost Solutions',
    ownerName: 'Ahmad Wahyudi',
    email: 'ahmad.wahyudi@boostsolutions.co.id',
    phone: '+62 857 0775 6249',
    address: 'Pergudangan Kencana Trosobo No C4',
    city: 'Sidoarjo',
    postalCode: '61253',
    website: 'www.boostsolutions.co.id',
    description: 'Menyediakan solusi peralatan industri berkualitas tinggi untuk mendukung pertumbuhan bisnis Anda. Dengan pengalaman lebih dari 10 tahun, kami berkomitmen memberikan produk dan layanan terbaik.',
    businessType: 'Manufacturing & Distribution',
    yearEstablished: '2014',
    employeeCount: '25-50',
    businessLicense: 'NIB-1234567890',
    taxId: 'NPWP-123456789012345'
  });

  const [notifications, setNotifications] = useState({
    orderUpdates: true,
    promotions: false,
    newsletter: true,
    systemUpdates: true
  });

  const handleSave = () => {
    setIsEditing(false);
    // Here you would typically save to backend
    console.log('Saving profile data:', profileData);
  };

  const businessStats = {
    rating: 4.8,
    totalOrders: 1429,
    completionRate: 98.5,
    responseTime: '< 2 hours',
    memberSince: 'March 2024'
  };

  return (
    <div className="space-y-6">
      <Tabs defaultValue="profile" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="business">Business Info</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
          <TabsTrigger value="verification">Verification</TabsTrigger>
        </TabsList>

        {/* Profile Tab */}
        <TabsContent value="profile" className="space-y-6">
          <Card className="border border-slate-200">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg font-semibold">Profile Information</CardTitle>
                <Button 
                  variant={isEditing ? "default" : "outline"}
                  onClick={isEditing ? handleSave : () => setIsEditing(true)}
                >
                  {isEditing ? (
                    <>
                      <Save className="h-4 w-4 mr-2" />
                      Save Changes
                    </>
                  ) : (
                    <>
                      <Edit className="h-4 w-4 mr-2" />
                      Edit Profile
                    </>
                  )}
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Profile Picture & Stats */}
              <div className="flex flex-col sm:flex-row gap-6 items-start">
                <div className="flex flex-col items-center space-y-4">
                  <Avatar className="w-24 h-24">
                    <AvatarImage src="https://api.dicebear.com/7.x/initials/svg?seed=Ahmad Wahyudi" />
                    <AvatarFallback>AW</AvatarFallback>
                  </Avatar>
                  {isEditing && (
                    <Button variant="outline" size="sm">
                      <Camera className="h-4 w-4 mr-2" />
                      Change Photo
                    </Button>
                  )}
                </div>
                
                <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                  <div className="text-center p-3 bg-slate-50 rounded-lg">
                    <div className="flex items-center justify-center gap-1 mb-1">
                      <Star className="h-4 w-4 text-yellow-500" />
                      <span className="font-semibold">{businessStats.rating}</span>
                    </div>
                    <p className="text-xs text-slate-600">Rating</p>
                  </div>
                  <div className="text-center p-3 bg-slate-50 rounded-lg">
                    <p className="font-semibold">{businessStats.totalOrders}</p>
                    <p className="text-xs text-slate-600">Total Orders</p>
                  </div>
                  <div className="text-center p-3 bg-slate-50 rounded-lg">
                    <p className="font-semibold">{businessStats.completionRate}%</p>
                    <p className="text-xs text-slate-600">Completion Rate</p>
                  </div>
                  <div className="text-center p-3 bg-slate-50 rounded-lg">
                    <p className="font-semibold">{businessStats.responseTime}</p>
                    <p className="text-xs text-slate-600">Response Time</p>
                  </div>
                  <div className="text-center p-3 bg-slate-50 rounded-lg">
                    <p className="font-semibold">{businessStats.memberSince}</p>
                    <p className="text-xs text-slate-600">Member Since</p>
                  </div>
                </div>
              </div>

              {/* Personal Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="ownerName">Owner Name</Label>
                  <Input
                    id="ownerName"
                    value={profileData.ownerName}
                    onChange={(e) => setProfileData({...profileData, ownerName: e.target.value})}
                    disabled={!isEditing}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    value={profileData.email}
                    onChange={(e) => setProfileData({...profileData, email: e.target.value})}
                    disabled={!isEditing}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    value={profileData.phone}
                    onChange={(e) => setProfileData({...profileData, phone: e.target.value})}
                    disabled={!isEditing}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="website">Website</Label>
                  <Input
                    id="website"
                    value={profileData.website}
                    onChange={(e) => setProfileData({...profileData, website: e.target.value})}
                    disabled={!isEditing}
                  />
                </div>
              </div>

              {/* Address */}
              <div className="space-y-4">
                <h3 className="font-semibold text-slate-900">Address Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="md:col-span-2 space-y-2">
                    <Label htmlFor="address">Street Address</Label>
                    <Input
                      id="address"
                      value={profileData.address}
                      onChange={(e) => setProfileData({...profileData, address: e.target.value})}
                      disabled={!isEditing}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="city">City</Label>
                    <Input
                      id="city"
                      value={profileData.city}
                      onChange={(e) => setProfileData({...profileData, city: e.target.value})}
                      disabled={!isEditing}
                    />
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-2">
                <Label htmlFor="description">Business Description</Label>
                <Textarea
                  id="description"
                  rows={4}
                  value={profileData.description}
                  onChange={(e) => setProfileData({...profileData, description: e.target.value})}
                  disabled={!isEditing}
                  placeholder="Describe your business, products, and services..."
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Business Info Tab */}
        <TabsContent value="business" className="space-y-6">
          <Card className="border border-slate-200">
            <CardHeader>
              <CardTitle className="text-lg font-semibold">Business Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="businessName">Business Name</Label>
                  <Input
                    id="businessName"
                    value={profileData.businessName}
                    onChange={(e) => setProfileData({...profileData, businessName: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="businessType">Business Type</Label>
                  <Input
                    id="businessType"
                    value={profileData.businessType}
                    onChange={(e) => setProfileData({...profileData, businessType: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="yearEstablished">Year Established</Label>
                  <Input
                    id="yearEstablished"
                    value={profileData.yearEstablished}
                    onChange={(e) => setProfileData({...profileData, yearEstablished: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="employeeCount">Employee Count</Label>
                  <Input
                    id="employeeCount"
                    value={profileData.employeeCount}
                    onChange={(e) => setProfileData({...profileData, employeeCount: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="businessLicense">Business License (NIB)</Label>
                  <Input
                    id="businessLicense"
                    value={profileData.businessLicense}
                    onChange={(e) => setProfileData({...profileData, businessLicense: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="taxId">Tax ID (NPWP)</Label>
                  <Input
                    id="taxId"
                    value={profileData.taxId}
                    onChange={(e) => setProfileData({...profileData, taxId: e.target.value})}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Settings Tab */}
        <TabsContent value="settings" className="space-y-6">
          <Card className="border border-slate-200">
            <CardHeader>
              <CardTitle className="text-lg font-semibold">Notification Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Order Updates</p>
                  <p className="text-sm text-slate-600">Get notified about new orders and status changes</p>
                </div>
                <Switch
                  checked={notifications.orderUpdates}
                  onCheckedChange={(checked) => setNotifications({...notifications, orderUpdates: checked})}
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Promotions</p>
                  <p className="text-sm text-slate-600">Receive promotional offers and discounts</p>
                </div>
                <Switch
                  checked={notifications.promotions}
                  onCheckedChange={(checked) => setNotifications({...notifications, promotions: checked})}
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Newsletter</p>
                  <p className="text-sm text-slate-600">Weekly newsletter with industry insights</p>
                </div>
                <Switch
                  checked={notifications.newsletter}
                  onCheckedChange={(checked) => setNotifications({...notifications, newsletter: checked})}
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">System Updates</p>
                  <p className="text-sm text-slate-600">Important platform updates and announcements</p>
                </div>
                <Switch
                  checked={notifications.systemUpdates}
                  onCheckedChange={(checked) => setNotifications({...notifications, systemUpdates: checked})}
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Verification Tab */}
        <TabsContent value="verification" className="space-y-6">
          <Card className="border border-slate-200">
            <CardHeader>
              <CardTitle className="text-lg font-semibold">Account Verification</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border border-slate-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <FileText className="h-5 w-5 text-blue-600" />
                      <span className="font-medium">Business License</span>
                    </div>
                    <Badge className="bg-green-100 text-green-800">
                      <Check className="h-3 w-3 mr-1" />
                      Verified
                    </Badge>
                  </div>
                  <p className="text-sm text-slate-600 mb-3">Your business license has been verified</p>
                  <Button variant="outline" size="sm">
                    <Upload className="h-4 w-4 mr-2" />
                    Update Document
                  </Button>
                </div>

                <div className="border border-slate-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <CreditCard className="h-5 w-5 text-blue-600" />
                      <span className="font-medium">Tax Information</span>
                    </div>
                    <Badge className="bg-green-100 text-green-800">
                      <Check className="h-3 w-3 mr-1" />
                      Verified
                    </Badge>
                  </div>
                  <p className="text-sm text-slate-600 mb-3">Tax ID and related documents verified</p>
                  <Button variant="outline" size="sm">
                    <Upload className="h-4 w-4 mr-2" />
                    Update Document
                  </Button>
                </div>

                <div className="border border-slate-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <Shield className="h-5 w-5 text-blue-600" />
                      <span className="font-medium">Identity Verification</span>
                    </div>
                    <Badge className="bg-green-100 text-green-800">
                      <Check className="h-3 w-3 mr-1" />
                      Verified
                    </Badge>
                  </div>
                  <p className="text-sm text-slate-600 mb-3">Identity documents verified</p>
                  <Button variant="outline" size="sm">
                    <Upload className="h-4 w-4 mr-2" />
                    Update Document
                  </Button>
                </div>

                <div className="border border-slate-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <Building2 className="h-5 w-5 text-blue-600" />
                      <span className="font-medium">Bank Account</span>
                    </div>
                    <Badge className="bg-green-100 text-green-800">
                      <Check className="h-3 w-3 mr-1" />
                      Verified
                    </Badge>
                  </div>
                  <p className="text-sm text-slate-600 mb-3">Bank account information verified</p>
                  <Button variant="outline" size="sm">
                    <Edit className="h-4 w-4 mr-2" />
                    Update Info
                  </Button>
                </div>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <Check className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-green-900">Fully Verified Vendor</h3>
                    <p className="text-sm text-green-700">Your account is fully verified and trusted by customers</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}