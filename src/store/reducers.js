const initialState = {
	cartItems: [],
	totalAmount: 0,
}

const cartReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'ADD_TO_CART':
			return {
				...state,
				cartItems: [...state.cartItems, action.payload],
			}

		case 'REMOVE_FROM_CART':
			const productIdToRemove = action.payload
			const indexOfProductToRemove = state.cartItems.findIndex(
				item => item.id === productIdToRemove
			)

			if (indexOfProductToRemove !== -1) {
				const newCartItems = [
					...state.cartItems.slice(0, indexOfProductToRemove),
					...state.cartItems.slice(indexOfProductToRemove + 1),
				]
				return {
					...state,
					cartItems: newCartItems,
				}
			}
			return state

		case 'SET_CART_ITEMS':
			return {
				...state,
				cartItems: action.payload,
			}

		case 'SET_TOTAL_AMOUNT':
			return {
				...state,
				totalAmount: action.payload,
			}

		default:
			return state
	}
}

export default cartReducer
