import styled from "styled-components";
import iconn from "../Images/icon.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Container = styled.div`
  position: fixed;
  z-index: 100;
  top: 0;
  width: 100%;

  .general {
    a {
      text-decoration: none;
    }

    div.header {
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid;
      border-color: #e8e8e8;
      width: auto;
      height: 80px;
      align-items: center;
      background-color: #f8f9fa;
      margin: 0px 0px 8px 0px;

      box-shadow: 3px 7px 9px -6px rgba(0, 0, 0, 0.43);
      -webkit-box-shadow: 3px 7px 9px -6px rgba(0, 0, 0, 0.43);
      -moz-box-shadow: 3px 7px 9px -6px rgba(0, 0, 0, 0.43);

      .logo {
        display: flex;
        justify-content: center;
        align-items: center;

        a {
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          gap: 10px;
        }

        img {
          width: 50px;
          height: 50px;
          margin: 0;
        }
        h3 {
          margin: 0;
          text-align: center;
          font-weight: 600;
          /* font-family: Verdana, Geneva, Tahoma, sans-serif; */
          font-size: 20px;
          color: #ff8a00;
        }
      }

      div {
        display: flex;
        justify-content: center;
        /* border: 1px solid green; */
        width: 30%;
        height: auto;
        gap: 20px;

        button {
          font-size: 16px;
          height: 47px;
          width: fit-content;
          padding: 12px 20px;
          display: flex;
          text-align: center;
          align-items: center;
          /* margin: auto; */
          justify-content: center;
          border-radius: 10px;
          border: none;
          color: white;
          cursor: pointer;
        }

        .bt1 {
          background-color: #001935;
        }

        .bt1:hover {
          background-color: #ff8a00;
        }
        .bt2 {
          background-color: #ff8a00;
        }
        .bt2:hover {
          background-color: #001935;
        }
      }
    }
  }

  @media (max-width: 766px) {
    .general {
      a {
        text-decoration: none;
      }

      div.header {
        display: flex;
        justify-content: stretch;
        border-bottom: 1px solid;
        border-color: #e8e8e8;
        width: auto;
        height: 80px;
        align-items: center;
        background-color: #f8f9fa;
        margin: 0px 0px 0px 0px;

        box-shadow: 3px 7px 9px -6px rgba(0, 0, 0, 0.43);
        -webkit-box-shadow: 3px 7px 9px -6px rgba(0, 0, 0, 0.43);
        -moz-box-shadow: 3px 7px 9px -6px rgba(0, 0, 0, 0.43);

        .logo {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-right: 30%;

          a {
            display: flex;
            align-items: center;
            justify-content: center;
            text-decoration: none;
            gap: 10px;
          }

          img {
            width: 45px;
            height: 45px;
            margin: 0;
          }
          h3 {
            display: none;
            margin: 0;
            text-align: center;
            font-weight: 600;
            /* font-family: Verdana, Geneva, Tahoma, sans-serif; */
            font-size: 20px;
            color: #ff8a00;
          }
        }

        div {
          display: flex;
          justify-content: center;
          /* border: 1px solid green; */
          width: 30%;
          height: auto;
          gap: 10px;

          button {
            font-size: 15px;
            height: 40px;
            width: fit-content;
            padding: 10px 15px;
            display: flex;
            text-align: center;
            align-items: center;
            /* margin: auto; */
            justify-content: center;
            border-radius: 10px;
            border: none;
            color: white;
            cursor: pointer;
          }

          .bt1 {
            background-color: #001935;
          }

          .bt1:hover {
            background-color: #ff8a00;
          }
          .bt2 {
            background-color: #ff8a00;
          }
          .bt2:hover {
            background-color: #001935;
          }
        }
      }
    }
  }
`;
const Header = () => {
  const Navigate = useNavigate();
  const handleClick1 = () => {
    setTimeout(() => {
      Navigate("/login");
    }, 300);
  };
  const handleClick2 = () => {
    setTimeout(() => {
      Navigate("/register");
    }, 300);
  };

  return (
    <Container>
      <div className="general">
        <div className="header">
          <div className="logo">
            <Link to="/">
              <img src={iconn} /> <h3>Pro Manager</h3>
            </Link>
          </div>

          <div>
            <button className="bt1" onClick={handleClick1}>
              Login
            </button>
            <button className="bt2" onClick={handleClick2}>
              Register
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Header;
