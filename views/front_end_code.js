var updateView = async (button) =>{
    if(button.dataset.querytype == 'by_event'){
        let queryValue = document.querySelector('#eventQuery').value;
        api = `http://localhost:3000/registrations/by_event/${queryValue}`;

    } else if (button.dataset.querytype == 'by_name'){
        let queryValue = document.querySelector('#nameQuery').value;
        api = `http://localhost:3000/registrations/by_name/${queryValue}`;
    } else if (button.dataset.querytype == 'view_all'){
        let queryValue = document.querySelector('#nameQuery').value;
        api = `http://localhost:3000/registrations/view_all/${queryValue}`;
    }

    const data = await fetch(api);
    const model = await data.json();

    render_view(model);
    console.log("btn pressed");

    
}

var render_view = (model) =>{
    var source = document.querySelector("#show_results_view").innerHTML;
    var template = Handlebars.compile(source);
    var html = template(model)

    document.querySelector("#results").innerHTML = html;
}