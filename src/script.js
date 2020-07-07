// 7/7 JP Notes: Created everything so far in only .js file and .html file (so for now, I just commented in where fetches will prob be). Get Rails to work next.
    // 7/7_~1p: After lecture, pick back up on line 79 (showDetails function - prob ask Grant?).

document.addEventListener("DOMContentLoaded", () => {


    // ^^ see notes on lines 1 and 2.
    const STOICOVERFLOWDATA = {
        stoics: [
            {
                stoic_id: 1, 
                principle: "Think Differently", 
                description: 1, 
                likes: 1, 
                comments: "test1"
            },
            {
                stoic_id: 2, 
                principle: "Alter Your Perspective", 
                description: 2, 
                likes: 2, 
                comments: "test2"
            },

            {
                stoic_id: 3, 
                principle: "Something Bigger Than Yourself", 
                description: 3, 
                likes: 3, 
                comments: "test3"
            },

            {
                stoic_id: 4, 
                principle: "Build Your Inner Citadel", 
                description: 4, 
                likes: 4, 
                comments: "test4"
            }
        ]
    }
    console.log(STOICOVERFLOWDATA)

//////////

    function renderEachStoic(stoic){
        console.log("'renderEachStoic' function works.")

        const stoicsUl = document.querySelector('.stoics-list')
        const stoicLi = document.createElement('li')
        stoicLi.className = "stoic"
        stoicLi.id = stoic.id
        stoicLi.innerHTML = `This is a test: ${stoic.principle}.`

        stoicsUl.append(stoicLi)
    }
    // renderEachStoic(STOICOVERFLOWDATA.stoics.first)
    
    function renderAllStoics(stoics){
        console.log("'renderAllStoics' function works.")

        stoics.forEach(stoic => renderEachStoic(stoic))
    }
    renderAllStoics(STOICOVERFLOWDATA.stoics)












//////////

// document.addEventListener("click", function(e) => {

//     if (e.target.className === "stoic")
//         e.preventDefault() 

//         stoicsUl = e.target.parentNode
//         // move up and then down this Ul (??)

//         function showDetails(){

//         }

//         // do I need to create a function here to move each stoicLi to the 

    


// }) 

//////////

})