class UIModule {


    getData() {
        let searchItem = $("#searchInput").val();
        return searchItem;
    };

    renderSearch(data) {


        $("datalist").html("");
        let length = 10 > data.length ? data.length : 10;

        for (var i = 0; i < length; i++) {

            let option = $("<option>").attr("value", data[i].show.name);
            $("datalist").append(option);
        }
    };

    render(data) {
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




}

export default UIModule;