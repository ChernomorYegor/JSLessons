import goodsView from './../view/goods.handlebars';
import GoodsModel from "../model/goodsModel";
import $ from 'jquery';

class GoodsController {
    constructor() {
        this.goodsModel = new GoodsModel();
    }

    _registerEventListeners() {
        $('.add-to-cart').on('click', (e) => {
            const id = $(e.target).attr('data-id');
            const addResult = this.goodsModel.addToCart(id);

            alert(addResult === true ? 'Removed from cart' : 'Added to the cart');
        });
    };

    render() {
        const data = this.goodsModel.getData();

        return goodsView({
            items: data,
            isCatalog: true,
        });
    }
}

export default new GoodsController();