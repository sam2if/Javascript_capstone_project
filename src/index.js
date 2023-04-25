import _ from 'lodash';
import './style.css';

<<<<<<< HEAD


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

=======
>>>>>>> 5aae02f4a61404345368ae66136b6d2339a1c661
const GetShows=async ()=>{
 try {
  
  const listsMovie = document.querySelector('.listsMovie');
  for(let i=1 ;i <=15 ;i++){
   const url = `https://api.tvmaze.com/shows/${i}`
   const res = await fetch(url);
   const shows = await res.json();
<<<<<<< HEAD
=======
   console.log(res)
>>>>>>> 5aae02f4a61404345368ae66136b6d2339a1c661
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

  const likes = document.querySelectorAll('.reacttoit');
  likes.forEach((elem) => {
    elem.addEventListener('click', nuoflikes)
  })

  function nuoflikes() {
    count += 1;
    const ll = document.createElement('div')
    const dis = document.querySelector('.dis');
    dis.innerHTML =  `<h1>likes ${count}</h1>`
    console.log('yes');
  }
  
 }catch(error) {
  console.log("error", error);
 }
}

GetShows()