import { FiArrowUpRight } from "react-icons/fi";
import { PiStrategyBold } from "react-icons/pi";

const Clients = () => {
    return (
        <section className="max-w-7xl mx-auto px-5 pt-72 pb-32">
            <div className="flex gap-14">
                <div className="relative">
                    <img src="https://themexriver.com/wp/haptic/wp-content/uploads/2023/08/ab1.png" alt="" />

                    <div className="bg-gradient-to-r from-blue-500 to-pink-500 py-5 px-8 rounded-3xl absolute -bottom-5 -right-3">
                        <p className="text-6xl font-bold text-white">
                            32+
                        </p>
                        <p className="text-xl font-bold text-white">
                            Years <br /> Experinece
                        </p>
                    </div>
                </div>

                <div className="flex-1 flex flex-col justify-end">
                    <p className="text-pink-500 text-lg font-medium mb-3">
                        OVER 150.000+ CLIENTS
                    </p>

                    <h1 className="text-6xl font-bold leading-none mb-3">
                        CREATIVE ROBLEM
                        SOLVING INNOVATIONS
                    </h1>

                    <p className="text-xl mb-7">
                        ON THE OTHER HAND, WE DENOUNCE WITH RIGHTEOUS INDIGNATION
                        AND DISLIKE MEN WHO ARE BEGUILED AND DEMORALIZED THE
                        CHARMS OF PLEASURE AT VERO EOS ET
                    </p>

                    <div className="mb-10 grid grid-cols-2 gap-5">
                        <div className="flex items-center gap-4">
                            <PiStrategyBold className="text-3xl" />
                            <p className="text-xl font-semibold">
                                Brand Strategy & Art Direction
                            </p>
                        </div>
                        <div className="flex items-center gap-4">
                            <PiStrategyBold className="text-3xl" />
                            <p className="text-xl font-semibold">
                                UX/UI Design & Website/App Design
                            </p>
                        </div>
                        <div className="flex items-center gap-4">
                            <PiStrategyBold className="text-3xl" />
                            <p className="text-xl font-semibold">

                                Trendinf designing experience.
                            </p>
                        </div>
                        <div className="flex items-center gap-4">
                            <PiStrategyBold className="text-3xl" />
                            <p className="text-xl font-semibold">
                                Brand Strategy & Art Direction
                            </p>
                        </div>
                    </div>

                    <div>
                        <button className="text-white text-lg bg-gradient-to-r from-blue-500 to-pink-500 py-4 px-6 rounded-full flex items-center gap-2 uppercase">
                            Read More <FiArrowUpRight className='text-2xl' />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Clients;