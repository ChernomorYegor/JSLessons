import GoodsModel from "./goodsModel";

class CartModel {
    constructor() {
        this.goodsModel = new GoodsModel();
    }

    getGoodsInCart() {
        return this.goodsModel.getCartItems();
    };
}

export default CartModel;