![portfolio!](https://github.com/raybags-web-dev/image_base/blob/master/images/swag2.png?raw=true)

# Scrapper-api-0.1

This is a simple scrapper api that scapes, generates and save data into a data-base(mongodb).

## Base url:

The base url => [base_url](https://raybags.herokuapp.com/) .

```python
https://raybags.herokuapp.com/
```

This web scrapper bot is built on top of my Portfolio website. I intend to integrate couple more apis fpr different projects.

## Four endpoints are exposed here:

```bash
 POST [skynews BREAKING]:
https://raybags.herokuapp.com/scrapper/v1/savenews
#scrapes the site, generates breaking-news data, and saves to the database

 POST [skynews TRAVEL]
https://raybags.herokuapp.com/scrapper/v1/save-travelnews
#scrapes the site, generates travel-data, and saves to the database

GET [Fetches saved data from the database]:
https://raybags.herokuapp.com/scrapper/v1/sky-breaking-news
#gets breaking-data.

GET [Fetches saved travel-data from the database]:
https://raybags.herokuapp.com/scrapper/v1/sky-travel-news
#gets travel-data from the database

DELETE [Deletes saved collections from the database by name]:
https://raybags.herokuapp.com/scrapper/v1/sky-news/sky-news2
#gets travel-data from the database
```

### RESPONSES-EXAMPLES:

- Breaking news:

```json
{
  "skynews_content": [
    {
      "title": "All children aged 5-11 in the UK to be offered COVID jab",
      "url": "https://news.sky.com/story/covid-19-all-children-aged-5-11-in-uk-will-be-offered-coronavirus-vaccine-as-england-and-northern-ireland-become-latest-nations-to-confirm-plan-12539154"
    },
    {
      "title": "Why have cautious government advisers changed their minds on vaccines for young children?",
      "url": "https://news.sky.com/story/covid-19-why-have-cautious-government-advisers-now-changed-their-minds-on-vaccines-for-5-to-11-year-olds-12543635"
    },
    {
      "title": "'Delay your journey': Trains cancelled and bridges closed to some traffic | Storm Dudley live",
      "url": "https://news.sky.com/story/storm-dudley-live-news-met-office-weather-warnings-uk-forecast-12543511"
    },
    {
      "title": "NATO warns Russian troops 'moving into position' – as the Kremlin issues energy supply warning to Europe",
      "url": "https://news.sky.com/story/ukraine-live-updates-satellite-images-show-russia-not-withdrawing-as-kremlin-issues-energy-supply-warning-to-europe-12541713"
    }
  ]
}
```

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

- Deleted Collection:

```json
success
```

### COLLECTION NAMES:

- sky-news1
- sky-news2
- travel-sky1
- travel-sky2
- travel-sky3

HEROKU-LINKS:

```
get breaking news:
https://raybags.herokuapp.com/scrapper/v1/sky-breaking-news

get sky travel news:
https://raybags.herokuapp.com/scrapper/v1/sky-travel-news

generate breaking news:
https://raybags.herokuapp.com/scrapper/v1/savenews

generate travel news:
https://raybags.herokuapp.com/scrapper/v1/save-travelnews

delete data collections:
https://raybags.herokuapp.com/scrapper/v1/sky-news/sky-news2
```

- SWAGGER DOCUMENTATION:

```bash
https://app.swaggerhub.com/apis-docs/raybags-web-dev/scrapper-api/0.1#/default/get_scrapper_v1_sky_breaking_news
```

## Contributions:

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change or add.

![swagger_doc!](https://github.com/raybags-web-dev/image_base/blob/master/images/swag1.png?raw=true)
