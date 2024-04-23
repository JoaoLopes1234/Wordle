import homeController from "./controllers/home-controller.js";
import gameController from "./controllers/game-controller.js";
import winController from "./controllers/win-controller.js";
import loseController from "./controllers/lose-controller.js"
//module to be exported
let router;

router = {
    //possible has routings
    routes: {
        home: {
            hash: '#home',
            controller: homeController
        },
        game: {
            hash: '#game',
            controller : gameController
        },
        win:{
            hash: '#win',
            controller: winController
        },
        lose : {
            hash: '#lose',
            controller: loseController
        }
    },

    start: () => {
        router.routes.home.controller.init();
        $(window).on('hashchange', () => {
            try {
                router.getRoute(router.routes);
            }
            catch (err) {
                window.location.hash = '#home'
                router.routes.home.controller.init();
            }
        })
    },

    getRoute: (routes) => {
        var obj = Object.values(routes).find((route) => route.hash === window.location.hash);
        //If the current hash is not in our routes, then we default to home view
        obj = obj === undefined ? router.routes.home : obj;
        window.location.hash = obj.hash;
        obj.controller.init();
    }
}

export default router;