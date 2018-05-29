export const loadData = (searchItem, handle) => {

    let apiUrl = "https://api.github.com/search/users?q=" + searchItem;
    $.get(apiUrl).done((data) => {

        let result = [];


        for (let i = 0; i < data.items.length; i++) {
            let item = {};
            item.avatar = data.items[i].avatar_url
            item.login = data.items[i].login

            result.push(item)


        }
        console.log(result)


        handle(result);
    })

}