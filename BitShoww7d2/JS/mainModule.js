import DataModule from "./dataModule.js"
import UIModule from "./UIModule.js"

let main = (function () {


    let data = new DataModule;
    let UI = new UIModule;



    let handleSearch = (data) => {

        UI.renderSearch(data);

    }


    function init() {
        data.loadData().then((myJson) => {
            UI.render(myJson)
        })

    }


    var searchListener = () => {

        $("#searchInput").on("keyup", (e) => {
            e.preventDefault()

            let searchItem = UI.getData()


            data.findData(searchItem).then((response) => {

                UI.renderSearch(response)


            })


        })


    }


    return {

        searchListener,
        init

    }



})();

main.init()
main.searchListener();