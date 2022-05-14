

let key = ""

let summoner = ""

let summoner_url = ""

let summoner_data = []

async function apicall(url){
    return (await fetch(url)).json()
}


// key = document.getElementById("user-key").value
// summoner = document.getElementById("user-name").value

function ask_info() {
    key = prompt("enter api key: ")
    summoner = prompt("enter summoner name: ")
    return summoner_url = 'https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/' + summoner + '?api_key=' + key
}




function make_url(summoner, key) {
    button.addEventListener('click', ask_info)
}



function submit() {
    
    // make_url(summoner, key)
    // alert(summoner_url)
    
    
}

let button = this.document.getElementById("button")


button.addEventListener('click', async  () => {
    key = prompt("enter api key: ")
    summoner = prompt("enter summoner name: ")
    summoner_url = 'https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/' + summoner + '?api_key=' + key
    if (key != null && summoner != null) {
        summoner_data = await apicall(summoner_url)
    }
})


// key = document.getElementById("user-key").value
// summoner = document.getElementById("user-name").value


// window.addEventListener('load', (event) => {
//     console.log('page is fully loaded');
//     button.addEventListener('click', ask_info)
//   });
  


document.addEventListener("DOMContentLoaded", async () => { 
    //ask_info()
    //summoner_data = await apicall(summoner_url)
    
    
})



// if (summoner_url != "") {
//     summoner_data = await apicall(summoner_url)

// }



