import { ReactiveModel } from '@beyond-js/reactive/model';
import { IWidgetStore } from '@beyond-js/widgets/controller';

export interface IDocumentationStore {
	activeSection: string;
	activeComponent: string;
	isSidebarOpen: boolean;
	searchQuery: string;
}

export class StoreManager extends ReactiveModel<IDocumentationStore> implements IWidgetStore {
	isStore = true;
	declare activeSection: string;
	declare activeComponent: string;
	declare isSidebarOpen: boolean;
	declare searchQuery: string;

	constructor() {
		super({
			properties: ['activeSection', 'activeComponent', 'isSidebarOpen', 'searchQuery'],
		});

		// Initialize with default values
		this.set({
			activeSection: 'getting-started',
			activeComponent: '',
			isSidebarOpen: true,
			searchQuery: '',
		});
	}

	setActiveSection(section: string): void {
		this.set({ activeSection: section });
	}

	setActiveComponent(component: string): void {
		this.set({ activeComponent: component });
	}

	toggleSidebar(): void {
		this.set({ isSidebarOpen: !this.isSidebarOpen });
	}

	setSearchQuery(query: string): void {
		this.set({ searchQuery: query });
	}
}
