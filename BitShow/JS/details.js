let Details = ((UIdetails, dataModule) => {



    let handleDetails = (data) => {


        UIdetails.renderDetails(data);

    }


    function show() {

        //spremiti joj ID 
        dataModule.ShowInfoPage(id, handleDetails)
    }




    return {

        show
    }





})(UIdetails, dataModule)



Details.show();