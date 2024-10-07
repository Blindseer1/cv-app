import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Section from './components/General.jsx' 
import CV from './components/CV.jsx'
import CvContainer from './components/CvContainer.jsx'

function App() {

 const generalFields=[
    {
      id:0,
      type:"text",
      name:"Fullo Name"
    },
    {
      id:1,
      type:"number",
      name:"Phone Number"
    },
    {
      id:2,
      type:"email",
      name:"Email"
    }
  ]
const educationFields=[
    {
      id:0,
      type:"text",
      name:"School Name"
    },
    {
      id:1,
      type:"text", 
      name:"Title of Study"
    },
    {
      id:2,
      type:"date",
      name:"Start Date"
    },
    {
    id:3,
      type:"date",
      name:"End Date"
    }
  ]
const experienceFields=[
    {
      id:0,
      type:"text",
      name:"Company Name"
    },
    {
    id:1,
      type:"text",
    name:"Position"
  }, 
      {
      id:2,
      type:"date",
      name:"Start Date"
    },
    {
      id:3,
      type:"date",
      name:"End Date"
    }
  ]
const [generalState,setGeneralState]=useState( {field0:"",field1:"",field2:""});
const [educationState,setEducationState]=useState( {field0:"",field1:"",field2:"",field3:""});
const [experienceState,setExperienceState]=useState( {field0:"",field1:"",field2:"",field3:""});

const generalNames=[];
  generalFields.forEach(field=>generalNames.push(field.name))
 
  console.log(generalNames)
  return (
     <div className="container">
     <div className="information">   
      <Section name="General">

 {generalFields.map(item=><>
         <label htmlFor={item.name}>{item.name}</label>
  <input type={item.type}  id={item.name} onChange={(e)=>setGeneralState({...generalState,["field"+item.id]:e.target.value})}/> </>)}

      </Section> 
      <Section name="Education">
 {educationFields.map(item=><>
         <label htmlFor={item.name}>{item.name}</label>
  <input type={item.type} id={item.name} onChange={(e)=>setEducationState({...educationState,["field"+item.id]:e.target.value})}/> </>)}


      </Section>
   
<Section name="Experience">

 {experienceFields.map(item=><>
         <label htmlFor={item.name}>{item.name}</label>
  <input type={item.type} id={item.name} onChange={(e)=>setExperienceState({...experienceState,["field"+item.id]:e.target.value})}/> </>)}

      </Section>
</div>

      <CvContainer className="cv">
        <h2>CV Application</h2>
        <CV  inputs={generalState} names={generalFields.map(field=>field.name)}  />
        <CV inputs={educationState}names={educationFields.map(field=>field.name)} />
        <CV inputs={experienceState}names={experienceFields.map(field=>field.name)} />
</CvContainer>
      
    </div>
 
   )
}

export default App
