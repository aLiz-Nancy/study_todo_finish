import styled from "@emotion/styled";
import { useState } from "react";

import { TaskEdit } from "@/models/task";
import { Edit } from "../Item/Edit/Edit";

type Props = {
  onClickAdd: (task: TaskEdit) => void;
};

const Wrap = styled.li`
  display: flex;
`;

const TaskEdit = styled(Edit)`
  flex: 1;
`;

export const Add: React.FC<Props> = ({ onClickAdd }) => {
  const [editTask, setEditTask] = useState<TaskEdit>({
    title: "",
    priority: undefined,
    dueDate: "",
    description: "",
  });

  const onChangeTask = (updateTask: TaskEdit) => {
    setEditTask(updateTask);
  };

  const onClickClear = () => {
    setEditTask({ title: "", priority: "", dueDate: "", description: "" });
  };

  return (
    <Wrap>
      <TaskEdit task={editTask} onChange={onChangeTask} />
      <div>
        <button onClick={onClickAdd.bind(this, editTask)}>👍</button>
        <button onClick={onClickClear}>🗑️</button>
      </div>
    </Wrap>
  );
};
