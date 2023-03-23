export default () => {
	const LINKS = [
		{
			title: "Collection",
			url: "#",
		},
		{
			title: "Men",
			url: "#",
		},
		{
			title: "Women",
			url: "#",
		},
		{
			title: "About",
			url: "#",
		},
		{
			title: "Contact",
			url: "#",
		},
	];

	return LINKS.map((link) => (
		<>
			<a
				href={link.url}
				className='py-8 relative group'>
				<span className='group-hover:text-orange-primary'>{link.title}</span>
				<span className='group-hover:bg-orange-primary absolute bottom-0 left-0 h-1 block w-full scale-0 group-hover:scale-100 transition-all duration-[400ms]'></span>
			</a>
		</>
	));
};
