function postNewPlanet(url, newPlanetObject){
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        "name": `${newplanetObject.name}`,
        "image": `${newplanetObject.image}`, 
        "description": `${newplanetObject.description}`
      })
    })
    .then(resp => resp.json())
    .then(newPlanetDataObject => renderEachMonster(newPlanetDataObjecct))
  }

// Step 1. 
  
  const planetForm = document.querySelector('.add-planet-form')

// Step 2. 

  planetForm.addEventListener("submit", function(e){
  
// Step 3. 
    e.preventDefault()

// Step 4. 

    const newPlanet = {
      name: e.target.name.value,
      image: e.target.image.value,
      likes: 0 
    }

// Step 6. 

    postNewPlanet("http://localhost:3000/planets", newPlanet)
    planetForm.reset()
    
  })