const numberText = document.querySelector('.numbertext');
const theImage = document.querySelector('#slider_aside_image');
const captionTextt = document.querySelector('.text');
const spinnnnner = document.querySelector('.loaderCarocell')

const sideCarocelImageUrs = [{
        "image_url": "https://firebasestorage.googleapis.com/v0/b/achievements-collection.appspot.com/o/Javascript_best_practices.png?alt=media&token=defe4368-251b-4f72-b8c4-8275781e6b41",
        "caption_text": "text 1",
        image_number: "1 - 7"
    },
    {
        "image_url": "https://firebasestorage.googleapis.com/v0/b/achievements-collection.appspot.com/o/_webpack2.jpg?alt=media&token=b0b2e3f5-c89e-40e3-8934-8e4fa473ad0e",
        "caption_text": "text 2",
        image_number: "2 - 7"
    },
    {
        "image_url": "https://firebasestorage.googleapis.com/v0/b/achievements-collection.appspot.com/o/Unit_testing.jpg?alt=media&token=5234363c-0fcc-470a-b728-a49926c74e5a",
        "caption_text": "text 3",
        image_number: "3 - 7"
    },
    {
        "image_url": "https://firebasestorage.googleapis.com/v0/b/achievements-collection.appspot.com/o/strategic_partnerships.PNG?alt=media&token=def85549-8b40-4876-8f4b-db1501f6671c",
        "caption_text": "text 4",
        image_number: "4 - 7"
    },
    {
        "image_url": "https://firebasestorage.googleapis.com/v0/b/achievements-collection.appspot.com/o/SQL_.jpg?alt=media&token=7c846efb-df04-4881-9f1e-a6efbd59a94f",
        "caption_text": "text 5",
        image_number: "5 - 7"
    },
    {
        "image_url": "https://firebasestorage.googleapis.com/v0/b/achievements-collection.appspot.com/o/OOP-Certificate.jpg?alt=media&token=bc0d8168-e45f-427c-8899-254035733759",
        "caption_text": "text 6",
        image_number: "6 - 7"
    },
    {
        "image_url": "https://firebasestorage.googleapis.com/v0/b/achievements-collection.appspot.com/o/javascript_intergration.PNG?alt=media&token=7065c0da-cffb-41c0-8ffb-ca75bf0370a0",
        "caption_text": "text 7",
        image_number: "7 - 7"
    }

];

setTimeout(() => theImage.classList.remove('hide'), 5990);

let index = 0;
const sideCarocelCycleRunner = async() => {
    try {
        if (index === sideCarocelImageUrs.length) index = 0;
        const { image_url, caption_text, image_number } = sideCarocelImageUrs[index++];

        theImage.classList.add('sideImageffectIn');
        theImage.setAttribute('src', image_url);

        numberText.innerHTML = image_number;
        captionTextt.innerHTML = caption_text;

        setTimeout(() => theImage.classList.remove('sideImageffectIn'), 5980);

    } catch (e) {
        console.log(e.message);
    }
}

const loop = setInterval(sideCarocelCycleRunner, 6000);