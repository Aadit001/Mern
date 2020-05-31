import React,{useState} from 'react'
import Base from '../core/Base';
import { isAuthenticated } from '../auth/helper';
import { Link } from 'react-router-dom';
import {createCategory} from './helper/adminapicall';

 const AddCategory = () => {
     const [name,setName]=useState("");
     const [error, setError] = useState(false);
     const [success, setsuccess] = useState(false);

     const {user,token} = isAuthenticated();

     const goBack= ()=>{
         return <div className="mt-5">
       <Link className="btn btn-sm btn-success mb-3" to="/admin/dashboard">Admin Home</Link>
         </div>
     };

     const handleChange = event =>{
         setError("");
         setName(event.target.value); 
     };

     const onSubmit = (event)=>{
        event.preventDefault();
        setError("");
        setsuccess(false);
        //backend request fired
        createCategory(user._id , token , {name})
        .then(data =>{
            if (data.error) {
                setError(true);
            }else{
                setError("");
                setsuccess(true);
                setName("");
            }
        });
     };

     const successMessage = () =>{
        if (success) {
            return <h4 className="text-success">Category Created Successfully</h4>
        }
     };
     const warningMessage = () =>{
        if (error) {
            return <h4 className="text-warning">Category Creation failed</h4>
        }
    };

 const myCategoryForm = ()=>{
      return  <form action="">
        <div className="from-group">
            <p className="lead">Enter the Category</p>
            <input type="text"
            className="form-control my-3"
            onChange={handleChange}
            value={name}
            autoFocus
            required
            placeholder="for eg.- summer"
            />
            <button onClick={onSubmit} className="btn btn-outline-info">Create Category</button>
        </div>
        </form> 
     };

    return ( 
       <Base title="Add Categories"
        description="add prodcut categories here"
        className="container bg-info p-4">
       <div className="row bg-white rounder"> 
       <div className="col-md-8 offset-md-2">
       {successMessage()}
       {warningMessage()}
        {myCategoryForm()}
         {goBack()}
       </div>
       </div>
       </Base>
    )
}
export default AddCategory;