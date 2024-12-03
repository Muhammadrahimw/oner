import {CiSearch} from "react-icons/ci";
import {IoLocationOutline} from "react-icons/io5";
import {BiPhoneCall} from "react-icons/bi";
import {FaRegUser} from "react-icons/fa6";
import {TiThSmall} from "react-icons/ti";
import {CiShoppingCart} from "react-icons/ci";
import {TbMessageDots} from "react-icons/tb";
import {Outlet} from "react-router-dom";
import Showcase from "../showcase";

function MainLayoutComponent() {
	return (
		<div className="">
			<header className="w-[90%] mx-auto mt-4">
				<div className="flex items-center justify-between gap-4 headerTop max-[1100px]:text-xs max-[900px]:text-base max-[900px]: tr">
					<div className="w-[500px] max-w-[205px] logo">
						<a href="/index.html">
							<img className="w-full" src="/logo.svg" alt="logo" />
						</a>
					</div>
					<div className="flex rounded justify-between border border-gray-3 px-2 items-center gap-2 searchDiv bg-[#f4f5f6] h-10 max-w-full min-w-[23em] max-[1310px]:min-w-[7em] tr">
						<input
							className="text-[1.1em] w-full h-full bg-transparent outline-none"
							type="text"
							placeholder="Введите номер запчасти или VIN"
						/>
						<CiSearch className="text-2xl" />
					</div>
					<div className="flex items-center justify-between w-full gap-4 infos text-[1.1em]">
						<div className="flex items-center gap-2 location">
							<IoLocationOutline />
							<p className=""> Санкт-Петербург</p>
						</div>
						<div className="flex items-center gap-2 phoneNumber">
							<BiPhoneCall />
							<a className="font-bold" href="tel:+7 (347) 229-46-45">
								+7 (347) 229-46-45
							</a>
						</div>
						<div className="flex items-center gap-2 entering">
							<FaRegUser />
							<p>Вход / Регистрация</p>
						</div>
					</div>
				</div>
				<hr className="my-3" />
				<div className="flex items-center justify-between gap-1 category max-[1480px]:text-xs max-[1150px]:grid max-[1150px]:grid-cols-4 max-[1150px]:text-base max-[1150px]:gap-2 tr">
					<div className="bg-[#6b59cc] px-5 py-3 flex items-center gap-2 rounded-md text-white cursor-pointer">
						<TiThSmall />
						<p>Все категории</p>
					</div>
					<div className="px-4 py-3 hover:bg-[#f4f5f6] rounded-md cursor-pointer">
						<p>Запчасти для ТО</p>
					</div>
					<div className="px-5 py-3 hover:bg-[#f4f5f6] rounded-md cursor-pointer">
						<p>Автомасла</p>
					</div>
					<div className="px-5 py-3 hover:bg-[#f4f5f6] rounded-md cursor-pointer">
						<p>Оригинальные запчасти</p>
					</div>
					<div className="px-5 py-3 hover:bg-[#f4f5f6] rounded-md cursor-pointer">
						<p>Неоригинальные запчасти</p>
					</div>
					<div className="px-5 py-3 hover:bg-[#f4f5f6] rounded-md cursor-pointer">
						<p>Лампочки</p>
					</div>
					<div className="px-5 py-3 hover:bg-[#f4f5f6] rounded-md cursor-pointer">
						<p>Аккумуляторы</p>
					</div>
					<div className="px-5 py-3 hover:bg-[#f4f5f6] rounded-md cursor-pointer flex items-center gap-2 font-medium">
						<CiShoppingCart className="scale-150 text-[#6b59cc]" />
						<p>Корзина</p>
						<div className=" w-6 h-6 rounded-full bg-[#fb6019] flex justify-center items-center text-white">
							5
						</div>
					</div>
				</div>
			</header>
			<main>
				<Outlet />
			</main>
			<footer className="bg-[#2f2b4a] py-10 text-white">
				<div className="top w-[90%] mx-auto flex justify-between items-start gap-8 flex-wrap">
					<div className="flex flex-col items-start">
						<b className="mb-4">Меню компании</b>
						<a href="#">Что такое Oner</a>
						<a href="#">Реквизиты и информация</a>
						<a href="#">Новости</a>
						<a href="#">Вакансии</a>
						<a href="#">Поставщикам</a>
						<a href="#">Контакты</a>
					</div>
					<div className="flex flex-col items-start">
						<b className="mb-4">Каталоги</b>
						<a href="#">Оригинальные запчасти</a>
						<a href="#">Неоригинальные запчасти</a>
						<a href="#">Запчасти для ТО</a>
						<a href="#">Автомасла</a>
						<a href="#">Аккумуляторы</a>
						<a href="#">Распродажа</a>
					</div>
					<div className="flex flex-col items-start">
						<b className="mb-4">Помощь</b>
						<a href="#">Часто задаваемые вопросы</a>
						<a href="#">Консультация Online</a>
						<a href="#">Оплата заказа</a>
						<a href="#">Доставка заказа</a>
						<a href="#">Возврат товара</a>
						<a href="#">Забыл пароль</a>
					</div>
					<div className="flex flex-col items-start">
						<b className="mb-4">Товары и бренды</b>
						<a href="#">Список брендов</a>
						<a href="#">Популярные товары</a>
						<a href="#">Наличие на складах</a>
					</div>
					<div className="flex flex-col items-start">
						<div className="flex items-center gap-2">
							<TbMessageDots />
							<b>Консультация Online</b>
						</div>
						<p>Задавайте вопросы</p>
						<br />
						<a href="#">
							Сервис работает в <br /> обычном режиме
						</a>
					</div>
				</div>
			</footer>
		</div>
	);
}

export default MainLayoutComponent;
