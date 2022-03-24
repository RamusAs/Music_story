import { useState } from "react"
import { Timeline } from "../Components/Timeline"

export const Home = () => {

  const [openModal,setOpenModal] = useState(false)
  return (
    <> 
     {/* <!-- Navbar --> */}
      <div className="top">
          <div className="c-bar padding o-card wide" >
              <a href="#home" className="button">Kora</a>
              <div className="hide-small">
                  <a href="#home" className="c-bar-item button">Acceuil</a>
                  <a href="#story" className="c-bar-item button">Histoire</a>
                  <a href="#contact" className="c-bar-item button">Contact</a>
              </div>
          </div>
      </div>


      {/* <!-- header --> */}
      <header className=" c-header wide" id="home">
        <div className="c-header-content padding-large">
          <h1 className="text-white padding-large"><b>Une note, une histoire.</b></h1>
          <div  className="padding-large">
            <p>Un voyage sonore de la Préhistoire à nos jours à travers les grandes dates, qui ont fait l’histoire de la musique.</p>
            <p>Une première approche de notre patrimoine musical, illustrée par des exemples simples et de nombreux extraits en écoute.</p>
            <p>Et si à l'occasion on apprends à jouer au Xylophone ;) .</p>
          </div>
          <button className="button padding-large large margin cta-button" onClick={() => {setOpenModal(true)}}>SUBSCRIBE</button>
        </div>
        <div className="c-header-image">
         <img  src="images/header.svg" alt="African Music Blog"/>
        </div>
      </header>

      <section className="c-timeline--container ">
        <div className="c-timeline--title padding-large" id="story">
          <h2>UN XYLOPHONE D'HISTOIRE</h2>
          <p>Découvrons le temps dans les notes</p>
        </div>
        <div className="margin-y">
          <Timeline />
        </div>
      </section>
     



      <section className='c-contact' id="contact">
        
       
        <form className="c-contact--container">
           <h2 className="padding-large">Ajoutez une touche d'histoire</h2>
            <input type="text" placeholder="Name" id="name" name="name"/>
            <input type="email" placeholder="Email" id="email" name="email"/>
            <input type="text" placeholder="Subject" id="subject" name="subject"/>
            <textarea placeholder="Message" id="message" name="message"/>
            <input className="cta-button" type="submit" value="Send"/>
        </form>
      </section>

     {/*  <!-- Subscribe Modal --> */}
    {openModal && <div id="subscribe" className="c-modal">
        <div className="c-modal_content padding-large" >
            <div className="c-modal_container">
                <i onClick={()=>setOpenModal(false)} className="button xlarge right"></i>
                <h2 className="wide">Newsletter</h2>
                <p>Rejoignez notre liste de diffusion pour recevoir des mises à jour sur les derniers articles.</p>
                <p><input className="input border margin-y" type="text" placeholder="e-mail"/></p>
                <button type="button" className="cta-button block padding-large margin-bottom" onClick={() => setOpenModal(false)}>S'inscrire</button>
            </div>
        </div>
    </div>}

    </>
  )
}
