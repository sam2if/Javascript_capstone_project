// import _, { get } from 'lodash';
import './style.css';
import { commentPopup, Getcomment } from './Modules/Popup.js';
import { allLikes } from './module/forlikes';

const GetShows = async () => {
  try {
    const listsMovie = document.querySelector('.listsMovie');
    for (let i = 1; i <= 15; i++) {
      const url = `https://api.tvmaze.com/shows/${i}`;
      const res = await fetch(url);
      const shows = await res.json();
      const allmovies = document.querySelector('.allmovies');
      allmovies.innerHTML = `Movies[${shows.id}]`;
      const Movie = document.createElement('div');
      const Position = document.createElement('div');
      Position.className = 'Position';
      Position.innerHTML = `
   <div class="FramePopup">
      <div class="timesDiv"> <button class="fa-timesBtn"><i class='fa fa-times'></i></button></div>
       <div class="popupImage">
         <img src="${shows.image.original}" alt="" srcset="" class="PopupImage">
       
       </div>
       <div class="Popupname">${shows.name}</div>
     
       <div class="specifits">
         <div>
           <div>Language :${shows.language
}</div>
           <div>Genres :${shows.genres.toString()
}</div>
         </div>
         <div>
           <div>Premiered
           :${shows.premiered

}</div>
           <div>Ended :${shows.ended

}</div>
         </div>
       </div>
       <h2>summary</h2>
       <div class="sumary">${shows.summary
}</div>
       <div class="placeComment"></div>
       <form class="form" action="">
         <input class="inputText1" type="text">
        <textarea class="inputText2" name="" id="" cols="30" rows="10"></textarea>
        <div class="DivcommentPOPup"> <button class="commentPOPup" type="button">Comment</button></div>
       </form>
     </div>
   `;

      Movie.className = 'Movie';
      Movie.innerHTML = `
   <img src="${shows.image.medium}">
   <div class="ItemLike">
     <div class="showName">${shows.name}  ${i}</div>
     <div class="likeDiv">
       <button class="reacttoit${i}"> <i class='fa fa-heart-o green-color'></i></button>
       <div class="dis${i}">
         3 Likes
       </div>
     </div>
  
   </div>
   <div class="DivBtncomment"> <button class="Btncomment" type="button">comments</button> </div>  
   `;
      Movie.appendChild(Position);
      // listsMovie.appendChild(Position);
      listsMovie.appendChild(Movie);
    }commentPopup();

    const ShowPopup = () => {
      const Btncomment1 = document.querySelectorAll('.Btncomment');
      const arrBtncomment = Array.from(Btncomment1);
      arrBtncomment.forEach((element) => {
        element.addEventListener('click', () => {
          const pop = element.parentElement.parentElement.querySelector('.Position');
          pop.style.display = 'flex';
          const op = element.parentElement.parentElement.querySelector('.Position').querySelector('.FramePopup').querySelector('.placeComment');

          Getcomment(op);
        });
      });
    };
    ShowPopup();
    const ClossePopup = () => {
      let Bntcloss = document.querySelectorAll('.fa-timesBtn');
      let arrBntcloss = Array.from(Bntcloss);
      arrBntcloss.forEach((element) => {
        element.addEventListener('click', () => {
          window.location.reload();
          element.parentElement.parentElement.parentElement.querySelector('.FramePopup').style.display = 'none';
          element.style.display = 'none';
          Bntcloss = document.querySelectorAll('.fa-timesBtn');
          arrBntcloss = Array.from(Bntcloss);
        });
      });
    };
    ClossePopup();
  } catch (error) {
    console.log('error', error);
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
