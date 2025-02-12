import s from "./TaskButtonActive.module.css";

import { useTasks } from '../../../../context.js';


const TaskButtonActive = ({ isActive }) => {

	const { updateTask } = useTasks();


	return (

		<button className={s.task_Item__btn_active} onClick={(e) => updateTask(e, "toggleActive")}>{isActive ? "Остановить задачу" : "Выполнять задачу"}</button>

	);
}

export default TaskButtonActive;