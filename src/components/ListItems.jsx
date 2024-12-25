import React from 'react'

const ListItems = () => {

    const categories = [
        "All", "Music", "React routers", "Computer Programming", "Reverberation", "movie musicals",
        "India National Cricket Team", "News", "Mixes", "1990s", "Telgu cinema", "Live", "Dramedy", "Dubbing", "Indian Soap opera", "Cricket", "Football", "Learn Coding"
    ];

    return (
        <div className='flex overflow-x-scroll hide-scroll-bar' >
            <div className='flex space-x-4 flex-nowrap' >
                {
                    categories.map((category) => {
                        return (
                            <div key={category} className='flex-none cursor-pointer bg-gray-200 hover:bg-gray-400 duration-300 rounded-xl px-5 py-4 m-3 font-medium text-gray-900'>
                                {category}
                            </div>
                        );
                    })
                }
            </div>
        </div>
    )
}

export default ListItems