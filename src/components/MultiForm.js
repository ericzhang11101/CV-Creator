import React from 'react'
import Form from './Form.js'
import Button from './Button.js'

export default function MultiForm(props) {
    const {fields, title, updateField, addForm, removeForm} = props
    return (
        <div className="no-printme">
            {
                fields.map((field) =>{
                    return <Form fields={field.info} title={title} updateField={updateField} primaryId={field.id}/>
                })
            }
            <div className="btn-grid">
                <Button onPress={addForm} title={"Add New " + title} buttonStyle={'primary'}/>
                <Button onPress={removeForm} title={"Remove New " + title} buttonStyle={'danger'}/>
            </div>
        </div>
    )
}
