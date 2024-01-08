import { Canvas } from "@react-three/fiber"
import Blob from "../../components/Blob/index"


const Hero = () => {
    return (
        <div className="section__margin section__padding static">
            <div className="px-8 py-6 flex justify-center align-center">
                <div className="flex flex-col max-w-[400px] px-3">
                    <p className="font-space text-lightPurple mb-10">hi, my name is</p>
                    <h1 className="">Taya Kovalenko.</h1>
                    <h1 className="opacity-75">I build things for the web.</h1>
                    <p>I&apos;m  a software engineer specialising in building (and occasionally designing) exceptional digital experiences. Currently, I&apos;m focused on</p>
                </div>
                <div className="w-[50rem] h-[50rem] absolute -z-[1000] right-0">
                <Canvas camera={{ position: [0.0, 0.0, 7.0]}}>
                    <Blob></Blob>
                </Canvas>
                </div>
            </div>
            
        </div>
    )
}

export default Hero