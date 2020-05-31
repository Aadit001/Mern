import React from 'react'
import Base from '../core/Base';
import { Link } from 'react-router-dom';


const  ManageProducts = ()=> {
    return (
        <Base
        title="Manage your products here"
        description="welcome to the products management section"
        className="container bg-info p-4">
        <Link className="btn btn-md btn-dark mb-3"
         to="/admin/dashboard">Admin Home</Link>
      <div className="row bg-dark text-white rounded">
      <div className="col-md-8 offset-md-2">
      <h1>hi</h1>
     </div>
      </div>
        </Base>
    )
}
export default ManageProducts;