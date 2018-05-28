// $(function () {
let mainModule = ((UIModule, dataModule) => {


    let handle = (data) => {

        UIModule.render(data);

    }
    let handleSearch = (data) => {

        UIModule.renderSearch(data);

    }


    function init() {
        dataModule.loadData(handle)

    }






    var searchListener = () => {

        $("#searchButton").on("click", (e) => {
            e.preventDefault()

            let searchItem = UIModule.getData()


            dataModule.findData(searchItem, handleSearch)


        })


    }

    var imgListener = () => {

        $("img").on("click", () => {




        })


    }




    return {

        searchListener,
        init

    }



})(UIModule, dataModule);

mainModule.init()
mainModule.searchListener();

// });