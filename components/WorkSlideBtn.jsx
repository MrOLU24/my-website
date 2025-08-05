"use client"

import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";
import { useState, useEffect } from "react";

const WorkSliderBtn = ({ containerStyles, btnStyles, iconStyles }) => {
    const swiper = useSwiper();
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);

    useEffect(() => {
        if (swiper) {
            const updateNavigation = () => {
                setIsBeginning(swiper.isBeginning);
                setIsEnd(swiper.isEnd);
            };

            swiper.on('slideChange', updateNavigation);
            updateNavigation(); // Initial check

            return () => {
                swiper.off('slideChange', updateNavigation);
            };
        }
    }, [swiper]);

    return (
         <div className={containerStyles}>
            <button 
                className={`${btnStyles} ${isBeginning ? 'opacity-50 cursor-not-allowed' : ''}`} 
                onClick={() => !isBeginning && swiper.slidePrev()}
                disabled={isBeginning}
            >
                <PiCaretLeftBold className={iconStyles}/>
            </button>
            <button 
                className={`${btnStyles} ${isEnd ? 'opacity-50 cursor-not-allowed' : ''}`} 
                onClick={() => !isEnd && swiper.slideNext()}
                disabled={isEnd}
            >
                <PiCaretRightBold className={iconStyles}/>
            </button>
         </div>
    )
}

export default WorkSliderBtn;