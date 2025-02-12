import s from "./TaskButtonDelit.module.css";

import { useTasks } from '../../../../context.js';


const TaskButtonDelit = () => {

	const { updateTask } = useTasks();
	return (

		<button className={s.task_Item__btn_delit} onClick={(e) => updateTask(e, "delete")}>Удалить задачу</button>

	);
}

export default TaskButtonDelit;