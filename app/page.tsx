"use client";

import { useState } from "react";

import { TaskEdit, TaskWrap, TaskWrapStatus, TaskStatus } from "@/models/task";
import { demoTasks } from "@/demo-data/task";
import { ListTask } from "@/components/parts/List/Todo/ListTodo";

export default function Home() {
  const [tasks, setTasks] = useState<TaskWrap[]>(demoTasks);

  const onChangeTaskStatusToggle = (id: string) => {
    setTasks((prevTasks) =>
      prevTasks.map((prevTask) => {
        if (prevTask.id === id) {
          switch (prevTask.data.status) {
            case TaskStatus.done:
              prevTask.data.status = TaskStatus.todo;
              break;
            case TaskStatus.todo:
            default:
              prevTask.data.status = TaskStatus.done;
          }
        }
        return prevTask;
      }),
    );
  };

  const onClickTaskEdit = (id: string) => {
    setTasks((prevTasks) =>
      prevTasks.map((prevTask) => {
        if (prevTask.id === id) {
          prevTask.status = TaskWrapStatus.edit;
        }
        return prevTask;
      }),
    );
  };

  const onClickTaskUpdate = (id: string, task: TaskEdit) => {
    setTasks((prevTasks) =>
      prevTasks.map((prevTask) => {
        if (prevTask.id === id) {
          prevTask.status = TaskWrapStatus.view;
          prevTask.data = {
            ...prevTask.data,
            title: task.title,
            priority: task.priority,
            dueDate: task.dueDate ? new Date(task.dueDate) : undefined,
            description: task.description,
          };
        }
        return prevTask;
      }),
    );
  };

  const onClickTaskDelete = (id: string) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const onClickTaskAdd = (task: TaskEdit) => {
    if (!task.title) {
      alert("タスク名を入力してください");
      return;
    }

    const timestamp = new Date();
    setTasks((prevTasks) => [
      ...prevTasks,
      // {
      //   id: timestamp.toLocaleString(),
      //   status: TaskWrapStatus.view,
      //   data: {
      //     status: TaskStatus.todo,
      //     dueDate: task.dueDate,
      //     priority: task.priority,
      //     title: task.title,
      //     description: task.description,
      //     createdAt: timestamp,
      //     updatedAt: timestamp,
      //   },
      // },
    ]);
  };

  return (
    <main>
      <div>
        <ListTask
          tasks={tasks}
          onChangeStatusToggle={onChangeTaskStatusToggle}
          onClickEdit={onClickTaskEdit}
          onClickUpdate={onClickTaskUpdate}
          onClickDelete={onClickTaskDelete}
          onClickAdd={onClickTaskAdd}
        />
      </div>
    </main>
  );
}
