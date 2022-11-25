import React from "react";
import axios from "axios";
import { decodeToken } from "react-jwt";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";
import { Row, Container } from "react-bootstrap";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Profile = () => {
  const navigate = useNavigate();
  // const [data, setData] = React.useState({});
  const [loading, setLoading] = React.useState(false);

  // const populateProfile = useCallback(async () => {
  //   const res = await axios.get("http://localhost:1339/api/user/getDetails", {
  //     headers: {
  //       "astellar-headers": localStorage.getItem("jwt"),
  //     },
  //   });
  //   // console.log(res);
  //   if (res.status > 400) {
  //     return {
  //       success: false,
  //       data: null,
  //     };
  //   }
  //   return {
  //     success: true,
  //     data: {
  //       u1: res.data["u1"].toUpperCase(),
  //       atLevel: res.data["atlevel"],
  //       teamName: res.data["teamname"].toUpperCase(),
  //     },
  //   };
  // }, []);

  // React.useEffect(() => {
  //   async function getData() {
  //     const token = localStorage.getItem("jwt");
  //     // console.log(token);
  //     if (token) {
  //       const team = decodeToken(token);
  //       if (!team) {
  //         localStorage.removeItem("jwt");
  //         navigate("/login");
  //       } else {
  //         const res = await populateProfile();
  //         setData(res.data);
  //       }
  //     } else {
  //       navigate("/login");
  //     }
  //     setLoading(false);
  //   }

  //   setLoading(true);
  //   getData();
  // }, [navigate, populateProfile]);
  const data = { userName: "HELLO APPAREL" };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Chart.js Bar Chart",
      },
    },
  };
  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];

  const interdata = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Dataset 2",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  if (loading && !data) return <h2>loading</h2>;
  // return <h1>{JSON.stringify(data)}</h1>;
  return (
    <Container fluid className="sponsor-section" id="about">
      <Container>
        <h1
          style={{
            paddingTop: "7rem",
            fontSize: "2.5rem",
            fontWeight: "600",
            letterSpacing: "0.5rem",
            paddingBottom: "3rem",
          }}
        >
          <span className="purple"> {data.userName} </span>
        </h1>
        <Row>
          <div>
            <h1
              style={{
                fontSize: "1.5rem",
                fontWeight: "600",
                letterSpacing: "0.1rem",
                paddingBottom: "0.7rem",
              }}
            >
              <span className="purple" style={{ marginBottom: "11rem" }}>
                {" "}
                PROFILE{" "}
              </span>
            </h1>
            <div
              className="gallery"
              style={{
                paddingTop: "1rem",
                justifyContent: "left",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <span style={{ padding: "2rem 0 2rem 0" }}>
                <Bar options={options} data={interdata} />
                {/* <span className="purple" style={{ fontSize: "1.1rem" }}>
                  {" "}
                  Username :{" "}
                </span>
                <span
                  style={{
                    fontSize: "1.1rem",
                    color: "white",
                    fontWeight: "600",
                    paddingLeft: "2rem",
                  }}
                >
                  {data.u1}
                </span>
              </span>
              <span style={{ padding: "2rem 0 2rem 0" }}>
                <span className="purple" style={{ fontSize: "1.1rem" }}>
                  {" "}
                  Tier :Free{" "}
                </span>
                <span
                  style={{
                    fontSize: "1.1rem",
                    color: "white",
                    fontWeight: "600",
                    paddingLeft: "2rem",
                  }}
                >
                  {data.atLevel}
                </span> */}
              </span>
            </div>
          </div>
        </Row>
      </Container>
    </Container>
  );
};

export default Profile;
