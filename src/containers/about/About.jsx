import "./About.css"

const About = () => {
    return (
        <div className="px-[8rem] py-[8rem] 
        lg:px-[4rem] sm:px-[2rem] sm:py-[40%] lg:py-[30%]
        flex justify-start align-center">
            <div>
                <h1>About me.</h1>
                <p>Hello, and welcome to my website! My name is Taya Kovalenko, and I&apos;m a software developer from Moscow with a passion for using technology to create innovative and intuitive solutions.<br/><br/>
                        
                        I am currently earning my degree in Computer Science in 
                        <span>Paris-Dauphine University</span> (France).<br/><br/>
                        
                        I have always been fascinated by the power of software to transform the way we live, work, and interact with the world around us.<br/><br/>
                        
                        Since 2019, I have worked on a variety of projects, ranging from <span>telegram bots</span> to <span>web applications</span> and everything in between.<br/><br/>
                        
                        What I enjoy most about software development is the challenge of creating something that not only works, but also delights users and improves their lives in some way. I am always striving to improve my skills and stay up-to-date with the latest industry trends and best practices.
                </p>
            </div>
            <div className="wrapper">
                        <div className="box"></div>
                        <div className="box-border"></div>
                    </div>

        </div>
    )
}

export default About