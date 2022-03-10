import { useState, useEffect } from "react";

export const Card = ({ blog, onChange }) => {


  const [open, setOpen] = useState(false)
    
  useEffect(() => {
    setOpen(false)
  }, [onChange])
  
  return (
    <>
      <div className={`option ${open ? " active" : ""}`}>
        <div className="shadow"></div>
        {/* {blog?.favorited && <div className="fav_icon" onClick={()=>{setOpen(!open)}}>
          <i className="fas fa-walking" >❤</i>
        </div>} */}
        <div className="label">
          
          <div className="icon" onClick={()=>{setOpen(!open)}}>
            <i className="fas fa-walking" ></i>
          </div>
          <div className="info">
              <div className="main">{ blog?.name }</div>
              <div className="sub">{ blog?.artist }</div>
          </div>
        </div>
      </div>
    </>
  )
}