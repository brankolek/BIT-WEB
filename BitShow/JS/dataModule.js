let dataModule = (() => {

    // let loadData = (handle) => {

    //     $.get("http://api.tvmaze.com/shows").done(handle)



    // }

    let findData = (searchItem, handleSearch) => {

        let api = "http://api.tvmaze.com/search/shows?q=" + searchItem
        $.get(api).done(
            // (data) => {

            //     console.log(data)
            // })

            handleSearch)


    }



    return {

        // loadData,
        findData
    }


})();