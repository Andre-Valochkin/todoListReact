import s from "./TaskButtonDelit.module.css";

const TaskButtonDelit = ({ updateTask }) => {


	return (

		<button className={s.task_Item__btn_delit} onClick={(e) => updateTask(e, "delete")}>Удалить задачу</button>

	);
}

export default TaskButtonDelit;