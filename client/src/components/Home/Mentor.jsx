import Mentor1 from "../../assets/my photolo.jpg"; // Update the path to your image accordingly
import Mentor2 from "../../assets/rohit.jpg"; // Update the path to your image accordingly
import Mentor3 from "../../assets/Rohan.jpg"; // Update the path to your image accordingly

function Mentor() {
  return (
    <div className="mt-12 flex flex-col items-center" id="mentor-section">
      {/* Heading */}
      <p className="text-4xl font-medium text-white mb-20" id="mentor-heading">Mentor&#39;s</p>
      
      {/* Mentor Images */}
      <div className="flex justify-evenly items-center w-full h-auto flex-wrap gap-8">
        <div className="flex flex-col items-center">
          <a href="https://www.linkedin.com/in/rushikesh-wayal-87134a220/" target="_blank" rel="noopener noreferrer">
            <img
              className="h-[300px] w-[300px] object-cover rounded-lg transition duration-500 ease-in-out transform hover:scale-110 hover:filter-none grayscale"
              src={Mentor1}
              alt="Mentor 1"
            />
          </a>
          <p className="mt-4 text-white text-xl font-semibold">Rushikesh</p>
        </div>
        <div className="flex flex-col items-center">
          <a href="https://www.linkedin.com/in/rushikesh-wayal-87134a220/" target="_blank" rel="noopener noreferrer">
            <img
              className="h-[300px] w-[300px] object-cover rounded-lg transition duration-500 ease-in-out transform hover:scale-110 hover:filter-none grayscale"
              src={Mentor2}
              alt="Mentor 2"
            />
          </a>
          <p className="mt-4 text-white text-xl font-semibold">Rohit</p>
        </div>
        <div className="flex flex-col items-center">
          <a href="https://www.linkedin.com/in/rushikesh-wayal-87134a220/" target="_blank" rel="noopener noreferrer">
            <img
              className="h-[300px] w-[300px] object-cover rounded-lg transition duration-500 ease-in-out transform hover:scale-110 hover:filter-none grayscale"
              src={Mentor3}
              alt="Mentor 3"
            />
          </a>
          <p className="mt-4 text-white text-xl font-semibold">Rohan</p>
        </div>
      </div>
    </div>
  );
}

export default Mentor;
