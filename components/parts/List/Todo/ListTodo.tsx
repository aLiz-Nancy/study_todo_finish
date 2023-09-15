import { TaskEdit, TaskWrap } from "@/models/task";
import { Item } from "./Item/Item";
import { Add } from "./Add/Add";

type Props = {
  tasks: TaskWrap[];
  onChangeStatusToggle: (id: string) => void;
  onClickEdit: (id: string) => void;
  onClickUpdate: (id: string, task: TaskEdit) => void;
  onClickDelete: (id: string) => void;
  onClickAdd: (task: TaskEdit) => void;
};

export const ListTask: React.FC<Props> = ({
  tasks,
  onChangeStatusToggle,
  onClickEdit,
  onClickUpdate,
  onClickDelete,
  onClickAdd,
}) => {
  return (
    <ul>
      {tasks.map((task) => (
        <Item
          key={task.id}
          task={task}
          onChangeStatusToggle={onChangeStatusToggle}
          onClickEdit={onClickEdit}
          onClickUpdate={onClickUpdate}
          onClickDelete={onClickDelete}
        />
      ))}
      <Add onClickAdd={onClickAdd} />
    </ul>
  );
};
