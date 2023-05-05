import Hero from "../../components/hero/hero";
import Promo from "../../components/promo/promo";
import Footer from "../../components/footer/footer";
import Features from "../../components/features/features";
export default function Landing(){
	return (
		<main>
			<Hero/>
			<Promo/>
			<Features/>
			<Footer/>
		</main>
	);
}