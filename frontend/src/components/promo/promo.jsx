import TabComponent from "../tabComponent/tabComponent"

export default function Promo(){
	return (
		<section className="bg-[#1b1b1b] px-10 sm:md:px-28 py-20 text-center text-white">
			<h1 className="text-4xl text-white font-medium pb-10">New Promos</h1>
			<TabComponent/>
		</section>
	);
}