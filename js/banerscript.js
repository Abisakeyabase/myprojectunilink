var banners=document.querySelectorAll('.banners');
var currentindex=0;
function updatebanner(index){
    banners[currentindex].classList.remove('active');
    currentindex=(index+banners.length)%banners.length;
    banners[currentindex].classList.add('active');
}
var nextbuton=document.getElementById('nxtbtn')
var previewbuton=document.getElementById('prebtn')
nextbuton.addEventListener('click', function(){
    updatebanner(currentindex+1)
})
previewbuton.addEventListener('click', function(){
    updatebanner(currentindex-1)
})
setInterval(function(){
    updatebanner(currentindex + 1)
},4000)