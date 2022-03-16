import { useState, useEffect } from "react";

export const Card = ({ blog, onChange }) => {


  const [open, setOpen] = useState(false)
    
  useEffect(() => {
    if (blog.favorited) {
      blog.favorited = false
    }
    else {
      blog.favorited = true
    }
  }, [open])


const animateButton = e => {
  e.preventDefault()
  //reset animation
  e.target.classList.remove('animate');
  
  e.target.classList.add('animate');
  setTimeout(function(){
    e.target.classList.remove('animate');
  },700);
}

const bubblyButtons = document.getElementsByClassName("o-button")

for (let i = 0; i < bubblyButtons.length; i++) {
  bubblyButtons[i].addEventListener('click', animateButton, false)
}
  
  return (
    <>
      <div className={`card ${blog.favorited ? " active" : ""}`}>
        <div className="shadow"></div>
        <div className="card--label">
          
          <div className="card--label_icon" onClick={()=>{setOpen(!open)}}>
            <i className="fas fa-walking" ></i>
          </div>
          <div className="card--label_info">
            <div className="main">{ blog?.name }</div>
            <div className="sub">{blog?.artist} </div>
          </div>
        </div>
      </div>
    </>
  )
}