import { Canvas } from "@react-three/fiber"
import Blob from "../../components/Blob/index"
import { arrow } from "../../assets"
import "./Hero.css"


const Hero = () => {
    return (
        <div className="section__margin section__padding static">
            <div className="px-[8rem] py-[8rem] 
                            lg:px-[4rem] sm:px-[2rem] sm:py-[40%] lg:py-[30%]
                            flex justify-start align-center">
                <div className="flex flex-col max-w-[70%] lg:max-w-full">
                    <p className="font-space text-lightPurple mb-10">hi, my name is</p>
                    <h1 className="">Taya Kovalenko.</h1>
                    <h1 className="opacity-75">I build things for the web.</h1>
                    <p className="mt-7 max-w-[70%] sm:max-w-full text-[14px]">I&apos;m  a software engineer specialising in building (and occasionally designing) exceptional digital experiences. Currently, I&apos;m focused on</p>
                    <button className="border-[0.5px] border-indigo-300 rounded-2xl my-8 py-3 px-6  transition duration-500 font-space text-indigo-300 flex button-order button-85 justify-center items-center">
                        <p className="mr-6 sm:m-0">order a website</p>
                        <div className="sm:hidden flex justify-center"><img src={arrow}/></div>
                        
                    </button>

                </div>
                <div className="w-[50rem] h-[50rem] absolute -z-[1000] right-0 top-5 lg:hidden">
                <Canvas camera={{ position: [0.0, 0.0, 7.0]}}>
                    <Blob></Blob>
                </Canvas>
                </div>
                <div className="w-[30rem] h-[30rem] bg-violet-400 -z-[1200] absolute rounded-[50%] right-[10%] top-[25%] blur-[50px] opacity-50 lg:-right-[20%]"></div>
                <div className="w-[15rem] h-[15rem] bg-violet-400 -z-[1200] absolute rounded-[50%] -left-[10%] top-[20%] blur-[100px] opacity-75"></div>

            </div>
            
        </div>
    )
}

export default Hero