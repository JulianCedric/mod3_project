// 7/7 JP Notes: Created everything so far in only .js file and .html file (so for now, I just commented in where fetches will prob be). Get Rails to work next.

document.addEventListener("DOMContentLoaded", () => {


    // ^^ see notes on lines 1 and 2.
    const STOICOVERFLOWDATA = {
        stoics: [
            {
                id: 1, 
                principle: "Think Differently", 
                description: 1, 
                likes: 1, 
                comments: "test1"
            },
            {
                id: 2, 
                principle: "Alter Your Perspective", 
                description: 2, 
                likes: 2, 
                comments: "test2"
            },

            {
                id: 3, 
                principle: "Something Bigger Than Yourself", 
                description: 3, 
                likes: 3, 
                comments: "test3"
            },

            {
                id: 4, 
                principle: "Build Your Inner Citadel", 
                description: 4, 
                likes: 4, 
                comments: "test4"
            },

            {
                id: 5, 
                principle: "Live in the Present Moment", 
                description: 5, 
                likes: 5, 
                comments: "test5"
            }
        ]
    }
    console.log(STOICOVERFLOWDATA)

//////////

//////////

    function renderEachStoic(stoic){
        console.log(" 'renderEachStoic' function works.")

        const stoicsUl = document.querySelector('.stoics-list')
        const stoicLi = document.createElement('li')
        stoicLi.className = "stoic"
        stoicLi.setAttribute = ('data-key', stoic.id)
        // stoicLi.id = `${stoic.id}`
        stoicLi.innerHTML = `${stoic.principle}.`

        stoicsUl.append(stoicLi)
    }
    // renderEachStoic(STOICOVERFLOWDATA.stoics.first)
    
    function renderAllStoics(stoics){
        console.log(" 'renderAllStoics' function works.")

        stoics.forEach(stoic => renderEachStoic(stoic))
    }
    renderAllStoics(STOICOVERFLOWDATA.stoics)

// fetch, rails

//////////

    document.addEventListener("click", function(e) {
        e.preventDefault() 

        const id = e.target.getAttribute('data-key')
        
        const y = document.querySelector('.y');
            (y)?y.classList.remove('y'):null;
            e.target.classList.add('y'); 
        
            STOICOVERFLOWDATA.stoics.forEach(stoic => {
                if (stoic.id === id){
                    let x = stoic
                } 
                const stoicUl = document.querySelector('.stoic-list')
            
                console.log("My 'x & y' variables work!")

                const stoicIlDetail = document.createElement('li')
                stoicIlDetail.innerHTML = `
                                            <p>${stoic.description}</p>
                `

                stoicUl.append(stoicIlDetail)

            })

    })
    
})











//     const stoicUlDetails = document.querySelector('.stoic-list')
    
//     const stoicLiDetails = document.createElement('li')
//     stoicLiDetails.className = "stoicDetails"
//     stoicLiDetails.innerHTML = `
//                                 <p>principle</p>
//                                 <p>description</p>
//                                 <p>likes</p>
//                                 <p>comments</p>
//     `
//     stoicUlDetails.append(stoicIlDetails)
//     }

// document.addEventListener("click", function(e) => {

//     if (e.target.className === "stoic")
//         e.preventDefault() 

//         moveStoicFromMasterToDetail()


        // stoicsUl = e.target.parentNode
        // // move up and then down this Ul (??)

        // function showDetails(){

        // }

        // do I need to create a function here to move each stoicLi to the 




// //////////

