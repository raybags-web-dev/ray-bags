const bitcoin = function() {
    const api_key = "3648FCB1-27EC-418C-84B7-A5DFB454D0D7"
    let link = "https://rest.coinapi.io/v1/exchanges"

    // get news
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



}
module.exports = bitcoin;