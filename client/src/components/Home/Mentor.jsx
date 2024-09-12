import Mentor1 from "../../assets/Untitled design (1).png"; // Update the path to your image accordingly

function Mentor() {
  return (
    <div className="mt-12 flex flex-col items-center " id="mentor-section">
      {/* Heading */}
      <p className="text-4xl font-medium  text-white mb-20" id="mentor-heading">Team Member`s</p>
      
      {/* Mentor Images */}
      <div className="flex justify-evenly items-center w-full  h-96">
        <a href="https://www.linkedin.com/in/rushikesh-wayal-87134a220/" target="_blank" rel="noopener noreferrer">
          <img className="h-[400px] transition-transform duration-1000 ease-in-out hover:scale-110" src={Mentor1} alt="Mentor 1" />
        </a>
        <a href="https://www.linkedin.com/in/rushikesh-wayal-87134a220/" target="_blank" rel="noopener noreferrer">
          <img className="h-[400px] transition-transform duration-1000 ease-in-out hover:scale-110" src={Mentor1} alt="Mentor 2" />
        </a>
        <a href="https://www.linkedin.com/in/rushikesh-wayal-87134a220/" target="_blank" rel="noopener noreferrer">
          <img className="h-[400px] transition-transform duration-1000 ease-in-out hover:scale-110" src={Mentor1} alt="Mentor 3" />
        </a>
      </div>
    </div>
  );
}

export default Mentor;
