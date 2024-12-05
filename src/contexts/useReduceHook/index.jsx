import React, {useReducer, createContext, useContext} from "react";

const MyContext = createContext();

const initialState = {count: 0};

function reducer(state, action) {
	switch (action.type) {
		case "increment":
			return {count: state.count + 1};
		case "decrement":
			return {count: state.count - 1};
		default:
			state;
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
