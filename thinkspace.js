function updateLikes(url, newNum){
    fetch(url, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        "likes": newNum
      })
    })
  }








































  document.addEventListener("click", function(e){
    
    if (e.target.className === "like-btn")
      
      e.preventDefault()

      // how to target parentNode of 'like-btn' ?? 

      toyDiv = e.target.parentNode
      // ^ move up the collection where 'like-btn' is located
      toyId = toyDiv.id 
      likesHtml = toyDiv.querySelector('p')
      // ^ then down that collection

      const currentNumOfLikes = parseInt(likesHtml.innerText.split(" ")[0])
      const newNumOfLikes = currentNumOfLikes + 1
      likesHtml.innerText = `${newNumOfLikes} Likes`
      updateToyLikes(`http://localhost:3000/toys/${toyId}`, `${newNumOfLikes}`)
  })

})











































