/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
'use client'

import { Carousel } from "react-responsive-carousel"

const CustomerReview = () => {
    return (
        <div className="">
            <Carousel showArrows={true} autoPlay={true} infiniteLoop={true} showThumbs={false} className="col-span-2">
                <div>
                    <img src="https://theme.hstatic.net/1000182631/1000966139/14/imge_cskh_1.png?v=1100" />
                </div>
                <div>
                    <img src="https://theme.hstatic.net/1000182631/1000966139/14/imge_cskh_2.png?v=1100" />
                </div>

            </Carousel>

        </div>

    )
}

export default CustomerReview