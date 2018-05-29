import DataModule from "./dataModule.js"
import UIdetails from "./UIdetails.js"

let UI = new UIdetails();
let data = new DataModule();

let details = (() => {


    function show() {

        let id = window.location.search.split("=")[1]
        data.showInfoPage(id).then((response) => {


            UI.renderDetails(response)

        })
    }




    return {

        show
    }





})();



details.show();