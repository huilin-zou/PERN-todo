import React,{Fragment,useState} from 'react'

export const InputTodo = () => {

    const [description,setDescription]=useState("")

    const onSubmitForm=async(e)=>{
        e.preventDefault();
        try {
            const body={description}
            const response=await fetch("http://localhost:5000/todos",{
                method:'POST',
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(body)
            })

           // console.log(response)
            window.location="/"
        } catch (error) {
            console.log(error.message)
        }
    }
    return (
        <Fragment>
            <h1 className='mb-4 mt-5 text-center'>ToDoList</h1>
            <form className='d-flex mt-5'
            onSubmit={onSubmitForm}
                >
                <input type="text"
                className='form-control center'
                
                style={{width:"1000px"}}
                value={description}
                onChange={e=>setDescription(e.target.value)}></input>
                
                <button className='btn btn-dark' style={{fontSize:"20px"}}>Add</button>
                
            </form>
        </Fragment>
    )
}
