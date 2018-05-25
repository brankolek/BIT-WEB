$(function () {
    let mainModule = ((UIModule, dataModule) => {


        let handle = (data) => {

            UIModule.render(data);

        }

        dataModule.loadData(handle)





        return {



        }



    })(UIModule, dataModule);

});