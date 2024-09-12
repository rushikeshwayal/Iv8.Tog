import CollegeBg from "../../assets/College Bg.png";
import RaisoniBg from "../../assets/Raaisoni education.png";
function CollegeInfo() {
    return(
<div>
    <div className="flex flex-wrap  justify-around m-10 mt-20">
    <img src={CollegeBg} className="h-[120px] sm:h-[6   0] " />
    <div className="flex flex-col justify-center items-center">
    <h1 className="font-bold text-sm sm:text-xl text-purple-500">G.H. Raisoni College of Engineering and Management Pune</h1>
    <h1 className="font-bold text-sm sm:text-xl text-orange-500"> (An Autonomous Institute Affiliated To Savitribai Phule Pune University)</h1>
    <h1 className="font-bold text-sm sm:text-xl text-orange-500">NAAC A+ Grade & NBA Accredite</h1>
    </div>
    <img src={RaisoniBg}  className="h-[90px] "/>
</div>
</div>
    );
}

export default CollegeInfo;