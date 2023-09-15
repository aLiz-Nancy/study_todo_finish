import {
  Task,
  TaskStatus,
  TaskPriority,
  TaskWrap,
  TaskWrapStatus,
} from "@/models/task";

export const demoTasks: TaskWrap[] = [
  {
    id: "000",
    status: TaskWrapStatus.view,
    data: {
      status: TaskStatus.done,
      dueDate: new Date(1691116060000),
      priority: TaskPriority.high,
      title: "useStateをマスターする",
      description: "スタート！",
      createdAt: new Date(1691720860000),
      updatedAt: new Date(1691720860000),
    },
  },
  {
    id: "111",
    status: TaskWrapStatus.view,
    data: {
      status: TaskStatus.done,
      dueDate: new Date(1692325660000),
      priority: TaskPriority.middle,
      title: "useEffectをマスターする",
      createdAt: new Date(1693535260000),
      updatedAt: new Date(1693535260000),
    },
  },
  {
    id: "222",
    status: TaskWrapStatus.view,
    data: {
      status: TaskStatus.todo,
      dueDate: new Date(1695349660000),
      title: "ToDoアプリを作る",
      createdAt: new Date(1694744860000),
      updatedAt: new Date(1694744860000),
    },
  },
  {
    id: "333",
    status: TaskWrapStatus.view,
    data: {
      status: TaskStatus.todo,
      priority: TaskPriority.low,
      title: "Contextをマスターする",
      createdAt: new Date(1694744860000),
      updatedAt: new Date(1694744860000),
    },
  },
];
