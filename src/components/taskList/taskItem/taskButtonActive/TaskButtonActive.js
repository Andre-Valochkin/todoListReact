import s from "./TaskButtonActive.module.css";

const TaskButtonActive = ({ isActive, updateTask }) => {
	return (

		<button className={s.task_Item__btn_active} onClick={(e) => updateTask(e, "toggleActive")}>{isActive ? "Остановить задачу" : "Выполнять задачу"}</button>

	);
}

export default TaskButtonActive;