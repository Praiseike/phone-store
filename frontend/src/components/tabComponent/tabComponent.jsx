import { useState } from "react";
import styled from "styled-components";

import {
	RecommendationsTab,
	MobileTab,
	WatchesTab,
	LaptopTab,
	TabletsTab
} from '../tabs/';

export default function TabComponent(){

	const [ active, setActive ] = useState(1)

	const hc = (tab) => {
		if(tab === active)
			return "bg-[#36383c] border-b-2 border-[#8290dc] "
		return "";
	}

	return (
		<div className="">
			<ul className="w-fit mx-auto text-gray-300 flex border-b-2 border-[#2f2f2f] flex-row sm:justify-between items-center md:lg:space-x-10">
				<li onClick={() => setActive(1)} className={hc(1) + "px-6 py-3 cursor-pointer rounded-t-lg"}>Recommendations</li>
				<li onClick={() => setActive(2)} className={hc(2) + "px-6 py-3 cursor-pointer rounded-t-lg"}>Mobile</li>
				<li onClick={() => setActive(3)} className={hc(3) + "px-6 py-3 cursor-pointer rounded-t-lg"}>Tablets</li>
				<li onClick={() => setActive(4)} className={hc(4) + "px-6 py-3 cursor-pointer rounded-t-lg"}>Laptop</li>
				<li onClick={() => setActive(5)} className={hc(5) + "px-6 py-3 cursor-pointer rounded-t-lg"}>Watches</li>
			</ul>
			<div>
				{ ( active === 1 ) && <RecommendationsTab/> }
				{ ( active === 2 ) && <MobileTab/> }
				{ ( active === 3 ) && <TabletsTab/> }
				{ ( active === 4 ) && <LaptopTab/> }
				{ ( active === 5 ) && <WatchesTab/> }
			</div>
		</div>
	);
}

