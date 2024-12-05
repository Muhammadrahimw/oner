import React, {useReducer, createContext, useContext} from "react";

const MyContext = createContext();

const initialState = {shop: []};

function reducer(state, action) {
	switch (action.type) {
		case "add":
			const updatedShop = [...state.shop];
			const existingItem = updatedShop.find(
				(item) => item.id === action.payload.id
			);

			if (existingItem) {
				existingItem.count += 1;
			} else {
				updatedShop.push({id: action.payload.id, count: 1});
			}

			localStorage.setItem("shop", JSON.stringify(updatedShop));
			return {shop: updatedShop};
		case "isLiked":
			let likedItems = JSON.parse(localStorage.getItem("isLiked")) || [];
			if (!likedItems.includes(action.payload.id)) {
				likedItems.push(action.payload.id);
			}
			localStorage.setItem("isLiked", JSON.stringify(likedItems));
			return state;
		default:
			return state;
	}
}

export function MyProvider({children}) {
	let [state, dispatch] = useReducer(reducer, initialState);

	return (
		<MyContext.Provider value={{state, dispatch}}>
			{children}
		</MyContext.Provider>
	);
}

export function useMyContext() {
	return useContext(MyContext);
}
