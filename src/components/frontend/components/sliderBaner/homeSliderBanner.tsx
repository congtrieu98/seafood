/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Carousel } from 'react-responsive-carousel'

const HomeSliderBanner = () => {
    return (
        <>
            <div className="md:grid grid-cols-3 md:pt-0 pt-2">
                <Carousel showArrows={true} autoPlay={true} infiniteLoop={true} className="col-span-2">
                    <div>
                        <img src="https://theme.hstatic.net/1000182631/1000966139/14/slideshow_4.jpg?v=1086" />
                    </div>
                    <div>
                        <img src="https://theme.hstatic.net/1000182631/1000966139/14/slideshow_1.jpg?v=1086" />
                    </div>
                    <div>
                        <img src="https://theme.hstatic.net/1000182631/1000966139/14/slideshow_2.jpg?v=1086" />
                    </div>
                    <div>
                        <img src="https://theme.hstatic.net/1000182631/1000966139/14/slideshow_3.jpg?v=1086" />
                    </div>
                    <div>
                        <img src="https://theme.hstatic.net/1000182631/1000966139/14/slideshow_5.jpg?v=1086" />
                    </div>

                </Carousel>
                <div className="ml-2 space-y-2 md:block hidden">
                    <div>
                        <img src="https://theme.hstatic.net/1000182631/1000966139/14/banner_top_1.jpg?v=1086" />
                    </div>
                    <div>
                        <img src="https://theme.hstatic.net/1000182631/1000966139/14/banner_top_2.jpg?v=1086" />
                    </div>
                </div>
            </div>



            {/* ======= Menu service MB ========== */}


            <div className="md:hidden grid grid-cols-4 gap-4 px-4 mb-5">
                <Link href="/" className="p-2 border rounded-md space-y-2 shadow-lg">
                    <div className=" flex justify-center">
                        <Image
                            src="https://theme.hstatic.net/1000182631/1000966139/14/icon_1.png?v=1100"
                            height={20}
                            width={20}
                            alt="like"
                            className="mr-2"
                        />
                    </div>
                    <div className="uppercase text-[10px] text-center hover:font-bold hover:text-blue-500 hover:transition-all hover:duration-1000 hover:ease-in-out">Cam kết chất lượng</div>
                </Link>
                <Link href="/" className="p-2 border rounded-md space-y-2 shadow-lg">
                    <div className=" flex justify-center">
                        <Image
                            src="https://theme.hstatic.net/1000182631/1000966139/14/icon_1.png?v=1100"
                            height={20}
                            width={20}
                            alt="like"
                            className="mr-2"
                        />
                    </div>
                    <div className="uppercase text-[10px] text-center hover:font-bold hover:text-blue-500 hover:transition-all hover:duration-1000 hover:ease-in-out">Cam kết chất lượng</div>
                </Link>
                <Link href="/" className="p-2 border rounded-md space-y-2 shadow-lg">
                    <div className=" flex justify-center">
                        <Image
                            src="https://theme.hstatic.net/1000182631/1000966139/14/icon_1.png?v=1100"
                            height={20}
                            width={20}
                            alt="like"
                            className="mr-2"
                        />
                    </div>
                    <div className="uppercase text-[10px] text-center hover:font-bold hover:text-blue-500 hover:transition-all hover:duration-1000 hover:ease-in-out">Cam kết chất lượng</div>
                </Link>
                <Link href="/" className="p-2 border rounded-md space-y-2 shadow-lg">
                    <div className=" flex justify-center">
                        <Image
                            src="https://theme.hstatic.net/1000182631/1000966139/14/icon_1.png?v=1100"
                            height={20}
                            width={20}
                            alt="like"
                            className="mr-2"
                        />
                    </div>
                    <div className="uppercase text-[10px] text-center hover:font-bold hover:text-blue-500 hover:transition-all hover:duration-1000 hover:ease-in-out">Cam kết chất lượng</div>
                </Link>
            </div>

            {/* ========= Categories MB ============ */}

            <div className="grid grid-cols-6 sm:hidden gap-2 px-4 my-4">
                <Link href="/" className="p-2 rounded-md space-y-2">
                    <div className=" flex justify-center">
                        <Image
                            src="https://theme.hstatic.net/1000182631/1000966139/14/icon_1.png?v=1100"
                            height={20}
                            width={20}
                            alt="like"
                            className="mr-2"
                        />
                    </div>
                    <div className="uppercase text-[10px] text-center hover:font-bold hover:text-blue-500 hover:transition-all hover:duration-1000 hover:ease-in-out">Cam kết chất lượng</div>
                </Link>
                <Link href="/" className="p-2 rounded-md space-y-2">
                    <div className=" flex justify-center">
                        <Image
                            src="https://theme.hstatic.net/1000182631/1000966139/14/icon_1.png?v=1100"
                            height={20}
                            width={20}
                            alt="like"
                            className="mr-2"
                        />
                    </div>
                    <div className="uppercase text-[10px] text-center hover:font-bold hover:text-blue-500 hover:transition-all hover:duration-1000 hover:ease-in-out">Cam kết chất lượng</div>
                </Link>
                <Link href="/" className="p-2 rounded-md space-y-2">
                    <div className=" flex justify-center">
                        <Image
                            src="https://theme.hstatic.net/1000182631/1000966139/14/icon_1.png?v=1100"
                            height={20}
                            width={20}
                            alt="like"
                            className="mr-2"
                        />
                    </div>
                    <div className="uppercase text-[10px] text-center hover:font-bold hover:text-blue-500 hover:transition-all hover:duration-1000 hover:ease-in-out">Cam kết chất lượng</div>
                </Link>
                <Link href="/" className="p-2 rounded-md space-y-2">
                    <div className=" flex justify-center">
                        <Image
                            src="https://theme.hstatic.net/1000182631/1000966139/14/icon_1.png?v=1100"
                            height={20}
                            width={20}
                            alt="like"
                            className="mr-2"
                        />
                    </div>
                    <div className="uppercase text-[10px] text-center hover:font-bold hover:text-blue-500 hover:transition-all hover:duration-1000 hover:ease-in-out">Cam kết chất lượng</div>
                </Link>
                <Link href="/" className="p-2 rounded-md space-y-2">
                    <div className=" flex justify-center">
                        <Image
                            src="https://theme.hstatic.net/1000182631/1000966139/14/icon_1.png?v=1100"
                            height={20}
                            width={20}
                            alt="like"
                            className="mr-2"
                        />
                    </div>
                    <div className="uppercase text-[10px] text-center hover:font-bold hover:text-blue-500 hover:transition-all hover:duration-1000 hover:ease-in-out">Cam kết chất lượng</div>
                </Link>
                <Link href="/" className="p-2 rounded-md space-y-2">
                    <div className=" flex justify-center">
                        <Image
                            src="https://theme.hstatic.net/1000182631/1000966139/14/icon_1.png?v=1100"
                            height={20}
                            width={20}
                            alt="like"
                            className="mr-2"
                        />
                    </div>
                    <div className="uppercase text-[10px] text-center hover:font-bold hover:text-blue-500 hover:transition-all hover:duration-1000 hover:ease-in-out">Cam kết chất lượng</div>
                </Link>


                <Link href="/" className="p-2 rounded-md space-y-2">
                    <div className=" flex justify-center">
                        <Image
                            src="https://theme.hstatic.net/1000182631/1000966139/14/icon_1.png?v=1100"
                            height={20}
                            width={20}
                            alt="like"
                            className="mr-2"
                        />
                    </div>
                    <div className="uppercase text-[10px] text-center hover:font-bold hover:text-blue-500 hover:transition-all hover:duration-1000 hover:ease-in-out">Cam kết chất lượng</div>
                </Link>
                <Link href="/" className="p-2 rounded-md space-y-2">
                    <div className=" flex justify-center">
                        <Image
                            src="https://theme.hstatic.net/1000182631/1000966139/14/icon_1.png?v=1100"
                            height={20}
                            width={20}
                            alt="like"
                            className="mr-2"
                        />
                    </div>
                    <div className="uppercase text-[10px] text-center hover:font-bold hover:text-blue-500 hover:transition-all hover:duration-1000 hover:ease-in-out">Cam kết chất lượng</div>
                </Link>
                <Link href="/" className="p-2 rounded-md space-y-2">
                    <div className=" flex justify-center">
                        <Image
                            src="https://theme.hstatic.net/1000182631/1000966139/14/icon_1.png?v=1100"
                            height={20}
                            width={20}
                            alt="like"
                            className="mr-2"
                        />
                    </div>
                    <div className="uppercase text-[10px] text-center hover:font-bold hover:text-blue-500 hover:transition-all hover:duration-1000 hover:ease-in-out">Cam kết chất lượng</div>
                </Link>
                <Link href="/" className="p-2 rounded-md space-y-2">
                    <div className=" flex justify-center">
                        <Image
                            src="https://theme.hstatic.net/1000182631/1000966139/14/icon_1.png?v=1100"
                            height={20}
                            width={20}
                            alt="like"
                            className="mr-2"
                        />
                    </div>
                    <div className="uppercase text-[10px] text-center hover:font-bold hover:text-blue-500 hover:transition-all hover:duration-1000 hover:ease-in-out">Cam kết chất lượng</div>
                </Link>
                <Link href="/" className="p-2 rounded-md space-y-2">
                    <div className=" flex justify-center">
                        <Image
                            src="https://theme.hstatic.net/1000182631/1000966139/14/icon_1.png?v=1100"
                            height={20}
                            width={20}
                            alt="like"
                            className="mr-2"
                        />
                    </div>
                    <div className="uppercase text-[10px] text-center hover:font-bold hover:text-blue-500 hover:transition-all hover:duration-1000 hover:ease-in-out">Cam kết chất lượng</div>
                </Link>
                <Link href="/" className="p-2 rounded-md space-y-2">
                    <div className=" flex justify-center hover:font-bold hover:text-blue-500 hover:transition-all hover:duration-1000 hover:ease-in-out">
                        <Image
                            src="https://theme.hstatic.net/1000182631/1000966139/14/icon_1.png?v=1100"
                            height={20}
                            width={20}
                            alt="like"
                            className="mr-2"
                        />
                    </div>
                    <div className="uppercase text-[10px] text-center">Cam kết chất lượng</div>
                </Link>

            </div>
        </>


    )
}

export default HomeSliderBanner