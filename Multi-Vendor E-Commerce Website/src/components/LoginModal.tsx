import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Separator } from './ui/separator';
import { useLanguage } from './LanguageContext';
import { Eye, EyeOff, Mail, Lock, User } from 'lucide-react';

interface LoginModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onVendorLogin?: () => void;
}

export function LoginModal({ open, onOpenChange, onVendorLogin }: LoginModalProps) {
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    confirmPassword: ''
  });

  const { t, language } = useLanguage();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login/signup logic here
    console.log(isSignUp ? 'Sign up' : 'Sign in', formData);
    
    // Simulate vendor login - in real app, this would be based on user credentials/role
    // For demo purposes, if email contains "vendor" or "industrial", redirect to vendor dashboard
    if (formData.email.toLowerCase().includes('vendor') || 
        formData.email.toLowerCase().includes('industrial') || 
        formData.email.toLowerCase().includes('ahmad')) {
      if (onVendorLogin) {
        onVendorLogin();
      }
    }
    
    onOpenChange(false);
  };

  const translations = {
    en: {
      signIn: 'Sign In',
      signUp: 'Sign Up',
      email: 'Email',
      password: 'Password',
      name: 'Full Name',
      confirmPassword: 'Confirm Password',
      emailPlaceholder: 'Enter your email',
      passwordPlaceholder: 'Enter your password',
      namePlaceholder: 'Enter your full name',
      confirmPasswordPlaceholder: 'Confirm your password',
      forgotPassword: 'Forgot password?',
      noAccount: "Don't have an account?",
      haveAccount: 'Already have an account?',
      signInButton: 'Sign In',
      signUpButton: 'Create Account',
      orContinueWith: 'Or continue with',
      google: 'Google',
      facebook: 'Facebook',
      welcome: 'Welcome back!',
      createAccount: 'Create your account',
      welcomeDesc: 'Sign in to access your account and continue your journey.',
      createAccountDesc: 'Join thousands of businesses already growing with IndustrialHub.'
    },
    id: {
      signIn: 'Masuk',
      signUp: 'Daftar',
      email: 'Email',
      password: 'Kata Sandi',
      name: 'Nama Lengkap',
      confirmPassword: 'Konfirmasi Kata Sandi',
      emailPlaceholder: 'Masukkan email Anda',
      passwordPlaceholder: 'Masukkan kata sandi Anda',
      namePlaceholder: 'Masukkan nama lengkap Anda',
      confirmPasswordPlaceholder: 'Konfirmasi kata sandi Anda',
      forgotPassword: 'Lupa kata sandi?',
      noAccount: 'Belum punya akun?',
      haveAccount: 'Sudah punya akun?',
      signInButton: 'Masuk',
      signUpButton: 'Buat Akun',
      orContinueWith: 'Atau lanjutkan dengan',
      google: 'Google',
      facebook: 'Facebook',
      welcome: 'Selamat datang kembali!',
      createAccount: 'Buat akun Anda',
      welcomeDesc: 'Masuk untuk mengakses akun Anda dan melanjutkan perjalanan Anda.',
      createAccountDesc: 'Bergabunglah dengan ribuan bisnis yang sudah berkembang dengan IndustrialHub.'
    }
  };

  const lt = translations[language];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg max-h-[95vh] overflow-y-auto p-4 sm:p-6">
        <DialogHeader className="text-center pb-2">
          <DialogTitle className="text-xl sm:text-2xl font-bold text-slate-900">
            {isSignUp ? lt.createAccount : lt.welcome}
          </DialogTitle>
          <p className="text-slate-600 text-xs sm:text-sm mt-1">
            {isSignUp ? lt.createAccountDesc : lt.welcomeDesc}
          </p>
        </DialogHeader>

        <form onSubmit={handleSubmit} className={`${isSignUp ? 'space-y-3' : 'space-y-4'}`}>
          {isSignUp && (
            <div className="space-y-1">
              <Label htmlFor="name" className="text-xs sm:text-sm font-medium text-slate-700">
                {lt.name}
              </Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  placeholder={lt.namePlaceholder}
                  className="pl-10 h-9 sm:h-10 bg-slate-50 border-slate-200 focus:border-blue-500 focus:ring-blue-500 text-sm"
                  required
                />
              </div>
            </div>
          )}

          <div className="space-y-1">
            <Label htmlFor="email" className="text-xs sm:text-sm font-medium text-slate-700">
              {lt.email}
            </Label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                placeholder={lt.emailPlaceholder}
                className="pl-10 h-9 sm:h-10 bg-slate-50 border-slate-200 focus:border-blue-500 focus:ring-blue-500 text-sm"
                required
              />
            </div>
          </div>

          <div className="space-y-1">
            <Label htmlFor="password" className="text-xs sm:text-sm font-medium text-slate-700">
              {lt.password}
            </Label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
              <Input
                id="password"
                type={showPassword ? 'text' : 'password'}
                value={formData.password}
                onChange={(e) => handleInputChange('password', e.target.value)}
                placeholder={lt.passwordPlaceholder}
                className="pl-10 pr-10 h-9 sm:h-10 bg-slate-50 border-slate-200 focus:border-blue-500 focus:ring-blue-500 text-sm"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                {showPassword ? <EyeOff className="h-3 w-3 sm:h-4 sm:w-4" /> : <Eye className="h-3 w-3 sm:h-4 sm:w-4" />}
              </button>
            </div>
          </div>

          {isSignUp && (
            <div className="space-y-1">
              <Label htmlFor="confirmPassword" className="text-xs sm:text-sm font-medium text-slate-700">
                {lt.confirmPassword}
              </Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                <Input
                  id="confirmPassword"
                  type={showPassword ? 'text' : 'password'}
                  value={formData.confirmPassword}
                  onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                  placeholder={lt.confirmPasswordPlaceholder}
                  className="pl-10 h-9 sm:h-10 bg-slate-50 border-slate-200 focus:border-blue-500 focus:ring-blue-500 text-sm"
                  required
                />
              </div>
            </div>
          )}

          {!isSignUp && (
            <div className="flex justify-end">
              <Button variant="link" className="p-0 h-auto text-blue-600 hover:text-blue-800 text-xs sm:text-sm">
                {lt.forgotPassword}
              </Button>
            </div>
          )}

          <Button
            type="submit"
            className="w-full h-9 sm:h-10 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium text-sm"
          >
            {isSignUp ? lt.signUpButton : lt.signInButton}
          </Button>

          <div className={`relative ${isSignUp ? 'my-3' : 'my-4'}`}>
            <div className="absolute inset-0 flex items-center">
              <Separator className="w-full" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-2 text-slate-500">{lt.orContinueWith}</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 sm:gap-3">
            <Button
              type="button"
              variant="outline"
              className="h-8 sm:h-9 border-slate-200 hover:bg-slate-50 text-xs sm:text-sm"
            >
              <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" viewBox="0 0 24 24">
                <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              {lt.google}
            </Button>
            <Button
              type="button"
              variant="outline"
              className="h-8 sm:h-9 border-slate-200 hover:bg-slate-50 text-xs sm:text-sm"
            >
              <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              {lt.facebook}
            </Button>
          </div>

          <div className="text-center">
            <span className="text-xs sm:text-sm text-slate-600">
              {isSignUp ? lt.haveAccount : lt.noAccount}
            </span>
            <Button
              type="button"
              variant="link"
              onClick={() => setIsSignUp(!isSignUp)}
              className="p-0 ml-1 h-auto text-blue-600 hover:text-blue-800 text-xs sm:text-sm font-medium"
            >
              {isSignUp ? lt.signIn : lt.signUp}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}