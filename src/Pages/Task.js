import styled from "styled-components";
import { FaAngleDoubleRight } from "react-icons/fa";
import Navbarmain from "../Components/Navbarmain";
import Sidebar from "../Components/SideBar";

const Container = styled.div`
margin: 0px;
height: auto;
  .general{
    display: grid;
    grid-template-columns: 1fr 4fr;

    .main{
      background-color: black;
      height: auto;

      .container{
        background-color: azure;
        height: 100px;
        width: auto;
        padding: 10px;
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

      }
      .contents{
        background-color: #ff8a00;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        row-gap: 10px;
        column-gap: 10px;
        padding: 10px;

        div.tasks{
          background-color: #fff;
          height: 70vh;
          display: grid;
          grid-template-rows: 1fr 9fr;
          border: none;
          border: 1px solid green;
          border-radius: 10px;

          .head{
            background-color: azure;
            width: auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
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
            <span>Tasks</span>
            <div className="sec">
              <p>Dahboard</p>
              <div className="icon">
                <FaAngleDoubleRight />
              </div>
              <p>Profile</p>
            </div>
          </div>
            <div className="b">
            </div>
          </div>
          <div className="contents">
            <div className="tasks">
              <span className="head">
                Head
              </span>
              <div className="body">
                Body
              </div>
            </div>

          </div>
        </div>
        </div>
        </Container>
     );
        
}
 
export default Task;
