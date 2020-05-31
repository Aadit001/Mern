import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Home from './core/Home';
import Signup from './user/Signup';
import Signin from './user/Signin';
import AdminRoute from './auth/helper/AdminRoutes';
import PrivateRoute from './auth/helper/PrivateRoutes';
import UserDashboard from './user/UserDashBoard';
import AdminDashboard from './user/AdminDashBoard';
import AddCategory from './admin/AddCategory';
import AddProduct from './admin/AddProduct'
import ManageProducts from './admin/ManageProducts';
import Orders from './admin/Orders';
import ManageCategories from './admin/ManageCategories';

 




const Routes = () => {
    return (
<BrowserRouter>
<Switch>
<Route path="/" exact component={Home}/>
<Route path="/signup" exact component={Signup}/>
<Route path="/signin" exact component={Signin}/>
<PrivateRoute path="/user/dashboard" exact component={UserDashboard}/>
<AdminRoute path="/admin/dashboard" exact component={AdminDashboard}/>
<AdminRoute path="/admin/create/category" exact component={AddCategory}/>
<AdminRoute path="/admin/create/product" exact component={AddProduct}/>
<AdminRoute path="/admin/products" exact component={ManageProducts}/>
<AdminRoute path="/admin/orders" exact component={Orders}/>
<AdminRoute path="/admin/categories" exact component={ManageCategories}/>







</Switch>
</BrowserRouter>
 );
}
export default Routes;