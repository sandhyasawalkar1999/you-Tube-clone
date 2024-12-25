import React from 'react'
import { Link } from 'react-router-dom';
import Time from './Time'
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { abbreviateNumber } from 'js-abbreviation-number';
const Video = ({ video }) => {
    // console.log(video);
    return (
        <div className='mt-2'>
            <Link to={`/video/${video?.videoId}`}>
                <div className='flex flex-col'>
                    {/* channel logo */}

                    <div className='relative h-48 md:h-56 md : rounded-xl hover:rounded-none duration-200 overflow-hidden'>
                        <img className='h-full w-full' src={video?.thumbnails[0]?.url} alt="" />
                        {
                            video?.lengthSeconds && <Time time={video?.lengthSeconds} />

                        }
                    </div>
                    {/*Thumbnail & duration */}
                    <div className='flex mt-3  space-x-2'>
                        <div className='flex items-center'>
                            <div className='flex h-9 w-9 rounded-full overflow-hidden border m-2 items-center'>
                                <img className='h-full w-full rounded-full overflow-hidden' src={video?.author?.avatar[0].url} />
                            </div>
                        </div>
                        <div>
                            <span className='text-sm font-bold line-clamp-2'>
                                {video?.title}
                            </span>
                            {/* channel name */}
                            <span className='flex items-center font-semibold mt-2 text-[16px] text-gray-400'>
                                {video?.author?.title}
                                {video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && (<BsFillCheckCircleFill
                                    className="text-gray-500 ml-1 text-xl" />)}
                            </span>
                            <div className='flex text-gray-500'>
                                <span>
                                    {`${abbreviateNumber(video?.stats?.views, 2)}views`}
                                </span>
                                <span className='flex text-[30px] leading-none font bold relative top-[-10px] mx-2'>
                                    .
                                </span>
                                <span>
                                    {video?.
                                        publishedTimeText}
                                </span>
                            </div>
                        </div>
                    </div>


                </div>


            </Link >


        </div >
    )
}

export default Video