document.getElementById("god").innerHTML = new Date().getFullYear();
document.getElementById("mes").innerHTML = new Date().getMonth() + 1;
console.log(document.getElementById("mes").innerHTML);
function dani(){
    document.getElementById("dan").innerHTML = "";
    if(document.getElementById("god").innerHTML % 4 ==0){
        console.log("prestupna");
    switch (document.getElementById("mes").innerHTML){
        case "1":
        case "3":
        case "5":
        case "7":
        case "8":
        case "10":
        case "12":
            i = 1;
            while(i <= 30){
                let d = document.createElement("div");
                d.innerHTML = i;
                d.setAttribute("class", "text-center flex-grow-1");
                d.style.width = "20%";
                if(d.innerHTML == new Date().getDate()){
                    console.log("dnaas");
                    
                    d.setAttribute("class", "dan-tr");
                }
                document.getElementById("dan").appendChild(d);
                i++;
            }
            break;
        case "2":
            i = 1;
            while(i <= 29){
                let d = document.createElement("div");
                d.innerHTML = i;
                d.setAttribute("class", "text-center flex-grow-1");
                d.style.width = "20%";
                if(d.innerHTML == new Date().getDate()){
                    console.log("dnaas");
                   
                    d.setAttribute("class", "dan-tr");
                }
                document.getElementById("dan").appendChild(d);
                i++;
            }
            break;
        default:
            i = 1;
            while(i <= 30){
                let d = document.createElement("div");
                d.innerHTML = i;
                d.setAttribute("class", "text-center flex-grow-1");
                d.style.width = "20%";
                if(d.innerHTML == new Date().getDate()){
                    console.log("dnaas");
                  
                    d.setAttribute("class", "dan-tr");
                }
                document.getElementById("dan").appendChild(d);
                i++;
            }
            break;
    }
}
else{
    switch (document.getElementById("mes").innerHTML){
        case "1":
        case "3":
        case "5":
        case "7":
        case "8":
        case "10":
        case "12":
            i = 1;
            while(i <= 31){
                let d = document.createElement("div");
                d.innerHTML = i;
                d.setAttribute("class", "text-center flex-grow-1");
                d.style.width = "20%";
                if(d.innerHTML == new Date().getDate()){
                    console.log("dnaas");
                   
                    d.setAttribute("class", "dan-tr");
                }
                document.getElementById("dan").appendChild(d);
                i++;
            }
            break;
        case "2":
            i = 1;
            while(i <= 28){
                let d = document.createElement("div");
                d.innerHTML = i;
                d.setAttribute("class", "text-center flex-grow-1");
                d.style.width = "20%";
                if(d.innerHTML == new Date().getDate()){
                    console.log("dnaas");
                    d.setAttribute("class", "dan-tr");
                }
                document.getElementById("dan").appendChild(d);
                i++;
            }
            break;
        default:
            i = 1;
            while(i <= 30){
                let d = document.createElement("div");
                d.innerHTML = i;
                d.setAttribute("class", "text-center flex-grow-1");
                d.style.width = "20%";
                if(d.innerHTML == new Date().getDate()){
                    console.log("dnaas");
                    d.setAttribute("class", "dan-tr");
                }
                document.getElementById("dan").appendChild(d);
                i++;
            }
            break;
    }
}
}
dani();


var br=0;
var br2=0;
function promenaDatuma(strelica){
    
    if(strelica.className == "fa-sharp fa-solid fa-caret-left" && strelica.id == "god-left"){
        document.getElementById("god").innerHTML = document.getElementById("god").innerHTML - 1;
    }
    else if(strelica.className == "fa-sharp fa-solid fa-caret-right" && strelica.id == "god-right"){
        document.getElementById("god").innerHTML = Number(document.getElementById("god").innerHTML) + 1;
    }

    if(strelica.className == "fa-sharp fa-solid fa-caret-left" && strelica.id == "mes-left"){
        if(document.getElementById("mes").innerHTML == 1){
            strelica.removeAttribute("onclick");
        }
        else{
            document.getElementById("mes").innerHTML = document.getElementById("mes").innerHTML - 1;
        }
    }
    else if(strelica.className == "fa-sharp fa-solid fa-caret-right" && strelica.id == "mes-right"){
        if(document.getElementById("mes").innerHTML == 12){
            strelica.removeAttribute("onclick");
        }
        else{
             document.getElementById("mes").innerHTML = Number(document.getElementById("mes").innerHTML) + 1;
        }
    }
    console.log(document.getElementById("god").innerHTML + " " + document.getElementById("mes").innerHTML);
    dani();
    
    if(strelica.className == "fa-sharp fa-solid fa-caret-left" && strelica.id == "dan-left"){
        const dani = document.getElementById("dan").children;
        if(dani[document.getElementsByClassName("dan-tr")[0].innerHTML-1-br].innerHTML == 1){
            
        }
        else{
            br++;
            console.log(br);
            
            dani[document.getElementsByClassName("dan-tr")[0].innerHTML-1-br].setAttribute("class","dan-tr");
            document.getElementsByClassName("dan-tr")[1].removeAttribute("class");
        }
    }
    else if(strelica.className == "fa-sharp fa-solid fa-caret-right" && strelica.id == "dan-right"){
        const dani = document.getElementById("dan").children;
        if(dani[document.getElementsByClassName("dan-tr")[0].innerHTML-1+br2].innerHTML == document.getElementById("dan").lastElementChild.innerHTML){
            
        }
        else{
            br2++;
            console.log(br2);
            
            dani[document.getElementsByClassName("dan-tr")[0].innerHTML-1+br2].setAttribute("class","dan-tr");
            document.getElementsByClassName("dan-tr")[0].removeAttribute("class");
        }
    }
}

async function slikaAPI(dugme){
        if(dugme.innerHTML == "Today"){
            var date = new Date().getFullYear() + "-" + (new Date().getMonth() + 1) + "-" + new Date().getDate();
        }
        else{
            date = document.getElementById("god").innerHTML + "-" + document.getElementById("mes").innerHTML + "-" + document.getElementsByClassName("dan-tr")[0].innerHTML;
        }
        try{
            console.log(date);

            const url = "https://api.nasa.gov/planetary/apod?api_key=u0lRzuy2idfMI5HWohm1ZgO3qwcXDii1mdYQFiHx";
            const final_url = url + "&date=" + date + "&";
            console.log(final_url);

            const response = await fetch(final_url);
            console.log(response);

            const json = await response.json();
            console.log(json);

            if(json.hasOwnProperty("url") == false){
                document.getElementById("greska").innerHTML = "Invalid Date";
            }
            else{
                document.getElementById("greska").innerHTML = "";
            }
        
            document.getElementById("slika").setAttribute("src", json.url);
        }
        catch(error){
            console.log(error);
        }  
}

window.onscroll = function() {nav()};
    
function nav(){
    let nav = document.getElementById("nav");
    const klasa_dark = "navbar bg-dark container-fluid border d-flex justify-content-between align-items-center position-sticky sticky-top senka";
    const klasa_white = "navbar bg-white container-fluid border d-flex justify-content-between align-items-center position-sticky sticky-top senka";
    if(nav.offsetTop != 0){
        
        console.log("nije na vrhu")
        nav.setAttribute("class", klasa_dark);
        nav.style.color = "white";

    }
    else{
        console.log("jeste na vrhu")
        nav.setAttribute("class", klasa_white);
        nav.style.color = "black";
    }
}
