import React from "react";
import useAxios from "../../hooks/useAxiosHook";
import {LuMoveRight} from "react-icons/lu";

function Showcase() {
	let {data, loading, error} = useAxios({
		url: `/categories`,
		method: `GET`,
	});

	if (loading) return <h1>Loading...</h1>;
	if (error) return <h1 className="text-red-600">Error: {error.message}</h1>;

	let imgNum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

	return (
		<section className="my-8 w-[90%] mx-auto max-[500px]:text-sm tr max-[420px]:text-xs max-[360px]:text-[0.5em]">
			<div className="showcaseImg bgStyle bg-[url('/src/assets/images/1.png')] w-full h-[30em] flex flex-col justify-center items-start pl-[3.75em] rounded-[2em] max-[500px]:pl-[2em] tr max-[360px]:px-8">
				<h1 className="text-[2.5em] font-bold text-white">
					Оригинальные автомасла <br /> cо скидкой{" "}
					<span className="bg-[#fb5c2a] rounded-xl px-1">15% ₽</span>
				</h1>
				<p className="text-white text-[1.15em] mt-7">
					Акция действует с 1 по 30 июня 2021
				</p>
			</div>
			<div className="showcaseCards mt-[3.75em] grid grid-cols-3 bg-white rounded-lg shadow-lg max-[1240px]:grid-cols-2 max-sm:grid-cols-1">
				{data.map((value, idx) =>
					idx !== 11 ? (
						<div
							key={idx}
							className="flex gap-5 cursor-pointer card p-7 hover:bg-gray-100">
							<div>
								<img
									src={`/src/assets/images/icons/line_icons-${imgNum[idx]}.svg`}
								/>
							</div>
							<div>
								<p className="text-base font-medium">{value.name}</p>
								<p className="text-[#505255] text-[0.85em] mt-1">
									{value.products_count}
								</p>
							</div>
						</div>
					) : (
						<div
							key={idx}
							className="flex gap-5 items-center card p-7 bgStyle cursor-pointer bg-[url('/src/assets/images/2.png')]">
							<div>
								<img
									className="w-full max-[960px]:hidden"
									src={`/src/assets/images/icons/line_icons-${imgNum[idx]}.svg`}
								/>
							</div>
							<p className="text-xl font-medium text-white">{value.name}</p>
							<LuMoveRight className="text-[2em] text-white ml-12 mt-[0.15em] max-[960px]:hidden" />
						</div>
					)
				)}
			</div>
		</section>
	);
}

export default Showcase;
