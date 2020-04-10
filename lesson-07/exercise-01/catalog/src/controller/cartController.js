import cartView from './../view/cart.handlebars';
import CartModel from "../model/cartModel";

class CartController {
    constructor() {
        this.cartModel = new CartModel();
    }

    render() {
        const data = this.cartModel.getGoodsInCart();

        return cartView({
            items: data,
            isEmpty: data.length === 0,
        });
    }
}

export default new CartController();