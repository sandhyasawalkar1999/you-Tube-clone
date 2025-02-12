import React from 'react'
import { GoHome } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { CiMusicNote1 } from "react-icons/ci";

import { FaChevronRight } from "react-icons/fa";
import { MdHistory } from "react-icons/md";
import { MdPlaylistPlay } from "react-icons/md";
import { FaYoutube } from "react-icons/fa";
import { RiFolderVideoLine } from "react-icons/ri";
import { HiOutlineAcademicCap } from "react-icons/hi2";
import { MdOutlineWatchLater } from "react-icons/md";
import { BiLike } from "react-icons/bi";

import { SiYoutubestudio } from "react-icons/si";
import { SiYoutubekids } from "react-icons/si";
import { SiYoutubemusic } from "react-icons/si";
import { SiTrendmicro } from "react-icons/si";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { BiNews } from "react-icons/bi";
import { CgMediaLive } from "react-icons/cg";
import { SiYoutubegaming } from "react-icons/si";
import { TfiCup } from "react-icons/tfi";
import { BiMoviePlay } from "react-icons/bi";
import { SiStylelint } from "react-icons/si";
import { MdPodcasts } from "react-icons/md";
import { AiOutlineSetting } from "react-icons/ai";
import { BsFlag } from "react-icons/bs";
import { IoHelpCircleOutline } from "react-icons/io5";
import { MdOutlineFeedback } from "react-icons/md";
import { IoGameControllerOutline } from "react-icons/io5";






const Sidebar = () => {



    const sidebarItems = [
        {
            id: 1,
            name: "Home",
            icon: <GoHome />,
        },
        {
            id: 2,
            name: "Shorts",
            icon: <SiYoutubeshorts />,
        },
        {
            id: 3,
            name: "Subscriptions",
            icon: <MdOutlineSubscriptions />,
        },
    ]

    const sidebarItems2 = [

        {
            id: 2,
            name: "History",
            icon: <MdHistory />
        },
        {
            id: 3,
            name: "Playlists",
            icon: <MdPlaylistPlay />
        },
        {
            id: 4,
            name: "Your Videoes",
            icon: <RiFolderVideoLine />

        },
        {
            id: 5,
            name: "Your Courses",
            icon: <HiOutlineAcademicCap />
        },
        {
            id: 6,
            name: "Watch Later",
            icon: <MdOutlineWatchLater />
        },
        {
            id: 7,
            name: "Liked Videoes",
            icon: <BiLike />
        },


    ]
    const sidebarItems3 = [

        {
            id: 1,
            name: "Thrending",
            icon: <SiTrendmicro />
        },
        {
            id: 2,
            name: "Shopping",
            icon: <HiOutlineShoppingBag />
        },
        {
            id: 3,
            name: "Music",
            icon: <CiMusicNote1 />

        },
        {
            id: 4,
            name: "Movies",
            icon: <BiMoviePlay />
        },
        {
            id: 5,
            name: "Live",
            icon: <CgMediaLive />
        },
        {
            id: 6,
            name: "Gaming",
            icon: <IoGameControllerOutline />
        },
        {
            id: 7,
            name: "News",
            icon: <BiNews />
        },
        {
            id: 8,
            name: "Sports",
            icon: <TfiCup />
        },
        {
            id: 9,
            name: "Courses",
            icon: <MdOutlineWatchLater />
        },
        {
            id: 10,
            name: "Fashion & Beauty",
            icon: <SiStylelint />
        },
        {
            id: 11,
            name: "Podcasts",
            icon: <MdPodcasts />
        },

    ]
    const sidebarItems4 = [
        {
            id: 1,
            name: "YoutTube Premium",
            icon: <FaYoutube />,
        },
        {
            id: 2,
            name: "YoutTube Studio",
            icon: <SiYoutubestudio />,
        },
        {
            id: 3,
            name: "YoutTube Music",
            icon: <SiYoutubemusic />,
        },
        {
            id: 4,
            name: "YoutTube Kids",
            icon: <SiYoutubekids />,
        },
    ]
    const sidebarItems5 = [
        {
            id: 1,
            name: "Settings",
            icon: <AiOutlineSetting />,
        },
        {
            id: 2,
            name: "Report history",
            icon: <BsFlag />,
        },
        {
            id: 3,
            name: "Help",
            icon: <IoHelpCircleOutline />,
        },
        {
            id: 4,
            name: "Send Feedback",
            icon: <MdOutlineFeedback />,
        },
    ]

    const handleShorts = () => {
        alert('Shorts clicked');
    }

    return (
        <div className='px-6 w-[20%]  h-[calc(100vh-6.625rem)] overflow-y-scroll overflow-hidden'>
            {/*home*/}
            <div className=' items-center space-y-3 '>
                {
                    sidebarItems.map((item) => {

                        return (
                            <div key={item.id} className='flex items-center space-x-5 hover:bg-gray-300 duration-300 rounded-xl p-3'>
                                <div className='text-3xl cursor-pointer' >{item.icon}</div>
                                <span className='cursor-pointer'>{item.name}</span>
                            </div>

                        );
                    })
                }
            </div>
            <hr />
            {/* view*/}
            <div className=' items-center space-y-3 mt-4'>
                <div className='flex items-center'>
                    <h1 className='text-xl ml-4 font-semibold'>You</h1>
                    <span className='text-xl ml-5'><FaChevronRight /></span>
                </div>
                {
                    sidebarItems2.map((item) => {
                        return (
                            <div key={item.id} className='flex items-center space-x-5 hover:bg-gray-300 duration-300 rounded-xl p-3'>
                                <div className='text-3xl cursor-pointer' >{item.icon}</div>
                                <span className='cursor-pointer'>{item.name}</span>
                            </div>

                        );
                    })
                }
            </div>
            <hr />
            {/* Expolre*/}
            <div className=' items-center space-y-3 mt-4 '>
                <div className='flex items-center'>
                    <h1 className='text-xl font-semibold ml-4' >Explore</h1>

                </div>
                {
                    sidebarItems3.map((item) => {
                        return (
                            <div key={item.id} className='flex items-center space-x-5 hover:bg-gray-300 duration-300 rounded-xl p-3'>
                                <div className='text-3xl cursor-pointer' >{item.icon}</div>
                                <span className='cursor-pointer'>{item.name}</span>
                            </div>

                        );
                    })
                }
            </div>
            <hr />
            {/*more */}
            <div className=' items-center space-y-3 mt-4 '>
                <div className='flex items-center'>
                    <h1 className='text-xl font-semibold ml-4' >More from YouTube</h1>

                </div>
                {
                    sidebarItems4.map((item) => {
                        return (
                            <div key={item.id} className='flex items-center space-x-5 hover:bg-gray-300 duration-300 rounded-xl p-3'>
                                <div className='text-3xl cursor-pointer text-red-500' >{item.icon}</div>
                                <span className='cursor-pointer'>{item.name}</span>
                            </div>

                        );
                    })
                }
            </div>
            <hr />
            {/*setting */}
            <div className=' items-center space-y-3 mt-4 '>

                {
                    sidebarItems5.map((item) => {
                        return (
                            <div key={item.id} className='flex items-center space-x-5 hover:bg-gray-300 duration-300 rounded-xl p-3'>
                                <div className='text-3xl cursor-pointer' >{item.icon}</div>
                                <span className='cursor-pointer'>{item.name}</span>
                            </div>

                        );
                    })
                }
            </div>
            <hr />
            <div>
                <br />
                <span className='text-s font-semibold text-gray-500'>
                    About Press Copyright <br />Contact us Creator <br />Advertise Developers
                    <br />
                    <br />
                    <p>
                        Terms Privacy Policy & Safety<br /> How YouTube works <br />Test new features
                    </p>
                </span>
                <br />
                <p>
                    © 2024 Google LLC <br />
                </p>
            </div>








        </div >
    )
}

export default Sidebar