import s from "./TaskButtonImportance.module.css";

import { useTasks } from '../../../../context.js';


const TaskButtonImportance = ({ importance }) => {

	const { updateTask } = useTasks();

	return (

		<button className={s.task_Item__btn_importance} onClick={(e) => updateTask(e, "toggleImportance")}>{importance ? "отменить важность" : "установить важность"}</button>

	);
}

export default TaskButtonImportance;