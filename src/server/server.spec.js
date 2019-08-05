import { addNetTask, updateTask } from './server'

(async function dbTest() {
	await addNewTask({
		name: 'my task',
		id: '1234'
	})

	await updateTask({
		name: 'my task has been updated!',
		id: '1234'
	})
})()


