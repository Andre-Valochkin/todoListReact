import s from "./TaskItem.module.css";
import TaskButtonDelit from "./taskButtonDelit/TaskButtonDelit";
import TaskButtonImportance from "./taskButtonImportance/TaskButtonImportance";
import TaskButtonActive from "./taskButtonActive/TaskButtonActive";

const TaskItem = ({ importance, title, isActive, id, updateTask }) => {

	return (
		<li className={s.task_Item} id={id}>
			<div className={`${s.task_Item__wrapper} ${importance ? s.importantTask : s.normalTask} ${isActive ? s.isActiveTask : undefined}`}>
				<h3 className={s.task_Item__title}>{title}</h3>
				<div className={s.task_Item__button_block}>
					<TaskButtonDelit updateTask={updateTask} />
					<TaskButtonImportance importance={importance} updateTask={updateTask} />
					<TaskButtonActive isActive={isActive} updateTask={updateTask} />
				</div>
			</div>
		</li >
	);
}

export default TaskItem;