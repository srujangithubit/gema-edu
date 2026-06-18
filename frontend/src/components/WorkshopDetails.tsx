import { Calendar, Clock, MonitorPlay, Users, CreditCard } from 'lucide-react';

export default function WorkshopDetails() {
  const details = [
    {
      icon: <Users className="w-6 h-6 text-primary-500" />,
      label: "Age Group",
      value: "8–14 Years",
      bgColor: "bg-blue-50"
    },
    {
      icon: <Clock className="w-6 h-6 text-primary-500" />,
      label: "Duration",
      value: "4 Weeks",
      bgColor: "bg-indigo-50"
    },
    {
      icon: <MonitorPlay className="w-6 h-6 text-primary-500" />,
      label: "Mode",
      value: "Online Interactive",
      bgColor: "bg-purple-50"
    },
    {
      icon: <Calendar className="w-6 h-6 text-primary-500" />,
      label: "Start Date",
      value: "15 July 2026",
      bgColor: "bg-pink-50"
    },
    {
      icon: <CreditCard className="w-6 h-6 text-primary-500" />,
      label: "Fee",
      value: "₹2,999",
      bgColor: "bg-green-50"
    }
  ];

  return (
    <section id="details" className="py-20 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">Workshop Highlights</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Everything you need to know before joining the most exciting summer program of the year.</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {details.map((detail, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 flex flex-col items-center text-center group"
            >
              <div className={`w-14 h-14 ${detail.bgColor} rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                {detail.icon}
              </div>
              <p className="text-sm text-gray-500 font-medium mb-1">{detail.label}</p>
              <p className="text-lg font-bold text-gray-900">{detail.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
