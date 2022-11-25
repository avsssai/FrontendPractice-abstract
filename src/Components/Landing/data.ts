export interface IData {
	title: string;
	description: string;
	image?: number;
}

const data: IData[] = [
	{
		title: "Using Abstract",
		description: "Abstract lets you manage, version, and document your designs in one place.",
		image: 1,
	},
	{
		title: "Manage your account",
		description: "Configure your account settings, such as your email, profile details, and password.",
		image: 2,
	},
	{
		title: "Manage organizations, teams, and projects",
		description: "Use Abstract organizations, teams, and projects to organize your people and your work.",
		image: 3,
	},
	{ title: "Manage billing", description: "Change subscriptions and payment details.", image: 4 },
	{
		title: "Authenticate to Abstract",
		description: "Set up and configure SSO, SCIM, and Just-in-Time provisioning.",
		image: 5,
	},
	{ title: "Abstract support", description: "Get in touch with a human.", image: 6 },
];
export default data;
