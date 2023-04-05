import React from "react";
import CartIcon from "../../icons/CartIcon";

const DetailProducts = () => {
	return (
		<section className='container mx-auto px-4 md:px-0'>
			<p className='font-bold uppercase tracking-[0.2em] text-orange-primary'>
				Sneaker Company
			</p>
			<h2 className='mb-4 text-3xl font-bold'>Fall Limited Edition Sneakers</h2>
			<p className='mb-4 text-dark-grayish-blue'>
				These low-profile sneakers are your perfect casual wear companion.
				Featuring a durable rubber outer sole, they’ll withstand everything the
				weather can offer.
			</p>
			<div className='mb-4 grid grid-cols-3 items-center gap-2 font-bold md:grid-cols-[1fr_3fr] xl:grid-cols-[0.7fr_3fr]'>
				<span className='text-3xl'>$125.00</span>
				<span className='mr-auto rounded-md bg-pale-orange py-1 px-2 text-orange-primary'>
					50%
				</span>
				<span className='text-right text-lg text-grayish-blue line-through md:col-span-2 md:text-left'>
					$250.00
				</span>
			</div>
			<div className='grid grid-cols-3 gap-4 font-bold md:grid-cols-[1fr_1.5fr]'>
				<div className='col-span-3 flex items-baseline justify-between rounded-md bg-light-grayish-blue py-3 px-5 font-bold md:col-span-1'>
					<button className='text-3xl text-orange-primary'>-</button>
					<span className='text-xl'>0</span>
					<button className='text-3xl text-orange-primary'>+</button>
				</div>
				<button className='col-span-3 flex items-center justify-center gap-x-3 rounded-md bg-orange-primary py-3 text-white transition-all hover:bg-orange-600 md:col-span-1'>
					<CartIcon fill='#fff' /> <span>Add to Cart</span>
				</button>
			</div>
		</section>
	);
};

export default DetailProducts;
