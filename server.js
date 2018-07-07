const express = require('express');
const app = express();
const path = require('path');
const port = 3005;

app.get('/dishes', (req, res) => {
  res.send([
    {
      "id": 0,
      "name": "Uthappizza",
      "image": "images/pizza.jpg",
      "category": "mains",
      "label": "Hot",
      "price": "4.99",
      "featured": true,
      "description": "A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer."
    },
    {
      "id": 1,
      "name": "Zucchipakoda",
      "image": "images/pakoda.jpg",
      "category": "appetizer",
      "label": "",
      "price": "1.99",
      "featured": false,
      "description": "Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce"
    },
    {
      "id": 2,
      "name": "Vadonut",
      "image": "images/vada.jpg",
      "category": "appetizer",
      "label": "New",
      "price": "1.99",
      "featured": false,
      "description": "A quintessential ConFusion experience, is it a vada or is it a donut?"
    },
    {
      "id": 3,
      "name": "ElaiCheese Cake",
      "image": "images/cheesecake.jpg",
      "category": "dessert",
      "label": "",
      "price": "2.99",
      "featured": false,
      "description": "A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms"
    }
  ]);
});

app.get('/feedback', (req, res) => {
res.send([
    {
        "firstname": "fdas",
        "lastname": "afds",
        "telnum": "134113",
        "email": "dafdads@daffas.dfdafd",
        "agree": true,
        "contactType": "Email",
        "message": "afadsfds",
        "date": "2017-12-04T09:41:49.890Z",
        "id": 1
    },
    {
        "firstname": "nikhil",
        "lastname": "karkra",
        "telnum": "468305744",
        "email": "karkra.nikhil@gmail.com",
        "agree": false,
        "contactType": "Email",
        "message": "feedback",
        "id": 2
    },
    {
        "firstname": "nikhil",
        "lastname": "karkra",
        "telnum": "468305744",
        "email": "karkra.nikhil@gmail.com",
        "agree": false,
        "contactType": "Email",
        "message": "qqqq",
        "id": 3
    },
    {
        "firstname": "nikhil",
        "lastname": "karkra",
        "telnum": "468305744",
        "email": "karkra.nikhil@gmail.com",
        "agree": false,
        "contactType": "Email",
        "message": "jkhkh",
        "id": 4
    }
    ]);
});
app.get('/leaders', (req, res) => {
res.send([
    {
        "id": 0,
        "name": "Nikhil karkra",
        "image": "images/nikhil.jpeg",
        "designation": "Chief Epicurious Officer",
        "abbr": "CEO",
        "featured": false,
        "description": "Our CEO, Nikhil karkra, credits his hardworking East Asian immigrant parents who undertook the arduous journey to the shores of America with the intention of giving their children the best future. His mother's wizardy in the kitchen whipping up the tastiest dishes with whatever is available inexpensively at the supermarket, was his first inspiration to create the fusion cuisines for which The Frying Pan became well known. He brings his zeal for fusion cuisines to this restaurant, pioneering cross-cultural culinary connections."
    },
    {
        "id": 1,
        "name": "Nixalar",
        "image": "images/nikhil1.jpg",
        "designation": "Chief Food Officer",
        "abbr": "CFO",
        "featured": false,
        "description": "Our CFO, Nix, as he is affectionately referred to by his colleagues, comes from a long established family tradition in farming and produce. His experiences growing up on a farm in the Australian outback gave him great appreciation for varieties of food sources. As he puts it in his own words, Everything that runs, wins, and everything that stays, pays!"
    },
    {
        "id": 2,
        "name": "Agumbe Tang",
        "image": "images/alberto.png",
        "designation": "Chief Taste Officer",
        "abbr": "CTO",
        "featured": false,
        "description": "Blessed with the most discerning gustatory sense, Agumbe, our CFO, personally ensures that every dish that we serve meets his exacting tastes. Our chefs dread the tongue lashing that ensues if their dish does not meet his exacting standards. He lives by his motto, You click only if you survive my lick."
    },
    {
        "id": 3,
        "name": "Alberto Somayya",
        "image": "images/chef.jpg",
        "designation": "Executive Chef",
        "abbr": "EC",
        "featured": true,
        "description": "Award winning three-star Michelin chef with wide International experience having worked closely with whos-who in the culinary world, he specializes in creating mouthwatering Indo-Italian fusion experiences."
    }
    ]);
});
app.get('/promotions', (req, res) => {
res.send([
    {
        "id": 0,
        "name": "Weekend Grand Buffet",
        "image": "images/buffetNew.jpg",
        "label": "New",
        "price": "19.99",
        "featured": true,
        "description": "Featuring mouthwatering combinations with a choice of five different salads, six enticing appetizers, six main entrees and five choicest desserts. Free flowing bubbly and soft drinks. All for just $19.99 per person "
    }
    ]);
});
app.get('/comments', (req, res) => {
res.send([
    {
        "id": 0,
        "dishId": 0,
        "rating": 5,
        "comment": "Imagine all the eatables, living in conFusion!",
        "author": "John Lemon",
        "date": "2012-10-16T17:57:28.556094Z"
    },
    {
        "id": 1,
        "dishId": 0,
        "rating": 4,
        "comment": "Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",
        "author": "Paul McVites",
        "date": "2014-09-05T17:57:28.556094Z"
    },
    {
        "id": 2,
        "dishId": 0,
        "rating": 3,
        "comment": "Eat it, just eat it!",
        "author": "Michael Jaikishan",
        "date": "2015-02-13T17:57:28.556094Z"
    },
    {
        "id": 3,
        "dishId": 0,
        "rating": 4,
        "comment": "Ultimate, Reaching for the stars!",
        "author": "Ringo Starry",
        "date": "2013-12-02T17:57:28.556094Z"
    },
    {
        "id": 4,
        "dishId": 0,
        "rating": 2,
        "comment": "It's your birthday, we're gonna party!",
        "author": "25 Cent",
        "date": "2011-12-02T17:57:28.556094Z"
    },
    {
        "id": 5,
        "dishId": 1,
        "rating": 5,
        "comment": "Imagine all the eatables, living in conFusion!",
        "author": "John Lemon",
        "date": "2012-10-16T17:57:28.556094Z"
    },
    {
        "id": 6,
        "dishId": 1,
        "rating": 4,
        "comment": "Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",
        "author": "Paul McVites",
        "date": "2014-09-05T17:57:28.556094Z"
    },
    {
        "id": 7,
        "dishId": 1,
        "rating": 3,
        "comment": "Eat it, just eat it!",
        "author": "Michael Jaikishan",
        "date": "2015-02-13T17:57:28.556094Z"
    },
    {
        "id": 8,
        "dishId": 1,
        "rating": 4,
        "comment": "Ultimate, Reaching for the stars!",
        "author": "Ringo Starry",
        "date": "2013-12-02T17:57:28.556094Z"
    },
    {
        "id": 9,
        "dishId": 1,
        "rating": 2,
        "comment": "It's your birthday, we're gonna party!",
        "author": "25 Cent",
        "date": "2011-12-02T17:57:28.556094Z"
    },
    {
        "id": 10,
        "dishId": 2,
        "rating": 5,
        "comment": "Imagine all the eatables, living in conFusion!",
        "author": "John Lemon",
        "date": "2012-10-16T17:57:28.556094Z"
    },
    {
        "id": 11,
        "dishId": 2,
        "rating": 4,
        "comment": "Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",
        "author": "Paul McVites",
        "date": "2014-09-05T17:57:28.556094Z"
    },
    {
        "id": 12,
        "dishId": 2,
        "rating": 3,
        "comment": "Eat it, just eat it!",
        "author": "Michael Jaikishan",
        "date": "2015-02-13T17:57:28.556094Z"
    },
    {
        "id": 13,
        "dishId": 2,
        "rating": 4,
        "comment": "Ultimate, Reaching for the stars!",
        "author": "Ringo Starry",
        "date": "2013-12-02T17:57:28.556094Z"
    },
    {
        "id": 14,
        "dishId": 2,
        "rating": 2,
        "comment": "It's your birthday, we're gonna party!",
        "author": "25 Cent",
        "date": "2011-12-02T17:57:28.556094Z"
    },
    {
        "id": 15,
        "dishId": 3,
        "rating": 5,
        "comment": "Imagine all the eatables, living in conFusion!",
        "author": "John Lemon",
        "date": "2012-10-16T17:57:28.556094Z"
    },
    {
        "id": 16,
        "dishId": 3,
        "rating": 4,
        "comment": "Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",
        "author": "Paul McVites",
        "date": "2014-09-05T17:57:28.556094Z"
    },
    {
        "id": 17,
        "dishId": 3,
        "rating": 3,
        "comment": "Eat it, just eat it!",
        "author": "Michael Jaikishan",
        "date": "2015-02-13T17:57:28.556094Z"
    },
    {
        "id": 18,
        "dishId": 3,
        "rating": 4,
        "comment": "Ultimate, Reaching for the stars!",
        "author": "Ringo Starry",
        "date": "2013-12-02T17:57:28.556094Z"
    },
    {
        "id": 19,
        "dishId": 3,
        "rating": 2,
        "comment": "It's your birthday, we're gonna party!",
        "author": "25 Cent",
        "date": "2011-12-02T17:57:28.556094Z"
    },
    {
        "dishId": 0,
        "rating": "2",
        "author": "Nikhil",
        "comment": "Awsome !!",
        "date": "2018-07-01T09:21:52.901Z",
        "id": 20
    },
    {
        "dishId": 0,
        "rating": "5",
        "author": "karkra",
        "comment": "Great !!",
        "date": "2018-07-01T09:24:47.743Z",
        "id": 21
    },
    {
        "dishId": 0,
        "rating": "2",
        "author": "sdsd",
        "comment": "111",
        "date": "2018-07-01T09:31:52.507Z",
        "id": 22
    },
    {
        "dishId": 2,
        "rating": "2",
        "author": "Nikhil",
        "comment": "Best !!",
        "date": "2018-07-01T09:32:52.181Z",
        "id": 23
    },
    {
        "dishId": 2,
        "rating": "3",
        "author": "sdsd",
        "comment": "great",
        "date": "2018-07-01T09:36:37.911Z",
        "id": 24
    },
    {
        "dishId": 2,
        "rating": "2",
        "author": "Nikhil",
        "comment": "woww",
        "date": "2018-07-01T09:39:13.057Z",
        "id": 25
    },
    {
        "date": "2018-07-01T09:41:41.638Z",
        "id": 26
    },
    {
        "dishId": 2,
        "rating": "4",
        "author": "Nikhil karkra",
        "comment": "best !!",
        "date": "2018-07-01T09:42:53.921Z",
        "id": 27
    },
    {
        "dishId": 0,
        "rating": "4",
        "author": "bhupal",
        "comment": "excellent",
        "date": "2018-07-02T00:16:39.761Z",
        "id": 28
    },
    {
        "dishId": 3,
        "rating": "4",
        "author": "Nikhil",
        "comment": "kjhjkhkh",
        "date": "2018-07-02T02:21:57.637Z",
        "id": 29
    },
    {
        "dishId": 0,
        "rating": "3",
        "author": "sdsd",
        "comment": "ihihjkh",
        "date": "2018-07-05T11:58:03.089Z",
        "id": 30
    }
    ]);
});

// Serve any static files
app.use(express.static(path.join(__dirname, '/build')));
// Handle React routing, return all requests to React app
app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '/build', 'index.html'));
});
app.listen(port, () => console.log(`Listening on port ${port}`));