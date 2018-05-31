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
            console.log(JSON.stringify(myJson))
            console.log(myJson, typeof myJson)
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