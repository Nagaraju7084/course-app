import axios from "axios";
import React from "react";
import { toast } from "react-toastify";
import { Form } from "reactstrap";

import{
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    CardFooter,
    Button,
    Container
} from "reactstrap";
import base_url from "../backenapis/backendapiurls";

const Course = ({course, update})=>{
    const deleteCourseFromServer = (id)=>{
        axios.delete(`${base_url}/deleteCourse/${id}`).then(
            ()=>{
                console.log("deleted successfully...");
                toast.success("successfully deleted...");
                update(id);
            },
            (error)=>{
                console.log("error");
                toast.error("error... something went wrong...");
            }
        );
    }
    return(
        <Card className="text-center">
            <CardBody>
                <CardSubtitle>{course.id}</CardSubtitle>
                <CardSubtitle className="fs-5">{course.title}</CardSubtitle>
                <CardText>{course.description}</CardText>
                <Container className="text-center">
                    <Button color="danger" onClick={()=>{
                        deleteCourseFromServer(course.id);
                    }}>delete</Button>
                    <span> </span>
                    &nbsp;&nbsp;&nbsp;
                    {Array(3).fill('\u00A0')}
                    <Button color="warning ml-3">update</Button>
                </Container>
            </CardBody>
        </Card>
    );
}

export default Course;