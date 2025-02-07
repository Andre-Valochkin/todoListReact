import s from "./TaskButtonImportance.module.css";

const TaskButtonImportance = ({ importance, updateTask }) => {
	return (

		<button className={s.task_Item__btn_importance} onClick={(e) => updateTask(e, "toggleImportance")}>{importance ? "отменить важность" : "установить важность"}</button>

	);
}

export default TaskButtonImportance;