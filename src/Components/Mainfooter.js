import { styled } from "styled-components"


const Container = styled.div`
 /* position: sticky;
  z-index: 100;
        top: 0; */
footer{
   .container{
    background-color: #ff8a00;
    color: #fff;
    width: 100%;
    height: 8vh;
  display: flex;
  align-items: center;
     gap: 10px;
   justify-content: space-evenly;
   span{
    font-size: 12px;
    color: #fff;
   }
   strong{
    font-size: 15px;
    color: #fff;
   }
}
}

`

const Mainfooter = () => {
  return (
    <Container>
        <footer>
            <div className="container">
            <span>Copyright © 2022 </span>
            <strong>Project Management tools</strong>
            <span> All Rights Reserved</span>
            </div>
        </footer>
      
    </Container>
  )
}

export default Mainfooter
