import _ from 'lodash';
import './style.css';

// const GetShows=async ()=>{
//  try {
//   const res = await fetch(url);
//   const shows = await res.json();
//   console.log(shows)

//  }catch(error) {
//   console.log("error", error);
//  }
// }
// GetShows()

let count = 0;
const GetShows=async ()=>{
 try {
  
  const listsMovie = document.querySelector('.listsMovie');
  for(let i=1 ;i <=15 ;i++){
   const url = `https://api.tvmaze.com/shows/${i}`
   const res = await fetch(url);
   const shows = await res.json();
   const Movie = document.createElement('div');
   Movie.className='Movie'
   Movie.innerHTML =`
   <img src="${shows.image.medium}"
   <div class="ItemLike">
     <div>${shows.name}  ${i}</div>
     <div class="likeDiv">
       <button class="reacttoit"> <i class='fa fa-heart-o green-color'></i></button>
       <div class="dis">likes
       </div>
     </div>
     
   </div>
   <div class="DivBtncomment"><button>comments</button></div>   
   
   `
   listsMovie.appendChild(Movie)
  }

  let displayLikes = async () => {
    const res = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/32UoQxjPo3aTpkPwZxqF/likes/');
    const data = await res.json();
    const dis = document.querySelector('.dis');
    dis.innerHTML =  `<h1>likes ${data[0].likes += 1}</h1>`
  }

  const likes = document.querySelectorAll('.reacttoit');
  likes.forEach((elem) => {
    elem.addEventListener('click', displayLikes)
  })

 
  
 }catch(error) {
  console.log("error", error);
 }
}

GetShows()

let getLikes = async () => {
  try {
    const items = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/32UoQxjPo3aTpkPwZxqF/likes/', {
      method: 'POST',
      body: JSON.stringify({
        item_id: 'item1'
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });  
  }catch(error) {
    console.log('error', error);
  }
}
