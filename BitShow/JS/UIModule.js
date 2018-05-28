let UIModule = (() => {

    let getData = () => {


        let searchItem = $("#searchInput").val()
        return searchItem;
    }

    let renderSearch = (data) => {

        for (index = 0; index < data.length; index++) {


            console.log(index)

            if (index % 3 === 0) {

                var row = $("<div>");

                row.addClass("row")

                $("#main").append(row);
            }
            let col = $("<div>");
            let img = $("<img>").attr("src", data[index].show.image.medium)
            let p = $("<p>").text(data[index].show.name)
            col.append(img);
            col.append(p);
            col.addClass('col')
            row.append(col);


        }







    }

    let render = (data) => {

        for (let i = 0; i < 51; i++) {
            if (i % 3 === 0) {

                var row = $("<div>");

                row.addClass("row")

                $("#main").append(row);
            }
            let col = $("<div>");
            let img = $("<img>").attr("src", data[i].image.medium)
            let p = $("<p>").text(data[i].name)
            col.append(img);
            col.append(p);
            col.addClass('col')
            row.append(col);


        }

    }



    return {

        render,
        renderSearch,
        getData
    }



})();