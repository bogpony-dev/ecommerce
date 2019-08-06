export const defaultState = {
	session: {
		authenticated: false
	},
	users: [{
		id: "U1",
		name: "userOne"
	}, {
		id: "U2",
		name: "userTwo"
	}],

	groups: [{
		name: "Not Started",
		id: "G1",
		owner: "U1"
	}, {
		name: "In Progress",
		id: "G2",
		owner: "U1"
	}, {
		name: "Complete",
		id: "G3",
		owner: "U1"
	}],
	tasks: [{
		name: "Refactor Tests",
		id: "T1",
		group: "G1",
		owner: "U1",
		isComplete: false,
	}, {
		name: "Update Documentation",
		id: "T2",
		group: "G1",
		owner: "U1",
		isComplete: true,
	}, {
		name: "Begin Feature Planning",
		id: "T3",
		group: "G2",
		owner: "U2",
		isComplete: false,
	}, {
		name: "Team Presentation",
		id: "T4",
		group: "G2",
		owner: "U2",
		isComplete: false,
	}],
	comments: [{
		owner: "U1",
		id: "C1",
		task: "T1",
		content: "This is a test comment"
	}]
}