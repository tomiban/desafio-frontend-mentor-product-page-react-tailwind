import React, { useState, useRef, useEffect } from "react";

import NextIcon from "../../icons/NextIcon";
import PrevIcon from "../../icons/PrevIcon";

const Slider = ({
	IMGS_SLIDER = [],
	THUMB_SLIDER = [],
	isOpenModal = false,
	handleOpenModal = null,
	handleCloseModal = null,
	...props
}) => {
	const [imgIndex, setImgIndex] = useState(0);
	const btnSlider = useRef(null);

	/* 	useEffect(() => {
			isOpenModal && btnSlider.current.classList.remove("md:hidden");
		}, [isOpenModal]);
 */
	const handleClickNext = () => {
		imgIndex === IMGS_SLIDER.length - 1
			? setImgIndex(0)
			: setImgIndex(imgIndex + 1);
	};

	const handleClickPrev = () => {
		imgIndex === 0
			? setImgIndex(IMGS_SLIDER.length - 1)
			: setImgIndex(imgIndex - 1);
	};

	return (
        <section {...props}>
            {isOpenModal && (
                <button
                    onClick={handleCloseModal}
                    className="text-right md:col-span-4 font-bold cursor-pointer text-white"
                >
                    X
                </button>
            )}
            <div className="relative col-span-4">
                <img
                    src={IMGS_SLIDER[imgIndex]}
                    alt=""
                    className="aspect-[16/13] w-full object-cover md:aspect-[16/18] md:cursor-pointer md:rounded-md xl:aspect-[16/16] 2xl:max-h-[500px]"
                    onClick={handleOpenModal}
                />
                <div
                    ref={btnSlider}
                    className={`absolute top-1/2 left-0 flex w-full -translate-y-1/2 justify-between px-4 ${
                        !isOpenModal && "md:hidden"
                    }`}
                >
                    <button
                        className="grid h-10 w-10 place-items-center  rounded-full bg-white"
                        onClick={handleClickPrev}
                    >
                        <PrevIcon />
                    </button>
                    <button
                        className=" grid h-10 w-10 place-items-center rounded-full bg-white"
                        onClick={handleClickNext}
                    >
                        <NextIcon />
                    </button>
                </div>
            </div>
            {THUMB_SLIDER.map((smallImg, index) => (
                <div
                    key={index}
                    onClick={() => {
                        setImgIndex(index);
                    }}
                    className="relative cursor-pointer overflow-hidden rounded-md"
                >
                    <img
                        src={smallImg}
                        alt=""
                        className="hidden md:block md:rounded-md"
                    />
                    <span
                        className={`absolute top-0 h-full w-full hover:bg-[rgba(255,255,255,0.5)] ${
                            imgIndex === index && "bg-[rgba(255,255,255,0.5)]"
                        }`}
                    ></span>
                </div>
            ))}
        </section>
    );
};

export default Slider;
