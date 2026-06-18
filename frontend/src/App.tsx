
import Hero from './components/Hero';
import WorkshopDetails from './components/WorkshopDetails';
import LearningOutcomes from './components/LearningOutcomes';
import FAQ from './components/FAQ';
import RegistrationForm from './components/RegistrationForm';

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center cursor-pointer">
              {/* Kidrove Mock Logo */}
              <div className="w-10 h-10 bg-primary-600 rounded-xl flex items-center justify-center mr-3 shadow-sm transform -rotate-6">
                <span className="text-white font-bold text-xl">K</span>
              </div>
              <span className="text-2xl font-black text-gray-900 tracking-tight">Kidrove</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#details" className="text-gray-600 hover:text-primary-600 font-medium transition-colors">Details</a>
              <a href="#outcomes" className="text-gray-600 hover:text-primary-600 font-medium transition-colors">What to expect</a>
              <a href="#faq" className="text-gray-600 hover:text-primary-600 font-medium transition-colors">FAQ</a>
            </nav>
            <div className="flex">
              <a href="#register" className="inline-flex items-center px-5 py-2.5 border border-transparent text-sm font-bold rounded-lg shadow-sm text-white bg-primary-600 hover:bg-primary-700 transition-colors">
                Book Now
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        <Hero />
        <WorkshopDetails />
        <div id="outcomes"><LearningOutcomes /></div>
        <div id="faq"><FAQ /></div>
        <RegistrationForm />
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center mr-3">
              <span className="text-gray-900 font-bold text-lg">K</span>
            </div>
            <span className="text-xl font-black tracking-tight">Kidrove</span>
          </div>
          <p className="text-gray-400 max-w-md mx-auto mb-8">Discover and book amazing kids activities, events, and educational programs.</p>
          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-500 text-sm">© 2026 Kidrove. All rights reserved. (Demo Project)</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
