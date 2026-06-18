import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Do I need to buy any physical robot kit?",
      answer: "No physical robot kit is required for this specific online workshop. We use an advanced 3D virtual robotics simulator that allows children to build and program robots entirely in their browser. All necessary software is included in the fee."
    },
    {
      question: "Is prior coding experience required?",
      answer: "Not at all! This workshop is designed for beginners. We start with simple visual block-based programming to teach the logic, and slowly introduce more advanced concepts as the children get comfortable."
    },
    {
      question: "What equipment does my child need?",
      answer: "Your child will need a laptop or desktop computer (Windows, Mac, or Chromebook) with a reliable internet connection. A webcam and microphone are recommended for interacting with instructors during live sessions."
    },
    {
      question: "What if my child misses a live session?",
      answer: "All live sessions are recorded and made available within 24 hours. Your child can watch the recording and catch up. Our instructors are also available via chat for any questions they might have while watching."
    }
  ];

  return (
    <section className="py-20 bg-gray-50 border-t border-gray-100">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600">Got questions? We've got answers.</p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-2xl border transition-all duration-200 ${
                openIndex === index ? 'border-primary-500 shadow-md' : 'border-gray-200 hover:border-primary-300'
              }`}
            >
              <button 
                className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-bold text-gray-900 text-lg">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-primary-600 flex-shrink-0 ml-4" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0 ml-4" />
                )}
              </button>
              
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 pb-5 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
