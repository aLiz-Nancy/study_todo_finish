export const TaskStatus: { [key: string]: string } = {
  todo: "ToDo",
  done: "Done",
};
export type TaskStatus = (typeof TaskStatus)[keyof typeof TaskStatus];

export const TaskPriority: { [key: string]: string } = {
  high: "High",
  middle: "Middle",
  low: "Low",
};
export type TaskPriority = (typeof TaskPriority)[keyof typeof TaskPriority];

export type Task = {
  id?: string;
  status: TaskStatus;
  dueDate?: Date;
  priority?: TaskPriority;
  title: string;
  description?: string;
  createdAt: Date;
  updatedAt: Date;
};

export type TaskEdit = {
  title: string;
  dueDate?: string;
  priority?: TaskPriority;
  description?: string;
};

export const TaskWrapStatus: { [key: string]: string } = {
  view: "View",
  edit: "Edit",
};
export type TaskWrapStatus =
  (typeof TaskWrapStatus)[keyof typeof TaskWrapStatus];

export type TaskWrap = {
  id: string;
  status: TaskWrapStatus;
  data: Task;
};
