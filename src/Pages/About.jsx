import { FaBehance, FaDownload, FaGithub, FaLinkedin } from 'react-icons/fa';
import Sidebar from '../component/Sidebar';
import '../style/About.css';
import { CardData, LanguageSkillsData } from '../Additional';

const About = () => {
    return (
        <>
                <div className="side-tow bg-black">
                  <Sidebar />
                </div>
            <div className="about-page flex mobile:w-full ml-2 pl-18 ">
                <div className="side-one mobile:w-full">
                    <div className="introduction">
                        <div className="heading text-9xl font-bold text-zinc-500 text-center pt-20 opacity-40 hover:text-red-500 transition-all ease-linear mobile:text-4xl ">
                            ABOUT ME
                        </div>
                        <div className="text green text-justify font-thin text-white mobile:text-sm">
                            <span className="font-bold text-black bg-green-700">
                                Hello, I’m a Navneet Sondarva,
                            </span>
                            web-developer based on Paris. I have rich experience in web site
                            design & building and customization. Also I am good at
                            <span className="text-green space-x-3 font-bold">
                                html, css, jquery, bootstrap,Javascript,React JS, Redux,Tailwind
                            </span>
                        </div>
                        <div className="DownloadCV pt-9">
                            <div className="button">
                                <button
                                    className="flex flex-row gap-6 font-semibold items-center justify-center sans"
                                    type="button">
                                    <FaDownload />
                                    Download CV
                                </button>
                            </div>
                            <div className="icons ml-9 flex justify-between gap-4 items-center">
                                <div className="one">
                                    <FaGithub />
                                </div>
                                <div className="one">
                                    <FaLinkedin />
                                </div>
                                <div className="one">
                                    <FaBehance />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="our-service bg-black pt-28">
                        <div className="heading">
                            <h1 className="text-3xl text-green text-center font-semibold">
                                Our Service
                            </h1>
                        </div>
                        <div className="box-container">
                            {CardData.map((item, index) => (
                                <div
                                    className="box-one mt-7 ml-8"
                                    key={index}>
                                    <div className="icons-card text-3xl mt-6 mb-3 text-green">
                                        {item.icon }
                                    </div>
                                    <h3 className="box-title">{item.name}</h3>
                                    <p className="box-content">{item.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="skill ">
                        <h2 className="text-white font-semibold text-center mt-12 mb-12">-- My Skills</h2>
                        <div className="skill-container flex flex-wrap gap-4 mx-auto justify-center">
                            {LanguageSkillsData.map((item, index) => (
                                <div
                                    className="card text-center col-4  bg-dark"
                                    key={index}>
                                    <div className="card-image text-5xl flex justify-center mt-6 mb-3 text-white hover:text-green">{item.icon}</div>
                                    <div className="card-body">
                                        <div
                                            className="progress"
                                            role="progressbar"
                                            aria-label={`${item.color} example`}
                                            aria-valuenow={item.percentage}
                                            aria-valuemin="0"
                                            aria-valuemax="100">
                                            <div
                                                className={`progress-bar bg-${item.color}`}
												
                                                style={{ width: `${item.percentage}%` }}>
                                                {item.percentage}%
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="side-three mobile:hidden tablet:hidden mobile:w-full tablet:w-full"></div>
            </div>
        </>
    );
};

export default About;
