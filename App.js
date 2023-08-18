let pageCount = 1;
const btn = document.getElementById("clickPets");
const containerInfo = document.getElementById("animal-info");

btn.addEventListener("click", function(){
    const ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-' + pageCount + '.json'); // make a GET request to the URL
    ourRequest.onload = function(){
        const ourData = JSON.parse(ourRequest.responseText);
        //console.log(ourData)
        renderHTML(ourData);
    }
    ourRequest.send();
    pageCount++;
    if(pageCount > 3){
        btn.classList.add("hide-me");
    }
});

function renderHTML(data){
    let textString = "";
    for (let i = 0; i < data.length; i++){
        textString += "<p>" + data[i].name + " is a " + data[i].species + " that likes to eat ";
        for(ii = 0; ii < data[i].foods.likes.length; ii++){
            if(ii == 0){
                textString += data[i].foods.likes[ii];
            }else{
                textString += " and " + data[i].foods.likes[ii];
            }
        }
        textString += ".</p>";
    }
     containerInfo.insertAdjacentHTML("beforeend", textString);
}



