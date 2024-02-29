// accessing all the elements that are needed from the HTML document 
const search = document.getElementById("search-value");
const srchBtn = document.getElementById("search-btn");
const main = document.getElementById("main");
const box = document.getElementById("box");
const pokeImgOutput = document.getElementById("poke-img-output");
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
const searchPokemon = async (myName) => {
    console.log('working')
    if (myName == "")
        alert("are you mad ?");
    else {
        try {
            const pokeFetch = await fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${myName}`);
            const data = await pokeFetch.json();
            pokeImgOutput.setAttribute("src", data.sprites.front_default);
            pokeName.innerText = data.name;
            pokeType.innerText = data.types[0].type.name;
            pokeHp.innerText = data.stats[0].base_stat;
            pokeAttack.innerText = data.stats[1].base_stat;
            pokeDefense.innerText = data.stats[2].base_stat;
            pokeSpAttack.innerText = data.stats[3].base_stat;
            pokeSpDefense.innerText = data.stats[4].base_stat;
            pokeSpeed.innerText = data.stats[5].base_stat;
            await box.showModal();
            console.log(data);
        } catch (err) {
            console.log(err)
            alert("please enter a valid name");
        }
    }
}
srchBtn.addEventListener("click", () => { searchPokemon(search.value) });
//function for back button 
backBtn.addEventListener("click", () => {
    box.close();
})
//function to display few pokemon
const displayPokemon = (data) => {
    // console.log(data);
    let newName = data.name;
    main.innerHTML += `
    <div class="my-card"  onclick="searchPokemon('${newName}')">
    <img src="${data.sprites.front_default}" id="poke-img" alt="...">
     <div>
      <h5>${data.types[0].type.name}</h5>
      <p>${data.name}</p>
     </div>
    </div>`
}
for (let i = 1; i < 1000; i++) {
    // let randomPokemon = Math.ceil(Math.random() * 300);
    fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${i}`)
        .then((res) => res.json())
        .then((data) => displayPokemon(data))
}
