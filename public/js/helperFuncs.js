// Bitcoin helper function
const bitcoin = function() {
    const api_key = "3648FCB1-27EC-418C-84B7-A5DFB454D0D7"
    let link = "https://rest.coinapi.io/v1/exchanges"

    fetch(link, {
            "headers": { 'X-CoinAPI-Key': api_key }
        }).then(response => response.json())
        .then(data => {
            const [, ...rest] = data;
            const {...all } = rest;
            const {
                data_orderbook_end,
                data_orderbook_start,
                data_start,
                data_end,
                volume_1day_usd,
                volume_1hrs_usd,
                volume_1mth_usd,
                data_symbols_count
            } = all;

            console.log(data_orderbook_end,
                data_orderbook_start,
                data_start,
                data_end,
                volume_1day_usd,
                volume_1hrs_usd,
                volume_1mth_usd,
                data_symbols_count)
        })
        .catch(e => console.log(e.message));
};

// Empty wrapper place holder
const createEmptyDataWrapper = function(dataURL) {
        const close_button = $("<i />").attr({
            class: "fas fa-times",
            id: "video_closeBTN",
        });
        const emptyContainer = `<div class="video-frame">
                                        <div class="_innerDiv">
                                            HEADING:<p class="data_para">Under Implimentation</p>
                                            READ MORE: &emsp;<a class="data_url" href="#" target="_blank">######</a>
                                            DATE: &emsp;<span class="data_time">${new Date().toLocaleDateString()}</span>
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

    const wrapperDiv = $("<div></div>").attr({ class: "video-frame" });

    fetch(dataURL)
        .then(response => response.json())
        .then(data => {
            const { newsBreaking1 } = data;
            const outcome = newsBreaking1.map((item) => {
                const { title, url, createdAt } = item;

                return `<div class="_innerDiv">
                                 <span>HEADING: &emsp; <p class="data_para">${title}</p></span> 
                                 <span>READ MORE: &emsp; <a class="data_url" href="${url}" target="_blank">visit website</a></span> 
                                 <p> DATE: &emsp; <span class="data_time">${createdAt}</span></p> 
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
    createNewsDataWrapper
}