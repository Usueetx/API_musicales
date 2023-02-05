let url = `http://localhost:3000/musicales`

function apicall(){
fetch(url)
.then(function(response){
    return resp = response.json();
})
.then(function(resp){
    resp.forEach(peli =>{
        document.querySelector("#pelis").innerHTML +=`<div class="peli"><img class= "foto" src="./fotos/${peli.Foto}"</img><p>Titulo:${peli.Titulo}</p><p>Director:${peli.Director}</p><p>Compositor:${peli.Compositor}</p><p>Año:${peli.Año}</p><p>Rating:${peli.Rating}</p></div>`
    })
})
}  

document.querySelector("#show").addEventListener("click", function(){
    apicall();                 

})