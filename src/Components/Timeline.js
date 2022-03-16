import { useState } from "react";
import { Link } from "react-router-dom"
import * as helpers from "../helpers/helpers.js"

export const Timeline = () => {
  const width  = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
  const isMobile = width <= 615
  const note = document.getElementsByClassName('sound');
  let cards = document.getElementsByClassName('c-card')
  const [mute, setMute] = useState(false)
  const [songs, setSongs] = useState(false)

  const tracks =  [
    {
      name: "La Genèse",
      period: "Norm Ender",
      desc: "",
      content: "",
      icon: "images/genese.png",
      source: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/1.mp3",
      favorited: false
    },
    {
      name: "Le Moyen Âge ",
      period: "Ve-XVe siècle",
      icon: "images/moyen_age.png",
      source: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/2.mp3",
      url: "https://www.youtube.com/watch?v=Lin-a2lTelg",
      favorited: false
    },
    {
      name: "La Renaissance",
      period: "Moby",
      icon: "images/renaissance.png",
      source: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/3.mp3",
      url: "https://www.youtube.com/watch?v=ICjyAe9S54c",
      favorited: false
    },
    {
      name: "La période classique",
      period: "Sia",
      icon: "images/classic.png",
      source: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/4.mp3",
      url: "https://www.youtube.com/watch?v=kYgGwWYOd9Y",
      favorited: false
    },
    {
      name: "L’époque romantique",
      period: "Haggard",
      icon: "images/romantique.png",
      source: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/5.mp3",
      url: "https://www.youtube.com/watch?v=0WlpALnQdN8",
      favorited: false
    },
    {
      name: "L’époque moderne",
      period: "LSD",
      icon: "/images/moderne.png",
      source: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/6.mp3",
      url: "https://www.youtube.com/watch?v=HhoATZ1Imtw",
      favorited: false
    },
    {
      name: "L’époque contemporaine",
      period: "Lindi Ortega",
      icon: "/images/contemporaine.png",
      source: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/7.mp3",
      url: "https://www.youtube.com/watch?v=me6aoX0wCV8",
      favorited: true
    },
    {
      name: "Demain",
      period: "Lindi Ortega",
      icon: "images/music.png",
      source: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/7.mp3",
      url: "https://www.youtube.com/watch?v=me6aoX0wCV8",
      favorited: true
    },
  ]

  const onOpen = (index) => {
    const tab = document.getElementsByClassName('c-card')
    if (tab[index].classList.value.split(' ').indexOf('active') < 0) {
      for (let i = 0; i < tab.length; i++) {
        tab[i].classList.remove('active')
      }
      tab[index].classList.add('active')
    } 
    else {
      tab[index].classList.remove('active')
    }
  }
    
  
  const play = (id) => {
    if (!mute)
    {
      setSongs(false)
      let num = parseInt(id)
      console.log(cards[num]);
      cards[num].classList.add("c-card_hover")
      setTimeout(() =>{
        cards[num].classList.remove("c-card_hover")
      },200)  
      playOn(num);
    }
  }
  
  const playOn = (num) => {
    note[num].pause();
    note[num].currentTime=0;
    note[num].play();
  }

  const rhythm = (name, num) => {
    const song = helpers.getSong(name)
      let sum=0;
      for(let i = 0; i < num; i++){
        sum += song.tempo[i];
      }
      return sum;
  } 
  
  const playSong = (name) => {
    const song = helpers.getSong(name)
    const length = song.notes.length
    for (let i = 0; i < length; i++) {
      setTimeout((y) => {
        play(song.notes[y]);
      }, rhythm(name,i) * 200, i);
    }
  }

  return (
    <>
        <div className="c-timeline">
          {tracks.map((el,key) =>
            <div className={`c-card`} id={key} key={key} onMouseOver={() => {if (!isMobile) { play(key) }}}  onClickCapture={() => {if (isMobile) { play(key) }}}>
              <div className="shadow"></div>
              <div className="c-card--label">
                
                <div className="c-card--label_icon" onClick={() => onOpen(key)}>
                  <img src={el.icon} alt={el.name} />
                </div>
                <div className="c-card--label_info">
                  <Link to={`/detail/${key}`}>
                    <div className="main">{ el?.name }</div>
                  </Link>
                  <div className="sub">{el?.period} </div>
                </div>
              </div>
            </div>
          )}
        </div> 

      <aside className={`c-social-links`}>
        <div className="c-social-links_controls">
          {!mute && <img src="http://upload.wikimedia.org/wikipedia/commons/2/21/Speaker_Icon.svg" alt="Speaker_Icon.svg" title="Unmute/speaker icon" className="c-social-links_icon" onClick={()=>{setMute(true)}}/>}
          {mute && <img src="http://upload.wikimedia.org/wikipedia/commons/3/3f/Mute_Icon.svg" alt="Mute_Icon.svg" title="Mute icon" className="c-social-links_icon" onClick={() => { setMute(false) }} />}
          <img src="https://img.icons8.com/ios-filled/96/000000/add-song.png" alt="Add_song.svg" className="c-social-links_icon" onClick={() => { setSongs(!songs)}}/>
        </div>
        {songs &&
          <>
            <div className="c-social-links_controls">    
              <button className="button cta-button" onClick={() => { playSong('bethoven') }} disabled={mute}>Bethoven</button>
              <button className="button cta-button" onClick={() => { playSong('cucaracha') }} disabled={mute}>Cucaracha</button>
            </div>
            <div className="c-social-links_controls">
              <button className="button cta-button" onClick={() => { playSong('birthday') }} disabled={mute}>Birthday</button>
              <button className="button cta-button" onClick={() => { playSong('twinkle') }} disabled={mute}>Twinkle</button>
          </div>
          <div className="c-social-links_controls">
              <button className="button cta-button" onClick={() => { playSong('christmas') }} disabled={mute}>Christmas</button>
              <button className="button cta-button" onClick={() => { playSong('cielito') }} disabled={mute}>Cielito</button>
            </div>
          </>
        }
      </aside>
        
        <div className="audio">
          <audio src="https://raw.githubusercontent.com/NestorPlasencia/sound/master/C.mp3" className="sound"></audio>
          <audio src="https://raw.githubusercontent.com/NestorPlasencia/sound/master/D.mp3" className="sound"></audio>
          <audio src="https://raw.githubusercontent.com/NestorPlasencia/sound/master/E.mp3" className="sound"></audio>
          <audio src="https://raw.githubusercontent.com/NestorPlasencia/sound/master/F.mp3" className="sound"></audio>
          <audio src="https://raw.githubusercontent.com/NestorPlasencia/sound/master/G.mp3" className="sound"></audio>
          <audio src="https://raw.githubusercontent.com/NestorPlasencia/sound/master/A.mp3" className="sound"></audio>
          <audio src="https://raw.githubusercontent.com/NestorPlasencia/sound/master/B.mp3" className="sound"></audio>
          <audio src="https://raw.githubusercontent.com/NestorPlasencia/sound/master/C2.mp3" className="sound"></audio>
        </div> 
      </>
    )
}