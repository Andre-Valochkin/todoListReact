import s from "./TaskTextarea.module.css";

import { useTasks } from '../../../context.js';

const TaskTexterea = () => {

	const { setFilter, filter, searchQuery, setSearchQuery, addTask, prevText, handleChange } = useTasks();

	return (
		<>
			<form className={s.taskTexterea_wrapper} onSubmit={(e) => e.preventDefault()}>
				<textarea className={s.textereaSearch} value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Поиск задачи"></textarea>
				<textarea className={s.textereaNewTask} value={prevText} onChange={handleChange} placeholder="Название новой задачи"></textarea>
			</form>
			<div>
				<button className={`${s.textereaButton} ${filter === "all" ? s.active : ""}`} onClick={() => setFilter("all")}>Все задачи</button>
				<button className={`${s.textereaButton} ${filter === "active" ? s.active : ""}`} onClick={() => setFilter("active")}> Активные задачи</button>
				<button className={`${s.textereaButton} ${filter === "complited" ? s.active : ""}`} onClick={() => setFilter("complited")}>Завершенные задачи</button>
				<button className={s.textereaButtonNewTask} disabled={!prevText.trim()} type="button" onClick={() => addTask(prevText)}>Создань задачу</button>

			</div>
		</>
	);
}

export default TaskTexterea;