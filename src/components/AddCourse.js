import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";
import base_url from "../backenapis/backendapiurls";

const AddCourse = ()=>{
    useEffect(()=>{
        document.title="Add Course Here";
    }, []);

    const [course, setCourse] = useState({});

    //form handler function
    const handleForm = (e)=>{
        console.log(course);
        postingDataToServer(course);
        e.preventDefault();
    };

    //creating a function that will hit backend api post call
    const postingDataToServer = (data)=>{
        axios.post(`${base_url}/addCourse`, data).then(
            (response)=>{
                console.log(response);
                console.log("success");
                toast("Course has been added successfully...");
            },
            (error)=>{
                console.log(error);
                console.log("error");
                toast("error, something went wrong...");
            }
        )
    }

    return (
        <Fragment>
            <h1 className="text-center my-2">fill course details form</h1>
            <Form onSubmit={handleForm}>
                <FormGroup>
                    <Label for="courseId">Course Id</Label>
                    <Input type="text" placeholder="enter course id here" name="courseId" id="courseId"
                        onChange={(e)=>{
                           setCourse({...course, courseId: e.target.value}); 
                        }}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="courseTitle">Course Title</Label>
                    <Input type="text" placeholder="enter course title here" name="courseTitle" id="title"
                        onChange={(e)=>{
                            setCourse({...course, title: e.target.value});
                        }}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="courseDescription">Course Description</Label>
                    <Input 
                        type="textarea" 
                        placeholder="enter course description here" 
                        name="courseDescription" 
                        id="description" 
                        onChange={(e)=>{
                            setCourse({...course, description: e.target.value});
                        }}
                        style={{height:70}}
                        />
                </FormGroup>
                <Container className="text-center">
                    <Button type="submit" color="success">Add Course</Button>{' '}
                    <Button type="reset" color="warning" onClick={()=>{
                        setCourse({id: "", title:"", description: ""});
                    }}>Clear Course</Button>
                </Container>
            </Form>
        </Fragment>
    );
}

export default AddCourse;