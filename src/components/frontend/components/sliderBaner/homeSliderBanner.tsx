/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
'use client'

import { Carousel } from 'react-responsive-carousel'

const HomeSliderBanner = () => {
    return (
        <div className="grid grid-cols-3">
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
            <div className="ml-2 space-y-2">
                <div>
                    <img src="https://theme.hstatic.net/1000182631/1000966139/14/banner_top_1.jpg?v=1086" />
                </div>
                <div>
                    <img src="https://theme.hstatic.net/1000182631/1000966139/14/banner_top_2.jpg?v=1086" />
                </div>
            </div>
        </div>

    )
}

export default HomeSliderBanner