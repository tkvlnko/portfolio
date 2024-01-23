import { icons } from "../../assets/icons";  // Assuming all icons are exported from assets.js as a single object
import "./Tools.css"
const Tools = () => {
  return (
    <div className="section__padding section__margin">
      <div className="px-[8rem] py-[8rem] 
                            lg:px-[4rem] sm:px-[2rem] sm:py-[40%] lg:py-[30%]
                            flex flex-col justify-center align-center text-center">
        <h1 className="text-2xl mb-10">Some technologies I&apos;ve been working with:</h1>
        <div className="flex justify-center w-full">
        <div className="flex py-[4rem] px-[2rem] flex-wrap w-[50%] sm:w-full justify-center border rounded-xl border-violet-300">
        {Object.keys(icons).map((iconName) => (
          <div className="img-item m-3 sm:m-1" key={iconName}>
            <img  
              src={icons[iconName]} 
              alt={iconName} 
              width="60" 
              height="60"
            />
          </div>
        ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tools;
