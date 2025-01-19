import React from "react";
import { Navbar } from "./Navbar.jsx";
import { Jumbotron } from "./Jumbotron.jsx";
import { Cards } from "./Cards.jsx";
import { Footer } from "./Footer.jsx";


//create your first component
const Home = () => {
	return (
		<div className="container">
			<Navbar />
			<Jumbotron />
			<div className="justify-content-center row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-2">
				<div className="col">
					<Cards
						title="Lego the Chef"
						imageURL="https://randomuser.me/api/portraits/lego/8.jpg"
						description="Hi there! I'm a Lego"
						imageAlt="Photo"
						textButton="Learn More" />
				</div>
				<div className="col">
					<Cards
						title="Lego the Mexican"
						imageURL="https://randomuser.me/api/portraits/lego/6.jpg"
						description="Hi there! I'm a Lego"
						imageAlt="Photo"
						textButton="Learn More" />
				</div>
				<div className="col">
					<Cards
						title="Lego the Doctor"
						imageURL="https://randomuser.me/api/portraits/lego/3.jpg"
						description="Hi there! I'm a Lego"
						imageAlt="Photo"
						textButton="Learn More" />
				</div>
				<div className="col">
					<Cards
						title="Lego the Stylish"
						imageURL="https://randomuser.me/api/portraits/lego/2.jpg"
						description="Hi there"
						imageAlt="Photo"
						textButton="Learn More" />
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Home;
