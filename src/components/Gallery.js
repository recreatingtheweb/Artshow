import React from "react";

var modalImages = document.querySelectorAll('img.selectable');

// modalImages.forEach.addEventListener('click', (e) => ModalListener(e));




function setupModal () {
  const el = {
    wrapper: document.getElementById('modal-wrapper'),
    modal: document.getElementById('modal')
  };
  el.image = el.modal.getElementsByTagName('img')[0];
  el.caption = el.modal.getElementsByClassName('caption')[0];
  el.close = el.modal.querySelector('button.close');
  el.close.addEventListener('click', () => hideModal(el));
  return el;
}

function showModal (el, imgSrc, caption) {

  el.modal.style.display = "block";
  el.wrapper.style.display = "block";
  el.image.setAttribute('src', imgSrc);
  el.caption.innerText = caption;
}
function hideModal (el) {
  el.modal.style.display = "none";
  el.wrapper.style.display = "none";
}



function ModalListener(e) {
  const modal = setupModal();
  
        const img = e.target,
              src = img.getAttribute('src'),
              caption = img.getAttribute('alt');
        showModal(modal, src, caption);    
       //end img.addEventListener
    }; //end .forEach



 


// window.onload = function() {
//   const modal = setupModal();
//   console.log('modal', modal);
  
//   document.querySelectorAll('img.selectable')
//     .forEach((img) => {
//       img.addEventListener('click', (e) => {
//         console.log('click', e);
//         const img = e.target,
//               src = img.getAttribute('src'),
//               caption = img.getAttribute('alt');
//         showModal(modal, src, caption);    
//       });  //end img.addEventListener
//     }); //end .forEach
// }



function Gallery(){
    return <div>
<div class="container-lg" className="gallery min-vh-100">
  <div class="row gy-4 row-cols-1 row-cols-sm-1 row-cols-md-2">
    <div class="col align-self-center">
    <img onClick={ModalListener} src="https://picsum.photos/id/1016/500" class="gallery-item" className="selectable" />
    </div>
    <div class="col align-self-center">
    <img onClick={ModalListener} src="https://picsum.photos/id/1037/500" class="gallery-item" className="selectable" />
    </div> 
  </div>
  <div class="row gy-4 row-cols-1 row-cols-sm-1 row-cols-md-2">
    <div class="col align-self-center">
    <img onClick={ModalListener} src="https://picsum.photos/id/1055/500" class="gallery-item" className="selectable" />
    </div>
    <div class="col align-self-center">
    <img onClick={ModalListener} src="https://picsum.photos/id/109/500" class="gallery-item" className="selectable" />
    </div> 
  </div>
  <div class="row gy-4 row-cols-1 row-cols-sm-1 row-cols-md-2">
    <div class="col align-self-center">
    <img onClick={ModalListener} src="https://picsum.photos/id/129/500" class="gallery-item" className="selectable"/>
    </div>
    <div class="col align-self-center">
    <img onClick={ModalListener} src="https://picsum.photos/id/132/500" class="gallery-item" className="selectable" />
    </div> 
  </div>
  <div class="row gy-4 row-cols-1 row-cols-sm-1 row-cols-md-2">
    <div class="col align-self-center">
    <img onClick={ModalListener} src="https://picsum.photos/id/173/500" class="gallery-item" className="selectable" />
    </div>
    <div class="col align-self-center">
    <img onClick={ModalListener} src="https://picsum.photos/id/184/500" class="gallery-item" className="selectable" />
    </div> 
  </div>
  <div class="row gy-4 row-cols-1 row-cols-sm-1 row-cols-md-2">
    <div class="col align-self-center">
    <img onClick={ModalListener} src="https://picsum.photos/id/185/500" class="gallery-item" className="selectable" />
    </div>
    <div class="col align-self-center">
    <img onClick={ModalListener} src="https://picsum.photos/id/242/500" class="gallery-item" className="selectable" />
    </div> 
  </div>
</div>

<div class="modal-wrapper" id="modal-wrapper"></div>
<div class="modal" id="modal">
  <div class="modal-inner">
    <img className="modal-img" style={{width: "450px" }} src="https://picsum.photos/200" alt=""/>
    <span class="caption"></span>
    <button class="close">X</button>    
  </div>
</div>






          
        



      

                

    



    </div>
}

export default Gallery;