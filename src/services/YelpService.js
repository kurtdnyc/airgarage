export class YelpService{
    async getGarages(location){
        let url = `https://evening-ocean-20264.herokuapp.com/https://api.yelp.com/v3/businesses/search?categories=parking&location=${location}`
        let headers = new Headers()
        headers.append('Authorization','Bearer mi5qSSqdhmrNXBjLq5MBMwuqcS0q8aE4u52fwqrG8CkrBjjksgdV8ZblHdh4ThtDqQVFapfOwrCqadcTH4sJIMhQgEcWpc0bK_9ms_rJ1H-xMT1Amp4tmH_PhAg3X3Yx')
        let response=  await fetch(url,{headers:headers}).then(data => data.json())



        response.businesses.sort((a,b) => a.rating - b.rating)
        
        let arr = []

        for(let i=0;i<5;i++){
            arr[i] = response.businesses[i]
        }
        return arr
    }    

}