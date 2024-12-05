import React from "react";
import {CiShoppingCart} from "react-icons/ci";

function Basket() {
	return (
		<section>
			<div className="overflow-hidden rounded-lg my-8 w-[90%] mx-auto">
				<div className="flex items-center justify-between p-4 bg-white">
					<span className="text-sm text-gray-700">
						Кольцо уплотнительное 37*13мм AUDI, VW 2010−
					</span>
					<div className="flex items-center gap-4">
						<span className="text-sm font-medium text-gray-900">78 560 ₽</span>
						<div className="flex items-center gap-2">
							<button className="flex items-center justify-center w-8 h-8 border border-gray-300 rounded-md">
								−
							</button>
							<span className="text-sm text-gray-700">3</span>
							<button className="flex items-center justify-center w-8 h-8 border border-gray-300 rounded-md">
								+
							</button>
						</div>
						<button className="text-purple-500">
							<CiShoppingCart className="scale-[2] ml-4" />
						</button>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Basket;
