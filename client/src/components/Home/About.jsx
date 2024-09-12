// import React from 'react';
import AboutVideo from '../../assets/About.mp4'; // Update this with the correct path to your video

function AboutSection() {
  return (
    <div id="about-section" className="mt-12 flex flex-col md:flex-row justify-center items-center">
      {/* Video */}
      <video
        className="w-full md:w-[400px] h-auto object-cover rounded-md shadow-lg"
        autoPlay
        loop
        muted
        src={AboutVideo}
        alt="About Innovate Together Video"
      ></video>

      {/* Content */}
      <div className="md:ml-8 mt-5 md:mt-0 text-center md:text-left space-y-4 max-w-2xl">
        {/* Main Heading */}
        <p id="about_heading" className="text-4xl sm:text-6xl font-bold text-purple-500 leading-tight">
          About <br /> Innovate Together
        </p>

        {/* Subtitle */}
        <p id="about_heading_subtitle" className="text-xl sm:text-3xl font-semibold text-orange-500">
          Level up your coding experience with <br /> Innovate Together!
        </p>

        {/* Info Paragraph */}
        <p id="about_info" className="text-sm sm:text-lg text-white leading-relaxed">
          "Innovate Together is a collaborative open-source project dedicated to fostering innovation through shared
          knowledge and diverse expertise. By breaking down barriers to collaboration and providing a platform for
          inclusive participation, it enables individuals to collectively tackle challenges and drive progress."
        </p>
      </div>
    </div>
  );
}

export default AboutSection;
