To create a README for your Badge component, you can follow these guidelines:

## Badge Component

The Badge component is a versatile component that allows you to display badges with different colors and values.

### Installation

To use the Badge component in your project, follow these steps:

1. Install the component's dependencies if you haven't already:

   ```bash
   npm install react
   ```

2. Import the Badge component into your project:

   ```javascript
   import { Badge } from './Badge';
   ```

### Usage

You can use the Badge component by including it in your JSX code and passing the necessary props:

```javascript
<Badge variant="primary" value={3}>
  Notifications
</Badge>
```

### Props

The Badge component accepts the following props:

- `variant` (string, optional): Defines the color variant of the badge. Possible values are 'primary', 'secondary', 'success', 'danger', 'warning', 'info', or 'default'. If not provided, it defaults to 'default'.
- `value` (number, required): The numeric value to be displayed inside the badge.
- `children` (ReactNode, required): The content you want to display next to the badge.

### Examples

Here are some examples of how to use the Badge component:

```javascript
<Badge variant="primary" value={3}>
  Notifications
</Badge>

<Badge variant="success" value={10}>
  Messages
</Badge>

<Badge variant="danger" value={1}>
  Error
</Badge>
```

### Styling

The Badge component is styled using SCSS, and you can customize its appearance by modifying the SCSS variables. The available color variables are:

- `--primary`
- `--secondary`
- `--success`
- `--danger`
- `--warning`
- `--info`
- `--default`

You can override these variables to change the badge's colors to match your project's design.

### Patterns

The Badge component follows the pattern of creating reusable components in React and using CSS variables for styling customization.

### License

This component is open-source and available under the MIT License.

Feel free to customize and integrate the Badge component into your project as needed. If you have any questions or need further assistance, please don't hesitate to reach out.