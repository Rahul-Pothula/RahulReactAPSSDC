import React from "react";
import { useParams } from "react-router-dom";

import "./resume.style.scss";

const Resume = ({ users }) => {
  const { id } = useParams();

  const user = users.find((a) => {
    return a.id === +id;
  });

  if (user) {
    const {
      name,
      phone,
      company,
      address: { city },
    } = user;

    console.log(id, user, users);

    return (
      <div className="text-center">
        <div>
          <h1>Resume of {name}:</h1>
          <br />
          <h2>name: {name}</h2>
          <h3>phone no.{phone}</h3>
          <h3>city: {city}</h3>
        </div>
        <table class="table table-hover table-dark">
          <thead>
            <tr>
              <th scope="col">Sno.</th>
              <th scope="col">Course Name</th>
              <th scope="col">Institution Name</th>
              <th scope="col">Marks/GPA Awarded</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>CBSE 10th class</td>
              <td>Navy Children School</td>
              <td>9.0</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Intermediate</td>
              <td>Sri Chaitanya Jr.College</td>
              <td>421 / 9.6</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Btech</td>
              <td>ANITS</td>
              <td>(currently studying)</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  } else {
    return <>Loading...</>;
  }
};

export default Resume;

/*
   {
    "id": 10,
    "name": "Clementina DuBuque",
    "username": "Moriah.Stanton",
    "email": "Rey.Padberg@karina.biz",
    "address": {
      "street": "Kattie Turnpike",
      "suite": "Suite 198",
      "city": "Lebsackbury",
      "zipcode": "31428-2261",
      "geo": {
        "lat": "-38.2386",
        "lng": "57.2232"
      }
    },
    "phone": "024-648-3804",
    "website": "ambrose.net",
    "company": {
      "name": "Hoeger LLC",
      "catchPhrase": "Centralized empowering task-force",
      "bs": "target end-to-end models"
    }
  }
*/
