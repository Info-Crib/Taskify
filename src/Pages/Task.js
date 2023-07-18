import styled from "styled-components";

import Sidebar from "../Components/SideBar"
import Navbarmain from "../Components/Navbarmain"

import { FaAngleDoubleRight } from "react-icons/fa";

const Container = styled.div`
    .general{
        display: grid;
        grid-template-columns: 1fr 5fr;

        .main{
  
         .container{
            height: calc(100vh - 100px);
            width: auto;
            display: flex;
            padding-inline: 20px;
         flex-direction: column;
         overflow: overlay;
       
        ::-webkit-scrollbar {
           width: 5px;
          
     

         }
         .navbarmin {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 25px;

        span {
          font-size: 25px;
          font-weight: bolder;
        }

        .sec {
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 10px #00000026;
          gap: 20px;
          background-color: white;
          padding-inline: 20px;
          border-radius: 10px;

          p {
            font-size: 14px;
            font-weight: bold;
            cursor: pointer;
            color: black;
            &:hover {
              color: #ff8a00;
            }
          }
        }
      }
         .b{
      background-color: #F8F9FA;
      padding: 10px;
      width: auto;
      font-weight: 400;
      display: flex;
      flex-direction: column;
      gap: 20px;

    

      .taskgen {
        width: auto;
        height: 100%;
        
        background-color: red;
       
        padding: 20px;
        display: flex;
        justify-content: center;
        flex-direction: row;
        gap: 20px;

        span {
           overflow-y: hidden;
        overflow-x: auto;
          padding: 20px;
          background-color: blue;
          height: 700px;
          width: 200px;
        }
      }
          }
         }
            }
        }
   
`



const Task = () => {
    return ( 
        <Container>
            <Navbarmain></Navbarmain>
        <div className="general">
            <Sidebar></Sidebar>
            <div className="main">
                <div className="container">
          <div className="navbarmin">
            <span>Profile</span>
            <div className="sec">
              <p>Dahboard</p>
              <div className="icon">
                <FaAngleDoubleRight />
              </div>
              <p>Profile</p>
            </div>
          </div>
                <div className="b">
          <div className="taskgen">
            <span>ggg</span>
            <span>jjj</span >
            <span>jjj</span>
            <span>jj</span>
            <span>jj</span>
            <span>jj</span>
            <span>jj</span>
            <span>jj</span>
          </div>
        </div>
                </div>
        </div>
        </div>
        </Container>
     );
        
}
 
export default Task;