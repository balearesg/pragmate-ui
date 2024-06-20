Certainly! Here's the updated `README.md` content with the additional components included:

---

# 🏆 Pragmate UI: Efficient, On-Demand React UI Library for BeyondJS

[![npm version](https://badge.fury.io/js/pragmate-ui.svg)](https://badge.fury.io/js/pragmate-ui)
[![Build Status](https://travis-ci.org/baleraresg/pragmate-ui.svg?branch=master)](https://travis-ci.org/your-organization/pragmate-ui)
[![License](https://img.shields.io/npm/l/pragmate-ui.svg)](./LICENSE)

## Table of Contents

-   [About](#about)
-   [Installation](#installation)
-   [Features](#features)
-   [On-Demand, Modular Usage](#on-demand-modular-usage)
-   [Documentation](#documentation)
-   [License](#license)

## About

Pragmate UI is an advanced React UI library fine-tuned for BeyondJS. It specializes in delivering on-demand components
with minimal bundle impact, and it streamlines the UI/UX development process, so you can focus on building rather than
boilerplate.

## Installation

To get started with Pragmate UI, run:

```bash
npm install pragmate-ui
```

## Features

-   **On-Demand Components**: Eliminate dead code by importing only what you actually use.
-   **Streamlined Implementation**: Intuitive, easy-to-use components for accelerated development.
-   **Responsive & Accessible**: Best practices are baked in, providing a seamless user experience across all devices.
-   **Design Excellence**: Components come with a well-thought-out UI/UX, balancing form and function beautifully.

## On-Demand, Modular Usage

In Pragmate UI, components are modular and accessible via subpaths, allowing you to import only what you need, ensuring
each component is an independent bundle:

```typescript
// For using a button component
import { Button } from 'pragmate-ui/components';
// For using toast notifications
import { Toast } from 'pragmate-ui/components/toast';
// And so on for each component...
```

This modular approach keeps your bundle lean, ensuring you don’t include unnecessary code.

## Components

Pragmate UI currently offers the following components, each as an independent bundle:

-   **Alert**: The alert component displays a message with an optional icon, title, and close button.
-   **Badge**: A small count and labeling component.
-   **ButtonGroup**: The ButtonGroup component in React creates a group of buttons with a specified orientation.
-   **Breadcrumb**: A component for indicating the current page's location within a navigational hierarchy.
-   **Checkbox**: The Checkbox component is a customizable checkbox input with label support.
-   **CheckboxGroup**: The CheckboxGroup component is a container for a group of checkboxes.
-   **Chips**: Compact elements that represent an input, attribute, or action.
-   **Code**: Code is a component used to display code snippets with syntax highlighting using Prism.js. It optionally includes a clipboard feature for copying code.
-   **Collapsible**: A component for hiding and revealing content.
-   **Coming Soon**: Placeholder for future components.
-   **Context Menu**: A menu that appears upon user interaction, such as a right-click.
-   **DynamicList**: The DynamicList component manages a dynamic list of elements with functionalities to add, remove, and update items, including drag-and-drop capabilities if enabled.
-   **Dropdown**: A component that allows users to choose one value from a list.
-   **DropdownButtonMenu**: The DropdownBottomMenu component renders a dropdown menu that appears at the bottom of the screen based on the show prop.
-   **Empty**: A component that renders a placeholder message when there is no data or content to display.
-   **HtmlWrapper**: Render dynamic HTML content.
-   **Form**: A group of components that collect user input.
-   **Global Components**: Reusable components across different parts of the application.
-   **Icons**: A library of UI icons.
-   **IconButton**: The IconButton component is a button with an optional icon, supporting features like tooltips.
-   **Image**: A component that renders images with on-demand loading.
-   **Input Controller**: A component for input field value manipulation.
-   **Input**: The Input component is a versatile input field with support for error handling, various types, and custom styles.
-   **Link**: A component for navigation.
-   **List**: A component for displaying a series of content.
-   **Menu**: A component for displaying navigation options.
-   **Mixins**: SCSS mixins for common styling patterns.
-   **Modal**: Components for displaying modal dialogs.
-   **Node Modules**: Internal dependencies of the library.
-   **Opinions**: A set of opinionated components with predefined styles and behaviors.
-   **Perfect Scrollbar**: Custom scrollbar that's perfect for the given context.
-   **Preload**: Components that handle the preloading of certain UI elements or data.
-   **Progress Bar**: A component for visualizing the progression of a task.
-   **Radio**: The Radio component is a customizable radio button with a label.
-   **ReactSelect**: The ReactSelect component is a wrapper around the react-select library's Select component.
-   **Ripple**: An effect component for material design-like interactions.
-   **Spinner**: A component for indicating a loading state.
-   **Select**: The Select component is a customizable dropdown menu.
-   **Switch**: The Switch component is a customizable toggle switch.
-   **Swiper**: A carousel/slider component.
-   **Tabs**: A component for tabbed navigation.
-   **Template**: Components used for structuring application layouts.
-   **Textarea**: The Textarea component is an enhanced textarea element with additional features like dynamic height adjustment, error handling, and character counting.
-   **Theme Switcher**: A component for toggling between light and dark themes.
-   **Toast**: A component for displaying brief, auto-expiring messages.
-   **Tooltip**: Text labels that appear when the user hovers over, focuses on, or taps an element.
-   **Verification Code**: A component for inputting a code received for verification purposes.
-   **Vertical Line**: A component to render a vertical dividing line.


(Existing components from the previous list omitted for brevity)

## License

Pragmate UI is licensed under the MIT License. For more details, see the [LICENSE](./LICENSE) file.

---

Please ensure to include actual code examples and additional details for each new component in the
