import React, {useEffect, useState} from "react";
import useAxios from "../../hooks/useAxiosHook";
import {FaRegStar, FaStar} from "react-icons/fa6";
import {CiHeart, CiShoppingCart} from "react-icons/ci";
import {FaHeart} from "react-icons/fa";
import {useMyContext} from "../../contexts/useReduceHook";

function Recommended() {
	const [likedItems, setLikedItems] = useState([]);
	const {dispatch} = useMyContext();

	const {data, loading, error} = useAxios({
		url: `recomemded`,
		method: `GET`,
	});

	useEffect(() => {
		const storedLikedItems = JSON.parse(localStorage.getItem("isLiked")) || [];
		setLikedItems(storedLikedItems);
	}, []);

	if (loading) return <h1>Loading...</h1>;
	if (error) return <h1 className="text-red-600">Error: {error.message}</h1>;

	const handleLike = (id) => {
		const currentLikedItems = JSON.parse(localStorage.getItem("isLiked")) || [];
		let newLikedItems;

		if (currentLikedItems.includes(id)) {
			newLikedItems = currentLikedItems.filter((item) => item !== id);
		} else {
			newLikedItems = [...currentLikedItems, id];
		}

		localStorage.setItem("isLiked", JSON.stringify(newLikedItems));
		setLikedItems(newLikedItems);
	};

	return (
		<section className="w-[90%] mx-auto bg-white">
			<h2 className="text-[1.5em] font-bold mb-5">Рекомендуем</h2>
			<div className="grid grid-cols-4 gap-5 mb-[3.75em] max-xl:grid-cols-3 tr max-[930px]:grid-cols-2 max-sm:text-xs max-[480px]:grid-cols-1 max-[480px]:text-sm">
				{data.map((value, idx) => (
					<div
						key={idx}
						className="w-full h-full p-5 border border-gray-200 rounded-lg card hover:shadow-md">
						<div className="relative img">
							{likedItems.includes(value.id) ? (
								<FaHeart
									onClick={() => handleLike(value.id)}
									className="absolute text-red-500 scale-150 cursor-pointer top-2 right-2"
								/>
							) : (
								<CiHeart
									onClick={() => handleLike(value.id)}
									className="absolute text-gray-500 scale-150 cursor-pointer top-2 right-2"
								/>
							)}
							<img className="w-full" src={value.imagie} alt={value.name} />
						</div>
						<div className="flex flex-col justify-between gap-4 info">
							<div className="flex items-center justify-between gap-4">
								<p>Артикул: 153789</p>
								<div className="flex items-center gap-[0.1em]">
									{Array.from({length: 5}, (_, index) =>
										value.rating >= index + 1 ? (
											<FaStar key={index} className="text-orange-500" />
										) : (
											<FaRegStar key={index} />
										)
									)}
								</div>
							</div>
							<p className="font-medium">{value.name}</p>
							<div className="flex items-center justify-between gap-4">
								<p className="text-3xl font-semibold">
									{value.price_current}$
									<span className="pl-2 text-xs text-gray-400 line-through">
										{value.price_old}
									</span>
								</p>
								<div
									onClick={() =>
										dispatch({type: "add", payload: {id: value.id}})
									}
									className="p-2 rounded-md bg-[#6B59CC] cursor-pointer">
									<CiShoppingCart className="font-bold text-white scale-150" />
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
			<h2 className="text-[1.5em] font-bold mb-5">Часто продаваемые</h2>
			<div className="grid grid-cols-4 gap-5 mb-[3.75em] max-xl:grid-cols-3 tr max-[930px]:grid-cols-2 max-sm:text-xs max-[480px]:grid-cols-1 max-[480px]:text-sm">
				{data.reverse().map((value, idx) => (
					<div
						key={idx}
						className="w-full h-full p-5 border border-gray-200 rounded-lg card hover:shadow-md">
						<div className="relative img">
							{likedItems.includes(value.id) ? (
								<FaHeart
									onClick={() => handleLike(value.id)}
									className="absolute text-red-500 scale-150 cursor-pointer top-2 right-2"
								/>
							) : (
								<CiHeart
									onClick={() => handleLike(value.id)}
									className="absolute text-gray-500 scale-150 cursor-pointer top-2 right-2"
								/>
							)}
							<img className="w-full" src={value.imagie} alt={value.name} />
						</div>
						<div className="flex flex-col justify-between gap-4 info">
							<div className="flex items-center justify-between gap-4">
								<p>Артикул: 153789</p>
								<div className="flex items-center gap-[0.1em]">
									{Array.from({length: 5}, (_, index) =>
										value.rating >= index + 1 ? (
											<FaStar key={index} className="text-orange-500" />
										) : (
											<FaRegStar key={index} />
										)
									)}
								</div>
							</div>
							<p className="font-medium">{value.name}</p>
							<div className="flex items-center justify-between gap-4">
								<p className="text-3xl font-semibold">
									{value.price_current}$
									<span className="pl-2 text-xs text-gray-400 line-through">
										{value.price_old}
									</span>
								</p>
								<div
									onClick={() =>
										dispatch({type: "add", payload: {id: value.id}})
									}
									className="p-2 rounded-md bg-[#6B59CC] cursor-pointer">
									<CiShoppingCart className="font-bold text-white scale-150" />
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}

export default Recommended;
