import Navigo from 'navigo';

import homeController from './controller/HomeController';
import goodsController from './controller/GoodsController';
import cartController from './controller/CartController';

import Bootstrap from 'bootstrap/dist/css/bootstrap.css';

const router = new Navigo(null, true, '#');

const renderToDom = (html) => {
    document.getElementById('content').innerHTML = html;
};

const registerEventListeners = (controller) => {
    if (controller._registerEventListeners) {
        controller._registerEventListeners();
    }
};

router
    .on('/', function () {
        renderToDom(homeController.render());
        registerEventListeners(homeController);

    })
    .on('/goods', function () {
        renderToDom(goodsController.render());
        registerEventListeners(goodsController);
    })
    .on('/cart', function () {
        renderToDom(cartController.render());
        registerEventListeners(cartController);
    })
    .resolve();