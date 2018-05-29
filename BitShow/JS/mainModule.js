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

        $("#searchInput").on("keyup", (e) => {
            e.preventDefault()

            let searchItem = UIModule.getData()


            dataModule.findData(searchItem, handleSearch)


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