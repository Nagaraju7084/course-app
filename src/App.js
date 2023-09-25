import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import {Button, Col, Container, Row} from 'reactstrap';
import {ToastContainer, toast} from 'react-toastify';
import Home from './components/Home';
import Course from './components/Course';
import Allcourse from './components/Allcourse';
import AddCourse from './components/AddCourse';
import LeftMenu from './components/LeftMenu';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {

  const btnHandler = ()=>{
    //toast("this is my first message");
    toast.success("done", {
      position : "top-center  "
    });
  }

  return (
    <BrowserRouter>
      <div>
      <ToastContainer />
      <Container>
        <Header />
        <Row>
          <Col md={3}>
            <h2>this is menu side</h2>
            <LeftMenu />
          </Col>
          <Col md={9} className="text-center">
            <h2>this is content side</h2>
            <Routes>
              <Route path='/' Component={Home} exact />
              <Route path='/addCourse' Component={AddCourse} exact />
              <Route path='/viewCourse' Component={Allcourse} exact />
            </Routes>
          </Col>
        </Row>
      </Container>
  </div>
    </BrowserRouter>
  );
    
}

export default App;
