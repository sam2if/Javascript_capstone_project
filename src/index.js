import _ from 'lodash';
import './style.css';

const GetShows=async ()=>{
 try {
  
  const listsMovie = document.querySelector('.listsMovie');
  for(let i=1 ;i <=15 ;i++){
   const url = `https://api.tvmaze.com/shows/${i}`
   const res = await fetch(url);
   const shows = await res.json();
  //  console.log(shows)
   const Movie = document.createElement('div');
   const Position = document.createElement('div');
   Position.className='Position'
   Position.innerHTML =`
   <div class="FramePopup">
      <div class="timesDiv"> <button class="fa-timesBtn"><i class='fa fa-times'></i></button></div>
       <div class="popupImage">
         <img src="${shows.image.original}" alt="" srcset="" class="PopupImage">
       
       </div>
       <div class="Popupname"><h2>${shows.name}</h2></div>
     
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

           }</div>summary

         </div>
       </div>
       <div class="sumary">${shows.summary
       }</div>
       <form class="form" action="">
         <input class="inputText1" type="text">
        <textarea class="inputText2" name="" id="" cols="30" rows="10"></textarea>
        <div class="DivcommentPOPup"> <button class="commentPOPup" type="submit">Comment</button></div>
       </form>
     </div>
   `;

   Movie.className='Movie'
   Movie.innerHTML =`
   <img src="${shows.image.medium}">
   <div class="ItemLike">
     <div class="showName">${shows.name}  ${i}</div>
     <div class="likeDiv">
       <button class="Btnfa-heart-o"> <i class='fa fa-heart-o green-color'></i></button>
       <div class="NbrLike">
         3 Likes
       </div>
     </div>
  
   </div>
   <div class="DivBtncomment"> <button class="Btncomment">comments</button> </div>  
   `
   ;
   Movie.appendChild(Position)
  // listsMovie.appendChild(Position);
   listsMovie.appendChild(Movie);
  }
// ((((((((((((((((((((((((((((((((((((((((((((((()))))))))))))))))))))))))))))))))))))))))))))))
  const ShowPopup =()=>{
    let Btncomment1 =document.querySelectorAll('.Btncomment');
    let arrBtncomment =Array.from(Btncomment1);
    arrBtncomment.forEach((element)=>{
    element.addEventListener('click' ,()=>{
    const pop =element.parentElement.parentElement.querySelector('.Position')
    pop.style.display='flex'
})
    })
  }
ShowPopup()


// ((((((((((((((((((((((((((((((((((((((((((((((()))))))))))))))))))))))))))))))))))))))))))))))
const ClossePopup =()=>{
  const Bntcloss=document.querySelectorAll('.fa-timesBtn');
  const arrBntcloss =Array.from(Bntcloss);
  arrBntcloss.forEach((element)=>{
    element.addEventListener('click', ()=>{
      element.parentElement.parentElement.parentElement.querySelector('.FramePopup').style.display='none'
      element.style.display='none';  
    })
  })
}
ClossePopup()

dd()
 }catch(error) {
  console.log("error", error);
 }
}

GetShows()


// ((((((((((((((((((((((((((((((((((((((((((((((()))))))))))))))))))))))))))))))))))))))))))))))

const url1 ='https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/' ;
const IdApp ='znEt8NLbG52uig66lI2e';
const PostApp=async ()=>{
  try {
    const res = await fetch(url1 ,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        }}
      )
      return res.json();
    
  }catch(error){
    console.log('error :', error)
  }
}
// PostApp();


// ((((((((((((((((((((((((((((((((((((((((((((((()))))))))))))))))))))))))))))))))))))))))))))))

const dd=()=>{
  const LikeBnt= document.querySelectorAll('.Btnfa-heart-o')
  const arrLike =Array.from(LikeBnt);
  // console.log(arrLike);
  arrLike.forEach((element)=>{
element.addEventListener('click', ()=>{ 
console.log(element.parentElement.parentElement.querySelector('.showName').innerHTML)
  let requestBodyt={
    "item_id": "Under the Dome"}
requestBodyt.item_id=element.parentElement.parentElement.querySelector('.showName').innerHTML;
console.log(requestBodyt.item_id)
const objectJson =JSON.stringify(requestBodyt)
  const PostLike=async ()=>{
    try {
      const res = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${IdApp}/likes/` ,
        {
          method: 'POST',
          body: objectJson,
          headers: {
            'Content-Type': 'application/json',
          }}
        )
      return res.json();
      
    }catch(error){
      console.log('error :', error)
    }
  }
  PostLike()
  

  const GetLike=async ()=>{
    try {
      const res = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${IdApp}/likes/` ,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          }}
        )
       const t=await res.json();
       for(let i=0 ;i <t.length ;i++){
        if(t[i].item_id= requestBodyt.item_id){
          console.log(t[i]);
          // element.parentElement.parentElement.querySelector('.NbrLike').innerHTML=`${t[i].likes}Likes`
         console.log(t[i].likes)
        }break
        // console.log(t[i]);
       }
     
    }catch(error){
      console.log('error :', error)
    }
  }
 GetLike();
})
  })
}

// ((((((((((((((((((((((((((((((((((((((((((((((()))))))))))))))))))))))))))))))))))))))))))))))
// const requestBodyt={
//   "item_id": "Under the Dome"
// }

// requestBodyt.item_id=`^${shows.name}`
// const objectJson= JSON.stringify(requestBodyt)

// const PostLike=async ()=>{
//   try {
//     const res = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${IdApp}/likes/` ,
//       {
//         method: 'POST',
//         body:objectJson,
//         headers: {
//           'Content-Type': 'application/json',
//         }}
//       )
//       // return res.json();
    
//   }catch(error){
//     console.log('error :', error)
//   }
// }






// ((((((((((((((((((((((((((((((((((((((((((((((()))))))))))))))))))))))))))))))))))))))))))))))
// const GetLike=async ()=>{
//   const requestBodyt={
//     "item_id": "Under the Dome"
//   }
  

//   try {
//     const res = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${IdApp}/likes/` ,
//       {
//         method: 'GET',
//         headers: {
//           'Content-Type': 'application/json',
//         }}
//       )
//      console.log(res.json());
     
//   }catch(error){
//     console.log('error :', error)
//   }
// }
// GetLike();



