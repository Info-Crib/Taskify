import styled from "styled-components";
import { GrProjects } from "react-icons/gr";
import Logo from "../Images/icon.png"
import {IoMdSettings} from "react-icons/io"
import {LiaProjectDiagramSolid} from "react-icons/lia"

const Container = styled.div`

    .general {
        .main {
            display: grid;
            grid-template-columns: 2fr;
            grid-template-rows: auto;
            height: auto;
            position: relative;
            
            .sidebar {
                border: 1px solid;
                height: 100%;
                background-color: #FFF1E4;
                font-size: 16px;
                position: fixed;
                width: 18%;
                z-index: 100;
                
                .h2 {
                    margin-inline: 30px;
                    margin-block-start: 40px;
                    font-weight: 500; /* Updated font weight to 900 */
                    display: flex;
                    font-size: 20px;
                    flex-direction: column;
                    gap: 20px;

                    l{
                        border: 1px solid;
                        display: flex;
                        align-items: center;
                        gap: 5px;
                        padding: 5px;
                        border-radius: 10px;
                    }
                }
                
                .logo {
                    border-bottom: 1px solid;
                    height: 8%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background-color: #F8F9FA;
                    gap: 5px;
                    font-size: 20px;
                    font-weight: 600;
                    color: #FF8A00;

                    img{
                        height: 40px;
                    }
                }
            }
            
            .profile {
                border: 1px solid;
                height: 8.1vh;
                display: flex;
                align-items: center;
                justify-content: end;
                padding-inline-end: 20px;
                position: fixed;
                width: 81%;
                left: 18.1%;
                background-color: #F8F9FA;
                z-index: 100;
            }
                
            .major {
                background-color: #F8F9FA;
                height: auto;
                margin-left: 17vw;
                width: 82.8%;
                top: 8.2vh;
                position: relative;
                font-size: 13px;
                font-weight: lighter; /* Updated font weight to lighter */
                
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
                    background-color: blue;
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
                        height: 4.5vw;
                        border: 1px solid #D5E0F1;
                        font-size: 11px;
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
                        span{

                        }
                    }
                }
            }
        
        }


    }
`



const Dashboard = () => {
    return ( 
        <Container>
        <div className="general">
            <div className="main">
                <div className="sidebar">
                    <div className="logo">
                        <img src={Logo} />Pro Manager</div>
                    <div className="h2">
                        <l><GrProjects></GrProjects> Dashboard</l>
                        <l> <LiaProjectDiagramSolid></LiaProjectDiagramSolid> Projects</l>
                        <l><IoMdSettings></IoMdSettings> Settings</l>
                    </div>
                    
                </div>
                    <div className="profile">profile here</div>
                <div className="major">
                    <div className="span">
                      <h1>Welcome, Tom Hanks</h1>  
                    <div className="projects">

                        <div>
                        <LiaProjectDiagramSolid></LiaProjectDiagramSolid>
                        </div>
                        <span>
                            12 Projects
                        </span>
                    </div>

                    <div className="contents">
                        <span>
                            Projects
                        </span>
                        <div>
                            <h2>Personal project</h2>
                            <span>
                            <button>
                                Message Board
                            </button>
                            {/* <button></button> */}
                            </span>
                        </div>

                        <div>
                            <h2>Work and School</h2>
                            <span>
                            <button>
                                Message Board
                            </button>
                            {/* <button></button> */}
                            </span>
                        </div>

                        <div>
                            <h2>Research</h2>
                            <span>
                            <button> Message Board</button>
                            {/* <button></button> */}
                            </span>
                        </div>
                        
                        
                    </div>
                </div>
                </div>
            </div>
        </div>
        </Container>
     );
        
}
 
export default Dashboard;