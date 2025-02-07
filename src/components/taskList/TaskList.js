import s from "./TaskList.module.css";
import TaskItem from "./taskItem/TaskItem";
import TaskTexterea from "./taskTextarea/TaskTextarea";

const TaskList = ({ prevTasks, updateTask, setFilter, filter, searchQuery, setSearchQuery, addTask, prevText, taxterraHandleChange }) => {


	return (
		<div className={s.taskList} >
			<TaskTexterea setFilter={setFilter} filter={filter} prevText={prevText} taxterraHandleChange={taxterraHandleChange} searchQuery={searchQuery} setSearchQuery={setSearchQuery} addTask={addTask} />
			<ul className={s.taskList__wrapper}>
				{
					prevTasks.map((el) =>
						<TaskItem key={el.id} {...el} id={el.id} updateTask={updateTask} />
					)
				}

			</ul>
		</div >
	);
}

export default TaskList;