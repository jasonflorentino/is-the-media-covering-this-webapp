import { useState } from "react";
// import axios from "axios";

const API = {
  useFetchNewArticles
}

function useFetchNewArticles() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const requestData = async (query) => {
    setLoading(true);
    let res = null;

    try {
      // res = await axios.get(APIUrl, {query});
      // setData(res.body);
      
      res = await getData();
      setData(res);

      setLoading(false);
    } catch (e) {
      console.log(e);
      setErrorMessage("Error set from API hook")
      setLoading(false);
      setError(true);
    }
  }


  return {data, requestData, loading, error, errorMessage};
}

export default API;

function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // reject();
      resolve(Data());
    }, 2000);
  })
}

function Data() {
  return {
    "total_articles": "2830",
    "articles": [
      {
        "title": "Brazil sees most June fires in Amazon rainforest since 2007 | Reuters",
        "author": "@Reuters",
        "source": "www.reuters.com",
        "published_on": "2021-07-01T13:18:51Z",
        "link": "https://www.reuters.com/business/environment/brazil-sees-most-june-fires-amazon-rainforest-since-2007-2021-07-01/",
        "media": "https://www.reuters.com/resizer/l3MEjp2_sGYjPQh92Y0t-zMukvQ=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/SOQYRYM3EJOJNCM2PU2YCFUHKU.jpg"
      },
      {
        "title": "Amazon rainforest drought and deforestation could lead to bad fire ...",
        "author": "Drew Kann, CNN",
        "source": "www.cnn.com",
        "published_on": "2021-06-22T18:31:58Z",
        "link": "https://www.cnn.com/2021/06/22/weather/brazil-drought-amazon-rainforest-fires/index.html",
        "media": "https://cdn.cnn.com/cnnnext/dam/assets/210218223624-brazil-amazon-fires-2020-super-tease.jpg"
      },
      {
        "title": "Brazil bans fires, redeploys military to protect Amazon rainforest ...",
        "author": "@Reuters",
        "source": "www.reuters.com",
        "published_on": "2021-06-29T15:09:55Z",
        "link": "https://www.reuters.com/business/environment/brazil-bans-fires-redeploys-military-protect-amazon-rainforest-2021-06-29/",
        "media": "https://www.reuters.com/resizer/F0kEi_YopSim2q5QApZ46edPqbI=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/Z7VEYIC2IFKAZF75KGPQHLAQXY.jpg"
      },
      {
        "title": "Scientists warn of bad year for fires in Brazil's Amazon and wetlands ...",
        "author": "@Reuters",
        "source": "www.reuters.com",
        "published_on": "2021-05-27T16:21:36Z",
        "link": "https://www.reuters.com/business/environment/scientists-warn-bad-year-fires-brazils-amazon-wetlands-2021-05-27/",
        "media": "https://www.reuters.com/resizer/t2zsxIPUFKaFdRBITJfOCqiQ_bY=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/VPPKC5GCYBJUDDGOWRQVVY5TPU.jpg"
      },
      {
        "title": "Amazon rainforest lost area the size of Israel in 2020 - ABC News",
        "author": "ABC News",
        "source": "www.msn.com",
        "published_on": "2021-02-05T00:00:00.000Z",
        "link": "https://www.msn.com/en-us/news/world/amazon-rainforest-lost-area-the-size-of-israel-in-2020/ar-BB1dpMJB",
        "media": "https://s.abcnews.com/images/International/peru-indigenous-children-abc-mo-20210204_1612481480916_hpMain_16x9_992.jpg"
      },
      {
        "title": "Destruction of Brazil's Amazon rainforest speeds up for 2nd straight ...",
        "author": "@Reuters",
        "source": "www.reuters.com",
        "published_on": "2021-05-07T14:07:30.713Z",
        "link": "https://www.reuters.com/business/environment/deforestation-brazils-amazon-rainforest-rises-second-straight-month-2021-05-07/",
        "media": "https://www.reuters.com/resizer/PGQb5gBeFrt0LSSjjIuiJoO1gW4=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/TN657YJX6NPWTEBSZHAITV6NS4.jpg"
      },
      {
        "title": "Amazon biome hurtles toward death spiral as deforestation jumps in ...",
        "author": "Jake Spring",
        "source": "www.reuters.com",
        "published_on": "2021-01-27T00:00:00.000Z",
        "link": "https://www.reuters.com/article/us-environment-amazon-idUSKBN29W20T",
        "media": "https://static.reuters.com/resources/r/?m=02&d=20210127&t=2&i=1549257489&r=LYNXMPEH0Q16I&w=800"
      },
      {
        "title": "Brazil issues fire ban, redeploys military to fight Amazon blazes ...",
        "author": null,
        "source": "www.aljazeera.com",
        "published_on": "2021-06-29T00:00:00.000Z",
        "link": "https://www.aljazeera.com/news/2021/6/29/brazil-issues-fire-ban-redeploys-military-to-fight-amazon-blazes",
        "media": "https://www.aljazeera.com/wp-content/uploads/2021/06/2019-08-23T183600Z_1291336819_RC1D0F4EFAE0_RTRMADP_3_BRAZIL-ENVIRONMENT-PROTESTS-COLOMBIA.jpg?resize=1200%2C630"
      },
      {
        "title": "World Rainforest Day 2021: What you should know - CNN",
        "author": "Sam Romano",
        "source": "www.cnn.com",
        "published_on": "2021-06-22T11:47:23Z",
        "link": "https://www.cnn.com/2021/06/22/world/world-rainforest-day-facts/index.html",
        "media": "https://cdn.cnn.com/cnnnext/dam/assets/210505073359-file-02-amazon-rainforest-novo-progresso-brazil-august-2020-super-tease.jpg"
      },
      {
        "title": "Brazil Faces Severe Drought as Covid Deaths Approach 500,000 ...",
        "author": null,
        "source": "www.nytimes.com",
        "published_on": "2021-06-19T09:00:17.000Z",
        "link": "https://www.nytimes.com/2021/06/19/world/americas/brazil-drought.html",
        "media": "https://static01.nyt.com/images/2021/06/19/world/19brazil-drought1/merlin_178300212_97c0596a-8222-4038-b829-194f09e55f3b-facebookJumbo.jpg"
      }
    ]
  }
}