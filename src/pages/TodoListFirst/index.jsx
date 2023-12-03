import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";

export default function TodoListFirst() {
  const [todoValue, setTodoValue] = useState("");
  const [jobs, setJobs] = useState([]);

  const handleOnChange = (text) => {
    setTodoValue(text.target.value);
  };

  const handleOnClick = () => {
    if (todoValue) {
      const isDuplicate = jobs.some((itemp) => itemp === todoValue);
      if (isDuplicate) {
        toast.error("Bạn đã thêm trùng...!!!");
      } else {
        setJobs((prev) => {
          return [...prev, todoValue];
        });
        setTodoValue("");
        toast.success("Bạn đã thêm thành công...!!!");
      }
    } else {
      toast.error("Bạn vui lòng đừng bỏ trống...!!!", todoValue);
    }
  };

  const handleDelete = (index) => {
    setJobs((prev) => {
      const jobArray = [...prev];
      jobArray.splice(index, 1);
      toast.error("Bạn đã xóa thành công", {
        icon: false,
        theme: "colored",
      });
      return jobArray;
    });
  };

  return (
    <div className="container mt-3">
      <div className=" d-flex gap-3">
        <input value={todoValue} onChange={handleOnChange} className="w-100" />
        <Button variant="success" onClick={handleOnClick}>
          Add
        </Button>
      </div>

      <ul className="d-flex flex-column gap-1 mt-3">
        {jobs.map((job, index) => (
          <li
            key={index}
            className="d-flex 
            align-items-center justify-content-between gap-3"
          >
            <span className="border border-danger w-100 p-1"> {job}</span>

            <div className="d-flex gap-2">
              <Button variant="danger" onClick={() => handleDelete(index)}>
                Delete
              </Button>
              <Button variant="warning">Update</Button>
            </div>
          </li>
        ))}
      </ul>
      <ToastContainer autoClose={1500} />
    </div>
  );
}
