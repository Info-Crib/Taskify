import styled from 'styled-components'


const Container = styled.div`
.contain{
  height: 100vh;
   box-shadow: 0 0 10px #00000026;
   border-radius: 10px;
   background-color: white;
   width: 100%;
  section:nth-child(1){
             display: flex;
            justify-content: space-between;
            padding-top: 10px;
            align-items: center;
            margin-top: 30px;
            span{
              font-size: 20px;
               font-weight: bold;
               margin-right: 20px;
               }
           
            button{
              display: flex;
              align-items: center;
              justify-content: center;
              margin-right: 20px;
              gap: 20px;
              background-color: white;
              padding-inline: 20px;
              padding-block: 10px;
              border: 1px solid #ff8a00;
              border-radius: 10px;
           
             
                font-size: 14px;
                font-weight: light;
                cursor: pointer;
                color: black;
                &:hover{
               color: #ff8a00;
                }
              
            }
  }
}
`

const Listproject = () => {
  return (
    <Container>
    <div className="contain">
     <section>
           <span>
             List  Project
              </span>
              
            <button>New Project</button>
     </section>
     <section></section>
     <section></section>
    </div>
    </Container>
  )
}

export default Listproject
