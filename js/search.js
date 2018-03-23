function searchCard() {
    var input, inputValue, filter, div, p, i, isUppercase;

    input = document.getElementById("searchInput");
    inputValue = input.value;

    isUppercase = document.getElementById("isUppercase");
    isUppercase.innerHTML = "";
    if (inputValue[0] === inputValue[0].toUpperCase()) {
        isUppercase.innerHTML = "true";
    }
    else{
        isUppercase.innerHTML = "false";        
    }

    filter = inputValue.toUpperCase();
    section = document.getElementById("search");
    div = section.getElementsByClassName("article-card");
    for (i = 0; i < div.length; i++) {
        p = div[i].getElementsByTagName("p")[0];
        if (p.innerHTML.toUpperCase().indexOf(filter) > -1) {
            div[i].style.display = "block";
        } else {
            div[i].style.display = "none";
        }
    }
}