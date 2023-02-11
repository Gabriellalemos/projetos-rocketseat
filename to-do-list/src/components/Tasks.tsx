import React, { useState } from "react";
import { CheckboxConteiner, TaskItem } from "./styled";
import trash from "./../assets/trash.png";
import { gray500, purpleDark } from "./../constants/colors";

interface TasksProps {
  id: string;
  task: string;
  done: boolean;
  onDeleteTask: (id: any) => void;
  onCheckedTask: (id: any) => void;
}

const Tasks = ({ id, task, done, onDeleteTask, onCheckedTask }: TasksProps) => {
  const [isChecked, setIsChecked] = useState(done);
  const handleDeleteTask = () => {
    onDeleteTask(id);
  };

  const handleCheckedTask = () => {
    onCheckedTask(id);
  };

  return (
    <TaskItem>
      <CheckboxConteiner>
        <input
          type="checkbox"
          onClick={handleCheckedTask}
          checked={isChecked}
          onChange={(e) =>
            setIsChecked(e.target.checked)
          } /*no checkbox a propriedade nativa checked monitora se o input está ticado ou nao, assim qunado percebemos pelo onchange qualquer click no input ele altera o valor da propriedade checked*/
        />
        <label
          style={{
            width: "39.5rem",
            textDecoration: `${isChecked ? "line-through" : "none"}`,
          }}
        >
          {task}
        </label>
      </CheckboxConteiner>
      <button
        style={{
          textDecoration: "none",
          border: "none",
          height: "24px",
        }}
      >
        <img
          src={trash}
          alt="trash"
          onClick={handleDeleteTask}
          style={{
            backgroundColor: `${gray500}`,
            border: "none",
          }}
        />
      </button>
    </TaskItem>
  );
};

export default Tasks;
