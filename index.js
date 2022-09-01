const getMealBtn = document.getElementById("get_meal");
const mealContainer = document.getElementById('meal');
// let likes;

getMealBtn.addEventListener("click" , () => {
    fetch("https://foodish-api.herokuapp.com/api/")
     .then((res) => res.json())
     .then((data) => {
        console.log(data.image);
        createMeal(data.image);
      


     })
});
function createMeal(meal) {
    mealContainer.innerHTML = `
    <div class = "row">
    <div class = "column-five">
    <img src= "${meal}" alt="meal Img" width="400px" height="400px"/>
    </div>
    </div>
    `;
}




document.getElementById("comment").addEventListener("click" ,addComment)



function addComment(post) {
 post.preventDefault();
 const commentBoxSelector = document.getElementById("like-comment")
 const commenttext = commentBoxSelector.value
 document.getElementById("comments-list").innerHTML +=`
 <li>${commenttext}</li>
 
`
commentBoxSelector.value = " ";
};

document.getElementById("like-button").addEventListener("click" , addlikes)

function addlikes() {
    let likeCountSelector = document.getElementById("like-count")
    let currentCount = parseInt(likeCountSelector.innerHTML)
    currentCount += 1
    likeCountSelector.innerHTML = currentCount;

    
}









