let UIdetails = (() => {



    let renderDetails = (data) => {

        console.log(data);
        let row = $("<div>").addClass("row justify-content-center text-center my-5")
        let title = $("<div>").text(data.name).addClass("col")
        $(row).append(title);
        $("#main").append(row);
        let secondRow = $("<div>").addClass("row  my-5")
        let image = $("<img>").attr("src", data.image.original).addClass("col-6");
        $(secondRow).append(image);
        $("#main").append(secondRow);
        let divUl = $("<div>").addClass("col-6")
        let ul = $("<ul>")
        $(divUl).append(ul)
        $(secondRow).append(divUl);
        for (var i = 0; i < data._embedded.seasons.length; i++) {

            console.log("askjalk")
            let li = $("<li>").text(data._embedded.seasons[i].premiereDate + " = " + data._embedded.seasons[i].endDate)
            ul.append(li);
        }
        let ulCast = $("<ul>");
        $(divUl).append(ulCast);
        for (var i = 0; i < data._embedded.cast.length; i++) {

            console.log("askjalk")
            let li = $("<li>").text(data._embedded.cast[i].person.name)
            ulCast.append(li);
        }


        let thirdRow = $("<div>").addClass("row  my-5");
        let summary = $("<div>").html(data.summary).addClass("col-12");
        $(thirdRow).append(summary);
        $("#main").append(thirdRow);




    }






    return {


        renderDetails
    }




})();