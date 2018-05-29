       import {
           render,
           getData
       } from "./UI.js"

       import {
           loadData
       } from "./data.js"


       let handle = (result) => {

           render(result)
       }


       $("#searchButton").on("click", () => {


           let searchItem = getData()

           loadData(searchItem, handle)




       })