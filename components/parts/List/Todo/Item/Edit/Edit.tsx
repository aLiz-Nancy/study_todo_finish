import styled from "@emotion/styled";

import { TaskPriority, TaskEdit } from "@/models/task";

type Props = {
  className: String;
  task: TaskEdit;
  onChange: (task: TaskEdit) => void;
};

const Wrap = styled.div`
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
`;

const Label = styled.label`
  display: flex;
`;

const Name = styled.span`
  width: 80px;
`;

const Input = styled.input`
  flex: 1;
`;

export const Edit: React.FC<Props> = ({ className, task, onChange }) => {
  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange({ ...task, title: e.currentTarget.value });
  };

  const onChangePriority = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange({ ...task, priority: e.currentTarget.value });
  };

  const onChangeDueDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange({ ...task, dueDate: e.currentTarget.value });
  };

  const onChangeDescription = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange({ ...task, description: e.currentTarget.value });
  };

  return (
    <Wrap className={className}>
      <Label>
        <Name>タスク名</Name>
        <input
          type="text"
          value={task.title}
          onChange={onChangeTitle}
          required
        />
      </Label>
      <Label>
        <Name>優先度</Name>
        <select value={task.priority} onChange={onChangePriority}>
          <option value=""> </option>
          {Object.keys(TaskPriority).map((key) => (
            <option key={key} value={TaskPriority[key]}>
              {TaskPriority[key]}
            </option>
          ))}
        </select>
      </Label>
      <Label>
        <Name>期日</Name>
        <input type="date" value={task.dueDate} onChange={onChangeDueDate} />
      </Label>
      <Label>
        <Name>詳細</Name>
        <textarea value={task.description} onChange={onChangeDescription} />
      </Label>
    </Wrap>
  );
};
