/* eslint-disable @next/next/no-img-element */
'use-client'

import { MoveLeft } from "lucide-react";

function SidebarMobile(
    {
        open,
        setOpen
    }:
        {
            open: boolean
            setOpen: (open: boolean) => void
        }
) {


    return (
        <div className="relative">
            <div id="sidebar" className={`absolute top-0 ${open ? "left-0" : "left-[-300px]"} duration-1000
                p-2 w-[245px] overflow-y-auto text-center bg-gray-100 shadow z-50 min-h-screen`}>
                <div className="text-gray-900 text-xl" >
                    <div>
                        <div className="py-2.5 items-end border-b-2">
                            <div className="flex flex-col items-end text-gray-900 cursor-pointer" onClick={() => setOpen(false)}>
                                <MoveLeft />
                            </div>
                        </div>
                        <div className="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer border-b-2 hover:bg-gray-300">
                            <img src="https://theme.hstatic.net/1000182631/1000966139/14/icon_megamenu1.png?v=1086" alt="bcn" />
                            <div className="text-[15px] ml-4 text-gray-900">Bán chạy nhất</div>
                        </div>
                        <div className="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer border-b-2 hover:bg-gray-300">
                            <img src="https://theme.hstatic.net/1000182631/1000966139/14/icon_megamenu1.png?v=1086" alt="spnk" />
                            <div className="text-[15px] ml-4 text-gray-900">Cua</div>
                        </div>
                        <div className="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer border-b-2 hover:bg-gray-300">
                            <img src="https://theme.hstatic.net/1000182631/1000966139/14/icon_megamenu1.png?v=1086" alt="spnk" />
                            <div className="text-[15px] ml-4 text-gray-900">Cá</div>
                        </div>

                        <div className="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer border-b-2 hover:bg-gray-300">
                            <img src="https://theme.hstatic.net/1000182631/1000966139/14/icon_megamenu1.png?v=1086" alt="spnk" />
                            <div className="text-[15px] ml-4 text-gray-900">Bạch tuột</div>
                        </div>

                        <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:bg-gray-300">
                            <img src="https://theme.hstatic.net/1000182631/1000966139/14/icon_megamenu1.png?v=1086" alt="spnk" />
                            <div className="text-[15px] ml-4 text-gray-900">Sò, ngêu</div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default SidebarMobile;