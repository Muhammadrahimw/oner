import {useState} from "react";
import MainLayoutComponent from "./components/layout";
import Showcase from "./components/showcase";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import HomePage from "./pages/home";
import Basket from "./components/basket";
import {MyProvider} from "./contexts/useReduceHook";
import Likes from "./components/likes";

let router = createBrowserRouter([
	{
		path: `/`,
		element: <MainLayoutComponent />,
		children: [
			{index: true, element: <HomePage />},
			{path: `Basket`, element: <Basket />},
			{path: `Likes`, element: <Likes />},
		],
	},
]);

function App() {
	return (
		<MyProvider>
			<RouterProvider router={router} />
		</MyProvider>
	);
}

export default App;
