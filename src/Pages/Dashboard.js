import styled from "styled-components";
import { GrProjects } from "react-icons/gr";
import Logo from "../Images/icon.png"
import {IoMdSettings} from "react-icons/io"
import {LiaProjectDiagramSolid} from "react-icons/lia"
import Sidebar from "../Components/SideBar"
import Navbarmain from "../Components/Navbarmain"
import Mainfooter from "../Components/Mainfooter";
import { useUserAuth } from "../context/Userauth";
import Reduce from "./Auth/Reducer";
const Container = styled.div`
    .general{
        display: grid;
        grid-template-columns: 1fr 5fr;

        .main{
  
         .container{
            height: calc(100vh - 90px);
            
            display: flex;
         flex-direction: column;
         overflow: overlay;
       
               ::-webkit-scrollbar {
           width: 5px;
          
     
         }
             .span {
                     /* border: 1px solid red; */
                     padding: 20px;
                     display: flex;
                     flex-direction: column;
                     gap: 30px;
                     margin: 10px;
                 }
 
                 .projects {
                     height: 6.5vw;
                     background-color: #FFF1E4;
                     border: none;
                     border-radius: 10px;
                     width: 16vw;
                     display: flex;
                     align-items: center;
                     
                     div {
                         color: #FF8A00;
                         margin: 10px;
                         border: 1px solid;
                         height: 55px;
                         width: 55px;
                         border-radius: 50%;
                         background-color: white;
                         display: flex;
                         font-size: 30px;
                         align-items: center;
                         border: none;
                         justify-content: center;
 
                         
                     }
                     
                     span{
                             font-size: 25px;
                             font-weight: 600;
                         }
                 }
         
         .contents {
                     border: none;
                     display: flex;
                     margin: 30px;
                     flex-direction: column;
                     gap: 30px;
                     height: auto;
                     padding: 20px;
                     padding-block: 30px;
                     font-size: 20px;
                     /* font-weight: 600; */
                     border-radius: 10px;
                     box-shadow: -1px 0px 6px 1px rgba(117,117,117,0.75);
                     -webkit-box-shadow: -1px 0px 6px 1px rgba(117,117,117,0.75);
                     -moz-box-shadow: -1px 0px 6px 1px rgba(117,117,117,0.75);
 
                     span{
                         padding-inline: 10px;
                     }
                     div{
                         display: flex;
                         align-items: center;
                         justify-content: space-between;
                         border-radius: 10px;
                         padding-inline: 10px;
                         padding-block: 13px;
                         height: 4.2vw;
                         border: 1px solid #D5E0F1;
                         font-size: 10px;
                         letter-spacing: 1px;
 
                         button {
                             height: 55px;
                             width: 150px;
                             margin: 10px;
                             background-color: #001935;
                             border-radius: 10px;
                             color: white;
                             border: none;
                         }


                         button:hover{
                            background-color: #FF8A00;
                            cursor: pointer;
                         }

                         #two{
                            height: 55px;
                            width: 100px;
                            background-color: #FF8A00;

                            &:hover{
                                background-color: #001935;
                            cursor: pointer;
                            }
                         }


                     }
                 }
         }
            }
        }
   
`



const Dashboard = () => {
const {userInfo} = useUserAuth()
const HandleClick =()=>{
    console.log(userInfo)
}
    return ( 
        <Container>
            {/* <Reduce /> */}
            <Navbarmain></Navbarmain>
        <div className="general">
            <Sidebar></Sidebar>
            <div className="main">
                <div className="container">
                    
                <div className="span">
                     <h1>Welcome, {userInfo.displayName}</h1>  
                    <div className="projects">

                        <div>
                        <LiaProjectDiagramSolid></LiaProjectDiagramSolid>
                        </div>
                        <span>
                            12 Projects
                        </span>
                    </div>
             </div>
            <div className="contents">
                
            <span>
                        Projects
                        </span>
                        <div>
                            <h2>Personal project</h2>
                            <span>
                            <button onClick={HandleClick}>
                                Message Board
                            </button>
                            <button id="two">Tasks</button>
                            </span>
                        </div>

                        <div>
                            <h2>Work and School</h2>
                            <span>
                            <button>
                                Message Board
                            </button>
                            <button id="two">Tasks</button>
                            </span>
                        </div>

                        <div>
                            <h2>Research</h2>
                            <span>
                            <button> Message Board</button>
                            <button id="two">Tasks</button>
                            </span>
                        </div>
                        
            </div>
                </div>
        </div>
        </div>
        </Container>
     );
        
}
 
export default Dashboard;