import Navbarmain from "../Components/Navbarmain";
import Sidebar from "../Components/SideBar";
import styled from "styled-components";
import { FaAngleDoubleRight } from "react-icons/fa";

const Container = styled.div`
  .boddy {
    height: auto;
    /* width: auto; */
    background-color: blue;
    display: grid;
    grid-template-columns: 1fr 4fr;
    overflow: hidden;
    .b {
      background-color: #F8F9FA;
      padding: 10px;
      overflow: scroll;
      font-weight: 400;
      display: flex;
      flex-direction: column;
      gap: 20px;

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

      .taskgen {
        width: auto;
        height: 80%;
        background-color: red;
        overflow-y: hidden;
        overflow-x: scroll;
        padding: 20px;
        display: flex;
        flex-direction: row;
        gap: 20px;

        span {
          padding: 20px;
          background-color: blue;
          height: 600px;
          width: 300px;
        }
      }
    }
  }
`;

const Task = () => {
  return (
    <Container>
      <Navbarmain></Navbarmain>

      <div className="boddy">
        <Sidebar />
        <div className="b">
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
          <div className="taskgen">
            <span>ggg</span>
            <span>jjj</span >
            <span>jjj</span>
            <span>jj</span>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Task;
