import Nav from "../nav/nav";
import heroImage from "../../assets/images/hero-2.png";

export default function Hero(){
	return (
		<section className="pb-20 w-full bg-[#e8ebed]  px-28 m-0">
			<Nav/>
			<div className="grid h-full relative grid-cols-2 mt-10">
				<div className="flex flex-row items-center">
					<div>
						<h1 className="text-6xl text-gray-900 tracking-wide font-medium leading-2 space-y-3 font-[500]">
							<p className="bg-clip-text bg-gradient-to-r from-[#7aa1c7] to-[#7e79d9] text-transparent">Powered</p>
							<p>By Intellect</p>
							<p>Driven By Values</p>
						</h1>
						<div className="mt-10 font-medium space-x-6">
							<button className="px-12 py-5 text-white tracking-wide bg-gradient-to-r from-[#48a7d0] to-[#9987e1] rounded">Buy Now</button>
							<button className="border-b-2 border-black">Learn More</button>
						</div>
					</div>
				</div>
				<div>
					<div className="border-green-500">
						<img src={heroImage} className="border-black w-full w-[78%] mx-auto" alt="phone hero"/>
					</div>
				</div>
			</div>
		</section>
	);
}