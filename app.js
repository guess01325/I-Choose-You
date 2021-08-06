
// called all data I need into variables
const domain = "https://pokeapi.co/api/v2/"
let pokeName1 = document.querySelector('.pokeName1')
let type1 = document.querySelector(".type1")
let move1 = document.querySelector(".move1")
let attack1 = document.querySelector(".attack1")
let defense1 = document.querySelector(".defense1")
let pokePic1 = document.querySelector(".pokePic1")
let restartButton = document.querySelector(".restart")
let goButton = document.querySelector(".go")


let pokeName2 = document.querySelector('.pokeName2')
let type2 = document.querySelector(".type2")
let move2 = document.querySelector(".move2")
let attack2 = document.querySelector(".attack2")
let defense2 = document.querySelector(".defense2")
let pokePic2 = document.querySelector(".pokePic2")
let select1 = document.querySelector(".select1")
let select2 = document.querySelector(".select2")
let hp1 = 0
let hp2 = 0
let Pokemon1Choice = document.querySelector(".pokemon1Choice")
let pokemon2Choice = document.querySelector('.pokemon2Choice')















// Render first pokemon

const renderList = (content) =>{
  
        pokeName1.textContent = `${content.name}`
        type1.textContent = `${content.types[0].type.name}` 
        move1.textContent = `${content.moves[0].move.name}`
        pokePic1.src = `${content.sprites.front_default}`
        hp1 = content.stats[0].base_stat
        
        
        // // pokeName2.texContent = `${content.name}`
        // // type2 = textContent = `${content.types[0].type.name}`
        // // move2 = textContent = `${content.sprites.back_default}`
        
        
        
        
        
        
        
    }
    // render second pokemon
    const renderList2 = (content2) => {
        pokeName2.textContent = `${content2.name}`
        type2.textContent = `${content2.types[0].type.name}`
        move2.textContent = `${content2.moves[0].move.name}`
        pokePic2.src = `${content2.sprites.front_default}`
        hp2 = content2.stats[0].base_stat
       
    } 
    
    // Choose who wins
    const choice = () =>{
        console.log(hp1)
        if (hp1 > hp2) {
            Pokemon1Choice.textContent = "you win"
            pokemon2Choice.textContent = "you lose"
            
        }else if(hp2>hp1) {
            Pokemon1Choice.textContent = "you lose"
            pokemon2Choice.textContent = "you win"
        }else{
            Pokemon1Choice.textContent = "you tie"
            pokemon2Choice.textContent = "you tie"
        }
    }
    
    
    
    // Get initial set of Random data
    const getAllData = async () =>{
        try{
            const response = await axios.get("https://pokeapi.co/api/v2/pokemon/?offset=20&limit=30")
            console.log(response.data.results)
            const pokeDataArray = response.data.results
            let randomIndex1 = Math.floor(Math.random()*pokeDataArray.length-1)
            let randomIndex2 = Math.floor(Math.random()*pokeDataArray.length-1)
            
            getPokeData(pokeDataArray[randomIndex1],pokeDataArray[randomIndex2])
            
            
        }catch(err){
            console.error(err)
            
        }
    }
    getAllData()
    
    
    // Get data for certain pokemon
    const getPokeData = async (pokemon1,pokemon2) =>{
        try{
            const response1 = await axios.get(`${domain}pokemon/${pokemon1.name}`)
            const response2 = await axios.get(`${domain}pokemon/${pokemon2.name}`)
            console.log(response1.data)
            renderList(response1.data)
            renderList2(response2.data)
            goButton.addEventListener("click",choice)
            restartButton.addEventListener('click',remove)
            
            
            
            
    }catch(err){
        console.error(err)
    } 
}






// Restart program for choice and pokemon data
const restart = () => {
    Pokemon1Choice.textContent = ""
    pokemon2Choice.textContent = ""
    select1.checked = false
    select2.checked = false
    getAllData()
    
}

restart()

restartButton.addEventListener("click",restart)


