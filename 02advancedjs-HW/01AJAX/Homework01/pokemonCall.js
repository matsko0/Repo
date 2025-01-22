$(document).ready(function(){
    $("#getPokemons").click(function(){
        $.ajax({
            url: "https://pokeapi.co/api/v2/pokemon",
            success: function(response){
                console.log(response);
                let pokemonList = $("#pokemonsAppend");
                pokemonList.empty();
                for(let i = 0; i < 10; i++){
                    const pokemon = response.results[i];
                    pokemonList.append(`<li>${pokemon.name}</li>`);    
                };
                  
            },
            error: function(){
                alert("An error occurred while fetching data!!!");
            }
        })
    })
})