// AttendanceBook.jsx
import React from "react";

const students = [
  {
    name: "kim",
  },
  {
    name: "shim",
  },
  {
    name: "lee",
  },
  {
    name: "jung",
  },
  {
    name: "cho",
  },
];

function AttendanceBook(props) {
  return (
    <ul>
      {students.map((students)=>{
        return (<li>{students.name}</li>);
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