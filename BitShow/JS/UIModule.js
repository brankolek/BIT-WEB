let UIModule = (() => {
    let getData = () => {
        let searchItem = $("#searchInput").val();
        return searchItem;
    };

    let renderSearch = data => {
        // $("#main").html("")
        // for (index = 0; index < data.length; index++) {

        //     console.log(index)

        //     if (index % 3 === 0) {

        //         var row = $("<div>");

        //         row.addClass("row")

        //         $("#main").append(row);
        //     }
        //     let col = $("<div>");
        //     let img = $("<img>").attr("src", data[index].show.image.medium);
        //     let p = $("<p>").text(data[index].show.name);
        //     let link = $("<a>");
        //     link.append(img)
        //     col.append(link);
        //     col.append(p);
        //     col.addClass('col')
        //     row.append(col);

        // }

        $("datalist").html("");
        let length = 10 > data.length ? data.length : 10;

        for (i = 0; i < length; i++) {
            console.log(data[i].show.name);
            let option = $("<option>").attr("value", data[i].show.name);
            $("datalist").append(option);
        }
    };

    let render = data => {
        for (let i = 0; i < 51; i++) {
            if (i % 3 === 0) {
                var row = $("<div>");

                row.addClass("row");

                $("#main").append(row);
            }
            let col = $("<div>");
            let img = $("<img>").attr("src", data[i].image.medium);
            let p = $("<p>").text(data[i].name);

            let query = "./ShowInfoPage.html?id=" + data[i].id;
            let link = $("<a>").attr("href", query);
            link.append(img);
            col.append(link);
            col.append(p);
            col.addClass("col");
            row.append(col);
        }
    };

    return {
        render,
        renderSearch,
        getData
    };
})();