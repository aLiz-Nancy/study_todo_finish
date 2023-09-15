import styled from "@emotion/styled";
import { Task, TaskPriority, TaskStatus } from "@/models/task";

type Props = {
  className: String;
  task: Task;
};

const Wrap = styled.div<{ status: TaskStatus }>`
  opacity: ${({ status }) => status === TaskStatus.done && 0.32};
`;

const Title = styled.p<{ priority?: TaskPriority }>`
  font-weight: 700;
  color: ${({ priority }) =>
    priority === TaskPriority.high
      ? "red"
      : priority === TaskPriority.middle
      ? "orange"
      : priority === TaskPriority.low
      ? "green"
      : "black"};
`;

export const Data: React.FC<Props> = ({ className, task }) => {
  return (
    <Wrap className={className} status={task.status}>
      <Title priority={task.priority}>{task.title}</Title>
      {task.description && <p>{task.description}</p>}
      {task.dueDate && (
        <p suppressHydrationWarning>
          期日: {task.dueDate.toLocaleDateString()}
        </p>
      )}
      <p suppressHydrationWarning>
        作成日:&nbsp;{task.createdAt.toLocaleDateString()} | 更新日:&nbsp;
        {task.updatedAt.toLocaleDateString()}
      </p>
    </Wrap>
  );
};
