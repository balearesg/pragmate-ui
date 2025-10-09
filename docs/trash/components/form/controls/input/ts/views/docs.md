---

### `Input` Component

#### Overview:
The `Input` component is a versatile React component designed for creating input fields within forms. It supports multiple variants, types, and configurations, making it adaptable for various user interface designs.

#### Variants:
1. **Unstyled**: 
   
   - Usage: `<Input variant='unstyled' type='text' name='name' label='Unstyled input' />`

2. **Default**:
   - The default variant is used to create a standard input field with default styling.
   - Usage: `<Input type='text' name='name' placeholder='With placeholder' />`

3. **Floating Label**:
   - This variant includes a floating label that animates as the user interacts with the input field.
   - Usage: `<Input variant='floating' type='text' name='name' label='Floating label' />`


#### Examples:
```jsx
// Unstyled Input
<Input variant='unstyled' type='text' name='name' label='Unstyled input' />

// Default Input with Placeholder
<Input type='text' name='name' placeholder='With placeholder' />

// Input with Floating Label
<Input variant='floating' type='text' name='name' label='Floating label' />
```

#### Additional Notes:
- This component is a part of `pragmate-ui/form` package, suggesting it's optimized for integration with other form-related components such as `Label` and `Error`.
- The examples also demonstrate the component's compatibility with additional child components, such as custom labels and error messages, indicating its extensibility and adaptability in form design.

#### Usage in Context:
The `Input` component is commonly used in form constructions where various types of input fields are needed. Its versatility in styling and functionality makes it suitable for diverse forms and interfaces, from simple text inputs to more complex forms with animated labels and custom error handling.

---

This documentation provides an overview of the `Input` component, its variants, properties, and usage based on the
examples provided. It's designed to be comprehensive and adaptable for developers looking to implement this component in
their React applications.
