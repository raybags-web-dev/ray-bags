// spinner
const spinner = function() {
        return ` <button class="btn loading_spinner" type="button" disabled>
               <span class="spinner-grow spinner-grow-lg" role="status" aria-hidden="true"></span>
               Loading...
             </button>`
    }
    // remove container when clicked outside handler
const purgeContainer = function(element) {
    // remove component
    $($(element).children()[1]).on("click", () =>
        $(element).remove()
    );
    // remove component when clicked outside of element
    document.addEventListener("click", function(event) {
        let clickTarget = $(event.target);
        if (!clickTarget.is("i") && clickTarget.hasClass("video-wrapper")) {
            $(element).remove();
        }
    });
}

// Empty wrapper place holder
const createEmptyDataWrapper = function() {
        const close_button = $("<i />").attr({
            class: "fas fa-times",
            id: "video_closeBTN",
        });
        const emptyContainer = `<div class="video-frame">
                                        <div class="_innerDiv" draggable="true">
                                            <p class="data_para">Under Implimentation</p>
                                            <span class="data_time text-muted">DATE: &emsp;${new Date().toLocaleDateString()}</span>
                                        </div> 
                                </div> `
        const dataaDIV = $("<div></div>")
            .attr({ class: "video-wrapper" })
            .append($(emptyContainer), $(close_button));

        $("body").prepend($(dataaDIV));
        // remove menu if click is outside element
        purgeContainer($(dataaDIV));
    }
    // ====================================================
    // =============News helper function=================
const createNewsDataWrapper = async function(dataURL) {
    const wrapperDiv = $("<div></div>").attr({ class: "video-frame" }).append(spinner());
    const close_button = $("<i />").attr({
        class: "fas fa-times",
        id: "video_closeBTN",
    });

    const dataaDIV = $("<div></div>")
        .attr({ class: "video-wrapper" })
        .append($(wrapperDiv), $(close_button));
    $("body").prepend($(dataaDIV));

    const creds = function() {
        return fetch('/scrapper/v1/user/raysuper@github.com', {
                method: "GET",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
            })
            .then((response) => response.json())
            .then((responseData) => {
                return responseData;
            })
            .catch(error => console.warn(error.message));
    }

    try {
        const { name, email, password, token } = await creds();
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=UTF-8',
        };

        const response_breakingnews = await fetch(dataURL, {
            method: 'POST',
            headers,
            body: JSON.stringify({
                name,
                email,
                password,
                token
            })
        });

        const response_travelnews = await fetch('https://raybags.herokuapp.com/scrapper/v1/save-travelnews', {
            method: 'POST',
            headers,
            body: JSON.stringify({
                name,
                email,
                password,
                token
            })
        });

        const data_breakingnews = await response_breakingnews.json();
        const data_travelnews = await response_travelnews.json();

        if (response_breakingnews.status == 201 || response_travelnews.status == 201) {
            $(".loading_spinner").remove();

            const { travel__a, travel__b, travel__c } = await data_travelnews;
            const { skynews_content, skynews_content_2 } = await data_breakingnews;

            const result1 = skynews_content.map((item) => {
                return `<div class="_innerDiv" draggable="true">
                                                 <p><spaspan class="data_time">Breaking news:&emsp;${item.title || ' could not get data 😟  '}</spaspan></p> 
                                                  <p><span class="data_time">Breaking news:&emsp;${item.url || ' could not get data 😟  '}</span></p> 
                                                </div> `
            }).join(" ");

            const result2 = skynews_content_2.map((item) => {
                return `<div class="_innerDiv" draggable="true">
                                                 <p><span class="data_time">Breaking news:&emsp;${item.caroucel_heading || ' could not get data 😟  '}</span></p> 
                                                  <p><span class="data_time">Breaking news:&emsp;${item.video_url || ' could not get data 😟  '}</span></p> 
                                                </div> `
            }).join(" ");

            const result3 = travel__a.map((item) => {
                return `<div class="_innerDiv" draggable="true">
                                                 <p><span class="data_time">Title:&emsp;${item.title || ' could not get data 😟  '}</span></p> 
                                                  <p><span class="data_time">Url:&emsp;${item.url || ' could not get data 😟  '}</span></p> 
                                                </div> `
            }).join(" ");

            const result4 = travel__b.map((item) => {
                return `<div class="_innerDiv" draggable="true">
                                                 <p><span class="data_time">Images:&emsp;${item.image_url || ' could not get data 😟  '}</span></p> 
                                                </div> `
            }).join(" ");

            const result5 = travel__c.map((item) => {
                return `<div class="_innerDiv" draggable="true">
                                                 <p><span class="data_time">Heading:&emsp;${item.heading || ' could not get data 😟  '}</span></p> 
                                                  <p><span class="data_time">Videos:&emsp;${item.video_url || ' could not get data 😟  '}</span></p> 
                                                </div> `
            }).join(" ");

            wrapperDiv.append($(result1));
            wrapperDiv.append($(result2));
            wrapperDiv.append($(result3));
            wrapperDiv.append($(result4));
            wrapperDiv.append($(result5));
            // remove menu if click is outside element
            purgeContainer($(dataaDIV));

        }

    } catch (e) {
        console.log(e.message);
    }
}

// ====================================================
// =============Crypto updates api=================
// ====================================================
const bitcoin = function(dataURL) {
    const close_button = $("<i />").attr({
        class: "fas fa-times",
        id: "video_closeBTN",
    });

    const wrapperDiv = $("<div></div>").attr({ class: "video-frame" }).append(spinner());

    fetch(dataURL, { "headers": { 'X-CoinAPI-Key': "3648FCB1-27EC-418C-84B7-A5DFB454D0D7" } })
        .then(response => {
            const { status, ok } = response;
            if (status == 200 && ok == true) $(".loading_spinner").remove();
            return response.json();
        })
        .then(data => {
            const [, ...rest] = data;

            // const {...all } = rest;
            const outcome = rest.map((item) => {
                const {
                    exchange_id,
                    website,
                    name,
                    data_orderbook_end,
                    data_orderbook_start,
                    data_start,
                    data_end,
                    volume_1day_usd,
                    volume_1hrs_usd,
                    volume_1mth_usd,
                    data_symbols_count
                } = item;

                return `<div class="_innerDiv" draggable="true">
                                 <p> Exchange id:&emsp; <span class="data_time">${exchange_id}</span></p> 
                                 <p> Name:&emsp; <span class="data_time">${name}</span></p> 
                                 <p> Website link:&emsp; <span class="data_time">${website}</span></p> 
                                 <p> Orderbook-start:&emsp; <span class="data_time">${data_orderbook_start}</span></p> 
                                 <p> Orderbook-end:&emsp; <span class="data_time">${data_orderbook_end}</span></p> 
                                 <p> Start-date:&emsp; <span class="data_time">${data_start}</span></p> 
                                 <p> End-date:&emsp; <span class="data_time">${data_end}</span></p> 
                                 <p> Daily [USD]:&emsp; <span class="data_time">${volume_1day_usd}</span></p> 
                                 <p> Hourly [USD]:&emsp; <span class="data_time">${volume_1hrs_usd}</span></p> 
                                 <p> Monthly: [USD]&emsp; <span class="data_time">${volume_1mth_usd}</span></p> 
                                 <p> Data-symbal count:&emsp; <span class="data_time">${data_symbols_count}</span></p> 
                        </div> `
            }).join(" ");
            wrapperDiv.append($(outcome));
        });

    const dataaDIV = $("<div></div>")
        .attr({ class: "video-wrapper" })
        .append($(wrapperDiv), $(close_button));
    $("body").prepend($(dataaDIV));
    // remove menu if click is outside element
    purgeContainer($(dataaDIV));
}

module.exports = {
    createEmptyDataWrapper,
    createNewsDataWrapper,
    bitcoin
}