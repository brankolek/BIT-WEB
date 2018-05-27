let UIModule = (() => {

    let getData = () => $("#search").val();



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
        getData
    }



})();