// accessing all the elements that are needed from the HTML document 
const search = document.getElementById("search-value");
const srchBtn = document.getElementById("search-btn");
const main = document.getElementById("main");
//function to search pokemon from the search bar value
srchBtn.addEventListener("click", searchPokemon = async () => {
        let name = search.value;
        try {
            const pokeFetch = await fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${name}`);
            const data = await pokeFetch.json();
            console.log(data);
        } catch (err) {
            alert("please enter a valid name");
        }
    })
//function to display few pokemon
const displayPokemon=(data)=>{
    // console.log(data.sprites);
    main.innerHTML+=`<img src="${data.sprites.front_default}"></img>`
}
for(let i=1;i<100;i++){
    let randomPokemon = Math.ceil(Math.random()*300);
    fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${randomPokemon}`)
     .then((res)=>res.json())
     .then((data)=>displayPokemon(data))
}
