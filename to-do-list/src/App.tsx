import { v4 as uuidv4 } from "uuid";
import {
  InputContainer,
  LogoContainer,
  MainContainer,
  TaskContainer,
} from "./globalStyle";
import logo from "./assets/Logo.png";
import plus from "./assets/plus.png";
import {
  gray500,
  gray700,
  gray300,
  blueDark,
  gray100,
} from "./constants/colors";
import { ChangeEvent, useEffect, useState } from "react";
import Tasks from "./components/Tasks";
import { TaskItem } from "./components/styled";

interface ItemTaskList {
  id: string;
  name: string;
  done: boolean;
}

function App() {
  const [newTaskText, setNewTaskText] = useState("");
  const [taskList, setTaskList] = useState<ItemTaskList[]>([
    { id: "1", name: "limpar janelas", done: false },
    { id: "2", name: "limpar cadeiras", done: true },
  ]);
  const [closedTask, setClosedTask] = useState(false);

  const handleNewTaskChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewTaskText(event?.target.value);
  };

  const handleCreateNewTask = () => {
    const newTaskAdd = { id: uuidv4(), name: newTaskText, done: false };
    setTaskList([...taskList, newTaskAdd]);
    setNewTaskText("");
  };

  const deleteTask = (taskId: any) => {
    const deletedTaskList = taskList.filter((item) => {
      return taskId !== item.id;
    });
    setTaskList(deletedTaskList);
  };

  return (
    <>
      <MainContainer>
        <LogoContainer>
          <img
            style={{
              position: "relative",
              top: "calc(50% - 24px)",
            }}
            src={logo}
            alt="foguete"
          />
        </LogoContainer>
        <InputContainer>
          <input
            name="newTask"
            style={{
              height: "3.2rem",
              marginRight: "0.5rem",
              backgroundColor: `${gray500}`,
              border: `${gray700}`,
              borderRadius: "4px",
              color: `${gray300}`,
            }}
            type="text"
            size={130}
            placeholder="Adicione uma nova tarefa"
            onChange={handleNewTaskChange}
            value={newTaskText}
          />
          <button
            style={{
              backgroundColor: `${blueDark}`,
              border: "none",
              borderRadius: "4px",
              padding: "16px",
              color: `${gray100}`,
            }}
            onClick={handleCreateNewTask}
          >
            Criar
            <img
              style={{
                marginLeft: "8px",
              }}
              src={plus}
              alt="plus"
            />
          </button>
        </InputContainer>
        <TaskContainer>
          {taskList.map((task) => {
            return (
              <Tasks
                key={task.name}
                id={task.id}
                task={task.name}
                done={task.done}
                onDeleteTask={deleteTask}
              />
            );
          })}
        </TaskContainer>
      </MainContainer>
    </>
  );
}

export default App;
