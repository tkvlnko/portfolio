import "./About.css"
import { profilePhoto, profilePhoto2, arrowLeft } from "../../assets"
import { useState } from "react"

const data = [
    profilePhoto, 
    profilePhoto2
]

const About = () => {
    const [activeImageIndex, setActiveImageIndex] = useState(0)

    const handleNextClick = () => {
        setActiveImageIndex((activeImageIndex + 1) % data.length)
        const active = document.querySelector('.li-item-coloured')
        active.classList.remove('li-item-coloured')

        const circles = Array.from(document.getElementsByClassName('li-item'))
        console.log(circles[0])
        circles[(activeImageIndex + 1) % data.length].classList.add('li-item-coloured')

    }


    return (
        <div className="section__margin section__padding w-full" id="about">
            <div className="px-[8rem] py-[8rem] lg:px-[4rem] sm:px-[2rem] sm:py-[40%] lg:py-[30%]
                            flex  justify-center align-center">
            <div className="flex flex-col  min-w-[60%] mr-6 static">
                <div className="w-[25rem] h-[25rem] bg-violet-800 -z-[1200] absolute rounded-[50%] -left-[10%] top-[120%] blur-[90px] opacity-25 "></div>

                <h1 className="text-2xl mb-10">About me.</h1>
                <p className="text-[14px] leading-6">Hello, and welcome to my website!<br/>
                    My name is Taya Kovalenko, and I&apos;m a young software developer from Moscow with a passion for using technology 
                    to create innovative and intuitive solutions.<br/><br/>

                    The power of software to transform our lives has always fascinated me. Ever since I was 16, I&apos;ve found immense joy in turning my designs into extraordinary creations by means of technologies. Since 2019, I&apos;ve worked on various projects, from building Telegram bots to creating web applications and everything in between. <br/><br/>

                    What I love most about software development is the challenge of building something that not only works well but also brings joy to users and enhances their lives. I&apos;m always working to improve my skills and stay updated with the latest industry trends. <br/><br/>

                    But software development is not my only passion. Currently, I&apos;m pursuing a Bachelor&apos;s degree in Computer Science at <span className="span-about"><a href="https://en.wikipedia.org/wiki/Higher_School_of_Economics">HSE</a></span>, specializing in <span className="span-about"><a href="https://www.hse.ru/en/ba/data/">Data Science and Business Analytics</a></span>. Here, I&apos;m learning subjects like Linear Algebra, Calculus, Discrete Math, Data Structures, Algorithms, and more, which are laying a strong foundation for my future career in IT.
                    </p>
            </div>


            <div className="flex justify-center items-center mt-[6rem] md:hidden">

                <div className="flex flex-col w-full justify-center items-center ">
                    <div className="mb-10 mx-4 h-[16rem] w-[16rem] img-profile"><img src={data[activeImageIndex]} className="rounded-3xl"/></div>
                    <div className="flex">
                        <div id="item" className="li-item li-item-coloured"></div>
                        <div id="item" className="li-item"></div>
                    </div>
                </div>

                <div className="flex justify-center items-center h-[2rem] w-[2rem] arrow-left" onClick={handleNextClick}><img src={arrowLeft} /></div>

            </div>
            
            

        </div>


        </div>
        
    )
}

export default About