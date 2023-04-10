const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a14586b441msh8d5f7bf37cc1029p1417fejsn118702d53eef',
		'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
	}
};

fetch('https://moviesdatabase.p.rapidapi.com/titles', options)
	.then(response => response.json())
	.then((data) => {
		let data1="";
		Object.values(data.results).forEach((itmesinarray)=> {//you could use for each or .map function
			let src;
			if(itmesinarray.primaryImage === null){
				src = "wakanda.jpeg"
			}else{
				src=itmesinarray.primaryImage.url
			}
			data1 += `
			<div class="card" style="width: 18rem;">
             <img src=${src} class="card-img-top" alt="...">
              <div class="card-body">
               <h5 class="card-title">Card title</h5>
               <p class="card-text">${itmesinarray.titleText.text}</p>
              </div>
            </div>
			`
			document.getElementById("cardcont").innerHTML = data1;
		})
	})
	.catch(err => console.error(err));

 //for(let key in Object){
    //console.log(key);
    //console.log(Object[key]);
	
