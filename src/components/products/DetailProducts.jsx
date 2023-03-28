import React from "react";

const DetailProducts = () => {
	return (
		<section className='container mx-auto px-4'>
			<p className='font-bold uppercase tracking-[0.2em] text-orange-primary'>
				Sneaker Company
			</p>
			<h2 className='mb-4 text-3xl font-bold'>Fall Limited Edition Sneakers</h2>
			<p className='mb-4 text-dark-grayish-blue'>
				These low-profile sneakers are your perfect casual wear companion.
				Featuring a durable rubber outer sole, they’ll withstand everything the
				weather can offer.
			</p>
			<div className='grid grid-cols-3 items-center gap-1 font-bold'>
				<span className='text-3xl'>$125.00</span>
				<span className='mr-auto py-1 px-2 text-orange-primary'>50%</span>
				<span className='text-right text-lg text-grayish-blue line-through'>
					$250.00
				</span>
			</div>
			<div className="grid grid-cols-3">
				<div className='col-span-3 justify-between'>
					<button>-</button>
					<span>0</span>
					<button>+</button>
				</div>
				<button>Add to Cart</button>
			</div>
		</section>
	);
};

export default DetailProducts;
