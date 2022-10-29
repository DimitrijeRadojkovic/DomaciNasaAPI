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
        
            const slika_src = json.url;
            document.getElementById("slika").setAttribute("src", slika_src);
        }
        catch(error){
            console.log(error);
        }  
}