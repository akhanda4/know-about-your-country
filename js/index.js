
function getCountryInfo(event){
	if(event.keyCode === 13){
		console.log("Enter key presses");
  let image_area = document.getElementById('image-area');
  let country_name = document.getElementById('country-name').value;
  let details = document.getElementById('details');
  
 fetch(`https://restcountries.eu/rest/v2/name/`+country_name+`?fullText=true`)
  .then(function(response) {
    if (response.status!==200) {
      console.log("Check your internet");
      return;
    }
    else{
      return console.log("success");
    }
  });
  fetch(`https://restcountries.eu/rest/v2/name/`+country_name+`?fullText=true`)
    .then(res =>   res.json())
    .then(posts => {
    	document.getElementsByClassName('br')[0].style.display = "";
      image_area.style.display="";
      image_area.setAttribute("src", posts[0].flag);
      details.innerHTML = "<h2>"+ posts[0].name+"</h2> <br/>";
      details.innerHTML+="<span class='abc'>Capital: </span>"+"<span class='def'>"+posts[0].capital+"</span><br/>";
      details.innerHTML+="<span class='abc'>Region: </span>"+"<span class='def'>"+posts[0].region+"</span> <br/>";
      details.innerHTML+="<span class='abc'>Subregion: </span>"+"<span class='def'>"+posts[0].subregion+"</span> <br/>" ;
      details.innerHTML+="<span class='abc'>Population: </span>"+"<span class='def'>"+posts[0].population+"</span> <br/>";
      details.innerHTML+="<span class='abc'>Time Zones: </span>"+"<span class='def'>"+posts[0].timezones+"</span> <br/>";
      details.innerHTML+="<span class='abc'>Native Name: </span>"+"<span class='def'>"+posts[0].nativeName+"</span> <br/>";
      details.innerHTML+="<span class='abc'>Currency: </span>"+"<span class='def'>"+posts[0].currencies[0].code +" "+posts[0].currencies[0].symbol +"</span><br/>";
      details.innerHTML+="<span class='abc'>Languages: </span>"+"<span class='def'>"+posts[0].languages[0].name+"</span> <br/>";
    })
    .then(res => console.log('Success:', JSON.stringify(res)));
}
}