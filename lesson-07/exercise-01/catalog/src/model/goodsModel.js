import data from './../../data';

const LOCAL_STORAGE_CART_ITEMS_KEY = 'cart-items';

class GoodsModel {
    getData() {
        return data;
    };

    _getItems() {
        let items = window.localStorage.getItem(LOCAL_STORAGE_CART_ITEMS_KEY);

        if (!items) {
            items = [];
        } else {
            items = JSON.parse(items);
        }

        return items;
    }

    addToCart(id) {
        let items = this._getItems();
        const sanitized = +id;

        let found = false;
        for (let i = 0; i < items.length; i++) {
            if (items[i] === sanitized) {
                items.splice(i, 1);
                found = true;
            }
        }

        if (found === false) {
            items.push(sanitized);
        }

        window.localStorage.setItem(LOCAL_STORAGE_CART_ITEMS_KEY, JSON.stringify(items));

        return found;
    }

    getCartItems() {
        let items = this._getItems();

        const data = this.getData();

        return data.filter((item) => items.includes(item.id));
    }
}

export default GoodsModel;