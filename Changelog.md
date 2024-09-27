# Changelog

## [1.0.0-beta.1] - 2024-06-30

### Added

-   **Drawer Component**: A new component for creating drawers.

-   **HtmlWrapper** included.
-   **Dynamic List component**: This component lets you manage a list and add new items to it.
-   **Framer Motion dependency**: Added to enhance animation capabilities.
-   **Base Interface**: Introduced a base interface with common properties for all components. This change simplifies
    the code and avoids handling multiple interfaces with the same purpose.

### Changed

-   **Link Component**: The `onClick` prop now accepts a function that can return `false` to prevent the default
    behavior.
-   **AlertModal**: The container of actions now has a class `pui-modal__actions` by default.
-   **ReactSelect**: Adjusted logic to handle mobile selects and replace it with a common select.
-   **Icons**:
    -   The value where the SVG content is saved is now `path` instead of `icon` to be more semantic.
    -   Icons now support `src` attributes, allowing them to be loaded as images.

### Fixed

-   **Breadcrumb**: Fixed types.
-   **Types**: General type errors corrected.

#### Version 0.1.1

**Released:** 4/10/2024

**Enhancements:**

-   Added support for `datetime-local` input types, allowing for integrated date and time selection within forms.

#### Version 0.1.0

**Released:** 4/09/2024

**Enhancements:**

-   Standardized the wrapper for React Select to align with the API used by other form selectors. The modified wrapper
    now returns an event object with `target` and `currentTarget` properties, which are consistent across all events.
-   Introduced a new dropdown component, enhancing the UI component suite with additional selection options for users.

**Fixes:**

-   General improvements to type definitions across the library, increasing stability and developer experience by
    ensuring more reliable type checks.

## 0.0.7 Release Notes

### New Features and Enhancements

-   **Ripple Effect Fix for Issue #56**: Implemented a solution for the ripple effect issue identified in issue #56.
    This fix involves the use of absolute positioning for the ripple spans to ensure the effect is correctly rendered
    across all components where it's utilized.

### Fixes

-   **Modal Component Enhancements**:

    -   **Backward Compatibility**: Adjustments have been made to modals to enhance backward support. This includes
        reintroducing the `show` and `onClose` properties, which had been previously removed, ensuring that modal
        visibility control and close functionality can be easily managed.
    -   **Optional Actions**: Actions within modals have now been made optional, allowing for more flexible modal
        configurations according to specific use cases.
    -   **`onClose` Property Addition**: Added the ability for developers to specify an `onClose` handler directly on
        the modal component. This facilitates better control over the modal's behavior when attempting to close it.
    -   **Style Adjustments**: Made several adjustments to the modal's styles to improve its standalone appearance,
        ensuring that modals are visually appealing and align with the overall design system without requiring
        additional customization.

-   **General Type Corrections**: Conducted thorough reviews and corrections of the general types across the library to
    address and prevent misconceptions and incorrect type definitions. This update aims to enhance type safety and
    developer experience by ensuring accurate and clear type annotations.

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
