import Navbar from "../../components/navbar/navbar";
import Home from "../../components/home/home";
import Why from "../../components/why/why";
import HowWorks from "../../components/how-works/howWorks";
import Contact from "../../components/contact/contact";
import Footer from "../../components/footer/footer";
import Services from "../../components/services/services";
// import Examples from "../../components/examples/examples";

const Homepage = () => {
	return (
		<>
			<Navbar />
			<Home />
			<Services/>
			<Why />
			<HowWorks />
			{/* <Examples /> */}
			<Contact />
			<Footer />
		</>
	);
};

export default Homepage;
