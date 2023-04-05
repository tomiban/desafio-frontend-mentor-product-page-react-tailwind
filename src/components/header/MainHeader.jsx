import Logo from "@/assets/images/logo.svg";
import ImgAvatar from "@/assets/images/image-avatar.png";
import MenuIcon from "@/components/icons/MenuIcon";
import CloseMenuIcon from "@/components/icons/CloseMenuIcon";
import CartIcon from "@/components/icons/CartIcon";
import { useState } from "react";
import NavLinks from "./NavLinks";

const MainHeader = () => {
	const [toggleMenu, setToggleMenu] = useState(false);

	const handleClickMenu = () => {
		console.log("click");
		setToggleMenu(!toggleMenu);
	};

	return (
		<>
			<header className='container mx-auto flex items-center gap-8 p-4 md:p-0'>
				<button
					className='z-20 md:hidden'
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
					} absolute left-0 top-0 flex h-full w-3/5 transform flex-col justify-start gap-y-4 bg-white px-10 pt-[6.1rem] font-bold transition-transform duration-300 ease-in-out ${
						toggleMenu && "translate-x-0"
					} md:static md:mr-auto md:translate-x-0 md:flex-row md:gap-5 md:pt-0 `}>
					<NavLinks />
				</nav>

				<div className='flex gap-x-4'>
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
			<span className='container mx-auto hidden h-[0.1em] w-full bg-gray-200 px-6 md:block'></span>
		</>
	);
};
export default MainHeader;
