/* eslint-disable @next/next/no-img-element */
'use client'


import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const CarouselPartner = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 1280 },
            items: 6
        },
        mediumLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 1280, min: 1024 },
            items: 5
        },
        largeDesktops: {
            // the naming can be any, depends on you.
            breakpoint: { max: 1024, min: 768 },
            items: 4
        },
        desktop: {
            breakpoint: { max: 768, min: 640 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 640, min: 384 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 384, min: 0 },
            items: 2
        }
    };
    return (
        <Carousel responsive={responsive} autoPlay={true}>

            <div><img src="https://theme.hstatic.net/1000182631/1000966139/14/home_partner_9.jpg?v=1100" alt="" className="h-24 w-96" /></div>
            <div><img src="https://theme.hstatic.net/1000182631/1000966139/14/home_partner_2.jpg?v=1100" alt="" className="h-24 w-96" /></div>
            <div><img src="https://theme.hstatic.net/1000182631/1000966139/14/home_partner_4.jpg?v=1100" alt="" className="h-24 w-96" /></div>
            <div><img src="https://theme.hstatic.net/1000182631/1000966139/14/home_partner_7.jpg?v=1100" alt="" className="h-24 w-96" /></div>
            <div><img src="https://theme.hstatic.net/1000182631/1000966139/14/home_partner_3.jpg?v=1100" alt="" className="h-24 w-96" /></div>
            <div><img src="https://theme.hstatic.net/1000182631/1000966139/14/home_partner_6.jpg?v=1100" alt="" className="h-24 w-96" /></div>
            <div><img src="https://theme.hstatic.net/1000182631/1000966139/14/home_partner_6.jpg?v=1100" alt="" className="h-24 w-96" /></div>
            <div><img src="https://theme.hstatic.net/1000182631/1000966139/14/home_partner_7.jpg?v=1100" alt="" className="h-24 w-96" /></div>

        </Carousel>
    )
}

export default CarouselPartner