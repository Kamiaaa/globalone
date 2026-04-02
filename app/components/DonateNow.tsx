'use client'
// components/DonateNow.tsx
import { useState } from 'react';
import { 
  FaHeart, 
  FaSpinner, 
  FaHandHoldingHeart, 
  FaUser, 
  FaEnvelope, 
  FaPhone,
  FaCreditCard,
  FaPaypal,
  FaGooglePay,
  FaApplePay,
  FaCheckCircle,
  FaArrowLeft,
  FaArrowRight,
  FaLock,
  FaCalendarAlt
} from 'react-icons/fa';
import { MdSecurity } from 'react-icons/md';

// Types
interface DonorInfo {
  fullName: string;
  email: string;
  phone: string;
  anonymous: boolean;
  emailUpdates: boolean;
}

interface CardDetails {
  cardNumber: string;
  cardName: string;
  expiryDate: string;
  cvv: string;
}

type Step = 'amount' | 'info' | 'payment';

export default function DonateNow() {
  const [currentStep, setCurrentStep] = useState<Step>('amount');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  // Organization details
  const organizationName = "Helping Hands Foundation";
  const currency = "USD";
  const suggestedAmounts = [25, 50, 100, 250];
  
  // Amount step state
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState<string>("");
  const [isRecurring, setIsRecurring] = useState(false);
  const [frequency, setFrequency] = useState<'monthly' | 'yearly'>('monthly');
  
  // Donor info step state
  const [donorInfo, setDonorInfo] = useState<DonorInfo>({
    fullName: '',
    email: '',
    phone: '',
    anonymous: false,
    emailUpdates: true,
  });
  
  // Payment step state
  const [paymentMethod, setPaymentMethod] = useState<'credit_card' | 'paypal' | 'google_pay' | 'apple_pay'>('credit_card');
  const [cardDetails, setCardDetails] = useState<CardDetails>({
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: '',
  });

  const getDonationAmount = (): number => {
    if (selectedAmount) return selectedAmount;
    if (customAmount && !isNaN(parseFloat(customAmount))) {
      return parseFloat(customAmount);
    }
    return 0;
  };

  const formatCurrency = (amount: number): string => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    }).format(amount);
  };

  const validateDonorInfo = (): boolean => {
    if (!donorInfo.fullName.trim()) {
      alert('Please enter your full name');
      return false;
    }
    if (!donorInfo.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(donorInfo.email)) {
      alert('Please enter a valid email address');
      return false;
    }
    if (donorInfo.phone && !/^[\d\s+-]+$/.test(donorInfo.phone)) {
      alert('Please enter a valid phone number');
      return false;
    }
    return true;
  };

  const validatePaymentInfo = (): boolean => {
    if (paymentMethod === 'credit_card') {
      const cleanCardNumber = cardDetails.cardNumber.replace(/\s/g, '');
      if (!cleanCardNumber || cleanCardNumber.length < 16) {
        alert('Please enter a valid card number');
        return false;
      }
      if (!cardDetails.cardName.trim()) {
        alert('Please enter the name on card');
        return false;
      }
      if (!cardDetails.expiryDate || !/^\d{2}\/\d{2}$/.test(cardDetails.expiryDate)) {
        alert('Please enter a valid expiry date (MM/YY)');
        return false;
      }
      if (!cardDetails.cvv || cardDetails.cvv.length < 3) {
        alert('Please enter a valid CVV');
        return false;
      }
    }
    return true;
  };

  const handleNextStep = () => {
    if (currentStep === 'amount') {
      const amount = getDonationAmount();
      if (amount <= 0) {
        alert('Please select or enter a donation amount');
        return;
      }
      setCurrentStep('info');
    } else if (currentStep === 'info') {
      if (validateDonorInfo()) {
        setCurrentStep('payment');
      }
    }
  };

  const handlePreviousStep = () => {
    if (currentStep === 'info') {
      setCurrentStep('amount');
    } else if (currentStep === 'payment') {
      setCurrentStep('info');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validatePaymentInfo()) return;
    
    setIsSubmitting(true);
    
    const donationData = {
      amount: getDonationAmount(),
      isRecurring,
      frequency: isRecurring ? frequency : null,
      donorInfo,
      paymentMethod,
      cardDetails: paymentMethod === 'credit_card' ? cardDetails : undefined,
    };
    
    try {
      // Simulate API call - replace with your actual donation processing endpoint
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log("Donation submitted:", donationData);
      
      setIsSuccess(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSuccess(false);
        setCurrentStep('amount');
        setSelectedAmount(null);
        setCustomAmount('');
        setIsRecurring(false);
        setDonorInfo({
          fullName: '',
          email: '',
          phone: '',
          anonymous: false,
          emailUpdates: true,
        });
        setCardDetails({
          cardNumber: '',
          cardName: '',
          expiryDate: '',
          cvv: '',
        });
      }, 3000);
      
    } catch (error) {
      console.error("Donation failed:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || '';
    const parts = [];
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    if (parts.length) {
      return parts.join(' ');
    } else {
      return value;
    }
  };

  const formatExpiryDate = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    if (v.length >= 2) {
      return v.substring(0, 2) + (v.length > 2 ? '/' + v.substring(2, 4) : '');
    }
    return v;
  };

  const renderStepIndicator = () => {
    const steps: Step[] = ['amount', 'info', 'payment'];
    const stepLabels = ['Amount', 'Info', 'Payment'];
    const currentIndex = steps.indexOf(currentStep);
    
    return (
      <div className="px-6 pt-6 dark:bg-gray-900">
        <div className="flex items-center justify-between mb-6">
          {steps.map((step, index) => (
            <div key={step} className="flex flex-col items-center flex-1">
              <div className={`
                w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300
                ${index <= currentIndex 
                  ? 'bg-linear-to-r from-sky-600 to-sky-700 dark:from-sky-500 dark:to-sky-600 text-white shadow-lg' 
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400'
                }
              `}>
                {index + 1}
              </div>
              <span className={`text-xs mt-2 font-medium ${
                index <= currentIndex ? 'text-sky-600 dark:text-sky-400' : 'text-gray-500 dark:text-gray-400'
              }`}>
                {stepLabels[index]}
              </span>
              {index < steps.length - 1 && (
                <div className={`
                  hidden md:block absolute w-24 h-0.5 mt-5
                  ${index < currentIndex ? 'bg-sky-600 dark:bg-sky-500' : 'bg-gray-200 dark:bg-gray-700'}
                `} 
                style={{ left: `${(index + 1) * 33}%` }} />
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderAmountStep = () => (
    <div className="space-y-6">
      {/* Suggested Amounts */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
          Select Amount
        </label>
        <div className="grid grid-cols-2 gap-3">
          {suggestedAmounts.map((amount) => (
            <button
              key={amount}
              type="button"
              onClick={() => {
                setSelectedAmount(amount);
                setCustomAmount("");
              }}
              className={`py-3 px-4 rounded-xl font-bold transition-all duration-200 transform hover:scale-105 ${
                selectedAmount === amount
                  ? "bg-linear-to-r from-sky-600 to-sky-700 dark:from-sky-500 dark:to-sky-600 text-white shadow-md ring-2 ring-sky-600 dark:ring-sky-500 ring-offset-2 dark:ring-offset-gray-900"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              {formatCurrency(amount)}
            </button>
          ))}
        </div>
      </div>

      {/* Custom Amount */}
      <div>
        <label htmlFor="customAmount" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
          Or enter custom amount
        </label>
        <div className="relative">
          <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400 font-bold">
            {currency === "USD" ? "$" : currency}
          </span>
          <input
            type="text"
            id="customAmount"
            value={customAmount}
            onChange={(e) => {
              const value = e.target.value;
              if (value === "" || /^\d*\.?\d*$/.test(value)) {
                setCustomAmount(value);
                setSelectedAmount(null);
              }
            }}
            placeholder="Enter amount"
            className="w-full pl-8 pr-4 py-3 border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none transition"
          />
        </div>
      </div>

      {/* Recurring Donation Toggle */}
      <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
        <div className="flex items-center justify-between mb-3">
          <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 flex items-center gap-2">
            <FaCalendarAlt className="text-sky-600 dark:text-sky-400" />
            Make this a recurring donation
          </label>
          <button
            type="button"
            onClick={() => setIsRecurring(!isRecurring)}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 ${
              isRecurring ? "bg-sky-600 dark:bg-sky-500" : "bg-gray-300 dark:bg-gray-600"
            }`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                isRecurring ? "translate-x-6" : "translate-x-1"
              }`}
            />
          </button>
        </div>

        {/* Frequency Options */}
        {isRecurring && (
          <div className="flex gap-3 mt-3">
            <button
              type="button"
              onClick={() => setFrequency("monthly")}
              className={`flex-1 py-2 px-4 rounded-xl text-sm font-semibold transition ${
                frequency === "monthly"
                  ? "bg-sky-600 dark:bg-sky-500 text-white"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              Monthly
            </button>
            <button
              type="button"
              onClick={() => setFrequency("yearly")}
              className={`flex-1 py-2 px-4 rounded-xl text-sm font-semibold transition ${
                frequency === "yearly"
                  ? "bg-sky-600 dark:bg-sky-500 text-white"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              Yearly
            </button>
          </div>
        )}
      </div>

      {/* Impact Message */}
      <div className="bg-linear-to-r from-sky-50 to-indigo-50 dark:from-sky-950/30 dark:to-indigo-950/30 rounded-xl p-4 border border-sky-100 dark:border-sky-900/50">
        <p className="text-sm text-sky-800 dark:text-sky-300 flex items-start gap-2">
          <FaHandHoldingHeart className="h-5 w-5 shrink-0 mt-0.5 text-sky-600 dark:text-sky-400" />
          <span>
            <span className="font-bold">Your impact:</span>{" "}
            {getDonationAmount() > 0 ? (
              `A donation of ${formatCurrency(getDonationAmount())} can help provide essential supplies, education, and support to those in need.`
            ) : (
              "Select an amount to see your impact"
            )}
          </span>
        </p>
      </div>
    </div>
  );

  const renderDonorInfoStep = () => (
    <div className="space-y-5">
      <div>
        <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
          Full Name *
        </label>
        <div className="relative">
          <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500" />
          <input
            type="text"
            id="fullName"
            value={donorInfo.fullName}
            onChange={(e) => setDonorInfo({ ...donorInfo, fullName: e.target.value })}
            className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none transition"
            placeholder="John Doe"
            required
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
          Email Address *
        </label>
        <div className="relative">
          <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500" />
          <input
            type="email"
            id="email"
            value={donorInfo.email}
            onChange={(e) => setDonorInfo({ ...donorInfo, email: e.target.value })}
            className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none transition"
            placeholder="john@example.com"
            required
          />
        </div>
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
          Phone Number (Optional)
        </label>
        <div className="relative">
          <FaPhone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500" />
          <input
            type="tel"
            id="phone"
            value={donorInfo.phone}
            onChange={(e) => setDonorInfo({ ...donorInfo, phone: e.target.value })}
            className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none transition"
            placeholder="+1 234 567 8900"
          />
        </div>
      </div>

      <div className="space-y-3 bg-gray-50 dark:bg-gray-800/50 rounded-xl p-4">
        <label className="flex items-center gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={donorInfo.anonymous}
            onChange={(e) => setDonorInfo({ ...donorInfo, anonymous: e.target.checked })}
            className="w-4 h-4 text-sky-600 dark:text-sky-500 rounded focus:ring-sky-500 dark:bg-gray-700 dark:border-gray-600"
          />
          <span className="text-sm text-gray-700 dark:text-gray-300">Donate anonymously (name won't be published)</span>
        </label>
        
        <label className="flex items-center gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={donorInfo.emailUpdates}
            onChange={(e) => setDonorInfo({ ...donorInfo, emailUpdates: e.target.checked })}
            className="w-4 h-4 text-sky-600 dark:text-sky-500 rounded focus:ring-sky-500 dark:bg-gray-700 dark:border-gray-600"
          />
          <span className="text-sm text-gray-700 dark:text-gray-300">Receive email updates about our impact and stories</span>
        </label>
      </div>
    </div>
  );

  const renderPaymentStep = () => (
    <div className="space-y-6">
      {/* Payment Method Selection */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
          Select Payment Method
        </label>
        <div className="grid grid-cols-2 gap-3">
          <button
            type="button"
            onClick={() => setPaymentMethod('credit_card')}
            className={`py-3 px-4 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center gap-2 ${
              paymentMethod === 'credit_card'
                ? "bg-linear-to-r from-sky-600 to-sky-700 dark:from-sky-500 dark:to-sky-600 text-white shadow-md ring-2 ring-sky-600 dark:ring-sky-500 ring-offset-2 dark:ring-offset-gray-900"
                : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
            }`}
          >
            <FaCreditCard className="h-5 w-5" />
            Credit Card
          </button>
          
          <button
            type="button"
            onClick={() => setPaymentMethod('paypal')}
            className={`py-3 px-4 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center gap-2 ${
              paymentMethod === 'paypal'
                ? "bg-linear-to-r from-sky-600 to-sky-700 dark:from-sky-500 dark:to-sky-600 text-white shadow-md ring-2 ring-sky-600 dark:ring-sky-500 ring-offset-2 dark:ring-offset-gray-900"
                : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
            }`}
          >
            <FaPaypal className="h-5 w-5" />
            PayPal
          </button>
          
          <button
            type="button"
            onClick={() => setPaymentMethod('google_pay')}
            className={`py-3 px-4 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center gap-2 ${
              paymentMethod === 'google_pay'
                ? "bg-linear-to-r from-sky-600 to-sky-700 dark:from-sky-500 dark:to-sky-600 text-white shadow-md ring-2 ring-sky-600 dark:ring-sky-500 ring-offset-2 dark:ring-offset-gray-900"
                : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
            }`}
          >
            <FaGooglePay className="h-5 w-5" />
            Google Pay
          </button>
          
          <button
            type="button"
            onClick={() => setPaymentMethod('apple_pay')}
            className={`py-3 px-4 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center gap-2 ${
              paymentMethod === 'apple_pay'
                ? "bg-linear-to-r from-sky-600 to-sky-700 dark:from-sky-500 dark:to-sky-600 text-white shadow-md ring-2 ring-sky-600 dark:ring-sky-500 ring-offset-2 dark:ring-offset-gray-900"
                : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
            }`}
          >
            <FaApplePay className="h-5 w-5" />
            Apple Pay
          </button>
        </div>
      </div>

      {/* Credit Card Form */}
      {paymentMethod === 'credit_card' && (
        <div className="space-y-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl p-4">
          <div>
            <label htmlFor="cardNumber" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
              Card Number
            </label>
            <input
              type="text"
              id="cardNumber"
              value={cardDetails.cardNumber}
              onChange={(e) => setCardDetails({ ...cardDetails, cardNumber: formatCardNumber(e.target.value) })}
              placeholder="1234 5678 9012 3456"
              maxLength={19}
              className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none transition"
            />
          </div>
          
          <div>
            <label htmlFor="cardName" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
              Name on Card
            </label>
            <input
              type="text"
              id="cardName"
              value={cardDetails.cardName}
              onChange={(e) => setCardDetails({ ...cardDetails, cardName: e.target.value })}
              placeholder="John Doe"
              className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none transition"
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="expiryDate" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Expiry Date
              </label>
              <input
                type="text"
                id="expiryDate"
                value={cardDetails.expiryDate}
                onChange={(e) => setCardDetails({ ...cardDetails, expiryDate: formatExpiryDate(e.target.value) })}
                placeholder="MM/YY"
                maxLength={5}
                className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none transition"
              />
            </div>
            
            <div>
              <label htmlFor="cvv" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                CVV
              </label>
              <input
                type="text"
                id="cvv"
                value={cardDetails.cvv}
                onChange={(e) => setCardDetails({ ...cardDetails, cvv: e.target.value.replace(/\D/g, '').slice(0, 4) })}
                placeholder="123"
                maxLength={4}
                className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none transition"
              />
            </div>
          </div>
        </div>
      )}

      {/* Donation Summary */}
      <div className="bg-linear-to-r from-gray-50 to-gray-100 dark:from-gray-800/50 dark:to-gray-800/30 rounded-xl p-4 border border-gray-200 dark:border-gray-700">
        <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-3 flex items-center gap-2">
          <FaHeart className="text-red-500 dark:text-red-400" />
          Donation Summary
        </h4>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-600 dark:text-gray-400">Amount:</span>
            <span className="font-semibold text-gray-900 dark:text-gray-100">{formatCurrency(getDonationAmount())}</span>
          </div>
          {isRecurring && (
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-400">Frequency:</span>
              <span className="font-semibold text-gray-900 dark:text-gray-100 capitalize">{frequency}</span>
            </div>
          )}
          {donorInfo.anonymous && (
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-400">Donation Type:</span>
              <span className="font-semibold text-gray-900 dark:text-gray-100">Anonymous</span>
            </div>
          )}
          <div className="flex justify-between pt-3 border-t border-gray-200 dark:border-gray-700 mt-2">
            <span className="text-gray-700 dark:text-gray-300 font-semibold">Total Donation:</span>
            <span className="font-bold text-sky-600 dark:text-sky-400 text-xl">{formatCurrency(getDonationAmount())}</span>
          </div>
        </div>
      </div>
    </div>
  );

  const renderSuccess = () => (
    <div className="text-center py-8 animate-fadeIn">
      <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
        <FaCheckCircle className="h-12 w-12 text-green-500 dark:text-green-400" />
      </div>
      <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">Thank You!</h3>
      <p className="text-gray-600 dark:text-gray-400 mb-4">
        Your donation of <span className="font-bold text-sky-600 dark:text-sky-400">{formatCurrency(getDonationAmount())}</span> has been successfully processed.
      </p>
      <p className="text-sm text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 rounded-lg p-3">
        A confirmation email has been sent to <span className="font-semibold text-gray-700 dark:text-gray-300">{donorInfo.email}</span>
      </p>
      <p className="text-xs text-gray-400 dark:text-gray-500 mt-4">
        Your support helps us make a real difference in people's lives.
      </p>
    </div>
  );

  return (
    <div className="max-w-md w-full mx-auto bg-white dark:bg-gray-900 rounded-2xl shadow-2xl dark:shadow-gray-950 overflow-hidden transition-colors duration-200">
      {/* Header */}
      <div className="bg-linear-to-r from-sky-600 to-sky-700 dark:from-sky-700 dark:to-sky-800 px-6 py-8 text-white text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -mt-16 -mr-16"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white opacity-10 rounded-full -mb-12 -ml-12"></div>
        <FaHeart className="h-12 w-12 mx-auto mb-3 text-white animate-pulse" />
        <h1 className="text-2xl font-bold mb-2">Make a Donation</h1>
        <p className="text-sky-100 dark:text-sky-200 text-sm">
          Support {organizationName} in making a difference
        </p>
      </div>

      {!isSuccess ? (
        <>
          {renderStepIndicator()}
          
          <form onSubmit={handleSubmit} className="p-6 dark:bg-gray-900">
            {currentStep === 'amount' && renderAmountStep()}
            {currentStep === 'info' && renderDonorInfoStep()}
            {currentStep === 'payment' && renderPaymentStep()}
            
            {/* Navigation Buttons */}
            <div className="flex gap-3 mt-8">
              {currentStep !== 'amount' && (
                <button
                  type="button"
                  onClick={handlePreviousStep}
                  className="flex-1 py-3 px-4 rounded-xl font-semibold text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <FaArrowLeft className="h-4 w-4" />
                  Back
                </button>
              )}
              
              {currentStep !== 'payment' ? (
                <button
                  type="button"
                  onClick={handleNextStep}
                  className="flex-1 py-3 px-4 rounded-xl font-semibold text-white bg-linear-to-r from-sky-600 to-sky-700 dark:from-sky-500 dark:to-sky-600 hover:from-sky-700 hover:to-sky-800 dark:hover:from-sky-600 dark:hover:to-sky-700 transition-all duration-200 flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
                >
                  Continue
                  <FaArrowRight className="h-4 w-4" />
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 py-3 px-4 rounded-xl font-semibold text-white bg-linear-to-r from-sky-600 to-sky-700 dark:from-sky-500 dark:to-sky-600 hover:from-sky-700 hover:to-sky-800 dark:hover:from-sky-600 dark:hover:to-sky-700 transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg"
                >
                  {isSubmitting ? (
                    <>
                      <FaSpinner className="animate-spin h-5 w-5" />
                      Processing...
                    </>
                  ) : (
                    <>
                      <FaHeart className="h-4 w-4" />
                      Complete Donation
                    </>
                  )}
                </button>
              )}
            </div>
            
            {/* Secure Note */}
            <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-800">
              <p className="text-center text-xs text-gray-500 dark:text-gray-400 flex items-center justify-center gap-2">
                <FaLock className="h-3 w-3" />
                Secure donation processing. Your information is protected.
                <MdSecurity className="h-3 w-3" />
              </p>
            </div>
          </form>
        </>
      ) : (
        <div className="p-6 dark:bg-gray-900">
          {renderSuccess()}
        </div>
      )}
    </div>
  );
}