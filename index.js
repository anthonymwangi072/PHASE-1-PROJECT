const getMealBtn = document.getElementById("get_meal");
const mealContainer = document.getElementById('meal');
// let likes;






document.getElementById("comment").addEventListener("click" ,addComment)



function addComment(post) {
 post.preventDefault();
 const commenttext = post.target.value
 document.getElementById("comments-list").innerHTML +=`
 <li>${commenttext}</li>
 
`

};






