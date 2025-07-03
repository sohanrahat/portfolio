import React from 'react';
import AnimatedCard from './AnimatedCard';

const About = () => {
  return (
    <section id="about" className="py-20 px-6" style={{ backgroundColor: '#b8c8fb' }}>
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-700">
          About Me
        </h2>
        <AnimatedCard className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20">
          <p className="text-lg leading-relaxed mb-6 text-gray-700 text-start">
            Hey there! I am a junior front-end web developer based in Dhaka, Bangladesh, specializing in building robust and user-friendly web applications.

            My background as a photographer and filmmaker equips me with a keen eye for design, visual storytelling, and user experience—unique strengths I bring to front-end development.

            Driven by curiosity and a commitment to continuous learning, I combine creative thinking with technical problem-solving and am ready to contribute to a forward-thinking team.
          </p>
        </AnimatedCard>
      </div>
    </section>
  );
};

export default About;
