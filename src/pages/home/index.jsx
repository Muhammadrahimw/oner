import React from "react";
import Showcase from "../../components/showcase";
import Oils from "../../components/oils";
import Recommended from "../../components/recommended";

function HomePage() {
	return (
		<section>
			<Showcase />
			<Oils />
			<Recommended />
		</section>
	);
}

export default HomePage;
