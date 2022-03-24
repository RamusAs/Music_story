import { useParams } from "react-router-dom"
import { useState } from "react"
import { Chart } from "../Components/Chart"
import * as helpers from "../helpers/helpers.js"

export const Detail = () => {
  const { id } = useParams()
  const period = helpers.getPeriod(id)
  const [playing,setPlaying] = useState(false)
  const play = () => {
    setPlaying(true)
    document.getElementById("source").play()
  }
  const pause = () => {
    setPlaying(false)
    document.getElementById("source").pause()
  }
  return (
    <>
     {/* <!-- Navbar --> */}
      <div className="top">
        <div className="c-bar padding o-card wide" >
          <a href="/" className="button">Kora</a>
        </div>
      </div>


      <div className="c-chart padding-large">
        <div className="c-chart--top">
          <h2 className="  margin-top">{period.name}</h2>
          <p className="margin">{period.desc}</p>
          {!playing && <button className="cta-button" onClick={() => play()}>Ecouter un extrait</button>}
          {playing && <button className="cta-button" onClick={() => pause()}>Mettre en pause</button>}
        </div>
        <Chart data={helpers.getData(id)} />
      </div>

      <audio id="source" src={period.source}> </audio>

    </>
  )
}
