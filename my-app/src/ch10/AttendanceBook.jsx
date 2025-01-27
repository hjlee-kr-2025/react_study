// AttendanceBook.jsx
import React from "react";

const students = [
  {
    id: 1,
    name: "kim",
  },
  {
    id: 2,
    name: "shim",
  },
  {
    id: 3,
    name: "lee",
  },
  {
    id: 4,
    name: "jung",
  },
  {
    id: 5,
    name: "cho",
  },
];

function AttendanceBook(props) {
  return (
    <ul>
      {students.map((students, index)=>{
        console.log('index: ', index);
        return (<li key={index}>{students.name}</li>);
      })}
    </ul>
  );
}
/*
  const studentNames = students.map((students)=>{
      return (<li>{students.name}</li>);
    });
  return (
    <ul>{studentNames}</ul>
  );
*/

export default AttendanceBook;