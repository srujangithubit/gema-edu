import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-white pt-20 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-50 text-primary-600 font-medium text-sm mb-6">
              <span className="flex w-2 h-2 rounded-full bg-primary-600 mr-2"></span>
              Summer 2026 Admissions Open
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6 tracking-tight">
              AI & Robotics <br className="hidden md:block" />
              <span className="text-primary-600">Summer Workshop</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl leading-relaxed">
              Spark your child's imagination! Join our immersive 4-week online program where kids learn to build, code, and control their own robots using cutting-edge AI technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#register" 
                className="inline-flex justify-center items-center px-8 py-4 text-base font-semibold text-white bg-primary-600 rounded-xl hover:bg-primary-700 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Enroll Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a 
                href="#details" 
                className="inline-flex justify-center items-center px-8 py-4 text-base font-semibold text-gray-700 bg-white border-2 border-gray-200 rounded-xl hover:border-primary-500 hover:text-primary-600 transition-all duration-200"
              >
                View Details
              </a>
            </div>
            
            <div className="mt-10 flex items-center gap-6 text-sm font-medium text-gray-500">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="avatar" />
                  </div>
                ))}
              </div>
              <p>Over <span className="text-gray-900 font-bold">500+</span> kids already enrolled</p>
            </div>
          </div>
          
          <div className="relative lg:ml-auto w-full max-w-lg">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary-100 to-primary-50 rounded-3xl transform rotate-3 scale-105 -z-10"></div>
            <img 
              src="/hero.png" 
              alt="Kids building robots" 
              className="rounded-3xl shadow-2xl object-cover w-full h-auto border-4 border-white relative z-10"
            />
            
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl flex items-center gap-4 z-20 animate-bounce" style={{ animationDuration: '3s' }}>
              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xl font-bold">
                ⭐
              </div>
              <div>
                <p className="text-xs text-gray-500 font-medium">Rating</p>
                <p className="text-lg font-bold text-gray-900">4.9/5.0</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
