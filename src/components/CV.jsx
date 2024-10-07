
import '../styles/CV.css'

export default function CV({inputs,names})
  {
  return <div className="cvSection">
    {Object.entries(inputs).map(([input,inputValue])=> 
      <div style={{display:'flex',gap:'10px',alignItems:"center"}}>
      
     <p style={{backgroundColor:"#3b6c94",padding:'0.5rem',}}>{names[input[input.length-1]]}</p>
     <p style={{backgroundColor:'#293652', padding:'0.5rem'}}>{inputValue}</p>
     </div>)}</div> 
      

}

