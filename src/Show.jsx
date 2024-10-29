import React, { useEffect, useState } from "react";
import { ref, onValue, remove } from "firebase/database";
import database from "./firebase";
import { useNavigate } from "react-router-dom";

const Show = () => {
  const navigate = useNavigate();
  const [students, setStudents] = useState([]);
  const [editingStudent, setEditingStudent] = useState(null);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const dataRef = ref(database, "students/");
    onValue(dataRef, (snapshot) => {
      const data = snapshot.val();
      const studentsArray = data
        ? Object.keys(data).map((id) => ({ id, ...data[id] }))
        : [];
      setStudents(studentsArray);
    });
  }, []);

  const handleDelete = (id) => {
    const dataRef = ref(database, `students/${id}`);
    remove(dataRef)
      .then(() => console.log("Data deleted successfully"))
      .catch((error) => console.error("Error deleting data:", error));
  };

  return (
    <div className="container mt-5">
      <div className="row">
        {students.map((student) => (
          <div key={student.id} className="col-md-3 mb-4">
            <div
              style={{
                border: "1px solid #ccc",
                borderRadius: "10px",
                padding: "10px",
                backgroundColor: "#f8f9fa",
              }}
            >
              {editingStudent === student.id ? (
                <>
                  <input
                    type="text"
                    className="form-control mb-2"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter name"
                  />
                  <input
                    type="number"
                    className="form-control mb-2"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    placeholder="Enter age"
                  />
                  <input
                    type="email"
                    className="form-control mb-2"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter email"
                  />
                  <button className="btn btn-success me-2" onClick={handleUpdate}>
                    Update
                  </button>
                  <button
                    className="btn btn-secondary"
                    onClick={() => setEditingStudent(null)}
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <>
                  <h4>{student.name}</h4>
                  <p>Age: {student.age}</p>
                  <p>Email: {student.email}</p>
                  <button
                    className="btn btn-primary me-2"
                    onClick={() => navigate('/input', { state: { data: student } })}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(student.id)}
                  >
                    Delete
                  </button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Show;
