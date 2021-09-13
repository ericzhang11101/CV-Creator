import React from 'react'

export default function Resume(props) {
    const {personalInfo, experience, education, id } = props
    return (
        <div className="sheet resume-main printme" id={id}>
            <div className="resume-header"> 
                <h1>{personalInfo[0].value}⠀{personalInfo[1].value}</h1>
                <hr className='fixed-hr'></hr>
                <h2>{personalInfo[2].value}</h2>
                <div className="info-grid">
                    <h3>{personalInfo[4].value}</h3>
                    <h3>{personalInfo[3].value}</h3>
                    <h3>{personalInfo[5].value}</h3>
                </div>
            </div>
            <div className="resume-content">
                <div className="education-pane content-pane">
                    <h2>Education</h2>
                    <hr></hr>
                    {education.map(i => {
                        let filler1 = ""
                        let filler2 = ""
                        let filler3 = ""
                        if (i.info[0].value && i.info[1].value) {
                            filler1 = ", "
                        }
                        if(i.info[4].value && i.info[5].value){
                            filler2 = " - "
                        }
                        if(i.info[2].value && i.info[3].value){
                            filler3 = ", "
                        }
                        return(                    
                            <div>
                                <h2 className="tertiary-header">{i.info[2].value}{filler3}{i.info[3].value}</h2>
                                <div className="secondary-header reduce-margin" >
                                    <h3>{i.info[0].value}{filler1}{i.info[1].value}</h3>
                                    <h3>{i.info[4].value}{filler2}{i.info[5].value}</h3>
                                </div>
                            </div>
                        )
                    })}
                </div>

                <div className="experience-pane content-pane">
                    <h2>Experience</h2>
                    <hr></hr>
                    {experience.map(i => {
                        let filler1 = ""
                        let filler2 = ""
                        let filler3 = ""
                        if (i.info[3].value && i.info[4].value) {
                            filler1 = " - "
                        }
                        if(i.info[1].value && i.info[2].value){
                            filler2 = " - "
                        }
                        if(i.info[5].value){
                            filler3 = "Description"
                        }
                        return(                    
                            <div>
                                <div className="secondary-header reduce-margin" >
                                    <h3>{i.info[0].value}</h3>
                                    <h3>{i.info[3].value}{filler1}{i.info[4].value}</h3>
                                </div>
                                <h3 className="reduce-margin">{i.info[1].value}{filler2}{i.info[2].value}</h3>
                                <h3>{filler3}</h3>
                                <h3 className="reduce-margin">{i.info[5].value}</h3>
                            </div>
                        )
                    })}
                </div>
            </div>

        </div>
    )
}
