import React, {useState, useEffect} from "react";
import {AiOutlineDelete} from "react-icons/ai";
import useAxios from "../../hooks/useAxiosHook";
import {useMyContext} from "../../contexts/useReduceHook";

function Basket() {
	let {data, loading, error} = useAxios({
		url: `recomemded`,
		method: `GET`,
	});

	let [basketData, setBasketData] = useState([]);

	useEffect(() => {
		let storedData = JSON.parse(localStorage.getItem("shop")) || [];
		setBasketData(storedData);
	}, []);

	let handleIncrement = (id) => {
		let updatedBasket = basketData.map((item) =>
			item.id === id ? {...item, count: item.count + 1} : item
		);
		setBasketData(updatedBasket);
		localStorage.setItem("shop", JSON.stringify(updatedBasket));
	};

	let handleDecrement = (id) => {
		let updatedBasket = basketData.map((item) =>
			item.id === id && item.count > 1 ? {...item, count: item.count - 1} : item
		);
		setBasketData(updatedBasket);
		localStorage.setItem("shop", JSON.stringify(updatedBasket));
	};

	let handleRemove = (id) => {
		let updatedBasket = basketData.filter((item) => item.id !== id);
		setBasketData(updatedBasket);
		localStorage.setItem("shop", JSON.stringify(updatedBasket));
	};

	return (
		<section className="w-[90%] mx-auto my-8">
			{basketData.length === 0 ? (
				<h2 className="text-lg text-center text-gray-500">Savatcha bo'sh!</h2>
			) : (
				basketData.map((item) => (
					<div
						key={item.id}
						className="flex items-center justify-between p-4 mb-4 bg-white rounded-lg shadow-sm">
						<span className="text-sm text-gray-700">
							{data && data.length > 0 ? (
								data.map((value) =>
									item.id === value.id ? (
										<div className="flex items-center gap-4" key={value.id}>
											<div>
												<img className="w-12" src={`${value.imagie}`} />
											</div>
											<div>{value.name}</div>
										</div>
									) : null
								)
							) : (
								<p>No items found</p>
							)}
						</span>
						<div className="flex items-center gap-4 w-start">
							<span className="text-sm font-medium text-left text-gray-900">
								{data && data.length > 0 ? (
									data.map((value) =>
										item.id === value.id ? (
											<div key={value.id}>{value.price_current}$</div>
										) : null
									)
								) : (
									<p>No items found</p>
								)}
							</span>
							<div className="flex items-center gap-2">
								<button
									className="flex items-center justify-center w-8 h-8 border border-gray-300 rounded-md"
									onClick={() => handleDecrement(item.id)}>
									−
								</button>
								<span className="text-sm text-gray-700">{item.count}</span>
								<button
									className="flex items-center justify-center w-8 h-8 border border-gray-300 rounded-md"
									onClick={() => handleIncrement(item.id)}>
									+
								</button>
							</div>
							<button
								className="text-purple-500"
								onClick={() => handleRemove(item.id)}>
								<AiOutlineDelete className="scale-[2] ml-4" />
							</button>
						</div>
					</div>
				))
			)}
		</section>
	);
}

export default Basket;
