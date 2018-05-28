// $(function () {
let mainModule = ((UIModule, dataModule) => {


    // let handle = (data) => {

    //     UIModule.render(data);

    // }
    let handleSearch = (data) => {

        UIModule.renderSearch(data);

    }


    // $(window).on("load", () => {

    // function init() {
    //     dataModule.loadData(handle)

    // }


    // })



    var searchListener = () => {

        $("#searchButton").on("click", (e) => {
            e.preventDefault()

            let searchItem = UIModule.getData()
            console.log(searchItem)



            // $(window).off("load", () => {


            //     dataModule.loadData(handle)

            // })
            // $('#main').html("")


            dataModule.findData(searchItem, handleSearch)






        })


    }




    return {

        searchListener,
        // init

    }



})(UIModule, dataModule);

// mainModule.init()
mainModule.searchListener();

// });