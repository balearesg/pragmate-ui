## Changelog

### Version 0.0.6

-   Fix alerts types

### Updated

-   **CheckBox Component**: Fixed behavior using CheckBoxGroup Component.
-   **AlertModal**: Fixed bug when the backdrop is clicked. the component now pass the `onClose` parameter to modal
    component correctly.
-   **Button**: Defined standar size and fill properties for icons components.
-   **Chip**: Defined standar size and fill properties for icons components.

### Version 0.0.5

#### Added

-   **React Select Component**: Introduces a component for utilizing React Select within a web component.
-   **Collapsible Component**: A new component for creating collapsible sections.
-   **Accordion Component**: A component for creating accordion-style UI elements.

#### Updated

-   **ConfirmModal API**: Introduced a new standard API which includes an `actions` prop. This prop accepts an object
    that allows customization of the "confirm" and "cancel" buttons.
-   **ConfirmModal Style**: Updated the default style of the ConfirmModal buttons for improved aesthetics.

### Version 0.0.3

#### Added

-   **Button Sizing Attribute**: Added an attribute to control the sizing of buttons.
-   **Button Processing State**: Buttons now support a processing state, which is triggered by `onClick` functions.
-   **List Components**: Added components for rendering lists, allowing for the specification of control types for each
    list item.

#### Updated

-   **Accordion Component**: (Note: This item appears in both versions 0.0.3 and 0.0.4. If this is a duplicate, consider
    removing it from one of the versions for clarity.)
