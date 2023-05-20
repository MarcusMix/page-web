import Navbar from "../../components/navbar/navbar";
import Home from "../../components/home/home";
import Why from "../../components/why/why";
import HowWorks from "../../components/how-works/howWorks";
import Examples from "../../components/examples/examples";
import Contact from "../../components/contact/contact";
import Footer from "../../components/footer/footer";

const Homepage = () => {
	return (
		<>
			<Navbar />
			<Home />
			<Why />
			<HowWorks />
			<Examples />
			<Contact />
			<Footer/>
		</>
	);
};

export default Homepage;
