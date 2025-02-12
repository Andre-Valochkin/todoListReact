import s from "./TaskList.module.css";
import TaskItem from "./taskItem/TaskItem";
import TaskTexterea from "./taskTextarea/TaskTextarea";

import { useTasks } from '../../context.js';

const TaskList = () => {

	const { tasks } = useTasks();

	return (
		<div className={s.taskList} >
			<TaskTexterea />
			<ul className={s.taskList__wrapper}>
				{
					tasks.map((el) =>
						<TaskItem key={el.id} task={el} />
					)
				}

			</ul>
		</div >
	);
}

export default TaskList;