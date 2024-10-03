export /*bundle*/ function DynamicFieldContainer({ children }: { children: React.ReactNode }) {
	return <ModuleContext.Provide value={{ fields, add, remove, update }}>{children}</ModuleContext.Provide>;
