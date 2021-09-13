import './style.css';
import Header from './components/Header.js';
import Form from './components/Form.js';
import Footer from './components/Footer.js';
import Resume from './components/Resume.js';
import MultiForm from './components/MultiForm.js';
import React, { useState} from 'react'
import uniqid from 'uniqid'
import Button from './components/Button.js';


function App() {
  const [personalInfo, setPersonalInfo] = useState([
    { name: "First Name", id: uniqid()},
    { name: "Last Name", id: uniqid()},
    { name: "Title", id: uniqid()},
    { name: "Email", id: uniqid()},
    { name: "Phone", id: uniqid()},
    { name: "Address", id: uniqid()},

  ])

  const [jobs, setJobs] = useState([
    { 
      id: uniqid(),
      info: [
        { name:"Position", id: uniqid()},
        { name:"Company", id: uniqid()},
        { name:"City", id: uniqid()},
        { name:"Start Date", id: uniqid(), type: "date"},
        { name:"End Date", id: uniqid(), type: "date"},
        { name:"Description", id: uniqid()},
      ]
    }
  ])

  const [education, setEducation] = useState([
    { 
      id: uniqid(),
      info: [
        { name:"School Name", id: uniqid()},
        { name:"City", id: uniqid()},
        { name:"Degree", id: uniqid()},
        { name:"Area of Study", id: uniqid()},
        { name:"Start Date", id: uniqid()},
        { name:"End Date", id: uniqid()}
      ]
    }
  ])

  function editPersonal(field){
    let arr = [...personalInfo]
    for (let i = 0; i < personalInfo.length; i++){
      if (personalInfo[i].id === field.id){
        arr.splice(i, 1, {
          name: personalInfo[i].name,
          id: field.id,
          value: field.value
        })
        setPersonalInfo(arr)
      }
    }
    
  }

  function editJob(job){
    let arr =[...jobs]
    let newJobInfo = {}
    let newJob = {}

    for (let i = 0; i < jobs.length; i++){
      if (jobs[i].id === job.primaryId){
        
        for (let j = 0; j < jobs[i].info.length; j++){
          if (jobs[i].info[j].id === job.id){
            let tempArr = [...jobs[i].info]
            
            newJobInfo.id = job.id
            newJobInfo.name = job.name
            newJobInfo.value = job.value

            tempArr.splice(j, 1, newJobInfo)

            newJob.id = job.primaryId
            newJob.info = tempArr

            arr.splice(i, 1, newJob)
            setJobs(arr)
          }
        }
      }
    } 
  }

  function addJob(){
    let arr = [...jobs]
    let newJob = { 
      id: uniqid(),
      info: [
        { name:"Position", id: uniqid()},
        { name:"Company", id: uniqid()},
        { name:"City", id: uniqid()},
        { name:"Start Date", id: uniqid(), type: "date"},
        { name:"End Date", id: uniqid(), type: "date"},
        { name:"Description", id: uniqid()},
      ]
    }
    setJobs([...arr, newJob])
  }

  function removeJob(){
    if (jobs.length > 1){
      let temp = [...jobs]
      temp.splice(jobs.length-1, 1)
      setJobs(temp)
    }
  }

  function editEducation(schooling){
    let arr =[...education]
    let newEducationInfo = {}
    let newEducation = {}

    for (let i = 0; i < education.length; i++){
      if (education[i].id === schooling.primaryId){
        
        for (let j = 0; j < education[i].info.length; j++){
          if (education[i].info[j].id === schooling.id){
            let tempArr = [...education[i].info]
            
            newEducationInfo.id = schooling.id
            newEducationInfo.name = schooling.name
            newEducationInfo.value = schooling.value

            tempArr.splice(j, 1, newEducationInfo)

            newEducation.id = schooling.primaryId
            newEducation.info = tempArr

            arr.splice(i, 1, newEducation)
            setEducation(arr)
          }
        }
      }
    } 
  }

  function addEducation(){
    let arr = [...education]
    let newEducation =  { 
      id: uniqid(),
      info: [
        { name:"School Name", id: uniqid()},
        { name:"City", id: uniqid()},
        { name:"Degree", id: uniqid()},
        { name:"Area of Study", id: uniqid()},
        { name:"Start Date", id: uniqid()},
        { name:"End Date", id: uniqid()}
      ]
    }

    newEducation.id = uniqid()
    for (let i = 0; i < newEducation.info.length; i++){
      newEducation.info[i].id = uniqid();
      newEducation.info[i].value = ""
    }
    setEducation(arr.concat(newEducation))

  }

  function removeEducation(){
    if (education.length > 1){
      let temp = [...education]
      temp.splice(education.length-1, 1)
      setEducation(temp)
    }
  }

/**
 *  field: name, id, onChange
 */
  return (
    <div className="App">
        <Header />
        <div className="content-container ">
          <div className="sheet no-printme">
            <Form fields={personalInfo} title={"Personal Info"} updateField={editPersonal}/>
            <MultiForm 
              fields={education} 
              title={"Education"} 
              updateField={editEducation} 
              addForm={addEducation}
              removeForm={removeEducation}
              />
            <MultiForm 
              fields={jobs} 
              title={"Experience"} 
              updateField={editJob} 
              addForm={addJob}
              removeForm={removeJob}
              />
          </div>
            <div>
              <Resume education={education} experience={jobs} personalInfo={personalInfo} id={'printMe'}/>
              <Button onPress={() => window.print()} title={"Print to PDF"} buttonStyle="danger" />

            </div>
        </div>
        <Footer />
    </div>
  );
}

export default App;

function print(){
  let eleId = 'printMe'
  let content = document.getElementById(eleId);
  let pri = document.getElementById("ifmcontentstoprint").contentWindow;
  pri.document.open();
  pri.document.write(content.innerHTML);
  pri.document.close();
  pri.focus();
  pri.print();
}