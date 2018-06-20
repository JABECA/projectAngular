// model for user
export class User {
	constructor(
		public _id: number = Math.floor(Math.random() * 100),
		public name: string = '',
		public company: string = '',
		public age: string = '',
		public birthday: String = '',
		public favoriteColor: string = '',
		public project: string = '',
		public editable: boolean = false,
	) {}
}
