import DetailProducts from "./DetailProducts";
import Slider from "./Slider";

const MainProducts = () => {
	return (
		<main className='grid grid-cols-1 gap-8 md:grid-cols-2 mt-10'>
			<Slider />
			<DetailProducts />
		</main>
	);
};
export default MainProducts;
