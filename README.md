# I-Choose-You2


## Project Name

I chose you

## Project Description

It will render 2 pokemon, you have to choose who you think will win, then it will decide the winner

## API and Data Sample

I am using the Poki Api
```
Name: Charizard
 
 "abilities": [
        {
            "ability": {
                "name": "blaze",
                "url": "https://pokeapi.co/api/v2/ability/66/"
            },
            "is_hidden": false,
            "slot": 1
        },
	
	 "stats": [
        {
            "base_stat": 78,
            "effort": 0,
            "stat": {
                "name": "hp",
                "url": "https://pokeapi.co/api/v2/stat/1/"
            }
        },
     
     "types": [
        {
            "slot": 1,
            "type": {
                "name": "fire",
                "url": "https://pokeapi.co/api/v2/type/10/"
            }

```

## Wireframes

First wireframe showing the layout of the page and second is showing the results after the pokemone you choose

![alt text](https://res.cloudinary.com/otisg/image/upload/v1627936091/I_choose_you_wire_frame_-_1st_Page_anpup6.png)   



#### MVP 

 - Display my page with title and instructions
  
  - Get data needed for pokemon chosen
  
  - Create pokemon cards and give the user choices
 
  - I will make my app responsive with a mobile device
  
  - Apply simple art such as color and images of pokemon
  
  - Deploy the site to my git hub so people can use it


#### PostMVP  

   - Try to create better amminations to show action and a battle
    
   - Improve card logic
     
  - Let the user interact with the stats more, maybe year move was made, year introduced exc

## Priority Matrix

![alt text](https://res.cloudinary.com/otisg/image/upload/v1627936320/I_choose_you_matrix_-_Window_1_lr9xe2.png)

## Timeframes


| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Getting API       | H | 3hrs| 4hrs | 3rs |
| Basic HTML/CSS/JS | H | 3hrs| 3hrs  | 3hrs |
| Working with API  | H | 3hrs| 4hrs  | 3hrs |
| Getting content from api   | H | 3hrs| 3hrs  | 3hrs |    
| Set up cards      | H | 3 hr| 3hrs | 3hrs |
| Styles css        | H | 3hrs| 4hrs  | 3hrs |
| Get data (axios)  | H | 3hrs| 4hrs | 3hrs |
| create winner Fn  | H | 3hrs| 3hrs | 3hrs |
| create reset fn   | H | 3hrs| 3hrs | 3hrs |
| Responsive Design | H | 3hrs| 3hrs | 3hrs |
| Advance css       | H | 3hrs| 3hrs | 3hrs |
| Advance logic     | H | 3hrs| 3hrs | 3hrs |
| Fix bugs          | H | 3rs | 3hrs | 3hrs |
| refactor Code     | H | 3hrs| 3hrs | 3hrs |
| Total | H | 42hrs| 46hrs | 42hrs |


## Code Snippet

This is a code snippet where I reset the checkboxes and lerned something new

```
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

```



## Change Log
 I change the way that I access the data so it could randomize and call to sets to get the intial pokemon names and the objects within the pokemon





