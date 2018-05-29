import dataModule from "./dataModule.js"
import UIdetails from "./UIdetails.js"

let UI = new UIdetails();
let data = new dataModule();

let details = (() => {



    let handleDetails = (data) => {


        UI.renderDetails(data);

    }


    function show() {

        //spremiti joj ID 
        let id = window.location.search.split("=")[1]
        data.ShowInfoPage(id, handleDetails)
    }




    return {

        show
    }





})();



details.show();