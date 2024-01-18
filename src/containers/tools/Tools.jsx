import { icons } from "../../assets/icons";  // Assuming all icons are exported from assets.js as a single object

const Tools = () => {
  return (
    <div className="section__padding section__margin">
      <div className="px-[8rem] py-[8rem] 
                            lg:px-[4rem] sm:px-[2rem] sm:py-[40%] lg:py-[30%]
                            flex flex-col justify-start align-center">
        <h1 className="text-2xl mb-10">Some technologies I&apos;ve been working with:</h1>
        <div className="flex justify-center w-full">
        <div className="flex py-[4rem] px-[2rem] flex-wrap w-[50%] justify-center border">
            {Object.keys(icons).map((iconName) => (
              <img key={iconName} src={icons[iconName]} alt={iconName} width="60" height="60" className="img-item m-3"/>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tools;
