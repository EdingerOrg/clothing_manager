import stylistic from "@stylistic/eslint-plugin"

export default [
	stylistic.configs.customize({
		indent: "tab",
		quotes: "double",
		semi: false,
		jsx: true,
	}),
]
