const openButt = document.querySelector('.story-button');
const storyOpen = document.querySelector(".story-open")
const closeStory = document.querySelector('.story-close');
openButt.addEventListener("click", function() {	
    storyOpen.style.display = "block"
});
closeStory.addEventListener("click", function(){
    storyOpen.style.display = "none"
    
})