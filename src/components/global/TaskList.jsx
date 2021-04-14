import React, { useContext } from "react";
import NewTask from "../NewTask";
import Task from "./Task/Task";
import { CurrentTaskContext } from "../timer-modal/TimerContextProvider";
import DarkModeContext from "../../services/theme-context";

/**
 * This function represents the global Task List component used on the home page
 * and Welcome Dashboard. It contains user defined tasks that can be expanded to
 * display task details, and a button to add new tasks.
 */
function TaskList(props) {
  const { onTaskClick, tasks, refetchTasks } = props;
  const [currentTask] = useContext(CurrentTaskContext);
  const { isDarkMode } = React.useContext(DarkModeContext);

  return (
    <div className={isDarkMode ? "task-list" : "task-list light"}>
      <h1 className="task-list__title">Today&apos;s Tasks:</h1>
      <div className="task-list__content">
        <div className="task-list__tasks">
          {tasks.map((t) => (
            <div key={t.Task_id}>
              <Task
                description={t.Description}
                endDate={t.End_date}
                label={t.Label}
                name={t.Name}
                startDate={t.Start_date}
                taskId={t.Task_id}
                userId={t.User_id}
                checked={t.Is_complete}
                onClick={() => onTaskClick(t)}
                selected={currentTask && t.Task_id === currentTask.Task_id}
                onCheck={refetchTasks}
              />
            </div>
          ))}
        </div>

        <div className="add-task-button-container">
          <NewTask onNewTask={refetchTasks} />
        </div>
      </div>
    </div>
  );
}

export default TaskList;
