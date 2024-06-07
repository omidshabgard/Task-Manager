document.addEventListener('DOMContentLoaded', () => {
	const taskInput = document.getElementById('taskInput');
	const addTaskButton = document.getElementById('addTaskButton');
	const taskList = document.getElementById('taskList');
	const dynamicImage = document.getElementById('dynamicImage');

	addTaskButton.addEventListener('click', addTask);

	function addTask() {
		const taskText = taskInput.value.trim();
		if (taskText !== '') {
			const taskItem = document.createElement('li');

			const taskSpan = document.createElement('span');
			taskSpan.textContent = taskText;

			const completeButton = document.createElement('button');
			completeButton.textContent = 'Complete';
			completeButton.classList.add('complete-button');
			completeButton.addEventListener('click', () => {
				taskItem.classList.toggle('completed');
				updateDynamicImage();
			});

			const deleteButton = document.createElement('button');
			deleteButton.textContent = 'Delete';
			deleteButton.classList.add('delete-button');
			deleteButton.addEventListener('click', () => {
				taskItem.remove();
				updateDynamicImage();
			});

			taskItem.appendChild(taskSpan);
			taskItem.appendChild(completeButton);
			taskItem.appendChild(deleteButton);

			taskList.appendChild(taskItem);

			taskInput.value = '';
		}
	}

	function updateDynamicImage() {
		const allTasks = document.querySelectorAll('li');
		const completedTasks = document.querySelectorAll('li.completed');

		if (completedTasks.length === allTasks.length && allTasks.length > 0) {
			dynamicImage.src = './image/solar.png';
		} else {
			dynamicImage.src = './image/flower.png';
		}
	}
});
