export const getCartItems = () => {
    const cart = localStorage.getItem('cart');;
    if (cart){
        return JSON.parse(cart).item;
    }
    else {
        return null;
    }
}

export const getCartItemCount = () => {
    const cart = getCartItems();
    if (cart){
        return cart.length;
    }
    else {
        return 0;
    }
}

export const getTotalPrice = () => {
    const cart = getCartItems();
    if (cart){
        let price = 0;

        cart.forEach(i => {
            const eachPrice = Number(i.price.original) - Number(i.price.discounted);
            price += eachPrice
        })
        return price;
    }
    else {
        return 0;
    }
}

export const storeItem = async (item) => {
    const isCartExist = localStorage.getItem('cart');
    
    try {
        if (isCartExist){
            const cart = await JSON.parse(localStorage.getItem('cart'));
            cart.item.push(item);
            localStorage.setItem('cart', JSON.stringify(cart));
            window.dispatchEvent(new Event('storage'));
            return true;
        }
        else {
            const itemtoDispatch = {
                item: [item]
            }
            localStorage.setItem('cart', JSON.stringify(itemtoDispatch))
            window.dispatchEvent(new Event('storage'));
            return true
        }
    } catch (error) {
        return false;
    }
}
