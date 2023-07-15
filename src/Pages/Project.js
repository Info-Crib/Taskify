import styled from "styled-components";
import Sidebar from "../Components/SideBar";
import Navbarmain from "../Components/Navbarmain";
import Home from "../Pages/Home"
import {FaAngleDoubleRight} from "react-icons/fa";
import Mainfooter from "../Components/Mainfooter";
import Listproject from "../Asset/Listproject";
const Container = styled.div`
.general{
    display: grid;
    grid-template-columns: 1fr 5fr;

    .sidebar{

    }
    .container{
        width: 100%;
        margin: 0;
        
        .content{
            height: calc(100vh - 115px);
            
         display: flex;
      flex-direction: column;
      overflow: overlay;
    
            ::-webkit-scrollbar {
        width: 5px;
       
  
      }
      :hover{
            ::-webkit-scrollbar {
        width: 5px;
            cursor: pointer;
   
        display: block;
        height: 20px;
      }

      /* Track */
      ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 5px grey;
        padding-top: 30px;
        border-radius: 10px;
         display: none;
      }


      /* Handle */
      ::-webkit-scrollbar-thumb {
        background: #c1b6b69a;
        border-radius: 10px;
       height: 20px;
 display: block;
      }

      /* Handle on hover */
      ::-webkit-scrollbar-thumb:hover {
    background: #c1b6b69a;
        width: 7px;
      }
    }

         .sectio{
          padding-inline: 20px;
          .navbarmin{
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 25px;
            span{
              font-size: 25px;
               font-weight: bolder;
               }
           
            .sec{
              display: flex;
              align-items: center;
              justify-content: center;
              box-shadow: 0 0 10px #00000026;
              gap: 20px;
              background-color: white;
              padding-inline: 20px;
              border-radius: 10px;
           
              p{
                font-size: 14px;
                font-weight: bold;
                cursor: pointer;
                color: black;
                &:hover{
               color: #ff8a00;
                }
              }
            }
          }
         }
        }
    }
   

}

`

const Project = () => {
    return ( 
        <Container>
       <Navbarmain />
       <div className="general">
         
        <div className="sidebar">
     <Sidebar />
        </div>
        <div className="container">

           <div className="content">
            <section className="sectio">
            <div className="navbarmin">
              <span>
              Project
              </span>
              <div className="sec">
                <p>Dahboard</p>
                <div className="icon">
                  <FaAngleDoubleRight />
                </div>
                <p>Projects</p>
              </div>
            </div>

         <Listproject />
            </section>
           </div>
            <footer>
            <Mainfooter />
        </footer>
        </div>
       
       </div>

        </Container>
     );
}
 
export default Project;