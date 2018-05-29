// // $(function () {
// let mainModule = ((UIModule, dataModule) => {


// let handle = (data) => {

//     UIModule.render(data);

// }
// let handleSearch = (data) => {

//     UIModule.renderSearch(data);

// }


// function init() {
//     dataModule.loadData(handle)

// }






// var searchListener = () => {

//     $("#searchInput").on("keyup", (e) => {
//         e.preventDefault()

//         let searchItem = UIModule.getData()


//         dataModule.findData(searchItem, handleSearch)


//     })


// }






//     return {

//         searchListener,
//         init

//     }



// })(UIModule, dataModule);

// mainModule.init()
// mainModule.searchListener();

// });

import dataModule from "./dataModule.js"
import UIModule from "./UIModule.js"

let main = (function () {


    let data = new dataModule;
    let UI = new UIModule;


    let handle = (data) => {

        UI.render(data);

    }
    let handleSearch = (data) => {

        UI.renderSearch(data);

    }


    function init() {
        data.loadData(handle)

    }


    var searchListener = () => {

        $("#searchInput").on("keyup", (e) => {
            e.preventDefault()

            let searchItem = UI.getData()


            data.findData(searchItem, handleSearch)


        })


    }


    return {

        searchListener,
        init

    }



})();

main.init()
main.searchListener();