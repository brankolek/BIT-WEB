      export const getData = () => {
          let searchItem = $("#searchInput").val();
          return searchItem
      }




      export const render = result => {


          $("#log").html("");
          result.forEach(element => {

                  let {
                      avatar,
                      login
                  } = element;
                  let div = $("<div>");

                  div.css("display", "inline-block")
                  let img = $("<img>").attr("src", avatar)
                  img.addClass("img")
                  let loginP = $("<p>").text(login)
                  div.append(img);
                  div.append(loginP);
                  $('#log').append(div)
              }

          )

      }