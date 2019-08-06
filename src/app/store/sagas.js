import { take, put, select } from 'redux-saga/effects';
import uuid from 'uuid'
import axios from 'axios'
import * as mutations from './mutations'

const url = "http://localhost:8888"

export function* taskCreationSaga() {
	while (true) {
		const { groupId } = yield take(mutations.REQUEST_TASK_CREATION);
		console.log("Got groupId", groupId)
		const ownerId = 'U1';
		const taskId = uuid();
		yield put(mutations.createTask(taskId, groupId, ownerId));
		const { res } = yield axios.post(url + `/task/new`, {
			task: {
				id: taskId,
				group: groupId,
				isComplete: false,
				name: "New Task"
			}
		});
		console.info("Got response", res);
	}
}

export function* taskModificationSaga() {
	while (true) {
		const task = yield take([
			mutations.SET_TASK_GROUP,
			mutations.SET_TASK_NAME,
			mutations.SET_TASK_NAME
		]);
		axios.post(url + `/task/update`, {
			task: {
				id: task.taskId,
				group: task.groupId,
				name: task.name,
				isComplete: false,
			}
		})
	}
}