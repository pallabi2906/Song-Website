console.log('hello world');
//initialize the variable
let songIndex=0;
let audioElement=new Audio('1.mp3');
let masterPlay=document.getElementById("masterPlay");
let myProgressBar=document.getElementById("myProgressbar");
let gif=document.getElementById("gif");
let songItem=Array.from( document.getElementsByClassName("songItem"));
let masterSongName=document.getElementById("masterSongName");
let songs=[
    
        {songName:"legion", filepath:"1.mp3", coverpath:"1.jpg"},
        {songName:"trap", filepath:"2.mp3", coverpath:"2.jpg"},
        {songName:"they mad", filepath:"3.mp3", coverpath:"3.jpg"},
    
]
//change the song name and cover page accordingly
// songItem.forEach((element,i)=>{
//     element.getElementsByTagName("img")[0].src=songs[i].coverpath;
//     element.getElementsByTagName("songName")[0].src=songs[i].songName;
// })
//change the songs accordingly
const makeAllplays=()=>{
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
        element.classList.add('fa-play-circle');
        element.classList.remove('fa-pause-circle'); 
})}
Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllplays();
        songIndex=parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src=`${songIndex+1}.mp3`;
        masterSongName.innerText=songs[songIndex-1].songName;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        
        
        
    })
})
// previous songs
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0
    }
    else{
        songIndex -=1;
    }
    audioElement.src=`${songIndex+1}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
})
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
       
//next songs
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=2){
        songIndex=0
    }
    else{
        songIndex +=1;
    }
    audioElement.src=`${songIndex+1}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;

        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        
})


// audioPlay.play();
//handle play or pause songs
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity=1;
        }
        else{
            audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity=0;
        }
})
//timeupdatelisten
audioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
    //update seekbar
    let progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    myProgressBar.value=progress;
})
//while changing progressbar the song will be updated
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
})