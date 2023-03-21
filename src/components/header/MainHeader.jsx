import Logo from "@/assets/images/logo.svg";
import ImgAvatar from "@/assets/images/image-avatar.png";
import MenuIcon from "@/components/icons/MenuIcon";
import CloseMenuIcon from "@/components/icons/CloseMenuIcon";
import CartIcon from "@/components/icons/CartIcon";
import { useState } from "react";

const MainHeader = () => {
	const [toggleMenu, setToggleMenu] = useState(false);
	const [navClass, setNavClass] = useState()

	const handleClickMenu = () => { 
		console.log("click");
		setToggleMenu(!toggleMenu);
	};



	return (
		<header className='container mx-auto flex items-center px-6 py-8 gap-4 bg-gray-200'>
			<button
				className='md:hidden z-10'
				onClick={handleClickMenu}>
				{toggleMenu ? <CloseMenuIcon /> : <MenuIcon />}
			</button>
			<img
				src={Logo}
				alt='Logo Sneakers '
				className='mr-auto mb-1'
			/>
			<nav
				className={`${
					!toggleMenu && "-translate-x-full"
				} absolute left-0 top-0 h-full w-4/5 pt-[6.1rem] px-10 gap-y-4 flex flex-col justify-start font-bold bg-white transform transition-transform ease-in-out duration-300 ${
					toggleMenu && "translate-x-0"
				}   md:static md:translate-x-0 md:flex-row md:mr-auto md:gap-5  md:pt-0`}>
				<a href=''>Contacto</a>
				<a href=''>Contacto</a>
				<a href=''>Contacto</a>
				<a href=''>Contacto</a>
				<a href=''>Contacto</a>
			</nav>

			<div className='flex space-x-4'>
				<button>
					{" "}
					<CartIcon />{" "}
				</button>
				<img
					src={ImgAvatar}
					alt=''
					className='w-10'
				/>
			</div>
		</header>
	);
};
export default MainHeader;
