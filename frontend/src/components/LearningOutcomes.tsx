import { CheckCircle2 } from 'lucide-react';

export default function LearningOutcomes() {
  const outcomes = [
    {
      title: "Fundamentals of AI & Robotics",
      description: "Understand the core concepts of artificial intelligence and how robots interact with the real world."
    },
    {
      title: "Build Virtual Robots",
      description: "Design and simulate your own robots using interactive 3D virtual environments."
    },
    {
      title: "Coding Made Fun",
      description: "Learn block-based coding and transition to introductory Python programming."
    },
    {
      title: "Logical Problem Solving",
      description: "Develop critical thinking skills by solving exciting challenges and puzzles."
    },
    {
      title: "Capstone Project",
      description: "Apply your skills to build a final project and showcase it to parents and peers."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 tracking-tight">What will your child learn?</h2>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              Our curriculum is designed by education experts to be engaging, interactive, and highly educational. By the end of this workshop, your child will have gained practical skills in technology and coding.
            </p>
            
            <div className="space-y-6">
              {outcomes.map((outcome, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle2 className="w-6 h-6 text-green-500" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-bold text-gray-900">{outcome.title}</h3>
                    <p className="mt-1 text-gray-600">{outcome.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-primary-100 rounded-3xl transform -rotate-3 scale-105 -z-10"></div>
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 relative z-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-4">Weekly Schedule</h3>
              <ul className="space-y-6">
                <li className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center font-bold mr-4">W1</div>
                  <div>
                    <p className="font-bold text-gray-900">Introduction to Robotics</p>
                    <p className="text-sm text-gray-500">Basics, hardware, and safety.</p>
                  </div>
                </li>
                <li className="flex items-center">
                  <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center font-bold mr-4">W2</div>
                  <div>
                    <p className="font-bold text-gray-900">Coding Fundamentals</p>
                    <p className="text-sm text-gray-500">Logic, loops, and commands.</p>
                  </div>
                </li>
                <li className="flex items-center">
                  <div className="w-12 h-12 bg-pink-100 text-pink-600 rounded-lg flex items-center justify-center font-bold mr-4">W3</div>
                  <div>
                    <p className="font-bold text-gray-900">AI in Action</p>
                    <p className="text-sm text-gray-500">Sensors and machine learning basics.</p>
                  </div>
                </li>
                <li className="flex items-center">
                  <div className="w-12 h-12 bg-green-100 text-green-600 rounded-lg flex items-center justify-center font-bold mr-4">W4</div>
                  <div>
                    <p className="font-bold text-gray-900">Final Projects</p>
                    <p className="text-sm text-gray-500">Building and presentation.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
