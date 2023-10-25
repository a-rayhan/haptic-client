import './Banner.css';
import { FiArrowUpRight } from "react-icons/fi";
import Collaboration from './Collaboration';

const Banner = () => {
    return (
        <div className="lg:mt-24">
            <div className="bg-img h-[1000px] sm:h-[1500px] lg:h-screen">
                <div className="max-w-7xl mx-auto px-5 flex flex-col lg:flex-row md:items-center lg:gap-10 xl:gap-5 mb-16">
                    <div className="max-w-xl lg:max-w-md xl:max-w-xl mt-40 lg:mt-20 xl:mt-40">
                        <p className="text-pink-500 md:text-lg font-medium mb-3">
                            COLLABORATION WITH CHAT
                        </p>

                        <h1 className="text-white text-5xl lg:text-6xl xl:text-7xl font-semibold leading-none mb-2">
                            Better Design
                            For Your Digital
                            Products.
                        </h1>

                        <p className="text-white md:text-lg mb-7">
                            On the other hand, We denounce with righteous design
                            ne indignation And more to Dislike and demoralized the
                            Charms of Pleasure At vero eos et
                        </p>

                        <button className="text-white lg:text-lg bg-gradient-to-r from-blue-500 to-pink-500 py-4 px-6 rounded-full flex items-center gap-2 uppercase">
                            Read More <FiArrowUpRight className='text-2xl' />
                        </button>
                    </div>

                    <div className="sm:max-w-xl lg:max-w-lg xl:max-w-full flex gap-3 items-center mt-12 xl:mt-20 relative ">
                        <div>
                            <img src="https://themexriver.com/wp/haptic/wp-content/uploads/2023/08/bn-img2.jpg" alt="" className="rounded-full" />
                        </div>

                        <div className="xl:h-[500px] -mt-20">
                            <img src="https://themexriver.com/wp/haptic/wp-content/uploads/2023/08/bn-img1.jpg" alt="" className="rounded-full h-full" />
                        </div>

                        <div className="absolute left-28 lg:left-[180px] xl:left-[240px]">
                            <img src="https://themexriver.com/wp/haptic/wp-content/uploads/2023/08/bs4.png" alt="" />
                        </div>

                        <div className="absolute bottom-16 lg:-left-16 -left-10">
                            <img src="https://themexriver.com/wp/haptic/wp-content/uploads/2023/08/bs1.png" alt="" />
                        </div>

                        <div className="absolute -bottom-5 lg:-left-14 -left-10">
                            <img src="https://themexriver.com/wp/haptic/wp-content/uploads/2023/08/bs2.png" alt="" />
                        </div>

                        <div className="absolute bottom-0 left-40">
                            <img src="https://themexriver.com/wp/haptic/wp-content/uploads/2023/08/bs3.png" alt="" />
                        </div>
                    </div>
                </div>

                <Collaboration />
            </div>
        </div>
    );
};

export default Banner;