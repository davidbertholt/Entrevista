const serviceResponseMock = {
    "headers": {
        "normalizedNames": {},
        "lazyUpdate": null,
        "lazyInit": null,
        "get": () => {return 20}
    },
    "status": 200,
    "statusText": "OK",
    "url": "http://localhost:3000/heroes/?superhero_like=&_page=1&_limit=5",
    "ok": true,
    "type": 4,
    "body": 
    [
        {
            "id": 1,
            "superhero": "Batman",
            "publisher": "DC Comics",
            "alterEgo": "Bruce Wayne",
            "firstAppearance": "Detective Comics #27",
            "characters": "Bruce Wayne"
        },
        {
            "id": 2,
            "superhero": "Superman",
            "publisher": "DC Comics",
            "alterEgo": "Kal-El",
            "firstAppearance": "Action Comics #1",
            "characters": "Kal-El"
        },
        {
            "id": 3,
            "superhero": "Flash",
            "publisher": "DC Comics",
            "alterEgo": "Jay Garrick",
            "firstAppearance": "Flash Comics #1",
            "characters": "Jay Garrick, Barry Allen, Wally West, Bart Allen"
        },
        {
            "id": 4,
            "superhero": "Green Lantern",
            "publisher": "DC Comics",
            "alterEgo": "Alan Scott",
            "firstAppearance": "All-American Comics #16",
            "characters": "Alan Scott, Hal Jordan, Guy Gardner, John Stewart, Kyle Raynor, Jade, Sinestro, Simon Baz"
        },
        {
            "id": 5,
            "superhero": "Green Arrow",
            "publisher": "DC Comics",
            "alterEgo": "Oliver Queen",
            "firstAppearance": "More Fun Comics #73",
            "characters": "Oliver Queen"
        }
    ]
}

export default {serviceResponseMock};