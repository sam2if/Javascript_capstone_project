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

const GetShows=async ()=>{
 try {
  
  const listsMovie=document.querySelector('.listsMovie');
  for(let i=1 ;i <=15 ;i++){
   const url = `https://api.tvmaze.com/shows/${i}`
   const res = await fetch(url);
   const shows = await res.json();
   console.log(res)
   const Movie =document.createElement('div');
   Movie.className='Movie'
   Movie.innerHTML =`
   <img src="${shows.image.medium}"
   <div class="ItemLike">
     <div>${shows.name}</div>
     <div class="likeDiv">
       <button> <i class='fa fa-heart-o green-color'></i></button>
       <div>
         3 Likes
       </div>
     </div>
     
   </div>
   <div class="DivBtncomment"><button>comments</button></div>   
   
   `
   listsMovie.appendChild(Movie)
  }
  
 }catch(error) {
  console.log("error", error);
 }
}
GetShows()