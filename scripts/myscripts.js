const starsEl = document.querySelectorAll('.fa-star')
const emojisEl = document.querySelectorAll('.far')
const colors = ['red','orange','lightblue','lightgreen','green'];

updateRating(0);


function updateRating(index){
    starsEl.forEach((starEl,id) => {
        console.log(starEl);
        if(id < index +1){
            starEl.classList.add('active');
        }
        else{
            starEl.classList.remove('active');
        }
    });
    emojisEl.forEach((emojiEl) =>{
        emojiEl.style.transform = `translateX(-${index * 50 }px)`;
        emojiEl.style.color = colors[index];
    });

}
starsEl.forEach((starEl,index) => {
    starEl.addEventListener("click",()=>{
        updateRating(index)
        console.log('clicked',index);
    });
});
