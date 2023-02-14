import * as React from "react";
import { BeyondSwitch } from "@bgroup/ui/form";
import { BeyondIcon } from '@bgroup/ui/icons';
interface Props {
	componentName: string;
};

export /*bundle*/ function Header({ componentName }: Props): JSX.Element {
	const theme = globalThis?.matchMedia("(prefers-color-scheme: dark)").matches;
	const themeStorage = localStorage.getItem('theme');
	const defaultTheme: string = theme ? "dark" : "light";
	const userTheme: boolean = themeStorage ? themeStorage === "dark" : defaultTheme === "dark"
	const [isDark, setIsDark] = React.useState<boolean>(userTheme);

	function handleChange({ target }): void {
		const container = document.querySelector("html");
		const theme = isDark ? "light" : "dark"
		container.setAttribute("data-beyond-mode", theme);
		localStorage.setItem("theme", theme)
		setIsDark(target.checked);
	};

	React.useEffect(() => {
		if (!themeStorage) return
		const container = document.querySelector("html");
		container.setAttribute("data-beyond-mode", themeStorage);
	}, [])

	const icon : string = isDark ? "moon" : "sun";
	return (
		<header className="header">
			<h2 className="title">{componentName}</h2>
			<div className="content-theme">
				<BeyondIcon icon={icon} />
				<BeyondSwitch
					className="checkbox"
					checked={isDark}
					onChange={handleChange}
				/>
			</div>
		</header>
	);
}
