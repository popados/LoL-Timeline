

let key = ""

let summoner = ""

let summoner_url = ""

let match_data_url = ""

let match_url = ""

let player_name_url = ""

let match_data = []

let summoner_data = []

let match_history = []

let summoner_puuid = []

let participants_id = []

let player_names = []

let player_name_data = []

let player_data = []

let participant = []

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


function place_names() {
    if(player_names != null) {
        let player_name = document.createElement("p")
        player_name.innerHTML = player_names
        document.body.appendChild(player_name)

    }
}

let button = this.document.getElementById("button")
let name_card = document.getElementById("match-card")

button.addEventListener('click', async  () => {
    key = document.getElementById("user-key").value
    summoner = document.getElementById("user-name").value
    summoner_url = 'https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/' + summoner + '?api_key=' + key
    if (key != null && summoner != null) {
        summoner_data = await apicall(summoner_url)
        if(summoner_data != null) {
            summoner_puuid.push(summoner_data.puuid)
            let puuid = summoner_puuid[0].toString()
            match_data_url = 'https://americas.api.riotgames.com/lol/match/v5/matches/by-puuid/' + puuid + '/ids?start=0&count=10&api_key=' + key
            match_history = await apicall(match_data_url)
                if(match_data != null) {
                    let match_id = match_history[0]
                    match_url = 'https://americas.api.riotgames.com/lol/match/v5/matches/' + match_id + '?api_key=' + key
                    match_data = await apicall(match_url)
                    for ( i = 0; i <= match_data.info.participants.length - 1; i++) {
                        participants_id.push(match_data.info.participants[i].puuid)

                    }
                    if(participants_id != null) {
                        console.log("gothere")
                        for (let i = 0 ; i <= participants_id.length - 1; i++ ) {
                            let player_puuid = participants_id[i]
                            if (player_puuid === null) {
                                delete player_puuid
                            }
                            else {player_name_url = 'https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-puuid/' + player_puuid +'?api_key=' + key
                            player_name_data = await apicall(player_name_url)
                            player_names.push(player_name_data.name)

                        }
                            
                        }
                        
                }
                }

                
        }
        // let player_name = document.createElement("p")
        // player_name.innerHTML = player_names
        // document.body.append(player_name)
 
    }
    place_names()
    player_data.push(match_data.info.participants)


})





// RGAPI-1c214988-17bb-47a8-934f-f4840edcd803
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



