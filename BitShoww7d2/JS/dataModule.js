class DataModule {




    loadData() {


        if (localStorage.getItem("show") == null) {

            return fetch("http://api.tvmaze.com/shows")
                .then(response => {

                    return response.json()

                }).then(data => {


                    localStorage.setItem("show", JSON.stringify(data))

                    return data
                })


        } else {

            let data = JSON.parse(localStorage.getItem("show"));



            return Promise.resolve(data);



        }

        localStorage.setItem("", )


        let cache = {}



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