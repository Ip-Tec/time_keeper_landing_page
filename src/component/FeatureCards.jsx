import React from 'react';

const features = [
  {
    title: 'Set Reminders',
    description: 'Create personalized reminders for any task or event.',
    icon: '🕑', // Placeholder for an icon
  },
  {
    title: 'Real-Time Notifications',
    description: 'Receive notifications exactly when you need them.',
    icon: '🔔',
  },
  {
    title: 'User Authentication',
    description: 'Securely manage your reminders with a personalized profile.',
    icon: '👤',
  },
];

const FeatureCards = () => {
  return (
    <section id="features" className="py-16 bg-blue-100">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureCards;
