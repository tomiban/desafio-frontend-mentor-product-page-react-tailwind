import React, { useState } from "react";
import imgProduct1 from "@/assets/images/image-product-1.jpg";
import imgProduct2 from "@/assets/images/image-product-2.jpg";
import imgProduct3 from "@/assets/images/image-product-3.jpg";
import imgProduct4 from "@/assets/images/image-product-4.jpg";
import thumbProduct1 from "@/assets/images/image-product-1-thumbnail.jpg";
import thumbProduct2 from "@/assets/images/image-product-2-thumbnail.jpg";
import thumbProduct3 from "@/assets/images/image-product-3-thumbnail.jpg";
import thumbProduct4 from "@/assets/images/image-product-4-thumbnail.jpg";
import NextIcon from "../icons/NextIcon";
import PrevIcon from "../icons/PrevIcon";

const IMGS_SLIDER = [imgProduct1, imgProduct2, imgProduct3, imgProduct4];

const Slider = () => {
	const [imgIndex, setImgIndex] = useState(0);

	const handleClickSliderNext = () => {
		imgIndex === IMGS_SLIDER.length - 1
			? setImgIndex(0)
			: setImgIndex(imgIndex + 1);
	};

	const handleClickSliderPrev = () => {
		imgIndex === 0
			? setImgIndex(IMGS_SLIDER.length - 1)
			: setImgIndex(imgIndex - 1);
	};
	
	return (
		<section className='grid md:grid-cols-4 gap-4'>
			<div className='col-span-4 aspect-[16/12] relative'>
				<img
					src={IMGS_SLIDER[imgIndex]}
					alt='dasdas'
				/>
				<div className='absolute top-1/2 left-0 -translate-y-1 flex justify-between w-full px-4'>
					<button
						onClick={handleClickSliderPrev}
						className='bg-white h-12 w-12 rounded-full grid place-items-center'>
						<PrevIcon />
					</button>
					<button
						onClick={handleClickSliderNext}
						className='bg-white h-12 w-12 rounded-full grid place-items-center'>
						<NextIcon />
					</button>
				</div>
			</div>
			<img
				className='hidden md:block'
				src={thumbProduct1}
				alt=''
			/>
			<img
				className='hidden md:block'
				src={thumbProduct2}
				alt=''
			/>
			<img
				className='hidden md:block'
				src={thumbProduct3}
				alt=''
			/>
			<img
				className='hidden md:block'
				src={thumbProduct4}
				alt=''
			/>
		</section>
	);
};

export default Slider;