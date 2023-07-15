import styled from "styled-components";
import {TbEdit} from "react-icons/tb"; 
const Container = styled.div`
  .contain {
    height: auto;
    box-shadow: 0 0 10px #00000026;
    border-radius: 10px;
    background-color: white;
    width: 100%;
    padding-bottom: 20px;
    section:nth-child(1) {
      display: flex;
      justify-content: space-between;
      padding-top: 15px;
      align-items: center;
      margin-top: 35px;
      margin-bottom: 30px;
      padding-inline: 15px;
      span {
        font-size: 15px;
        font-weight: 700;
        margin-right: 20px;
      }

      button {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 20px;
        background-color: white;
        padding-inline: 20px;
        padding-block: 10px;
        border: 1px solid  #ffc107;
        border-radius: 7px;

        font-size: 14px;
        font-weight: light;
        cursor: pointer;
        color: black;
        &:hover {
          color: black;
          background-color: #ffc107;
        }
      }
    }
    section:nth-child(2) {
      select {
        width: 97%;
        height: 50px;
        border-radius: 7px;
       padding-inline: 10px;
       padding-right: 10px;
        border: 1px solid  #ffc107;
        background-color: #fffcf9;
        display: flex;
        justify-content: center;
        outline: none;
        margin: auto;
        margin-bottom: 30px;
      }
    }
    section:nth-child(3) {
      display: flex;
      justify-content: center;
      
     main{
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-left: 10px;
      padding-right: 50px;
      width: 90%;
        height: 78px;
        border-radius: 7px;
        border: 1px solid #d8e1ef;
        .sec1{
          display: flex;
          align-items: center;
          gap: 10px;
          button{
            color: white;
            cursor: pointer;
          }
          button:nth-child(1){
            background-color: #001935;
            padding: 15px 25px;
            outline: none;
            border-radius: 7px;
            border: none;
          &:hover{
            background-color: #ff8a00;
          }
          }
          button:nth-child(2){
            background-color: #ff8a00;
            outline: none;
            border: none;
            border-radius: 7px;
            padding: 15px 18px;
            &:hover{
              background-color: #001935;
            }
          }
          button:nth-child(3){
            background-color: #fff1e4;
            color: #ff8a00;
            height: 27px;
            padding: 0px 5px;
            outline: none;
            border: none;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 19px;
            font-weight: 400;
            border-radius: 7px;
            &:hover{
              background-color: #ff8a00;
              color: white;
            }
          }
        }
     }
  }

}
`;

const Listproject = () => {
  return (
    <Container>
      <div className="contain">
        <section>
          <span>List Project</span>

          <button>New Project</button>
        </section>
        <section>
          <select id="cars">
            <option value="Active" selected>Active</option>
            <option value="Complete">Complete</option>
            <option value="Archirved">Archirved</option>
            
          </select>
        </section>
        <section>
          <main>
            <strong>Personal Tasks</strong>
             <div className="sec1">
              <button>Message Board</button>
              <button>Task</button>
              <button><TbEdit /></button>
             </div>
          </main>
        </section>
      </div>
    </Container>
  );
};

export default Listproject;
