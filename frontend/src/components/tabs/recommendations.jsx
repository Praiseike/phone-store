import laptopImage from "../../assets/images/laptop-1.png";
import tabletImage from "../../assets/images/tablet-1.png";
import watchImage from "../../assets/images/watch-1.png";

import {
	FiShoppingCart,
} from 'react-icons/fi';

const recommendations = [
	{ name: "Series #L10", category: "Laptop",price: 2000,image: laptopImage },
	{ name: "Series #P235", category: "Tablets",price: 1099,image: tabletImage },
	{ name: "Series #W329", category: "Watch",price: 399,image: watchImage }
];

export default function RecommendationsTab(){
	return (
		<div className="flex flex-col justify-center md:grid sm:md:grid-cols-3 py-10 gap-x-10">
		{
			recommendations.map(({name,category,price,image },idx) => (
				<div key={idx} className="bg-[#36383c] mb-5 rounded-lg w-full pt-20 py-10 px-16 flex flex-col justify-between">
					<img src={image} className="mx-auto w-[80%] "alt="laptop"/>
					<div className="mt-10 text-left">
						<p className="text-xs text-gray-400">{category}</p>
						<div className="flex flex-row justify-between">
							<div className="text-xl">
								<p className="pb-1">{name}</p>
								<p>${price}</p>
							</div>
							<div className="w-14 h-14 flex items-center justify-center bg-gradient-to-r from-[#48a7d0] to-[#9987e1] rounded-[50%]">
								<FiShoppingCart/>
							</div>
						</div>
					</div>
				</div>
			))
		}
		</div>
	);
}