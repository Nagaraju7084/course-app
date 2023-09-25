import React, { useState, useEffect, useRef, Component } from "react";
import Course from "./Course";

import base_url from "../backenapis/backendapiurls";
import axios from "axios";
import { toast } from "react-toastify";

const Allcourse = () => {
    useEffect(()=>{
        document.title = "All Courses";
    }, []);

    //function to call server
    const getAllCoursesFromServer = ()=>{
        axios.get(`${base_url}/getAllCourses`).then(
            (response)=>{
                //success
                //console.log(response);
                console.log(response.data);
                toast.success("backend api called andcourses has been loaded from database" ,{
                    position: "top-right"
                });
                setCourses(response.data);
            },
            (error)=>{
                //for error
                console.log(error);
                toast.error("something went wrong, check the backend server is running or not");
            }
        );
    }
    
    //calling getAllCoursesFromServer from server while loading the page
    useEffect(()=>{
        getAllCoursesFromServer();
    }, []);
	
	
	const [course, setCourses] = useState([
        // {title: "java course", description: "core java"},
        // {title: "python course", description: "core python"},
        // {title: "django course", description: "advanced python"},
        // {title: "angular course", description: "angular course"}
    ])

    const updateCourses = (id)=>{
        setCourses(course.filter((c) => c.id != id));
    }

    return(
        <div>
           <h1>All Courses</h1>
           <p>list of courses are as follows</p>
        
            {course.length > 0
                ? course.map((item)=> <Course key={item.id} course={item} 
                update={updateCourses}
                />)
                : "no course"
            }
        
        </div>
    );
  
}

export default Allcourse;