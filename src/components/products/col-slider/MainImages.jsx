import React, { useState } from "react";
import SliderProduct from "@/components/products/col-slider/SliderProduct";
import ModalProduct from "./SliderProduct";

const MainImages = ({ IMGS_SLIDER, THUMB_SLIDER }) => {
	const [isOpenModal, setIsOpenModal] = useState(false);
    
	const handleOpenModal = () =>
	window.innerWidth > 767 && setIsOpenModal(true);

const handleCloseModal = () => setIsOpenModal(false);

return (
	<div className="">
		<SliderProduct
			IMGS_SLIDER={IMGS_SLIDER}
			THUMB_SLIDER={THUMB_SLIDER}
			className="grid md:grid-cols-4 md:gap-4 "
			handleOpenModal={handleOpenModal}
		/>
		{isOpenModal && (
			<>
				<ModalProduct
					IMGS_SLIDER={IMGS_SLIDER}
					THUMB_SLIDER={THUMB_SLIDER}
					isOpenModal={isOpenModal}
					className="hidden md:absolute md:top-1/2 md:left-1/2 md:z-10 md:grid md:max-w-md md:-translate-y-1/2 md:-translate-x-1/2 md:grid-cols-4 md:gap-4"
					handleCloseModal={handleCloseModal}
				/>
				{/* backdrop-blur-xl */}
				<span
					className="fixed top-0 left-0 h-full w-full bg-black/40"
					onClick={handleCloseModal}
				></span>
			</>
		)}
	</div>
);
};

export default MainImages;
