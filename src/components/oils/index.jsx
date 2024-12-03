import {LuMoveRight} from "react-icons/lu";
import useAxios from "../../hooks/useAxiosHook";
import {CiShoppingCart} from "react-icons/ci";
import {FaStar} from "react-icons/fa6";
import {FaRegStar} from "react-icons/fa";

function Oils() {
	let {data, loading, error} = useAxios({
		url: `recomemded`,
		method: `GET`,
	});

	if (loading) return <h1>Loading...</h1>;
	if (error) return <h1 className="text-red-600">Error: {error.message}</h1>;

	return (
		<section className="py-[3.75em] bg-white mb-8">
			<div className="w-[90%] mx-auto">
				<div className="flex items-center justify-between gap-4 head mb-7 max-[360px]:flex-col">
					<h2 className="text-[1.5em] ">Автомасла</h2>
					<button className="bg-[#F4F5F6] flex items-center gap-4 rounded-lg text-[#2E1066] font-medium text-base px-4 py-2">
						Все автомасла <LuMoveRight className="mt-[0.12em]" />
					</button>
				</div>
				<div className="grid grid-cols-4 gap-5 products max-[1220px]:grid-cols-3 tr max-[900px]:grid-cols-2 max-[600px]:grid-cols-1 max-[360px]:text-sm">
					<div className="card bg-[url('/src/assets/images/3.png')] w-full p-7 min-h-[26em] bgStyle rounded-lg">
						<p className="text-[1.5em] font-bold text-white">
							Автомасла №1 <br />
							от официальных <br />
							дилеров
						</p>
					</div>
					{data.map((value, idx) =>
						idx !== 1 ? (
							<div
								key={idx}
								className="w-full h-full p-5 border border-gray-200 rounded-lg card hover:shadow-md">
								<div className="img">
									<img className="w-full" src={value.imagie} alt="" />
								</div>
								<div className="flex flex-col justify-between gap-4 info">
									<div className="flex items-center justify-between gap-4">
										<p>Артикул: 153789</p>
										<div className="flex items-center gap-[0.1em]">
											{Array.from({length: 5}, (_, index) =>
												value.rating == 4 ? (
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
										<div className="p-2 rounded-md bg-[#6B59CC] cursor-pointer">
											<CiShoppingCart className="font-bold text-white scale-150" />
										</div>
									</div>
								</div>
							</div>
						) : (
							""
						)
					)}
				</div>
				<div className="grid grid-cols-3 gap-5 ads mt-[3.75em] max-[970px]:grid-cols-2 max-[600px]:grid-cols-1 max-[360px]:text-sm">
					{Array.from({length: 3}, (_, index) => {
						return (
							<div
								key={index}
								className="p-7 text-[1.5em] mb-5 bgStyle w-full min-h-[11em]"
								style={{
									backgroundImage: `url('/src/assets/images/${7 + index}.png')`,
								}}>
								<p>
									Моторные масла <br /> Genesis
								</p>
								<button className="px-4 mt-5 py-2 text-xs bg-[#5946D7] rounded-md text-white font-semibold flex items-center gap-2">
									Перейти <LuMoveRight className="mt-[0.1em]" />
								</button>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}

export default Oils;
