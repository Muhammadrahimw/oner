import {useState} from "react";
import MainLayoutComponent from "./components/layout";
import Showcase from "./components/showcase";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import HomePage from "./pages/home";
import Basket from "./components/basket";

let router = createBrowserRouter([
	{
		path: `/`,
		element: <MainLayoutComponent />,
		children: [
			{index: true, element: <HomePage />},
			{path: `Basket`, element: <Basket />},
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
