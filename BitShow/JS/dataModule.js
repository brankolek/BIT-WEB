// let dataModule = (() => {

//     let loadData = (handle) => {

//         $.get("http://api.tvmaze.com/shows").done(handle);



//     }

//     let findData = (searchItem, handleSearch) => {

//         let api = "http://api.tvmaze.com/search/shows?q=" + searchItem
//         $.get(api).done(handleSearch)


//     }

//     let ShowInfoPage = (id, handleDetails) => {

//         // iscupati ID http://api.tvmaze.com/shows/1?embed[]=cast&embed[]=seasons
//         let api = "http://api.tvmaze.com/shows/" + id + "?embed[]=cast&embed[]=seasons"
//         $.get(api).done(handleDetails)

//     }



//     return {

//         loadData,
//         findData,
//         ShowInfoPage
//     }


// })();


class DataModule {

    loadData(handle) {

        $.get("http://api.tvmaze.com/shows").done(handle);



    }

    findData(searchItem, handleSearch) {

        let api = "http://api.tvmaze.com/search/shows?q=" + searchItem
        $.get(api).done(handleSearch)


    }

    ShowInfoPage(id, handleDetails) {

        // iscupati ID http://api.tvmaze.com/shows/1?embed[]=cast&embed[]=seasons
        let api = "http://api.tvmaze.com/shows/" + id + "?embed[]=cast&embed[]=seasons"
        $.get(api).done(handleDetails)

    }




}

export default dataModule;