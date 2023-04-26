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
       <button class="reacttoit${i}"> <i class='fa fa-heart-o green-color'></i></button>
       <div class="dis${i}">likes
       </div>
     </div>
     
   </div>
   <div class="DivBtncomment"><button>comments</button></div>   
   
   `
   listsMovie.appendChild(Movie);

  

  }

 }catch(error) {
  console.log("error", error);
 }
}

GetShows()

for (let i = 1; i <= 15; i += 1) {
  let createLikes = async () => {
    try {
      for (let i = 1; i <= 15; i++) {
        let items = `item${i}`;
        let response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/32UoQxjPo3aTpkPwZxqF/likes/', {
          method: 'POST',
          body: JSON.stringify({
            item_id: items
          }),
          headers: {
            'Content-Type': 'application/json'
          }
        });
      }
    } catch (error) {
      console.log('Error creating likes:', error);
    }
  }

  let displayLikes = async () => {
    const res = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/32UoQxjPo3aTpkPwZxqF/likes/');
    const data = await res.json();
    console.log(data)
    const dis = document.querySelector(`.dis${i}`);
    dis.innerHTML = `<p>likes ${data[i].likes} </p>`

    let lik = document.querySelector(`.reacttoit${i}`);
    lik.addEventListener('click', () => {
      data[i].likes += 1;
      dis.innerHTML = `<p>likes ${data[i].likes} </p>`
    })
  }

  displayLikes()
  
}

