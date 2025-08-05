import { useState } from "react"
import './CrudOperation.css'

const CrudOperation = () => {
    const [values,setValues] = useState([])
    const [updateValue, setUpdateValue] =  useState(-1)
    const [isDisabled, setIsDisabled] =  useState(false)
    const [formValue,setFormValue] = useState({
        name : "",
        age : "",
        email : "",
        phoneNo : ""
    })

    const handleValue = (e) =>{
        e.preventDefault();
        const {name , value} = e.target
        setFormValue({
            ...formValue,
            [name]: value
        })
    }

    const handleAdd = (e) =>{
        e.preventDefault();
        if(formValue.name === "" || formValue.age === "" || formValue.email === "" || formValue.phoneNo === "") return;
        setValues((prevValue)=>[...prevValue,formValue])
        setFormValue({
            name : "",
            age : "",
            email : "",
            phoneNo : ""
        })
    }

    const handleDelete = (dataIndex) =>{

        console.log(values.length)

        if(values.length-1 === 0){
            let filteredValue = values.filter((_,index)=> index !== dataIndex)
            setValues(filteredValue)

            setUpdateValue(-1)
            setFormValue({
                name: "",
                age: "",
                email: "",
                phoneNo: ""
            })
        }
        else{
            let filteredValue = values.filter((_,index)=> index !== dataIndex)
            setValues(filteredValue)
        }
        
    }
    
    const handleEdit = (dataIndex) =>{
        let filteredValue = values.find((_,index)=> index == dataIndex)
        // console.log(dataIndex)

        setFormValue(filteredValue)
        setUpdateValue(dataIndex)
        setIsDisabled(true)
    }

    const handleUpdate = () =>{
        // e.preventDefault()
        let appendValue = values.map((value,index)=>(
            index === updateValue ? formValue : value
        ))

        setValues(appendValue)
        setFormValue({
            name : "",
            age : "",
            email : "",
            phoneNo : ""
        })
        setUpdateValue(-1)
        setIsDisabled(false)
    }

    const handleCancel = () =>{
        setFormValue({
            name : "",
            age : "",
            email : "",
            phoneNo : ""
        })
        setUpdateValue(-1)
        setIsDisabled(false)
    }

    // console.log(formValue)

    // console.log(values)

    return (
        <>
            <div className='crudOperation'>

                <h1 className='heading'>Students Details</h1>

                <div className="crudContainer">
                    <form action="">
                        <div className="nameForm">
                            <label htmlFor="">Name : </label>
                            <input type="text" name="name" placeholder='Enter the Name' className='nameInput' onChange={()=>handleValue(event)} value={formValue.name || ""}/>
                        </div>

                        <div className="ageForm">
                            <label htmlFor="">Age : </label>
                            <input type="number" name="age" placeholder='Enter age' className='ageInput' onChange={()=>handleValue(event)} value={formValue.age || ""}/>
                        </div>

                        <div className="emailForm">
                            <label htmlFor="">Email : </label>
                            <input type="email" name="email" placeholder='Enter Email Address' className='emailInput' onChange={()=>handleValue(event)} value={formValue.email || ""}/>
                        </div>

                        <div className="phoneForm">
                            <label htmlFor="">Mobile : </label>
                            <input type="tel" name="phoneNo" placeholder='Enter Mobile Number' className='mobileInput' onChange={()=>handleValue(event)} value={formValue.phoneNo || ""}/>
                        </div>

                        {updateValue < 0 ? 
                        
                            <button  className='addBtn' onClick={()=>handleAdd(event)}>Add</button>
                            :
                            <div className="updateCancel">
                                <button className="updateBtn" onClick={handleUpdate}>Update</button>
                                <button className="cancelBtn" onClick={handleCancel}>Cancel</button>
                            </div>
                        }
                        

                        
                    </form>

                </div>
                
                <table className="formData">

                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Email</th>
                            <th>Phone</th> 
                            <th>Actions</th>  
                        </tr>
                         
                    </thead>

                    <tbody className="tbody">
                        {values?.map((value,index)=>(
                            <tr key={index}>
                                <td>{value.name}</td>
                                <td>{value.age}</td>
                                <td>{value.email}</td>
                                <td>{value.phoneNo}</td>
                                <td className="editCancelBtn">
                                    <button className="editBtn" onClick={()=>handleEdit(index)} disabled={isDisabled}>Edit</button>
                                    <button className="cancelBtn" onClick={()=>handleDelete(index)} disabled={isDisabled}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>

                </table>

            </div>
        </>
    )
}

export default CrudOperation
