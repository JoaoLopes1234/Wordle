/**
 * Import the controllers for the different routes.
 */
import homeController from "./controllers/home-controller.js";
import gameController from "./controllers/game-controller.js";
import winController from "./controllers/win-controller.js";
import loseController from "./controllers/lose-controller.js";

/**
 * The router module.
 * @type {Object}
 */
let router;

/**
 * Initialize the router with the defined routes and their corresponding controllers.
 */
router = {
    /**
     * The possible routes and their corresponding controllers.
     * @type {Object}
     */
    routes: {
        home: {
            hash: '#home',
            controller: homeController
        },
        game: {
            hash: '#game',
            controller: gameController
        },
        win: {
            hash: '#win',
            controller: winController
        },
        lose: {
            hash: '#lose',
            controller: loseController
        }
    },

    /**
     * Start the router by initializing the home route and listening for hash changes.
     */
    start: function() {
        this.routes.home.controller.init();
        $(window).on('hashchange', () => {
            try {
                this.getRoute(this.routes);
            } catch (err) {
                window.location.hash = '#home';
                this.routes.home.controller.init();
            }
        });
    },

    /**
     * Get the route based on the current hash and initialize the corresponding controller.
     * @param {Object} routes - The object containing the routes and their corresponding controllers.
     */
    getRoute: function(routes) {
        var obj = Object.values(routes).find((route) => route.hash === window.location.hash);
        // If the current hash is not in our routes, then we default to home view
        obj = obj === undefined ? this.routes.home : obj;
        window.location.hash = obj.hash;
        obj.controller.init();
    }
};

/**
 * Export the router module.
 */
export default router;