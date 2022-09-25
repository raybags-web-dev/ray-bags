![portfolio!](https://github.com/raybags-web-dev/image_base/blob/master/images/new_look.png?raw=true)

# Scrapper-api/ news-data pipeline

This is a simple web-scrapper api that scrapes, generates and save data into a data-base(mongodb).

## Four endpoints are exposed here:

```bash
#creates an account for you, saves it to the database and returns an auth token you can use
POST [Authenticates user]
https://raybags.herokuapp.com/authenticate

Note: You must provide your namme, email and password as a request body as shown below:
{
    "name": "test  user",
    "email": "testuser@gmail.com",
    "password": "x25s45d6wsd1"
}

Response should look like this:

"your-token": "3ee84211cd484b2eaff80e734070237115149b0c80d7dec50c1fe03a3f64d485a356e9fa475b20e14e26a3afb55be397c36eb348dff511e41fea3ccc4fe8eefa"

```

```bash
#scrapes the site, generates breaking-news data, and saves to the database
POST [skynews BREAKING]:
https://raybags.herokuapp.com/scrapper/v1/savenews
```

### Request body should contain your token as shown below:

```bash
{
    "token": "186229f622632dd3975a5e50bafcac65d9bb6306ad744b35e4877d2c694d3f0e2badbd14004931fc0873e0cf4ecf0e202df5cb7b01b378ecd6260a0f4a184b65"
}
```

### Response should look like this:

```bash
  {
    "skynews_content": [
      {
            "title": "'Very likely there will be risk to life': Red weather warning issued as 90mph Storm Eunice nears",
            "url": "https://news.sky.com/story/storm-eunice-red-dangerous-weather-warning-issued-as-uk-hit-with-gusts-up-to-100mph-12544051"
        },
        {
            "title": "Army on standby, all trains cancelled in Wales, London closures - Storm Eunice set to be among worst in decades | Weather live",
            "url": "https://news.sky.com/story/storm-eunice-live-news-met-office-weather-warnings-uk-forecast-dudley-12543511"
        },
        {
            "title": "Transport, schools and tourist attractions - a list of the main closures due to Storm Eunice",
            "url": "https://news.sky.com/story/storm-eunice-transport-schools-and-tourist-attractions-a-list-of-the-main-closures-12544459"
        },
    ]
  }
```

```bash
#scrapes the site, generates travel-data, and saves to the database
POST [skynews TRAVEL]
https://raybags.herokuapp.com/scrapper/v1/save-travelnews
```

### Request body should contain your token as shown below:

```bash
{
    "token": "186229f622632dd3975a5e50bafcac65d9bb6306ad744b35e4877d2c694d3f0e2badbd14004931fc0873e0cf4ecf0e202df5cb7b01b378ecd6260a0f4a184b65"
}
```

### Response should look like this:

```bash
  {
    "travel__a": [
      {
            "title": "'Very likely there will be risk to life': Red weather warning issued as 90mph Storm Eunice nears",
            "url": "https://news.sky.com/story/storm-eunice-red-dangerous-weather-warning-issued-as-uk-hit-with-gusts-up-to-100mph-12544051"
        },
        {
            "title": "Army on standby, all trains cancelled in Wales, London closures - Storm Eunice set to be among worst in decades | Weather live",
            "url": "https://news.sky.com/story/storm-eunice-live-news-met-office-weather-warnings-uk-forecast-dudley-12543511"
        },
        {
            "title": "Transport, schools and tourist attractions - a list of the main closures due to Storm Eunice",
            "url": "https://news.sky.com/story/storm-eunice-transport-schools-and-tourist-attractions-a-list-of-the-main-closures-12544459"
        },
    ]
  }
```

```bash
#fetches all breaking news data from the database.
GET [Fetches saved data from the database]:
https://raybags.herokuapp.com/scrapper/v1/sky-breaking-news
```

```bash
GET [Fetches saved travel-data from the database]:
https://raybags.herokuapp.com/scrapper/v1/sky-travel-news
#gets travel-data from the database
```

### RESPONSE-EXAMPLES:

- Breaking news:

- Travel news:

```json
{
  "travel__a": [
    {
      "title": "Thousands of holidaymakers to jet off on half-term getaways as UK scraps COVID testing",
      "url": "https://news.sky.com/story/covid-19-thousands-of-holidaymakers-to-jet-off-on-half-term-getaways-as-uk-scraps-covid-testing-for-fully-vaccinated-travellers-12538316"
    },
    {
      "title": "COVID-19 travel tracker - How countries' rates compare and what travel list they're on",
      "url": "https://news.sky.com/story/covid-19-summer-tracker-in-depth-guide-to-how-different-countries-rates-compare-12324242"
    },
    {
      "title": "Which countries are letting Britons in? Use our tool to check travel requirements for the country you want to visit",
      "url": "https://news.sky.com/story/covid-19-where-can-you-travel-who-will-have-us-and-what-are-the-restrictions-12384479"
    },
    {
      "title": "'It's a small price to pay': Face masks on flights could be in place for years",
      "url": "https://news.sky.com/story/covid-face-masks-on-flights-could-be-enforced-for-years-as-airlines-seek-consistency-on-rules-12530173"
    }
  ]
}
```

- Breaking news from Database:

```json
{
  "newsBreaking1": [
    {
      "_id": "620d0d513ea2f95b7b75c4f0",
      "title": "Ending free COVID testing a mistake and will make pandemic worse, Starmer says",
      "url": "https://news.sky.com/story/ending-free-covid-testing-a-mistake-and-will-make-pandemic-worse-sir-keir-starmer-says-12543445",
      "createdAt": "2022-02-16T14:42:25.319Z",
      "updatedAt": "2022-02-16T14:42:25.319Z",
      "__v": 0
    },
    {
      "_id": "620d0d513ea2f95b7b75c4f5",
      "title": "Northern Ireland drops all remaining COVID rules",
      "url": "https://news.sky.com/story/covid-19-all-northern-ireland-legal-restrictions-to-be-made-guidance-only-12542242",
      "createdAt": "2022-02-16T14:42:25.319Z",
      "updatedAt": "2022-02-16T14:42:25.319Z",
      "__v": 0
    },
    {
      "_id": "620d0d513ea2f95b7b75c4f8",
      "title": "Will offices still let you isolate if you get COVID and can people continue to work from home?",
      "url": "https://news.sky.com/story/covid-19-will-offices-still-let-you-isolate-if-you-get-covid-and-can-people-continue-to-work-from-home-12537972",
      "createdAt": "2022-02-16T14:42:25.319Z",
      "updatedAt": "2022-02-16T14:42:25.319Z",
      "__v": 0
    },
    {
      "_id": "620d0d513ea2f95b7b75c4f2",
      "title": "Wales to offer COVID jabs to all five to 11-year-olds",
      "url": "https://news.sky.com/story/covid-19-wales-becomes-first-uk-nation-to-offer-coronavirus-vaccines-to-all-five-to-11-year-olds-12542897",
      "createdAt": "2022-02-16T14:42:25.319Z",
      "updatedAt": "2022-02-16T14:42:25.319Z",
      "__v": 0
    }
  ]
}
```

- Travel News from Database:

```json
{
  "newsTravelOne": [
    {
      "_id": "620ce666fa83a8fa5b7f248f",
      "title": "COVID-19 travel tracker - How countries' rates compare and what travel list they're on",
      "url": "https://news.sky.com/story/covid-19-summer-tracker-in-depth-guide-to-how-different-countries-rates-compare-12324242",
      "createdAt": "2022-02-16T11:56:22.204Z",
      "updatedAt": "2022-02-16T11:56:22.204Z",
      "__v": 0
    },
    {
      "_id": "620ce666fa83a8fa5b7f248e",
      "title": "Thousands of holidaymakers to jet off on half-term getaways as UK scraps COVID testing",
      "url": "https://news.sky.com/story/covid-19-thousands-of-holidaymakers-to-jet-off-on-half-term-getaways-as-uk-scraps-covid-testing-for-fully-vaccinated-travellers-12538316",
      "createdAt": "2022-02-16T11:56:22.204Z",
      "updatedAt": "2022-02-16T11:56:22.204Z",
      "__v": 0
    },
    {
      "_id": "620ce666fa83a8fa5b7f2490",
      "title": "Which countries are letting Britons in? Use our tool to check travel requirements for the country you want to visit",
      "url": "https://news.sky.com/story/covid-19-where-can-you-travel-who-will-have-us-and-what-are-the-restrictions-12384479",
      "createdAt": "2022-02-16T11:56:22.204Z",
      "updatedAt": "2022-02-16T11:56:22.204Z",
      "__v": 0
    },
    {
      "_id": "620ce666fa83a8fa5b7f2491",
      "title": "'It's a small price to pay': Face masks on flights could be in place for years",
      "url": "https://news.sky.com/story/covid-face-masks-on-flights-could-be-enforced-for-years-as-airlines-seek-consistency-on-rules-12530173",
      "createdAt": "2022-02-16T11:56:22.204Z",
      "updatedAt": "2022-02-16T11:56:22.204Z",
      "__v": 0
    }
  ]
}
```

## ENDPOINTS:

```bash
authentication
https://raybags.herokuapp.com/authenticate
```

```bash
get breaking news:
https://raybags.herokuapp.com/scrapper/v1/sky-breaking-news
```

```bash
get sky travel news:
https://raybags.herokuapp.com/scrapper/v1/sky-travel-news
```

```bash
generate breaking news:
https://raybags.herokuapp.com/scrapper/v1/savenews
```

```bash
generate travel news:
https://raybags.herokuapp.com/scrapper/v1/save-travelnews
```

```bash
delete data collections:
https://raybags.herokuapp.com/scrapper/v1/sky-news/sky-news2
```

- SWAGGER DOCUMENTATION:

```bash
https://app.swaggerhub.com/apis-docs/raybags-web-dev/web-scrapper1.0/1.0
```

## Contributions:

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change or add.

![swagger_doc!](https://github.com/raybags-web-dev/image_base/blob/master/images/swag1.png?raw=true)
