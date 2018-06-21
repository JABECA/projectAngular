// model for user
export class Project {
	constructor(
		public _id: number = Math.floor(Math.random() * 100),
		public name: string = '',
		public teamSize: number = 0,
		public clientName: string = '',
		public editable: boolean = false,
	) {}
}
