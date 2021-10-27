export const addItemToCart = (shoppingCartItems, shoppingCartItemToAdd) => {
    const existingCartItem = shoppingCartItems.find(
        shoppingCartItem => shoppingCartItem.id === shoppingCartItemToAdd.id
    );

    if(existingCartItem) {
        return shoppingCartItems.map( shoppingCartItem => 
            shoppingCartItem.id === shoppingCartItemToAdd.id
            ? { ...shoppingCartItem, quantity: shoppingCartItem.quantity + 1 }
            : shoppingCartItem
        
        )
    }
    return [...shoppingCartItems, { ...shoppingCartItemToAdd, quantity: 1 }]
}
