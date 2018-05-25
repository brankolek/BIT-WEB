let UIModule = (() => {




    let render = (data) => {

        for (let i = 0; i < 50; i++) {

            let div = $("<div>");
            let img = $("<img>").attr("src", data[i].image.medium)
            div.append(img);
            $("#main").append(div);

        }

        // data.forEach(element => {
        //     let div = $("<div>");
        //     let img = $("<img>").attr("src", element.image.medium)
        //     div.append(img);
        //     $("#main").append(div);
        // });

    }



    return {

        render
    }



})();