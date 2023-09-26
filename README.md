I apologize for the confusion earlier. Let's correct that and focus on the specifics you've mentioned. Here's another
version of your README.md:

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

In Pragmate UI, components are modular and accessible via subpaths, allowing you to import only what you need:

```typescript
// For using a button component
import { Button } from 'pragmate-ui/components';
// For using toast notifications
import { Toast } from 'pragmate-ui/components/toast';
```

This approach keeps your bundle lean, ensuring you don’t include unnecessary code.

## Components

Pragmate UI currently offers the following components:

-   **Empty**: A component that renders a placeholder message when there is no data or content to display.
-   **Button**: A component that renders a clickable button with different variants and sizes.
-   **Textarea**: A component that renders a multi-line text input field with auto-resizing and character limit
    features.
-   **Switch**: A component that renders a toggle switch that can be used for boolean values or options.
-   **Input**: A component that renders a single-line text input field with validation and masking features.
-   **Checkbox**: A component that renders a checkbox that can be used for multiple selection or boolean values.
-   **Radio**: A component that renders a radio button that can be used for single selection or options.
-   **Toast**: A component that renders a notification message that appears on the top right corner of the screen and
    disappears after a few seconds.
-   **ScrollContainer**: A component that renders a container that has a custom scrollbar and supports horizontal and
    vertical scrolling.
-   **Modal**: A component that renders a modal dialog that appears on the center of the screen and overlays the rest of
    the content.
-   **Alert Modal**: A component that renders a modal dialog that displays an alert message with an icon and an optional
    action button.
-   **Confirm Modal**: A component that renders a modal dialog that displays a confirmation message with an icon and two
    action buttons (confirm and cancel).
-   **Image**: A component that renders an image with lazy loading and fallback features.
-   **IconButton**: A component that renders a button with an icon and no text.
-   **Icon**: A component that renders an icon from various icon libraries or custom SVGs.
-   **Tabs**: A component that renders a tabbed navigation with different styles and orientations.
-   **Input Controller**: A component that renders a controller for an input field with increment and decrement buttons.
-   **Swiper**: A component that renders a carousel or slider with swipe gestures and pagination features.
-   **Alert**: A component that renders an alert message with an icon and an optional close button.
-   **Verification Code**: A component that renders an input field for entering a verification code with auto-focus and
    auto-submit features.
-   **DragAndDrop**: A component that renders a drag and drop area for uploading files or moving items.
-   **Dropdown**: A component that renders a dropdown menu with different trigger modes and positions.
-   **DropdownSidebar**: A component that renders a sidebar menu with nested dropdown items.
-   **ThemeSwitcher**: A component that renders a switcher for changing the theme of the app (light or dark).
-   **Code**: A component that renders formatted code with syntax highlighting and line numbers.

## License

Pragmate UI is licensed under the MIT License. For more details, see the [LICENSE](./LICENSE) file.
