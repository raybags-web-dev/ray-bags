// spinner
const spinner = function() {
    return ` <button class="btn loading_spinner" type="button" disabled>
               <span class="spinner-grow spinner-grow-lg" role="status" aria-hidden="true"></span>
               Loading...
             </button>`
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
        // remove component
        $($(dataaDIV).children()[1]).on("click", () =>
            $(dataaDIV).remove()
        );
    }
    // ====================================================
    // =============News helper function=================
    // ====================================================
const createNewsDataWrapper = function(dataURL) {
    const close_button = $("<i />").attr({
        class: "fas fa-times",
        id: "video_closeBTN",
    });

    const wrapperDiv = $("<div></div>").attr({ class: "video-frame" }).append(spinner());

    fetch(dataURL)
        .then(response => {
            const { status, ok } = response;
            if (status == 200 && ok == true) $(".loading_spinner").remove();
            return response.json();
        })
        .then(data => {
            const { newsBreaking1, newsBreaking2 } = data;
            const outcome = newsBreaking1.map((item) => {
                const { title, url, createdAt } = item;

                return `<div class="_innerDiv" draggable="true">
                                 <span><p class="data_para">HEADING:&emsp;${title}</p></span> 
                                 <span>READ MORE: &emsp; <a class="data_url" href="${url}" target="_blank">visit website</a></span> 
                                 <p><span class="data_time">DATE:&emsp;${createdAt}</span></p> 
                                </div> `
            }).join(" ");
            wrapperDiv.append($(outcome));
        });

    const dataaDIV = $("<div></div>")
        .attr({ class: "video-wrapper" })
        .append($(wrapperDiv), $(close_button));
    $("body").prepend($(dataaDIV));
    // remove component
    $($(dataaDIV).children()[1]).on("click", () =>
        $(dataaDIV).remove()
    );

}

// ====================================================
// =============Crypto updates api=================
// ====================================================
const bitcoin = function(dataURL) {
    // API key is for demonstration purposes. Feel free to use it.
    const api_key = "3648FCB1-27EC-418C-84B7-A5DFB454D0D7";

    const close_button = $("<i />").attr({
        class: "fas fa-times",
        id: "video_closeBTN",
    });

    const wrapperDiv = $("<div></div>").attr({ class: "video-frame" }).append(spinner());

    fetch(dataURL, { "headers": { 'X-CoinAPI-Key': api_key } })
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
    // remove component
    $($(dataaDIV).children()[1]).on("click", () =>
        $(dataaDIV).remove()
    );

}

module.exports = {
    createEmptyDataWrapper,
    createNewsDataWrapper,
    bitcoin
}