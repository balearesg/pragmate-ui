# `Empty`

El componente `Empty` es parte de la librería Pragmate-UI y se utiliza para mostrar secciones vacías o de contenido
faltante en una interfaz de usuario. Este componente es útil cuando deseas indicar al usuario que no hay registros
disponibles en un área particular de tu aplicación. Puedes personalizar el texto, el ícono y el contenido adicional que
se muestra dentro de la sección vacía.

### Uso

A continuación, se muestra cómo puedes utilizar el componente `Empty` en tu aplicación:

```jsx
import React from 'react';
import {Empty} from 'pragmate-ui';

const MyComponent: React.FC = () => {
	return (
		<div style={{display: 'flex', flexDirection: 'column', height: '100vh'}}>
			{/* Other content */}
			<Empty text="No hay resultados" icon="warning" />
			{/* More content */}
		</div>
	);
};

export default MyComponent;
```

### Props

El componente `Empty` acepta las siguientes propiedades:

-   `text` (opcional): Un string que define el texto que se mostrará en la sección vacía. Por defecto, muestra "No hay
    registros".
-   `icon` (opcional): Un string que indica el nombre del ícono que se mostrará junto al texto. Utiliza los íconos
    proporcionados por la librería de íconos de Pragmate-UI.
-   `additionalElement` (opcional): Un elemento React que se puede proporcionar para mostrar contenido adicional, como
    botones o enlaces.
-   `children` (opcional): Contenido adicional que se puede proporcionar como componentes React.
-   `className` (opcional): Una clase CSS adicional que se agregará al contenedor del componente `Empty`.

### Importante: Estilo Flex

Para garantizar que el componente `Empty` ocupe todo el espacio vertical disponible y funcione correctamente, asegúrate
de que el contenedor que contiene el componente tenga un estilo de flexbox. Aquí tienes un ejemplo de cómo se podría
hacer:

```jsx
<div style={{display: 'flex', flexDirection: 'column', height: '100vh'}}>
	{/* ... */}
	<Empty text="No hay resultados" icon="warning" />
	{/* ... */}
</div>
```

Esto permitirá que el componente `Empty` ocupe todo el espacio vertical disponible en el contenedor.
