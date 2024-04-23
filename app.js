import router from "./router.js";

//Our script entry point
$(document).ready(() => {
    /*async function test() {
        var word = await fetch("https://api.dictionaryapi.dev/api/v2/entries/en/hello")
        var wordjson = await word.json();
        console.log(word);
        console.log(wordjson);
    }
    test();*/
    router.start();
    console.log('document ready');
})
