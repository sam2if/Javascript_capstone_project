import './style.css';
import _ from 'lodash';
import { allLikes } from './module/forlikes.js';




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


   console.log(res)

   const Movie = document.createElement('div');
   Movie.className='Movie'
   Movie.innerHTML =`

const GetShows = async () => {
  try {
    const listsMovie = document.querySelector('.listsMovie');
    for (let i = 1; i <= 15; i += 1) {
      const url = `https://api.tvmaze.com/shows/${i}`;
      const res = await fetch(url);
      const shows = await res.json();
      const allmovies = document.querySelector('.allmovies');
      allmovies.innerHTML = `Movies[${shows.id}]`;
      const Movie = document.createElement('div');
      Movie.className = 'Movie';
      Movie.innerHTML = `

   <img src="${shows.image.medium}"
   <div class="ItemLike">
     <div>${shows.name}  ${i}</div>
     <div class="likeDiv">

       <button class="reacttoit"> <i class='fa fa-heart-o green-color'></i></button>
       <div class="dis">likes

       <button class="reacttoit${i}"> <i class='fa fa-heart-o green-color'></i></button>
       <div class="dis${i}">likes

       </div>
     </div>
     
   </div>
   <div class="DivBtncomment"><button>comments</button></div>   
   
   `;
      listsMovie.appendChild(Movie);
    }
  } catch (error) {
    console.log('error', error);
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

};


GetShows();

for (let i = 0; i <= 15; i += 1) {
  const displayLikes = async () => {
    const res = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/32UoQxjPo3aTpkPwZxqF/likes/');
    const data = await res.json();
    const dis = document.querySelector(`.dis${i}`);
    dis.innerHTML = `<p>likes ${data[i].likes} </p>`;
    const lik = document.querySelector(`.reacttoit${i}`);
    lik.addEventListener('click', () => {
      data[i].likes += 1;
      allLikes(i + 1);
      dis.innerHTML = `<p>likes ${data[i].likes} </p>`;
      window.onload;
    });
  };
  displayLikes();
}
