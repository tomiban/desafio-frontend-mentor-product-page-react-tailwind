import Logo from "@/assets/images/logo.svg";
import ImgAvatar from "@/assets/images/image-avatar.png";
import MenuIcon from "@/components/icons/MenuIcon";
import CloseMenuIcon from "@/components/icons/CloseMenuIcon";
import CartIcon from "@/components/icons/CartIcon";
import { useState } from "react";
import NavLinks from "./NavLinks";

const MainHeader = () => {
	const [toggleMenu, setToggleMenu] = useState(false);
	const [navClass, setNavClass] = useState();

	const handleClickMenu = () => {
		console.log("click");
		setToggleMenu(!toggleMenu);
	};

	return (
		<>
			<header className='container mx-auto flex items-center gap-4 p-6 md:p-0'>
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
					} absolute left-0 top-0 h-full w-3/5 pt-[6.1rem] px-10 gap-y-4 flex flex-col justify-start font-bold bg-white transform transition-transform ease-in-out duration-300 ${
						toggleMenu && "translate-x-0"
					}   md:static md:translate-x-0 md:flex-row md:mr-auto md:gap-5  md:pt-0`}>
					<NavLinks />
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
			<span className=" mx-auto px-6 hidden h-[0.4px] bg-gray-200 w-full container md:block 2xl:w-[1500px] "></span>
		</>
	);
};
export default MainHeader;
