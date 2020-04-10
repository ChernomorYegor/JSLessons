import homeView from './../view/home.handlebars';
import HomeModel from './../model/homeModel';

class HomeController {
    render() {
        return homeView();
    }
}

export default new HomeController();