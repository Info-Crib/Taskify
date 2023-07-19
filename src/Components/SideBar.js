import styled from "styled-components";
import Navbarmain from "./Navbarmain";
import { FaColumns } from "react-icons/fa";
import { FaProjectDiagram } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaCog } from "react-icons/fa";
import { Link } from "react-router-dom";
const Container = styled.div`
  position: sticky;
  background-color: #fff1e4;
  top: 11.1vh;
    background-color: #fff1e4;
  height: calc(100vh - 11.6vh);
  width: calc(100vw - 78.9vw);
  border-right: 1px solid #d8e1ef;
  .general {
    font-size: 16px;
    display: flex;
    align-items: center;
    ul{
      margin-top: 40px;
      margin-left: 10px;
      display: flex;
      flex-direction: column;
      gap: 30px;
     a> li{
        list-style: none;
      }
     a{
      li:nth-child(1){
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
     a{
      li:nth-child(2){
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
      li:nth-child(4){
        display: flex;
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
    }
  }

`;

const Sidebar = () => {
  return (
    <Container>
      <div className="general">
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
          <li>
            <FaCog />
          </li>
        </ul>
      </div>
    </Container>
  );
};

export default Sidebar;
