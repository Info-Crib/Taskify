import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import styled from "styled-components";
import Intro from "../../Components/Intro";
import { Link } from "react-router-dom";
import {FcGoogle} from "react-icons/fc"
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth, googleProvider } from "../../Config/firebase";
import { createUserWithEmailAndPassword, signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
import toast, { Toaster } from 'react-hot-toast';
import { useUserAuth } from "../../context/Userauth";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../Config/firebase";
const Container = styled.div`
 position: relative;

 .general{
   .sec1 {
    background-color: #f8f9fa;
    margin: 0;
    padding: 80px 0px 90px 0px;
    display: flex;
    flex-direction: column;
    position: relative;

    div.first {
      background-color: #ff8a00; //write a javascript function?
      padding: 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: #fff;
      height: 30vh;
      margin-top: 0px;
      padding-top: 0px;

      h3 {
        font-size: 50px;
        font-weight: 200;
        margin-top: -20px;
      }

      .dialogue {
        display: flex;
        align-items: center;
         /* justify-content: center;  */
        flex-direction: column;
        padding-top: 2%;
        border: 1px solid ;
        border-color: #F1F1F1;
        border-radius: 30px;
        height: 100vh;
        width: 75vh;
        top: 40vh;
        position: absolute;
        background-color: #fff;

        button{
          height: 60px;
          width: 90%;
          border-radius: 10px;
          border: 1px solid;
          border-color: #98A1AD;
          font-size: 18px;
          font-weight: 600;
          font-family: inherit;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;

        }
        button:hover{
          cursor: pointer;
        }
        button.submit{
          background-color:#001935 ;
          width: 100%;
          font-size: 17px;
          margin-top: 03%;
          color: #fff;
          
        }
        button.submit:hover{
          cursor: pointer;
          background-color: #ff8a00;
          transition: ease-in-out 0.1s;
        }

        h4{
          color: #2F444E;
          display: flex;
          gap: 5px;
          align-items: center;
          hr{
            width: 215px;
            height: 0px;
          }
        }
      

        form {
           /* border: 1px solid red;  */
          padding: 0px;
          display: flex;
          flex-direction: column;
          gap: 30px;
          margin: 0px;
          padding-top: 10px; 
          align-items: center;
           /* justify-content: center;  */
          height: 70%;
          width: 95%;

          span{
             /* border: 1px solid black;  */
            width: inherit;
            display: flex;
            flex-direction: column;
            align-items: start;
            
            h4{
              margin: 5px;
              margin-left: 0px;
              font-size: 14px;
               /* position: relative;
              left: -35%;  */
            }
          }
          
          span.line{
            padding-left: 3%;

            p{
                margin: 0px;
                margin-left: 05px;
                font-size: 10px;
                color: red;
                font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;

            }
            p.valid-email{
                color: green;
            }
          }
          span.submit{
            display: flex;
            flex-direction: column;
            align-items: baseline;
            justify-content: center;
            align-items: center;
            margin-top: 2%;
            gap: 5px;

            a{
              text-decoration: none;
              color: #ff8a00;
            }
            a:hover{
              color: #ff1a11;
            }
          
          }
          input {
            height: 40px;
            width: 95%;
            border-radius: 10px;
            overflow: hidden;
            outline: none;
            border: 1px solid #ff8a00;
            opacity: 80%;
            padding-left:10px ;
            font-family: inherit;
            font-size:1rem!important;

            }
          }
        }
      }
    }
  .sec2 {
    background-color: #f8f9fa;
    height: 75vh;
  }

 }
 

 @media (max-width: 1115px){
  
  .general{
   
   .sec1 {
    background-color: #f8f9fa;
    margin: 0;
    padding: 80px 0px 90px 0px;
    display: flex;
    flex-direction: column;
    position: relative;

    div.first {
      background-color: #ff8a00; //write a javascript function?
      padding: 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: #fff;
      height: 25vw;
      margin-top: 0px;
      padding-top: 0px;

      h3 {
        font-size: 50px;
        font-weight: 200;
        margin-top: -20px;
      }

      .dialogue {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding-block: 5vw;
        border: 1px solid ;
        border-color: #F1F1F1;
        border-radius: 30px;
        height: auto;
        width: 65vw;
        top: 30vw;
        position: absolute;
        background-color: #fff;

        button{
          height: 60px;
          width: 90%;
          border-radius: 10px;
          border: none;
          border-color: #98A1AD;
          font-size: 18px;
          font-weight: 600;
          font-family: inherit;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;

        }
        button:hover{
          cursor: pointer;
        }
        button.submit{
          background-color:#001935 ;
          width: 100%;
          font-size: 17px;
          margin-top: 03%;
          color: #fff;
          
        }
        button.submit:hover{
          cursor: pointer;
          background-color: #ff8a00;
          transition: ease-in-out 0.1s;
        }

        h4{
          color: #2F444E;
          display: flex;
          gap: 5px;
          align-items: center;
          hr{
            width: 215px;
            height: 0px;
          }
        }
      

        form {
           /* border: 1px solid red;  */
          padding: 0px;
          display: flex;
          flex-direction: column;
          gap: 35px;
          margin: 0px;
          padding-top: 10px; 
          align-items: center;
           justify-content: center; 
          height: 70%;
          width: 95%;

          span{
             /* border: 1px solid black;  */
            width: inherit;
            display: flex;
            flex-direction: column;
            align-items: start;
            
            h4{
              margin: 5px;
              margin-left: 0px;
              font-size: 14px;
               /* position: relative;
              left: -35%;  */
            }
          }
          
          span.line{
            width: fit-content;
            padding: 0px;
            display: flex;
            align-items: start;
            p{
                margin: 0px;
                margin-left: 05px;
                font-size: 10px;
                color: red;
                font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;

            }
            p.valid-email{
                color: green;
            }
          }
          span.submit{
            display: flex;
            flex-direction: column;
            align-items: baseline;
            justify-content: center;
            align-items: center;
            margin-top: 0%;
            gap: 5px;

            a{
              text-decoration: none;
              color: #ff8a00;
            }
            a:hover{
              color: #ff1a11;
            }
          
          }
          input {
            height: 40px;
            width: 50vw;
            border-radius: 10px;
            overflow: hidden;
            outline: none;
            border: 1px solid #ff8a00;
            opacity: 80%;
            padding-left:10px ;
            font-family: inherit;
            font-size:1rem!important;

            }
          }
        }
      }
    }
  .sec2 {
    background-color: #f8f9fa;
    height: 72vw;
  }

 }
 }

 @media (max-width: 766px){
  .general{
   
   .sec1 {
    background-color: #f8f9fa;
    margin: 0;
    padding: 80px 0px 90px 0px;
    display: flex;
    flex-direction: column;
    position: relative;
    width: auto;
    height: 40vw;

    div.first {
      background-color: #ff8a00; //write a javascript function?
      padding: 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: #fff;
      height: 50vw;
      margin-top: 0px;
      padding-top: 0px;

      h3 {
        font-size: 30px;
        font-weight: 200;
        margin-top: 0px;
      }

      .dialogue {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding-top: 05%;
        border: 1px solid ;
        border-color: #F1F1F1;
        border-radius: 30px;
        height: auto;
        width: 85vw;
        top: 50vw;
        position: absolute;
        background-color: #fff;

        button{
          height: 55px;
          width: 70%;
          border-radius: 10px;
          border: none;
          border-color: #98A1AD;
          font-size: 18px;
          font-weight: 600;
          font-family: inherit;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;

        }
        button:hover{
          cursor: pointer;
        }
        button.submit{
          background-color:#001935 ;
          width: 100%;
          font-size: 17px;
          margin-top: 03%;
          color: #fff;
          
        }
        button.submit:hover{
          cursor: pointer;
          background-color: #ff8a00;
          transition: ease-in-out 0.1s;
        }

        /* h4{
          color: #2F444E;
          display: flex;
          gap: 5px;
          align-items: center;
          hr{
            width: 215px;
            height: 0px;
          }
        }
       */

        form {
           /* border: 1px solid red;  */
          padding: 0px;
          display: flex;
          flex-direction: column;
          gap: 20px;
          margin: 0px;
          padding-top: 10px; 
          align-items: center;
           justify-content: center; 
          height: 70%;
          width: 65vw;

          span{
             /* border: 1px solid black;  */
            width: inherit;
            display: flex;
            flex-direction: column;
            align-items: start;
            padding: 0px;
            
            h4{
              margin: 5px;
              margin-left: 0px;
              font-size: 14px;
               /* position: relative;
              left: -35%;  */
            }
          }
          
          span.line{
           /* padding-left: 3%; */
            p{
                margin: 0px;
                margin-left: 05px;
                font-size: 10px;
                color: red;
                font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;

            }
            p.valid-email{
                color: green;
            }
          }
          span.submit{
            display: flex;
            flex-direction: column;
            align-items: baseline;
            justify-content: center;
            align-items: center;
            margin-top: 0%;
            gap: 5px;

            a{
              text-decoration: none;
              color: #ff8a00;
            }
            a:hover{
              color: #ff1a11;
            }
          
          }
          input {
            height: 40px;
            width: 65vw;
            border-radius: 10px;
            overflow: hidden;
            outline: none;
            border: 1px solid #ff8a00;
            opacity: 80%;
            font-family: inherit;
            font-size:1rem!important;
            margin: 0px;

            }
          }
        }
      }
    }
  .sec2 {
    background-color: #f8f9fa;
    height: 95vw;
  }

 }
 }
 @media (max-width: 364px){
  .general{
   
   .sec1 {
    background-color: #f8f9fa;
    margin: 0;
    padding: 80px 0px 90px 0px;
    display: flex;
    flex-direction: column;
    position: relative;
    width: auto;
    height: 33vw;

    div.first {
      background-color: #ff8a00; //write a javascript function?
      padding: 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: #fff;
      height: 52vw;
      margin-top: 0px;
      padding-top: 0px;

      h3 {
        font-size: 30px;
        font-weight: 200;
        margin-top: -20px;
      }

      .dialogue {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding-top: 05%;
        border: 1px solid ;
        border-color: #F1F1F1;
        border-radius: 30px;
        height: auto;
        width: 85vw;
        top: 40vw;
        position: absolute;
        background-color: #fff;

        button{
          height: 55px;
          width: 70%;
          border-radius: 10px;
          border: none;
          border-color: #98A1AD;
          font-size: 18px;
          font-weight: 600;
          font-family: inherit;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;

        }
        button:hover{
          cursor: pointer;
        }
        button.submit{
          background-color:#001935 ;
          width: 100%;
          font-size: 17px;
          margin-top: 03%;
          color: #fff;
          
        }
        button.submit:hover{
          cursor: pointer;
          background-color: #ff8a00;
          transition: ease-in-out 0.1s;
        }

        /* h4{
          color: #2F444E;
          display: flex;
          gap: 5px;
          align-items: center;
          hr{
            width: 215px;
            height: 0px;
          }
        }
       */

        form {
           /* border: 1px solid red;  */
          padding: 0px;
          display: flex;
          flex-direction: column;
          gap: 20px;
          margin: 0px;
          padding-top: 10px; 
          align-items: center;
           justify-content: center; 
          height: 70%;
          width: 65vw;

          span{
             /* border: 1px solid black;  */
            width: inherit;
            display: flex;
            flex-direction: column;
            align-items: start;
            padding: 0px;
            
            h4{
              margin: 5px;
              margin-left: 0px;
              font-size: 14px;
               /* position: relative;
              left: -35%;  */
            }
          }
          
          span.line{
           /* padding-left: 3%; */
            p{
                margin: 0px;
                margin-left: 05px;
                font-size: 10px;
                color: red;
                font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;

            }
            p.valid-email{
                color: green;
            }
          }
          span.submit{
            display: flex;
            flex-direction: column;
            align-items: baseline;
            justify-content: center;
            align-items: center;
            margin-top: 0%;
            gap: 5px;

            a{
              text-decoration: none;
              color: #ff8a00;
            }
            a:hover{
              color: #ff1a11;
            }
          
          }
          input {
            height: 40px;
            width: 65vw;
            border-radius: 10px;
            overflow: hidden;
            outline: none;
            border: 1px solid #ff8a00;
            opacity: 80%;
            font-family: inherit;
            font-size:1rem!important;
            margin: 0px;

            }
          }
        }
      }
    }
  .sec2 {
    background-color: #f8f9fa;
    height: 110vw;
  }

 }
 }
`




const Register = () => {
  const  {displayName, setFullName, Email, setEmail,password, setPassword,company, setCompany,currentUser,Userinfo,updateUserInfo} = useUserAuth();

  const Navigate = useNavigate();
    const [isValid, setIsValid] = useState(false);
    
    const [Error, setError] = useState("");


    // const handleEmailChange = (e) => {
    //   const inputEmail = e.target.value;
    //   setEmail(inputEmail);
    //   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    //   setIsValid(emailRegex.test(inputEmail));
    // };

  
  

    console.log(auth?.currentUser?.email);


    const getFirebaseErrorCode = (error) => {
      if (error.code) {
        // Split the error message to extract the specific error code
        const errorCode = error.code.split('/')[1];
        return errorCode;
      }
      return 'Unknown error';
    };

  
  
    const signUp = async (e) =>{
      e.preventDefault()
      let toasting =   toast.loading('creating account...');
      try {
      const   userCredential = await createUserWithEmailAndPassword(auth,Email, password);
      console.log(currentUser)
      const user = userCredential.user;

      // After creating the account, store the user's additional information in Firestore
      const userData = {
        uid: user.uid,
        displayName,
        Email,
        company,
      };

      updateUserInfo(userData);
      console.log(Userinfo)
      // After creating the account, store the username in Firestore or Realtime Database
      
   
      // await setDoc(doc(db, "cities", "LA"), {
      //   name: "Los Angeles",
      //   state: "CA",
      //   country: "USA"
      // });
        await setDoc(doc(db, "users", userCredential.user.uid), {
          uid: userCredential.user.uid,
          displayName, 
         Email,
         company,
        });
        
         if(userCredential){

           let toas =  toast.success('Successfully created!',{   position: "top-center", duration: 4000});
           toast.dismiss(toasting)
           setTimeout(()=>{
             toast.dismiss(toas)
             Navigate("/login");
               

             },2000)
         }else{
        
         }
      

        } catch (error) {
          // alert("error");
          toast.error(`${getFirebaseErrorCode(error)}`,{   position: "top-center", duration: 4000});
          toast.dismiss(toasting)
          console.log(error)
        }
    };

    const signInWithGoogle = async () => {
        try {
        const userCredential =    await signInWithPopup(auth, googleProvider);
        const user = userCredential.user;

        // After creating the account, store the user's additional information in Firestore
        const userData = {
          uid: user.uid,
          displayName: user.displayName,
         Email:  user.email,
          company: "",
        };
  
        updateUserInfo(userData);
          await setDoc(doc(db, "users", userCredential.user.uid), {
            uid: userCredential.user.uid,
            displayName : user.displayName, 
           Email:  user.email,
            company: "",
          });
          Navigate("/dashboard");
        } catch (error) {
          toast.error(`${getFirebaseErrorCode(error)}`,{   position: "top-center", duration: 4000});
          console.log(error)
        }
    };
  

    return (
        <Container>
        <Header></Header>

        <div className="general">
        <Toaster
                        position="top-center"
                        reverseOrder={false}
                        
                    />

       
        <section className="sec1">
          <Intro></Intro>
          <div className="first">
            <h3>
              <b>Create your account</b>
            </h3>
            <div className="dialogue">
            <button
              onClick={signInWithGoogle}
            > <FcGoogle style={
            {
              fontSize: "30px"
            }
          }></FcGoogle>Continue With Google</button>
              <h4><hr />or <hr /></h4>
              <form action="submit" onSubmit={signUp}>
                <span className="line">
                  <h4>FullName *</h4>
                  <label htmlFor="text"></label>
                  <input type="text" id="name" placeholder="Enter Name"  onChange={(e)=>{
                      setFullName(e.target.value) ;

                    }} required />
                </span>
  
                <span className="line">
                  <h4>Email *</h4>
                  <label htmlFor="email"></label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter Email"
                    value={Email}
                    onChange={(e)=>{
                      setEmail(e.target.value) ;

                    }}
                    required
                    noValidate
                  />
                  {/* {isValid ? (
                    <p className="valid-email">Valid email address!</p>
                  ) : (
                    <p className="invalid-email">Invalid email address!</p>
                  )} */}
                </span>
                  <span className="line">
                    <h4>Password  *</h4>
                    <label htmlFor="pass"></label>
                    <input 
                    type="password" 
                    id="pass" 
                    placeholder="Enter Password" 
                    required
                    onChange={(e)=>{
                      setPassword(e.target.value)
                    }}
                    />
                  </span>

                <span className="line">
                    <h4>Company Name  *</h4>
                    <label htmlFor="email"></label>
                    <input type="text" id="text" placeholder="Enter Company" required onChange={(e)=>setCompany(e.target.value)}/>   
                  </span>
                <span className="submit" onClick={signUp}>
                  <button className="submit">Submit</button>
  
                 <h4>Already Have an Account? <Link to="/login">
                 <b>Sign In</b>
                 </Link>  </h4>
                </span>
                
              </form>
            </div>
          </div>
        </section>
        <section className="sec2"></section>
        </div>
        <Footer></Footer>
      </Container>
     );
}
 
export default Register;