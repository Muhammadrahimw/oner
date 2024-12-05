import React, {useEffect, useState} from "react";
import {FaHeart} from "react-icons/fa";
import useAxios from "../../hooks/useAxiosHook";
import {FaRegStar, FaStar} from "react-icons/fa6";
import {CiShoppingCart} from "react-icons/ci";

function Likes() {
	const [likedItems, setLikedItems] = useState([]);

	useEffect(() => {
		const storedLikedItems = JSON.parse(localStorage.getItem("isLiked")) || [];
		setLikedItems(storedLikedItems);
	}, []);

	let {data, loading, error} = useAxios({
		url: `recomemded`,
		method: `GET`,
	});

	if (!data || !Array.isArray(data)) return <h1>No data available</h1>;

	const handleLike = (id) => {
		const currentLikedItems = JSON.parse(localStorage.getItem("isLiked")) || [];
		const newLikedItems = currentLikedItems.includes(id)
			? currentLikedItems.filter((item) => item !== id)
			: [...currentLikedItems, id];
		localStorage.setItem("isLiked", JSON.stringify(newLikedItems));
		setLikedItems(newLikedItems);
	};

	const filteredData = data.filter((value) => likedItems.includes(value.id));

	return (
		<section className="grid grid-cols-3 gap-4 w-[90%] mx-auto my-8">
			{filteredData.length === 0 ? (
				<h2 className="w-full col-span-3 text-lg text-center text-gray-500">
					Yoqtirilganlar bo'sh!
				</h2>
			) : (
				filteredData.map((value) => (
					<div
						key={value.id}
						className="w-full h-full p-5 border border-gray-200 rounded-lg card hover:shadow-md">
						<div className="relative img">
							<FaHeart
								onClick={() => handleLike(value.id)}
								className={`scale-150 cursor-pointer absolute top-2 right-2 ${
									likedItems.includes(value.id)
										? "text-red-500"
										: "text-gray-500"
								}`}
							/>
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
				))
			)}
		</section>
	);
}

export default Likes;
