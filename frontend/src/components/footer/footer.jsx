import {
	SiTwitter,
	SiLinkedin,
	SiInstagram,
	SiFacebook
} from 'react-icons/si'


export default function Footer(){
	return (
		<section className="bg-[#1b1b1b] px-10 sm:md:px-28 py-28 text-left text-white">
			<div className="flex flex-col sm:md:lg:flex-row sm:md:space-x-4">
				<div className="space-y-6  sm:md:mr-64 mb-20">
					<h1 className="text-5xl font-semibold bg-gradient-to-r from-[#48a7d0] to-[#9987e1] text-transparent bg-clip-text">Brand</h1>
					<p>Powered by Intellect<br/>Driven by Valuels</p>
					<div className="flex flex-row items-center space-x-5">
						<div className="w-12 h-12 bg-[#36383c] rounded-[50%] text-xl flex items-center justify-center"><SiTwitter/></div>
						<div className="w-12 h-12 bg-[#36383c] rounded-[50%] text-xl flex items-center justify-center"><SiInstagram/></div>
						<div className="w-12 h-12 bg-[#36383c] rounded-[50%] text-xl flex items-center justify-center"><SiLinkedin/></div>
						<div className="w-12 h-12 bg-[#36383c] rounded-[50%] text-xl flex items-center justify-center"><SiFacebook/></div>
					</div>
				</div>
				<div className="">
					<div className="flex text-left flex-col  sm:md:flex-row sm:md:space-x-16">
						<div className="mb-5">
							<h1 className="font-semibold tracking-wider leading-5 text-2xl text-white">Product & Service</h1>
							<ul className="mt-4 space-y-1 sm:md:space-y-3 text-gray-200">
								<li>Smartphones</li>
								<li>Tablets</li>
								<li>Audio Sound</li>
								<li>Wathes</li>
								<li>Smart Switch</li>
								<li>TVs</li>
								<li>Sound Devices</li>
							</ul>
						</div>
						<div className="mb-5">
							<h1 className="font-semibold tracking-wider leading-5 text-2xl text-white">Shop</h1>
							<ul className="mt-4 space-y-1 sm:md:space-y-3 text-gray-200">
								<li>Offers</li>
								<li>Equal Store</li>
								<li>Where to Buy</li>
								<li>Online Shop</li>
							</ul>
						</div>
						<div className="mb-5">
							<h1 className="font-semibold tracking-wider leading-5 text-2xl text-white">Support</h1>
							<ul className="mt-4 space-y-1 sm:md:space-y-3 text-gray-200">
								<li>Email Support</li>
								<li>Whatsapp</li>
								<li>Live Chat</li>
								<li>Phone Support</li>
								<li>Community</li>
								<li>Members</li>
								<li>Service Location</li>
							</ul>
						</div>

					</div>
				</div>

			</div>
		</section>
	);
}