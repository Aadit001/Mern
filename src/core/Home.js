import React from 'react';
import "../styles.css"
import {API} from "../backend";
import Base from "../core/Base";
import Card from './Card';


export default function Home() {
  return (
        <Base title="Home Page" description="Welcome to the T-shirt Store">
           <div className="row">
           <div className="col-4">
           <button className="btn btn-success">{Card()}</button>
           </div>
           <div className="col-4">
           <button className="btn btn-success">{Card()}</button>
           </div>
           <div className="col-4">
           <button className="btn btn-success">{Card()}</button>

            </div>
           </div>
        </Base>
    );
}
