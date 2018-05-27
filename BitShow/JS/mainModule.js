$(function () {
    let mainModule = ((UIModule, dataModule) => {


        let handle = (data) => {
            $('#main').html("")
            UIModule.render(data);

        }

        dataModule.loadData(handle)



        var searchListener = () => {

            $("#searchButton").on("click", () => {


                console.log(UIModule.getData());
                console.log(searchItem)
                dataModule.findData(searchItem, handle)






            })


        }




        return {

            searchListener

        }



    })(UIModule, dataModule);

    mainModule.searchListener();

});