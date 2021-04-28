//array of sounds
const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']

//use a foreach to loop through the sounds
sounds.forEach(sound => {
    //create a bnt
    const btn = document.createElement('button')
    btn.classList.add('btn')

    //set the innerText to the sound itself
    btn.innerText = sound

//function to click bnt and hear the sound play 
    btn.addEventListener('click', () => {
        stopSongs()
       document.getElementById(sound).play()
    })


    document.getElementById('button').appendChild(btn)
})

//function to stop the sound when another bnt is clicked 
function stopSounds(){
    sounds.foreach(sound =>{
        const song = document.getElementById(sound)

        song.pause()
        song.currentTime = 0;
    })
}