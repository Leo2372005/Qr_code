import React from 'react'
const Pro = (props) => {
  return (
    <>
    <div id="profile">
    <div id="pro">
        <img src={props.Img} alt="" />
    </div>
    <h1 id="name">{props.Name}</h1>
    <div id="details">
        <table id="table">
            <tr>
                <td>Course</td><td>&nbsp; : &nbsp; {props.Course}</td>
            </tr>
            <tr>
                <td>Age</td><td>&nbsp; : &nbsp; {props.Age}</td>
            </tr>
            <tr>
                <td>Blood</td><td>&nbsp; : &nbsp; {props.Blood}</td>
            </tr>
            <tr>
                <td>Mobile</td><td>&nbsp; : &nbsp; {props.No}</td>
            </tr>
            </table>
    </div>
    <div id="add">
        <h3 id="add_text">Address</h3>
        <h4 id="address">{props.Address}</h4>
    </div>
    </div>
    </>
  )
}

export default Pro