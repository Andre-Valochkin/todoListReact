import { createContext, useContext, useState } from "react";

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
	const [prevTasks, setTasks] = useState([
		{ title: "Сходить в магазин", id: 0, importance: true, isActive: true },
		{ title: "Заправить машину", id: 1, importance: false, isActive: false },
		{ title: "Сварить суп", id: 2, importance: true, isActive: false },
		{ title: "Заработать денег", id: 3, importance: false, isActive: true },
	]);

	// ------------------Filtering by pressing a button and when entering text --------------------------------------------- 

	const [filter, setFilter] = useState("all");
	const [searchQuery, setSearchQuery] = useState("");


	const filteredTasks = prevTasks.filter((task) => {
		if (filter === "complited" && task.isActive) return false;
		if (filter === "active" && !task.isActive) return false;
		return task.title.toLowerCase().startsWith(searchQuery.toLowerCase());
	});

	// ----------------------------------------

	// ------------------ Adding a new task to a state  ----------------------------------------

	const [prevText, setText] = useState("");

	const handleChange = (event) => {
		setText(event.target.value)
	};

	const addTask = () => {
		if (!prevText.trim()) return;

		const newTask = {
			id: Date.now(),
			title: prevText,
			importance: false,
			isActive: false,
		}
		setTasks([...prevTasks, newTask]);
		setText("");
	}

	// ----------------------------------------

	// ------------------ Removing and marking importance and activity in tasks ----------------------------------------


	const updateTask = (event, action) => {
		const result = event.target.closest("[id]");
		if (!result) return;

		const taskId = parseInt(result.id, 10);

		setTasks((prevTasks) => {
			return prevTasks
				.map((task) => {
					if (task.id !== taskId) return task;

					switch (action) {
						case "delete":
							return null;
						case "toggleImportance":
							return { ...task, importance: !task.importance };
						case "toggleActive":
							return { ...task, isActive: !task.isActive };
						default:
							return task;
					}
				})
				.filter(Boolean);
		});
	};

	// ----------------------------------------


	return (

		<TaskContext.Provider value={{ tasks: filteredTasks, prevText, filter, searchQuery, handleChange, addTask, updateTask, setFilter, setSearchQuery, prevTasks }}>{children}</TaskContext.Provider>

	);
};

export const useTasks = () => useContext(TaskContext);
