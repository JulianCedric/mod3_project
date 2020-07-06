document.addEventListener("DOMContentLoaded", () => {
    
// Fetch then render one (of currently only two) planet/s:
              
          function renderEachPlanet(planet){
            console.log()
    
            const planetsContainer = document.getElementById('planets-container')
          
            const planetDiv = document.createElement('div')
            planetDiv.className = "planet-box"
            planetDiv.id = planet.id
            planetDiv.innerHTML = `
                                  <h2>Name: ${planet.name}</h2>
                                  <img src="${planet.image}" /img>
                                  <p>${planet.description}</p>
                                  <button class="bid-btn">${planet.bid}</button>
                                  <br>
                                  <h4 id="bidders">Project Bidders:</h4>
                                  <p>Under Construction - Try Placing Bid Submissions Here As Comments(??)</p>
            `
            planetsContainer.append(planetDiv)
        }
    
        function renderAllPlanets(planets){
            // console.log()

            planets.forEach(planet => renderEachPlanet(planet))
        }
    
        function fetchPlanetsObject(url){
            // console.log()

            fetch(url)
            .then(resp => resp.json())
            .then(allPlanetsObject => renderAllPlanets(allPlanetsObject))
            // .then(x => renderAllPlanets(x))
        }
        fetchPlanetsObject("http://localhost:3000/planets")
  
// 

function postNewBid(url, newBidAsComment){
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




})