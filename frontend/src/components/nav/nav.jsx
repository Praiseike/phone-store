import {
	FiSearch,
	FiShoppingCart,
	FiUser,
} from 'react-icons/fi';

export default function Nav(){
	return (
		<nav className="w-full flex flex-row text-gray-600 items center py-10 justify-between">
			<a href="#" className="font-bold">brand</a>
			<ul className="flex flex-row space-x-8 items-center font-light">
				<li>Product</li>
				<li>Explore</li>
				<li>Support</li>
				<li>Business</li>
			</ul>
			<ul className="flex flex-row space-x-6 items-center text-xl">
				<li><FiSearch/></li>
				<li><FiShoppingCart/></li>
				<li><FiUser/></li>
			</ul>
		</nav>
	);
}