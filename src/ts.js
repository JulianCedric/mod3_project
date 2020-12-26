// Think Space: 

// 2020.12.24 - THU:

// One way to run JavaScript code (via Visual Studio Code) is by right clicking on your index.html file and selecting Open with Live Server.
// This will render your code on your (Chrome) browser.

// Module 3 Project - Updates

document.addEventListener("DOMContentLoaded", () => {

    const DATA = {}

    function renderEachStoic(stoic)
    function renderAllStoics(stoics)
    renderAllStoics(DATA.stoics)

    document.addEventListener("click", function(e) {})

})

// 2020.12.26 - SAT: 

document.addEventListener("DOMContentLoaded", () => {

    fetchAll(url)

// Read

    renderEach(eachData) {

    }

    renderAll(allData) {
        allData.forEach(eachData => renderEach(eachData))
    }

    fetchAll(url) {
        fetch(url)
        .then(r => r.json())
        .then(allData => renderAll(allData))
    }
    renderAll(allData)

}) 