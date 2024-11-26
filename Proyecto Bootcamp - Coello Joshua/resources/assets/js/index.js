//Buscador

document.getElementById("icon-search").addEventListener("click", show_search);
document.getElementById("background").addEventListener("click", hidden_search)

search_bar = document.getElementById("search-bar");
search_input = document.getElementById("search-input");
background = document.getElementById("background");

function show_search(){

    search_bar.style.top = "80px";
    search_input.focus();
    background.style.display = "block";

}

function hidden_search(){

    search_bar.style.top = "-10px"
    background.style.display = "none";
    search_input.value = "";
}