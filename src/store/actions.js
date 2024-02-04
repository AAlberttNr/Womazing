
export const addToCart = product => ({
	type: 'ADD_TO_CART',
	payload: product,
})

export const removeFromCart = productId => ({
	type: 'REMOVE_FROM_CART',
	payload: productId,
})

export const setCartItems = cartItems => ({
	type: 'SET_CART_ITEMS',
	payload: cartItems,
})

export const updateCartItemQuantity = (productId, newQuantity) => ({
	type: 'UPDATE_CART_ITEM_QUANTITY',
	payload: { productId, newQuantity },
})
