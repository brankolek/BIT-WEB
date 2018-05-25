let dataModule = (() => {

    let loadData = (handle) => {

        $.get("http://api.tvmaze.com/shows").done(handle)



    }



    return {

        loadData
    }


})();


$(function () {



















});