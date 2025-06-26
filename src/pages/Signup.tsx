import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp';
import { Checkbox } from '@/components/ui/checkbox';

const Signup = () => {
  const [signupType, setSignupType] = useState<'email' | 'phone'>('email');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });
  const [otp, setOtp] = useState('');
  const [showOtpVerification, setShowOtpVerification] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (signupType === 'phone') {
      setShowOtpVerification(true);
    } else {
      // Handle email signup
      console.log('Email signup:', formData);
    }
  };

  const handleOtpVerification = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('OTP verification:', otp);
    // Handle OTP verification logic
  };

  const formatPhoneNumber = (value: string) => {
    // Remove all non-digits
    const digits = value.replace(/\D/g, '');
    
    // Limit to 10 digits for Indian phone numbers
    if (digits.length <= 10) {
      return digits;
    }
    return digits.slice(0, 10);
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    setFormData({
      ...formData,
      phone: formatted,
    });
  };

  if (showOtpVerification) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Verify Phone Number</h2>
              <p className="text-gray-600 mb-6">
                Enter the 6-digit code sent to +91 {formData.phone}
              </p>
            </div>

            <form onSubmit={handleOtpVerification} className="space-y-6">
              <div className="flex justify-center">
                <InputOTP maxLength={6} value={otp} onChange={setOtp}>
                  <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                  </InputOTPGroup>
                </InputOTP>
              </div>

              <Button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white"
                disabled={otp.length !== 6}
              >
                Verify & Complete Signup
              </Button>

              <div className="text-center">
                <button
                  type="button"
                  className="text-red-600 hover:text-red-700 text-sm"
                  onClick={() => console.log('Resend OTP')}
                >
                  Resend OTP
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-red-600 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-2xl">B</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Create Account</h2>
            <p className="text-gray-600 mb-6">Join Brand Navigator today</p>
          </div>

          {/* Signup Type Toggle */}
          <div className="flex bg-gray-100 rounded-lg p-1 mb-6">
            <button
              type="button"
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                signupType === 'email'
                  ? 'bg-white text-red-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
              onClick={() => setSignupType('email')}
            >
              Email Address
            </button>
            <button
              type="button"
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                signupType === 'phone'
                  ? 'bg-white text-red-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
              onClick={() => setSignupType('phone')}
            >
              Phone Number
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                name="name"
                type="text"
                required
                className="mt-1"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>

            {signupType === 'email' ? (
              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="mt-1"
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
            ) : (
              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <div className="mt-1 flex">
                  <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                    +91
                  </span>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    className="rounded-l-none"
                    placeholder="Enter 10-digit phone number"
                    value={formData.phone}
                    onChange={handlePhoneChange}
                    maxLength={10}
                  />
                </div>
              </div>
            )}

            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                required
                className="mt-1"
                placeholder="Create a strong password"
                value={formData.password}
                onChange={handleInputChange}
              />
            </div>

            <div>
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                required
                className="mt-1"
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChange={handleInputChange}
              />
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="terms"
                checked={acceptTerms}
                onCheckedChange={(checked) => setAcceptTerms(checked as boolean)}
              />
              <Label htmlFor="terms" className="text-sm text-gray-600">
                I agree to the{' '}
                <Link to="/terms" className="text-red-600 hover:text-red-700">
                  Terms of Service
                </Link>{' '}
                and{' '}
                <Link to="/privacy" className="text-red-600 hover:text-red-700">
                  Privacy Policy
                </Link>
              </Label>
            </div>

            <Button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 text-white"
              disabled={!acceptTerms || (signupType === 'email' ? !formData.email : formData.phone.length !== 10) || !formData.password || formData.password !== formData.confirmPassword}
            >
              {signupType === 'phone' ? 'Send OTP' : 'Create Account'}
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Already have an account?{' '}
              <Link to="/signin" className="text-red-600 hover:text-red-700 font-medium">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;