import { FiArrowUpRight } from "react-icons/fi";
import { PiStrategyBold } from "react-icons/pi";

const Clients = () => {
    return (
        <section className="max-w-7xl mx-auto px-5 mt-[580px] sm:mt-40 md:mt-20 lg:pt-16 xl:pt-60 pb-32">
            <div className="flex flex-col lg:flex-row gap-14 justify-center items-center">
                <div className="relative sm:max-w-xl lg:max-w-sm xl:max-w-full">
                    <img src="https://themexriver.com/wp/haptic/wp-content/uploads/2023/08/ab1.png" alt="" />

                    <div className="bg-gradient-to-r from-blue-500 to-pink-500 py-5 px-8 rounded-3xl absolute -bottom-5 right-0 lg:-right-3">
                        <p className="text-6xl font-bold text-white">
                            32+
                        </p>
                        <p className="text-xl font-bold text-white">
                            Years <br /> Experinece
                        </p>
                    </div>
                </div>

                <div className="sm:max-w-xl flex-1 flex flex-col xl:justify-end">
                    <p className="text-pink-500 xl:text-lg font-medium mb-3">
                        OVER 150.000+ CLIENTS
                    </p>

                    <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none mb-3">
                        CREATIVE ROBLEM
                        SOLVING INNOVATIONS
                    </h1>

                    <p className="xl:text-xl mb-7">
                        ON THE OTHER HAND, WE DENOUNCE WITH RIGHTEOUS INDIGNATION
                        AND DISLIKE MEN WHO ARE BEGUILED AND DEMORALIZED THE
                        CHARMS OF PLEASURE AT VERO EOS ET
                    </p>

                    <div className="mb-10 grid lg:grid-cols-2 gap-5">
                        <div className="flex items-center gap-5">
                            <PiStrategyBold className="text-4xl" />
                            <p className="text-xl font-semibold">
                                Brand Strategy & Art Direction
                            </p>
                        </div>
                        <div className="flex items-center gap-5">
                            <PiStrategyBold className="text-4xl" />
                            <p className="text-xl font-semibold">
                                UX/UI Design & Website/App Design
                            </p>
                        </div>
                        <div className="flex items-center gap-5">
                            <PiStrategyBold className="text-4xl" />
                            <p className="text-xl font-semibold">

                                Trendinf designing experience.
                            </p>
                        </div>
                        <div className="flex items-center gap-5">
                            <PiStrategyBold className="text-4xl" />
                            <p className="text-xl font-semibold">
                                Brand Strategy & Art Direction
                            </p>
                        </div>
                    </div>

                    <div>
                        <button className="text-white xl:text-lg bg-gradient-to-r from-blue-500 to-pink-500 py-4 px-6 rounded-full flex items-center gap-2 uppercase">
                            Read More <FiArrowUpRight className='text-2xl' />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Clients;