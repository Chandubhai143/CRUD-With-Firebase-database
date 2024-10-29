import React, { useState, useEffect } from "react";
import { ref, set, update } from "firebase/database";
import database from "./firebase";
import { useLocation } from "react-router-dom";

const Input = ({ onDataAdded, editingStudent, setEditingStudent }) => {

  const location = useLocation();
  const { data } = location.state || {};

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (editingStudent) {
      setName(editingStudent.name);
      setAge(editingStudent.age);
      setEmail(editingStudent.email);
    } else {
      setName("");
      setAge("");
      setEmail("");
    }
  }, [editingStudent]);

  const handleSubmit = (e) => {
    // e.preventDefault();
    const newData = { name, age, email };

    const studentId = editingStudent ? editingStudent.id : Date.now().toString();
    const dataRef = ref(database, `students/${studentId}`);

    const action = editingStudent ? update(dataRef, newData) : set(dataRef, newData);

    action
      .then(() => {
        onDataAdded();
        setEditingStudent(null);
        setName("");
        setAge("");
        setEmail("");
      })
      .catch((error) => console.error("Error adding/updating data:", error));
  };

  // update

  useEffect(() => {
    if (data) {
      setName(data.name)
      setAge(data.age)
      setEmail(data.email)
    }
  }, [data])

  const handleUpdate = () => {
    const dataRef = ref(database, `students/${data.id}`);
    const updatedData = { name, age, email };

    update(dataRef, updatedData)
      .then(() => {
        setName("");
        setAge("");
        setEmail("");
      })
      .catch((error) => console.error("Error updating data:", error));
  }

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        height: "100vh",
        background: "linear-gradient(135deg, #ff9a9e, #fad0c4)",
      }}
    >
      <div
        className="p-5 rounded shadow-lg"
        style={{
          width: "400px",
          background: "linear-gradient(135deg, #f8cdda, #1d2b64)",
          color: "#fff",
        }}
      >
        <h2 className="text-center mb-4">{editingStudent ? "Edit" : "User Input"}</h2>
        <form onSubmit={data ? handleUpdate : handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="age" className="form-label">
              Age
            </label>
            <input
              type="number"
              className="form-control"
              id="age"
             
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
             
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-light w-100 mt-3">
            {data ? "Update" : "Save"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Input;
