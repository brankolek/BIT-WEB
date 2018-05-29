let Details = ((UIdetails, dataModule) => {



    let handleDetails = (data) => {


        UIdetails.renderDetails(data);

    }


    function show() {

        //spremiti joj ID 
        let id = window.location.search.split("=")[1]
        dataModule.ShowInfoPage(id, handleDetails)
    }




    return {

        show
    }





})(UIdetails, dataModule)



Details.show();