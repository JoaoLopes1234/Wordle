/**
 * This script is the entry point for our application.
 * It initializes the router and logs a message to the console when the document is ready.
 *
 * This file contains the main entry point for our application.
 *
 */

import router from "./router.js";

/**
 * The document ready event handler.
 *
 * This function is executed when the document is fully loaded and ready for interaction.
 * It starts the router and logs a message to the console.
 *
 * @param {Event} event - The event object representing the document ready event.
 */
$(document).ready(() => {
    router.start();
});