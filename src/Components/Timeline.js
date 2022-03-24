import { useState } from "react";
import { Link } from "react-router-dom"
import * as helpers from "../helpers/helpers.js"
import periods from "../data/periods.json" 

export const Timeline = () => {
  const width  = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
  const isMobile = width <= 615
  const note = document.getElementsByClassName('sound');
  let cards = document.getElementsByClassName('c-card')
  const [mute, setMute] = useState(false)
  const [songs, setSongs] = useState(false)

  const onOpen = (index) => {
    const cards = document.getElementsByClassName('c-card')
    if (cards[index].classList.value.split(' ').indexOf('active') < 0) {
      for (let i = 0; i < cards.length; i++) {
        cards[i].classList.remove('active')
      }
      cards[index].classList.add('active')
      const color = helpers.getTextColor(getComputedStyle(cards[index]).backgroundColor)
      cards[index].firstChild.style.color = color
      console.log(color);
    } 
    else {
      cards[index].classList.remove('active')
    }
  }
    
  
  const play = (id) => {
    if (!mute)
    {
      setSongs(false)
      let num = parseInt(id)
      cards[num]?.classList.add("c-card_hover")
      setTimeout(() =>{
        cards[num]?.classList.remove("c-card_hover")
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
          {periods.map((el,key) =>
            <div className={`c-card`} id={key} key={key} onMouseOver={() => { if (!isMobile) { play(key) } }} onClickCapture={() => { if (isMobile) { play(key) } }}>
              <div className="c-card--content padding-large margin-top">
                <p>{ el?.desc?.slice(0,isMobile ? 300 : 400) + " ..." }</p>
              </div>
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