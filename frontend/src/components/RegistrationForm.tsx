import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { CheckCircle2, Loader2, AlertCircle } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().regex(/^[0-9]{10,}$/, 'Please enter a valid phone number (min 10 digits)'),
});

type FormData = z.infer<typeof formSchema>;

export default function RegistrationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [serverError, setServerError] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setServerError('');
    
    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000/api/enquiry';
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Something went wrong. Please try again.');
      }

      setIsSuccess(true);
      reset();
    } catch (err: any) {
      setServerError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="register" className="py-20 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-primary-50 opacity-50 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-blue-50 opacity-50 blur-3xl"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-5">
            <div className="md:col-span-2 bg-gradient-to-br from-primary-600 to-blue-800 p-10 text-white flex flex-col justify-between">
              <div>
                <h3 className="text-3xl font-bold mb-4">Secure your spot today!</h3>
                <p className="text-primary-100 mb-8 leading-relaxed">
                  Join the most innovative summer workshop for kids. Seats are limited to ensure personalized attention for every student.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center text-primary-100">
                    <CheckCircle2 className="w-5 h-5 mr-3 text-green-400" />
                    <span>Small batch sizes</span>
                  </div>
                  <div className="flex items-center text-primary-100">
                    <CheckCircle2 className="w-5 h-5 mr-3 text-green-400" />
                    <span>Certificate of completion</span>
                  </div>
                  <div className="flex items-center text-primary-100">
                    <CheckCircle2 className="w-5 h-5 mr-3 text-green-400" />
                    <span>100% refund policy (first 2 days)</span>
                  </div>
                </div>
              </div>
              <div className="mt-12 pt-8 border-t border-primary-500 border-opacity-50">
                <p className="text-sm text-primary-200">Got questions? Call us at</p>
                <p className="text-xl font-bold mt-1">+91 98765 43210</p>
              </div>
            </div>
            
            <div className="md:col-span-3 p-10 lg:p-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Registration Form</h3>
              
              {isSuccess ? (
                <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center animate-in fade-in zoom-in duration-300">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8 text-green-600" />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">Registration Successful!</h4>
                  <p className="text-gray-600 mb-6">Thank you for enrolling. We have received your details and our team will contact you shortly with the payment link.</p>
                  <button 
                    onClick={() => setIsSuccess(false)}
                    className="px-6 py-2 bg-white border border-gray-200 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Submit another response
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  {serverError && (
                    <div className="p-4 bg-red-50 border border-red-200 rounded-xl flex items-start text-red-600">
                      <AlertCircle className="w-5 h-5 mr-3 flex-shrink-0 mt-0.5" />
                      <p className="text-sm font-medium">{serverError}</p>
                    </div>
                  )}
                  
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1.5">Child's Name / Parent's Name *</label>
                    <input
                      id="name"
                      type="text"
                      className={`w-full px-4 py-3 rounded-xl border ${errors.name ? 'border-red-500 focus:ring-red-500' : 'border-gray-200 focus:border-primary-500 focus:ring-primary-500'} bg-gray-50 focus:bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-opacity-20`}
                      placeholder="Enter full name"
                      {...register('name')}
                    />
                    {errors.name && <p className="mt-1.5 text-sm text-red-500 flex items-center"><AlertCircle className="w-4 h-4 mr-1" />{errors.name.message}</p>}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1.5">Email Address *</label>
                    <input
                      id="email"
                      type="email"
                      className={`w-full px-4 py-3 rounded-xl border ${errors.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-200 focus:border-primary-500 focus:ring-primary-500'} bg-gray-50 focus:bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-opacity-20`}
                      placeholder="john@example.com"
                      {...register('email')}
                    />
                    {errors.email && <p className="mt-1.5 text-sm text-red-500 flex items-center"><AlertCircle className="w-4 h-4 mr-1" />{errors.email.message}</p>}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-1.5">Phone Number *</label>
                    <input
                      id="phone"
                      type="tel"
                      className={`w-full px-4 py-3 rounded-xl border ${errors.phone ? 'border-red-500 focus:ring-red-500' : 'border-gray-200 focus:border-primary-500 focus:ring-primary-500'} bg-gray-50 focus:bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-opacity-20`}
                      placeholder="e.g. 9876543210"
                      {...register('phone')}
                    />
                    {errors.phone && <p className="mt-1.5 text-sm text-red-500 flex items-center"><AlertCircle className="w-4 h-4 mr-1" />{errors.phone.message}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full mt-4 flex justify-center items-center py-4 px-6 border border-transparent rounded-xl shadow-sm text-base font-bold text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-70 disabled:cursor-not-allowed transition-all"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" />
                        Processing...
                      </>
                    ) : (
                      'Complete Registration'
                    )}
                  </button>
                  <p className="text-xs text-center text-gray-500 mt-4">By registering, you agree to our Terms of Service and Privacy Policy.</p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
