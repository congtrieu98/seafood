'use client'

const SidebarCat = () => {

    return (
        <>
            {/* <div className="absolute text-white text-4xl top-5 left-4 cursor-pointer">
                <i className="bi bi-filter-left px-2 bg-gray-300 rounded-md"></i>
            </div> */}

            <div className="sidebar lg:left-0 left-[-300px] hidden md:block duration-1000
                p-2 w-[245px] overflow-y-auto text-center bg-gray-100 shadow">
                <div className="text-gray-900 text-xl">
                    <div>
                        <div className="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:bg-gray-300">
                            {/* <i className="bi bi-house-door-fill"></i> */}
                            <div className="text-[15px] ml-4 text-gray-900">Tôm</div>
                        </div>
                        <div className="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:bg-gray-300">
                            {/* <i className="bi bi-bookmark-fill"></i> */}
                            <div className="text-[15px] ml-4 text-gray-900">Cua</div>
                        </div>
                        <hr className="my-4 text-gray-600" />
                        <div className="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:bg-gray-300">
                            {/* <i className="bi bi-envelope-fill"></i> */}
                            <div className="text-[15px] ml-4 text-gray-900">Cá</div>
                        </div>

                        <div className="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:bg-gray-300">
                            {/* <i className="bi bi-chat-left-text-fill"></i> */}
                            <div className="flex justify-between w-full items-center">
                                <div className="text-[15px] ml-4 text-gray-900">Bạch tuột</div>
                                <div className="text-sm rotate-180" id="arrow">
                                    {/* <i className="bi bi-chevron-down"></i> */}
                                </div>
                            </div>
                        </div>

                        <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:bg-gray-300">
                            <i className="bi bi-box-arrow-in-right"></i>
                            <div className="text-[15px] ml-4 text-gray-900">Sò, ngêu</div>
                        </div>

                    </div>
                </div>
            </div>
        </>

    );
}

export default SidebarCat;