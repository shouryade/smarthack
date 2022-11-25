import React, { useState } from "react";
import { Button, Container, Row } from "react-bootstrap";
import "./login.css";
import FormInput from "./FormInput";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    teamname: "",
    password: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      required: true,
      autocomplete: "off",
      pattern: "^[A-Za-z0-9]{3,16}$",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      placeholder: "username",
      label: "Enter Username",
    },
    {
      id: 2,
      name: "password",
      type: "password",
      autocomplete: "off",
      required: true,
      errorMessage:
        "Password should be atleast 6-16 characters and must include atleast 1 letter, 1 number and 1 special character ",
      placeholder: "Password",
      label: "Enter password",
    },
  ];
  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData(e.target);
    const payload = JSON.stringify(Object.fromEntries(data.entries()));
    const myObj = JSON.parse(payload);
    axios
      .post("http://localhost:1339/api/user/signin/", {
        username: myObj.username,
        password: myObj.password,
      })
      .then((result) => {
        toast.success(" Successful Login!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        localStorage.setItem("jwt", result.data.access_token);
        navigate("/dashboard");
      })
      .catch((err) => {
        var msg = "";
        if (typeof err.response == "undefined") {
          msg = "Server error, please try again!";
        } else {
          msg = err.response.data.errors[0].msg;
        }
        toast.error(msg, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Container fluid className="sponsor-section" id="about">
        <Container>
          <h1
            style={{
              fontSize: "2.5rem",
              fontWeight: "600",
              letterSpacing: "0.5rem",
              paddingBottom: "3rem",
              paddingTop: "7rem",
            }}
          >
            <span className="purple"> LOGIN </span>
          </h1>
          <Row>
            <div className="form-gallery">
              <form onSubmit={handleSubmit} className="form-content">
                {inputs.map((input) => (
                  <FormInput
                    key={input.id}
                    {...input}
                    value={values[input.name]}
                    onChange={onChange}
                  />
                ))}
                <style type="text/css">
                  {`
    .btn-outline-light:hover{
      color: white;}
      .btn-outline-light:active{
        color:green;
      }    
    `}
                </style>
                <div
                  className="g-recaptcha"
                  data-sitekey="6Ld2Cf0fAAAAAGUlXmCKZBT8j6cG0Dk5kb7qzriZ"
                ></div>
                <Button
                  variant="outline-light"
                  type="submit"
                  style={{
                    display: "flex",
                    fontSize: "1.5rem",
                    width: "auto",
                    height: "auto",
                    background: "none",
                    marginTop: "3rem",
                    marginBottom: "3rem",
                    justifyContent: "center",
                    align: "center",
                  }}
                >
                  Login !
                </Button>{" "}
              </form>
            </div>
          </Row>
        </Container>
      </Container>
      <ToastContainer />
    </>
  );
}
