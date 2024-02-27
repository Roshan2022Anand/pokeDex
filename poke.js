// accessing all the elements that are needed from the HTML document 
const search = document.getElementById("search-value");
const srchBtn = document.getElementById("search-btn");
const main = document.getElementById("main");
const box = document.getElementById("box");
const pokeImg = document.getElementById("poke-img");
const pokeName = document.getElementById("poke-name");
const backBtn = document.getElementById("back-btn");
const pokeType = document.getElementById("poke-type");
const pokeHp = document.getElementById("poke-hp");
const pokeAttack = document.getElementById("poke-attack");
const pokeDefense = document.getElementById("poke-defense");
const pokeSpAttack = document.getElementById("poke-sp-attack");
const pokeSpDefense = document.getElementById("poke-sp-defense");
const pokeSpeed = document.getElementById("poke-speed");
//function to search pokemon from the search bar value
srchBtn.addEventListener("click", searchPokemon = async () => {
    let name = search.value;
    if(name == "")
        alert("are you mad ?");
    else{
        try {
            const pokeFetch = await fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${name}`);
            const data = await pokeFetch.json();
            pokeImg.setAttribute("src", data.sprites.front_default);
            pokeName.innerText = data.name;
            pokeType.innerText = data.types[0].type.name;
            pokeHp.innerText = data.stats[0].base_stat;
            pokeAttack.innerText = data.stats[1].base_stat;
            pokeDefense.innerText = data.stats[2].base_stat;
            pokeSpAttack.innerText = data.stats[3].base_stat;
            pokeSpDefense.innerText = data.stats[4].base_stat;
            pokeSpeed.innerText = data.stats[5].base_stat;
            await box.showModal();
            // console.log(data.stats[0].base_stat, data.stats[1], data.stats[2], data.stats[3], data.stats[4], data.stats[5]);
        } catch (err) {
            alert("please enter a valid name");
        }
    }
})
//function for back button 
backBtn.addEventListener("click",()=>{
    box.close();
})
//function to display few pokemon
const displayPokemon = (data) => {
    // console.log(data);
    main.innerHTML += `
    <div id="my-card">
            <img src="${data.sprites.front_default}" id="poke-img" alt="...">
            <div>
                <h5>${data.types[0].type.name}</h5>
                <p>${data.name}</p>
            </div>
    </div>`
}
for (let i = 1; i < 100; i++) {
    // let randomPokemon = Math.ceil(Math.random() * 300);
    fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${i}`)
    .then((res) => res.json())
    .then((data) => displayPokemon(data))
}
