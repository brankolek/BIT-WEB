let dataModule = (() => {

    let loadData = (handle) => {

        $.get("http://api.tvmaze.com/shows").done(handle)



    }

    let findData = (searchItem, handle) => {

        let api = "http://api.tvmaze.com/search/shows?q=" + searchItem
        $.get(api).done(function (data) {
            console.log(data)

        })


    }



    return {

        loadData,
        findData
    }


})();


$(function () {



















});