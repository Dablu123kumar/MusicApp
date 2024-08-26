let songIndex = 0
const masterPlay = document.getElementById('masterPlay')
let audioElement = new Audio('songs/1.mp3')
const myProgressBar = document.getElementById('myProgressBar')
const Gif = document.getElementById('gif')
const songItem = Array.from(document.getElementsByClassName('songItem'))
const SongItemPlay =  Array.from(document.getElementsByClassName('songItemPlay'))
const NextBtn = document.getElementById('next')
const BackBtn = document.getElementById('back')
let CurrentSongName = document.getElementById('currentSongName')

let songs = [
    {songName:'Salame-e-Ishq1',filePath:'songs/1.mp3',coverPath:"covers/a.jpg"},
    {songName:'Salame-e-Ishq2',filePath:'songs/2.mp3',coverPath:"covers/b.jpg"},
    {songName:'Salame-e-Ishq3',filePath:'songs/3.mp3',coverPath:"covers/c.jpg"},
    {songName:'Salame-e-Ishq4',filePath:'songs/4.mp3',coverPath:"covers/d.jpg"},
    {songName:'Salame-e-Ishq5',filePath:'songs/5.mp3',coverPath:"covers/e.jpg"},
    {songName:'Salame-e-Ishq6',filePath:'songs/6.mp3',coverPath:"covers/f.jpg"},
    {songName:'Salame-e-Ishq7',filePath:'songs/7.mp3',coverPath:"covers/g.jpg"},
    {songName:'Salame-e-Ishq8',filePath:'songs/8.mp3',coverPath:"covers/h.jpg"},
    {songName:'Salame-e-Ishq9',filePath:'songs/9.mp3',coverPath:"covers/i.jpg"},
    {songName:'Salame-e-Ishq10',filePath:'songs/10.mp3',coverPath:"covers/j.jpg"},
]


CurrentSongName.innerText = 'Salame-e-Ishq1'
songItem.forEach((element, i) => {
    
    element.getElementsByTagName('img')[0].src = songs[i].coverPath
    element.getElementsByClassName('songName')[0].innerText = songs[i].songName
})

// handle play/pause click
masterPlay.addEventListener('click', () => {
       if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play()
        masterPlay.classList.remove('fa-circle-play')
        masterPlay.classList.add('fa-circle-pause')
        Gif.style.opacity=1
       }
       else{
        audioElement.pause()
        masterPlay.classList.remove('fa-circle-pause')
        masterPlay.classList.add('fa-circle-play')
        Gif.style.opacity=0
       }
})


audioElement.addEventListener('timeupdate', () => {
    
    const progress = parseInt((audioElement.currentTime/audioElement.duration)*100)
   
    myProgressBar.value = progress
})

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value*audioElement.duration/100
})

function makeAllPlays(){
    SongItemPlay.forEach((element) => {
        element.classList.remove('fa-circle-pause')
        element.classList.add('fa-circle-play')
    })
}

SongItemPlay.forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays()
        Gif.style.opacity=1
        CurrentSongName.innerText = songs[songIndex].songName
        songIndex = parseInt(e.target.id)
        e.target.classList.remove('fa-circle-play')
        e.target.classList.add('fa-circle-pause')
        audioElement.src =`songs/${songIndex+1}.mp3`
        audioElement.currentTime = 0
        audioElement.play()
        masterPlay.classList.remove('fa-circle-pause')
        masterPlay.classList.add('fa-circle-play')
    })
})

NextBtn.addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1
    }
    audioElement.src =`songs/${songIndex+1}.mp3`
    CurrentSongName.innerText = songs[songIndex].songName
    audioElement.currentTime = 0
    audioElement.play()
    masterPlay.classList.remove('fa-circle-play')
    masterPlay.classList.add('fa-circle-pause')
})

BackBtn.addEventListener('click', () => {
    if(songIndex<=0){
        songIndex = 9
    }
    else{
        songIndex -= 1
    }
    audioElement.src =`songs/${songIndex+1}.mp3`
    CurrentSongName.innerText = songs[songIndex].songName
    audioElement.currentTime = 0
    audioElement.play()
    masterPlay.classList.remove('fa-circle-play')
    masterPlay.classList.add('fa-circle-pause')
})

