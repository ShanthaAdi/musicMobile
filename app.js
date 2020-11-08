const play = document.querySelector('.play');
const prev= document.querySelector('.prev');
const next = document.querySelector('.next');
const music= document.querySelector('audio');
const image = document.querySelector('.display');
const title= document.querySelector('h3')
let isPlaying =false;

play.addEventListener("click",question);
play.addEventListener("touchstart",question);

function question()
{
    isPlaying?pauseSong():playSong();
}

function playSong()
{
    isPlaying=true;
    play.classList.replace('fa-play-circle','fa-pause-circle');
    
    image.classList.add("animation");
    music.play();
}
 
function pauseSong(){
    isPlaying= false;
    play.classList.replace('fa-pause-circle','fa-play-circle');
    image.classList.remove("animation");
    music.pause();
}

const name=["believer","badboy","dirtysexymoney","friends","stealmygirl","whenigrowup"] 

function changeSong(songIndex)
{
   image.src="images/" + name[songIndex]+".jpg";
   music.src="songs/" + name[songIndex] +".mp3";
   title.textContent= name[songIndex];

}

numberOfSongs= name.length;
songIndex = 0;
prev.addEventListener("click", previousSong);
prev.addEventListener("touchstart", previousSong);

function previousSong(){
    songIndex--;
    
    if(songIndex<0){
        songIndex=numberOfSongs-1;
    }
    changeSong(songIndex);
    isPlaying?music.play():music.pause();

};


next.addEventListener("click", nextSong);
next.addEventListener("touchstart", nextSong);

function nextSong(){
    songIndex++;
    
    if(songIndex===numberOfSongs){
        songIndex=0;
    }
    changeSong(songIndex);
    isPlaying?music.play():music.pause();
};

