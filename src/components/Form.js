import React from 'react'

export default function Form(props) {
    const { fields, title, updateField, primaryId } = props
    return (
        <div className="info-form no-printme">
            <h2>{title}</h2>
            {fields.map((field) => {
                return <>
                <p className="input-header">{field.name}</p>
                <input 
                    type="text" 
                    onChange={() => 
                        {
                            if (!primaryId){
                                console.log("no primary")
                                updateField({
                                    name: field.name,
                                    id: field.id,
                                    value: document.getElementById("input"+field.id).value
                                })
                            }
                            else{
                                updateField({
                                    primaryId: primaryId,
                                    name: field.name,
                                    id: field.id,
                                    value: document.getElementById("input"+field.id).value
                                })
                            }
                        }
                    }
                    id={"input"+field.id} 
                    className="text-input">
                </input>
                </>
            })
            }
        </div>
    )
}
