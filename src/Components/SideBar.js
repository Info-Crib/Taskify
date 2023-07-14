import styled from "styled-components";


const Container = styled.div`

    .general{
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
        }
`

const Sidebar = () => {
    return ( 

        <Container>
            <div className="general">

        <div className="sidebar">
        <div className="logo">logo here</div>
        <div className="h2">
            <h3>Dashboard</h3>
            <h3>Projects</h3>
            <h3>Settings</h3>
        </div>
        
    </div>
        <div className="profile">profile here</div>
            </div>
        </Container>
     );
}
 
export default Sidebar;