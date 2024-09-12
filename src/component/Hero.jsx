import React from 'react';
import PrimaryButton from './PrimaryButton';

const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-blue-600 to-blue-400 text-white py-20">
      <div className="container mx-auto flex flex-col items-center text-center">
        <h1 className="text-5xl font-bold mb-4">Your Moments, Perfectly Timed</h1>
        <p className="text-lg mb-8">
          Stay on top of your schedule with real-time reminders for important tasks and events.
        </p>
        <PrimaryButton text="Get Started" />
        <img src="phone-mockup.png" alt="TimeKeeper App" className="mt-8 w-1/3" />
      </div>
    </section>
  );
};

export default Hero;

