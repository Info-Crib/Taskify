import styled from "styled-components";


const Container = styled.div`

    .general{
        .main{
            display: grid;
            grid-template-columns: 2fr;
            grid-template-rows: auto;
            height: 100vh;
            position: relative;
            
            .sidebar{
                border: 1px solid;
                height: 100%;
                background-color: #FFF1E4;
                font-size: 16px;
                position: fixed;
                width: 18%;
                z-index: 100;
                .h2{
                    margin-inline-start: 40px;
                    margin-block-start: 40px;

                }

                .logo{
                    border-bottom: 1px solid;
                    height: 8%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background-color: #F8F9FA;
                }
            }
            .profile{
                border-bottom: 1px solid;
                height: 8.2vh;
                display: flex;
                align-items: center;
                justify-content: end;
                padding-inline-end: 20px;
                position: fixed;
                width: 82%;
                left: 18%;
                background-color: #F8F9FA;
                z-index: 100;
            }
                
            .major{
                    background-color: #F8F9FA;
                    height: auto;
                    margin-left: 17vw;
                    width: 83%;
                    top: 8.2vh;
                    position: relative;
                    
                    .span{
                        border: 1px solid red;
                        padding: 20px;
                        display: flex;
                        flex-direction: column;
                        gap: 10px;
                        margin: 10px;

                    }

                .projects{
                    height: 6.5vw;
                    background-color: blue;
                    border: 1px solid;
                    border-radius: 10px;
                    width: 16vw;
                    display: flex;
                    align-items: center;

                    div{
                        margin: 10px;
                        border: 1px solid;
                        height: 70px;
                        width: 70px;
                        border-radius:50%;
                        background-color: white;
                    }
                }

                .contents{
                    border: 1px solid;
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                    height: auto;

                    div{
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        border-radius: 10px;
                        padding-inline: 10px;
                        height: 4.5vw;
                        border: 1px solid green;
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
                    <div className="logo">logo here</div>
                    <div className="h2">
                        <h3>Dashboard</h3>
                        <h3>Projects</h3>
                        <h3>Settings</h3>
                    </div>
                    
                </div>
                    <div className="profile">profile here</div>
                <div className="major">
                    <div className="span">
                      <h1>Welcome, Tom Hanks</h1>  
                    <div className="projects">
                        <div>

                        </div>
                    </div>

                    <div className="contents">
                        <div>
                            <h2>Personal project</h2>
                            <span>
                            <button></button>
                            <button></button>
                            </span>
                        </div>

                        <div>
                            <h2>Work and School</h2>
                            <span>
                            <button></button>
                            <button></button>
                            </span>
                        </div>

                        <div>
                            <h2>Research</h2>
                            <span>
                            <button></button>
                            <button></button>
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