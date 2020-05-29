const cards = document.querySelectorAll('.card');


cards.forEach(card => {
    card.addEventListener('dragstart', dragstart);
    card.addEventListener('drag', drag);
    card.addEventListener('dragend', dragend);
});


function dragstart(event){
    dropzones.forEach(dropzone => dropzone.classList.add('highlight'));

    event.target.classList.add('is-dragging');
}

function drag(){

}

function dragend(){
    dropzones.forEach(dropzone => dropzone.classList.remove('highlight'));

    event.target.classList.remove('is-dragging');
}



const dropzones = document.querySelectorAll('.dropzone');

dropzones.forEach( dropzone => {
    dropzone.addEventListener('dragenter',dragenter);
    dropzone.addEventListener('dragover',dragover);
    dropzone.addEventListener('dragleave',dragleave);
    dropzone.addEventListener('drop',drop);
});

function dragenter(){
   
}

function dragover(){
    this.classList.add('is-available');

    const card = document.querySelector('.is-dragging');
    this.appendChild(card);
}

function dragleave(){
    this.classList.remove('is-available');
}

function drop(){
}