import styled,{keyframes} from "styled-components";
import Navbarmain from "./Navbarmain";
import { FaColumns } from "react-icons/fa";
import { FaProjectDiagram } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaCog } from "react-icons/fa";
import { Link } from "react-router-dom";
import {FaAngleDown} from "react-icons/fa";
import {FaUser} from "react-icons/fa"
import {FiLogOut} from "react-icons/fi"
import { useState, useRef,useEffect } from "react";
const Container = styled.div`
  position: sticky;
  background-color: #fff1e4;
  top: 11.1vh;
    background-color: #fff1e4;
  height: calc(100vh - 11.6vh);
  width: calc(100vw - 78.9vw);
  border-right: 1px solid #d8e1ef;
  .subs {
    font-size: 16px;
    display: flex;
    align-items: center;
    flex-direction:column ;
    ul{
      margin-top: 10px;
      margin-left: 0px;
      display: flex;
      flex-direction: column;
      height: fit-content;
      gap: 30px;
     a{
        list-style: none;
        text-decoration: none;
      }
     
      a:nth-child(1){
        li{

          display: flex;
          align-items: center;
          color: #ff8a00;
          font-size: 20px; 
          gap: 10px;
           &::after{
             content: "Dashboard";
             color: black;
             font-size: 18px;
             font-weight: bold;
           }
        }

      }


     
     
      a:nth-child(2){
        li{

          display: flex;
         align-items: center;
         color: #ff8a00;
         font-size: 20px; 
         gap: 10px;
          &::after{
            content: "Project";
            color: black;
            font-size: 18px;
            font-weight: bold;
          }
        }
      }

     
      li:nth-child(3){
        display: flex;
       align-items: center;
       color: #ff8a00;
       font-size: 20px; 
       gap: 10px;
        &::after{
          content: "Message";
          color: black;
          font-size: 18px;
          font-weight: bold;
        }
      }
      .settings{
        cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 60px;
        li{
          display: flex;
         align-items: center;
         justify-content: space-between;
         align-items: center;
         color: #ff8a00;
         font-size: 20px; 
         gap: 10px;
          &::after{
            content: "Settings";
            color: black;
            font-size: 18px;
            font-weight: bold;
          }
      
        }
        .icon{
          margin-top: 10px;
            font-size: 20px;
          }
      }

    }
    
    .settingstoggle{
      height: 0;
  overflow: hidden;
  transition: height 0.3s ease; /* Adjust the animation speed as needed */


    }
    .toggle{
      display: block;
      height: auto;
      max-height: 200px; 
   .content{

    ul{
      a:nth-child(1){
        li{

          display: flex;
          align-items: center;
          color: #ff8a00;
          font-size: 20px; 
          gap: 10px;
           &::after{
             content: "Profile";
             color: black;
             font-size: 18px;
             font-weight: bold;
           }
        }

      }


     
     
      a:nth-child(2){
        li{

          display: flex;
         align-items: center;
         color: #ff8a00;
         font-size: 20px; 
         gap: 10px;
          &::after{
            content: "Logout";
            color: black;
            font-size: 18px;
            font-weight: bold;
          }
        }
      }
      
    }
   }
    }
  }

`;



const Sidebar = () => {

  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [contentHeight, setContentHeight] = useState(0);
  const contentRef = useRef(null);

  function toggle() {
    setIsSettingsOpen((prevState) => !prevState);
  }

  useEffect(() => {
    if (isSettingsOpen) {
      setContentHeight(contentRef.current.scrollHeight);
    } else {
      setContentHeight(0);
    }
  }, [isSettingsOpen]);

  // function toggle() {
    
    
   
     
  //     let children = document.querySelector(".settingstoggle")
  //     children.classList.toggle('toggle')
    
  // }

 
  return (
    <Container>
      <div className="subs">
        <ul>
          <Link to="/dashboard" >
          <li>
          
            <FaColumns />
          </li>
          </Link>

          <Link to="/project">
          <li>
          
            <FaProjectDiagram />
          </li>
          </Link>
          <li>
            <FaEnvelope />
           
          </li>

      <div className="settings" onClick={()=>{
        toggle()
      }} >

          <li>
            <FaCog />
          
          </li>
          <div className="icon"  >
          <FaAngleDown />
          </div>
      </div>

        </ul>
          <div className={`settingstoggle ${ isSettingsOpen ? "toggle" : ""}`
        }  expanded={isSettingsOpen}
        contentHeight={contentHeight}>
          
           <div className="content" ref={contentRef}>
            
            <ul>
              <Link to="/profile">
              
              <li><FaUser /></li>
              </Link>
              <Link to="/logout">
              
              <li><FiLogOut /> </li>
              </Link>
            </ul>
           </div>
        
          </div>
      </div>
    </Container>
  );
};

export default Sidebar;
