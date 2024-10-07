import { useState } from 'react';
import '../styles/General.css'



function Section({children,name,sectionValues,setSectionValues})
  {
  const [contentToggle,setContentToggle]=useState(true);
  return <div className="sectionContent">
  
    <div className="dropdown">
      <h2>{name}</h2>
        <div className="arrow"
        onClick={()=>setContentToggle(!contentToggle)}>
          {">"} </div>

      </div> 
     <div className="content" 
        style={contentToggle?{display:"flex"}:{display:"none"}}>
        {children}
      </div>
  
  </div>

}
export default Section;
