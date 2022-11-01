async function randomSlika(){
        try{
            let date = document.getElementById("datum").value;
            console.log(date);

            const url = "https://api.nasa.gov/planetary/apod?api_key=u0lRzuy2idfMI5HWohm1ZgO3qwcXDii1mdYQFiHx";
            const final_url = url + "&date=" + date + "&";
            console.log(final_url);

            const response = await fetch(final_url);
            console.log(response);

            const json = await response.json();
            console.log(json);
        
            if(json.media_type == "image"){
                document.getElementById("slika").setAttribute("src", json.url);
            }
            else{
                document.getElementById("video").setAttribute("src", json.url);
            }
            
        }
        catch(error){
            console.log(error);
        }  
}

window.onscroll = function() {nav()};
    
function nav(){
    let nav = document.getElementById("nav");
    let klasa_dark = "navbar bg-dark container-fluid border d-flex justify-content-between align-items-center position-sticky sticky-top senka";
    let klasa_white = "navbar bg-white container-fluid border d-flex justify-content-between align-items-center position-sticky sticky-top senka";
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
