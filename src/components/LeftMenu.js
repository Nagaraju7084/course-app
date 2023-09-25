import React from "react";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem } from "reactstrap";

const LeftMenu = ()=>{
    return(
        <ListGroup>
            <Link className="list-group-item list-group-item-action" tag='a' to="/" action>Home</Link>
            <Link className="list-group-item list-group-item-action" tag='a' to="/addCourse" action>Add Course</Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="/viewCourse" action>View Courses</Link>
            <Link className="list-group-item list-group-item-action" tag='a' to="#!" action>Delete Course</Link>
            <Link className="list-group-item list-group-item-action" tag='a' to="#!" action>About Us</Link>
            <Link className="list-group-item list-group-item-action" tag='a' to="#!" action>Contact</Link>
        </ListGroup>
    );
}

export default LeftMenu;