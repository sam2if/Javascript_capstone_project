export const commentPopup = async () => {
  const IdApp = 'znEt8NLbG52uig66lI2e';
  const Btncomment1 = document.querySelectorAll('.commentPOPup');
  const arrcommentPOPup = Array.from(Btncomment1);
  arrcommentPOPup.forEach((element) => {
    element.addEventListener('click', () => {
      const placeComment = element.parentElement.parentElement.parentElement.querySelector('.placeComment');
      
      const Inp1 = element.parentElement.parentElement.querySelector('.inputText1').value;
      const Inp2 = element.parentElement.parentElement.querySelector('.inputText2').value;
      const name = element.parentElement.parentElement.parentElement.querySelector('.Popupname').innerHTML;

      // commentPopup();
      const commenT = {
        ' item_id ': `${name}`,
        ' username ': Inp1,
        ' comment ': Inp2,
      };

      const objectCommet = JSON.stringify(commenT);

      const PostApp = async () => {
        try {
          const res = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${IdApp}/comments`,
            {
              method: 'POST',
              body: objectCommet,
              headers: {
                'Content-Type': 'application/json',
              },
            });
          const data = await res.json();
          console.log(data);
        } catch (error) {
          console.log('error :', error);
        }
      };
      PostApp();
    });
  });
};

export const Getcomment = async (placeComment) => {
  try {
    const res = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/znEt8NLbG52uig66lI2e/comments?item_id=Arrow',
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
    const t = await res.json();
    console.log(t);
    for (let i = 0; i < t.length; i++) {
      const comment = document.createElement('div');
      comment.className = 'gg';
      comment.innerHTML = `
         <hr>
         <div>comment: ${t[i].comment}</div>
         <div>creation date:${t[i].creation_date}</div>
         <div> username:${t[i].username}</div>
         `;
      placeComment.appendChild(comment);
    }
  } catch (error) {
    console.log('error :', error);
  }
};
