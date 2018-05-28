let dataModule = (() => {

            let loadData = (handle) => {

                $.get("http://api.tvmaze.com/shows").done(handle);



            }

            let findData = (searchItem, handleSearch) => {

                let api = "http://api.tvmaze.com/search/shows?q=" + searchItem
                $.get(api).done(handleSearch)


            }

            let ShowInfoPage = (id, handleDetails) => {

                // iscupati ID 
                let api = "http://api.tvmaze.com/shows/" + id
                $.get(api).done(handleDetails)

            }



            return {

                loadData,
                findData,
                ShowInfoPage
            }


        }