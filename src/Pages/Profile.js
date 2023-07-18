import styled from "styled-components";
import Sidebar from "../Components/SideBar";
import Navbarmain from "../Components/Navbarmain";
import { FaAngleDoubleRight } from "react-icons/fa";

const Container = styled.div`
  
  .gen {
    display: grid;
    grid-template-columns: 1fr 5fr;

    .profile {
      height: auto;

      display: flex;
      flex-direction: column;
      overflow: overlay;
      padding-inline: 30px;
      padding-bottom: 20px;
      gap: 40px;

      /* ::-webkit-scrollbar {
        width: 5px;
      } */
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

      .span {
        border: none;
        display: flex;
        flex-direction: column;
        gap: 30px;
        height: auto;
        padding: 20px;
        padding-block: 0px;
        font-size: 20px;
        /* font-weight: 600; */
        border-radius: 10px;
        box-shadow: -1px 0px 6px 1px rgba(100, 100, 100, 0.5);
        -webkit-box-shadow: -1px 0px 6px 1px rgba(100, 100, 100, 0.5);
        -moz-box-shadow: -1px 0px 6px 1px rgba(100, 100, 100, 0.5);

        img {
          height: 15vw;
          width: 15vw;
          object-fit: contain;
        }

        div.content {
          display: flex;
          flex-direction: column;
          gap: 10px;

          span.file-input {
            display: flex;
            align-items: center;
            padding: 0.375rem 0.75rem;
            font-size: 4rem;
            font-weight: 400;
            line-height: 1.5;
            color: #212529;
            text-align: center;
            white-space: nowrap;
            background-color: #e9ecef;
            border: 1px solid #ced4da;
            border-radius: 0.375rem;
            width: 40%;
          }

          form{
            display: flex;
            /* border: 1px solid red; */
            flex-direction: column;
            width: auto;
            justify-content: center;
            padding-block: 50px;

            font-size: 15px;
            gap: 10px;
            span > b{
              padding-inline: 05px;
              font-size: 15px;
              
              &::after{
                content: "*";
                color: red;
              }
            }

            span > input{
              /* width: 100%; */
              height: 30px;
              /* border-color: #FEAC4F; */
              outline: none;
              overflow: hidden;
              border-radius: 10px;
              border: 1px solid #ff8a00;
              padding: 10px;
              background-color: #FFFCF9;
              
              
            }

            span.real{
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 20px;

              span{
                /* border: 1px solid green; */
                display: flex;
                flex-direction: column;
                gap: 5px;

              }


            }
          }
          span.fake{
            display: flex;
            flex-direction: column;
            gap: 5px;


          }
        }
      }

      .span2{
        
        border: none;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 30px;
        height: auto;
        padding: 20px;
        font-size: 20px;
        /* font-weight: 600; */
        border-radius: 10px;
        box-shadow: -1px 0px 6px 1px rgba(100, 100, 100, 0.5);
        -webkit-box-shadow: -1px 0px 6px 1px rgba(100, 100, 100, 0.5);
        -moz-box-shadow: -1px 0px 6px 1px rgba(100, 100, 100, 0.5);

        div>button{
              padding-inline:30px;
              padding-block: 15px;
              border-radius: 10px;
              outline: none;
              border: none;
              color: #fff;
              background-color: #001935;

              &:hover{
                background-color: #ff8a00;
                cursor: pointer;
              }
        }
      }
    }
  }
`;

const Profile = () => {
  return (
    <Container>
      <Navbarmain></Navbarmain>
      <div className="gen">
        <Sidebar></Sidebar>
        <div className="profile">
          <div className="navbarmin">
            <span>Profile</span>
            <div className="sec">
              <p>Dahboard</p>
              <div className="icon">
                <FaAngleDoubleRight />
              </div>
              <p>Projects</p>
            </div>
          </div>
          <div className="span">
            <div>
              <p>My Profile</p>
            </div>
            <div className="content">
              <span className="file-input">
                <input type="file" />
              </span>
              <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
             
              <form >
                <span className="real">

                  <span>
                    <b>
                  Name
                    </b>
                  <input type="text" placeholder="Enter name" />
                  </span>

                  <span>
                    <b>
                  Email
                    </b>
                  <input type="Enter email" placeholder="Email" />
                  </span>
                </span>

                <span className="fake">
                  <b>Phone</b>
                <input type="number" placeholder="Phone number"  max="13" min="10"/>
                </span>

                <span className="fake">
                  <b>Designation</b>
                <input type="text" placeholder="Enter designation" />
                </span>

              </form>
            </div>
          </div>
          <div className="span2">
            <div>
              <button>Save Information</button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Profile;
