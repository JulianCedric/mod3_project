document.addEventListener("DOMContentLoaded", () => {
    
// Fetch then render one (of currently only two) planet/s:
              
          function renderEachPlanet(planet){
            console.log()
    
            const planetsContainer = document.getElementById('planets-container')
          
            const planetDiv = document.createElement('div')
            planetDiv.className = "section"
            planetDiv.id = planet.id
            planetDiv.innerHTML = `
                                  <h2>Name: ${planet.name}</h2>
                                  <img src="${planet.image}" /img>
                                  <p>${planet.description}</p>
                                  <button class="bid-btn">${planet.bid}</button>
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
    
})