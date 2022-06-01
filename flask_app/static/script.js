var data

async function mySearch(e){
    e.preventDefault()
    var search = document.getElementById('search').value.trim()
    var results = document.querySelector('.results')
    console.log(search)
    
    
    
    // fetch("https://randomuser.me/api/")
    // .then(response => response.json() )
    // .then(coderData => console.log(coderData) )
    // .catch(err => console.log(err) )
    
    // fetch("https://api.github.com/users/adion81")
    // .then(response => response.json() )
    // .then(coderData => console.log(coderData) )
    // .catch(err => console.log(err) )

    // getApi()

    
        var data

    // await fetch(`http://ron-swanson-quotes.herokuapp.com/v2/quotes/${search}`)
    // .then(response => response.json() )
    // .then(coderData => console.log(coderData) )
    // .catch(err => console.log(err) )

    // console.log(data)

    // fetch(`https://imdb-api.com/en/API/SearchAll/k_jj41r1tx/${search}`)
    // .then(response => response.json())
    // .then(result => console.log(result))
    // .catch(error => console.log('error', error));

    
    var response = await fetch(`http://ron-swanson-quotes.herokuapp.com/v2/quotes/${search}`);
        // We then need to convert the data into JSON format.
        var coderData = await response.json();
        console.log(coderData)
        data = coderData;
    
        for (var i of data){
            console.log(i)
            var go = document.createElement('li')
            go.innerHTML = i
            results.appendChild(go)
            }
            
    // var response = await fetch(`https://imdb-api.com/en/API/SearchAll/k_jj41r1tx/${search}`);
    // // We then need to convert the data into JSON format.
    // var coderData = await response.json();
    // console.log(coderData)
    // data = coderData;
    
    // results.innerHTML = data.results[0]
    
    
    // for(var i in coderData){
        //     console.log(i)
        // }
        
        // fetch("https://betterimdbot.herokuapp.com/swagger.json")
        // .then(response => response.json() )
        // .then(coderData => console.log(coderData) )
        // .catch(err => console.log(err) )
    }


function getApi(){
    fetch(`https://imdb-api.com/en/API/SearchAll/k_jj41r1tx/${search}`)
    .then(response => response.json())
    .then(result => console.log(result))
        .catch(error => console.log('error', error));
    }


    async function getCoderData() {
            // The await keyword lets js know that it needs to wait until it gets a response back to continue.
            var response = await fetch(`http://ron-swanson-quotes.herokuapp.com/v2/quotes/${search}`);
            // We then need to convert the data into JSON format.
            var coderData = await response.json();
            return coderData;
        }