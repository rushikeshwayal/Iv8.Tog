// AboutUs.jsx

import myImg from '../assets/meeee.png';
import Footer from './Home/Footer';
import Nav from './Home/Nav';
const AboutUs = () => {
  return (
    <div className='bg-black'>
    <Nav/>
    <div className="bg-black py-12">
      <div className="container mx-auto px-4 text-center">
        {/* Section Title */}
        <h1 className="text-4xl font-bold text-white mb-6">About Iv8.Tog</h1>

        {/* Intro Section */}
        <p className="text-lg text-white mb-8">
          At Iv8.Tog, we empower individuals and organizations to unlock their potential 
          through advanced technologies. Our focus is on delivering cutting-edge solutions 
          in Machine Learning, AI, Web Development, and Natural Language Processing.
        </p>

        {/* Our Mission */}
        <div className="mb-12">
          <h2 className="text-3xl font-semibold text-white mb-4">Our Mission</h2>
          <p className="text-white">
            To bridge the gap between innovation and application by offering practical and scalable 
            technology solutions. We aim to simplify complex problems and provide our clients with 
            tools that drive growth and efficiency.
          </p>
        </div>

        {/* Our Vision */}
        <div className="mb-12">
          <h2 className="text-3xl font-semibold text-white mb-4">Our Vision</h2>
          <p className="text-white">
            We envision a future where technology seamlessly integrates into everyday life, making 
            tasks more efficient, businesses more effective, and innovation more accessible.
          </p>
        </div>

        {/* Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold  mb-2">Innovation</h3>
            <p className="text-gray-600">
              We constantly push the boundaries of what's possible, staying ahead of the curve with 
              the latest technologies.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Collaboration</h3>
            <p className="">
              Working together with our clients and partners to create meaningful and impactful 
              solutions.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Excellence</h3>
            <p className="text-gray-600">
              Our commitment to delivering the highest quality in everything we do, from design to 
              deployment.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-semibold text-white mb-6">Meet the Team</h2>
          <div className="flex flex-wrap justify-center">
            <div className="bg-white p-6 rounded-lg shadow-lg m-4 w-72">
              <div className="w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden">
                <img
                  src={myImg}
                  alt="Team Member"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Rushikesh Wayal</h3>
              <p className="text-gray-600">Full-Stack Developer & Founder</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg m-4 w-72">
              <div className="w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Team Member"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">John Doe</h3>
              <p className="text-gray-600">AI/ML Specialist</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-indigo-500 text-white py-8 px-6 rounded-lg shadow-lg mt-12">
          <h2 className="text-3xl font-semibold mb-4">Want to Work with Us?</h2>
          <p className="text-lg mb-6">
            We're always looking for passionate people and exciting projects. Let's make something
            awesome together.
          </p>
          <a
            href="/contact"
            className="bg-white text-indigo-500 px-6 py-3 rounded-full font-semibold hover:bg-gray-100"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default AboutUs;
