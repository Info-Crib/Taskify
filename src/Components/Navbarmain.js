import { styled } from "styled-components"
import Logo from "../Images/Logo_Header.png"

import {FaRegUser} from "react-icons/fa"
import {BiSolidDownArrow} from "react-icons/bi"

const Container = styled.div`
  position: sticky;
  z-index: 5;
        top: 0;
       nav{
      background-color: #F8F9FA;
        width: 99.9%;
        height: 11vh;
        border-bottom: 1px solid #d8e1ef;
       
        .content{
          display:flex;
          justify-content:space-between;
          align-items:center;
           padding-inline: 20px;
          figure{
            height: auto;
            img{
              width: 50%;
              height: 50%;
              position: relative;
            }
          
          }
          .icons{
            ul{
            display:flex;
            align-items: center;
            gap: 10px;
            li{
              list-style: none;
              

            }
            li:nth-child(1){
              color: #ff8b02;
              background-color: #d8e1ef;
              padding: 8px 12px;
              border-radius: 50%;
              justify-content: center;
            }
            li:nth-child(2){
              color: black;
              font-size: 10px;
            }
            }
          }
        }
       }
`

const Navbarmain = () => {
  return (
    <Container>

          <nav>
            <div className="content">
              <figure>
                <img src={Logo} alt="logo"/>
              </figure>

              <div className="icons">
                <ul>
                  <li><FaRegUser /></li>
                  <li><BiSolidDownArrow /></li>
                </ul>
              </div>
            </div>
          </nav>
      
    </Container>
  )
}

export default Navbarmain;
