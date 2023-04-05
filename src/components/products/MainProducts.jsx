import DetailProducts from "./col-details/DetailProducts";
import MainImages from "./col-slider/MainImages";
import imgProduct1 from "@/assets/images/image-product-1.jpg";
import imgProduct2 from "@/assets/images/image-product-2.jpg";
import imgProduct3 from "@/assets/images/image-product-3.jpg";
import imgProduct4 from "@/assets/images/image-product-4.jpg";
import thumbProduct1 from "@/assets/images/image-product-1-thumbnail.jpg";
import thumbProduct2 from "@/assets/images/image-product-2-thumbnail.jpg";
import thumbProduct3 from "@/assets/images/image-product-3-thumbnail.jpg";
import thumbProduct4 from "@/assets/images/image-product-4-thumbnail.jpg";

const IMGS_SLIDER = [imgProduct1, imgProduct2, imgProduct3, imgProduct4];
const THUMB_SLIDER = [thumbProduct1, thumbProduct2, thumbProduct3, thumbProduct4]

const MainProducts = () => {
	return (
		<main className='grid grid-cols-1 items-center gap-10 md:container md:mx-auto md:min-h-[calc(100vh-88px-3px)] md:grid-cols-2'>
			<MainImages IMGS_SLIDER={IMGS_SLIDER} THUMB_SLIDER={THUMB_SLIDER} />
			<DetailProducts  />
		</main>
	);
	/*   */
};
export default MainProducts;
 