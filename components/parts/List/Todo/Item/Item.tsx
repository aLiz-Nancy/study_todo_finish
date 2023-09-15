import styled from "@emotion/styled";
import { useState } from "react";

import { TaskWrap, TaskWrapStatus, TaskStatus, TaskEdit } from "@/models/task";
import { Data } from "./Data/Data";
import { Edit } from "./Edit/Edit";

type Props = {
  task: TaskWrap;
  onChangeStatusToggle: (id: string) => void;
  onClickEdit: (id: string) => void;
  onClickUpdate: (id: string, task: TaskEdit) => void;
  onClickDelete: (id: string) => void;
};

const Wrap = styled.li`
  display: flex;
`;

const TaskData = styled(Data)`
  flex: 1;
`;

const TaskEdit = styled(Edit)`
  flex: 1;
`;

export const Item: React.FC<Props> = ({
  task,
  onChangeStatusToggle,
  onClickEdit,
  onClickUpdate,
  onClickDelete,
}) => {
  const [editTask, setEditTask] = useState<TaskEdit>({
    title: task.data.title,
    priority: task.data.priority,
    dueDate: task.data.dueDate
      ? task.data.dueDate.toISOString().split("T")[0]
      : "",
    description: task.data.description,
  });

  const onChangeTask = (updateTask: TaskEdit) => {
    setEditTask(updateTask);
  };

  return (
    <Wrap>
      {task.status === TaskWrapStatus.edit ? (
        <TaskEdit task={editTask} onChange={onChangeTask} />
      ) : (
        <TaskData task={{ ...task.data, id: task.id }} />
      )}
      <div>
        {task.status === TaskWrapStatus.edit ? (
          <>
            <button onClick={onClickUpdate.bind(this, task.id, editTask)}>
              👍
            </button>
            <button onClick={onClickDelete.bind(this, task.id)}>🗑️</button>
          </>
        ) : (
          <>
            <input
              type="checkbox"
              checked={task.data.status === TaskStatus.done}
              onChange={onChangeStatusToggle.bind(this, task.id)}
            />
            {task.data.status !== TaskStatus.done && (
              <button onClick={onClickEdit.bind(this, task.id)}>✏️</button>
            )}
          </>
        )}
      </div>
    </Wrap>
  );
};
