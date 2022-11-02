async function randomSlika(dugme){
        if(dugme.innerHTML == "Today"){
            var date = new Date().getFullYear() + "-" + new Date().getMonth() + "-" + new Date().getDate();
        }
        else{
            date = document.getElementById("god").value + "-" + document.getElementById("mes").value + "-" + document.getElementById("dan").value;
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
