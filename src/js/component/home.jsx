import React from "react";




import { Navbar } from "./Navbar";


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Cards } from "./Cards.jsx";


//create your first component
const Home = () => {
	return (

		<Navbar/>


		<div className="justify-content-center row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-2">
			<div className="col">
			<Cards/>		
			</div>
			<div className="col">
			<Cards/>
			</div>
			<div className="col">
			<Cards/>
			</div>
			<div className="col">
			<Cards/>
			</div>		
		</div>

		
	);
};

export default Home;
