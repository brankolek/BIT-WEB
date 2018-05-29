class DataModule {

    loadData() {



        return fetch("http://api.tvmaze.com/shows")
            .then(response => response.json())



    }

    findData(searchItem) {

        let api = "http://api.tvmaze.com/search/shows?q=" + searchItem

        return fetch(api).then(response => response.json())


    }

    showInfoPage(id) {

        let api = "http://api.tvmaze.com/shows/" + id + "?embed[]=cast&embed[]=seasons"
        return fetch(api).then(response => response.json())


    }




}

export default DataModule;