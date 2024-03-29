# Componente Badge

El componente Badge es un componente versátil que te permite mostrar distintos tipos de insignias con colores y valores
personalizables.

### Instalación

Para usar el componente Badge en tu proyecto, sigue estos pasos:

1. Instala las dependencias necesarias si aún no lo has hecho:

    ```bash
    npm install react
    ```

2. Importa el componente Badge en tu proyecto:

    ```javascript
    import { Badge } from './Badge';
    ```

### Uso

Puedes utilizar el componente Badge incluyéndolo en tu código JSX y pasando las propiedades necesarias:

```javascript
<Badge variant="primary" value={3}>
	Notificaciones
</Badge>
```

### Propiedades

El componente Badge acepta las siguientes propiedades:

-   `variant` (cadena de texto, opcional): Define la variante de color de la insignia. Los valores posibles son
    'primary', 'secondary', 'success', 'danger', 'warning', 'info' o 'default'. Si no se proporciona, se establece en
    'default' por defecto.
-   `value` (número, obligatorio): El valor numérico que se mostrará dentro de la insignia.
-   `children` (ReactNode, obligatorio): El contenido que deseas mostrar junto a la insignia.

### Ejemplos

Aquí tienes algunos ejemplos de cómo utilizar el componente Badge:

```javascript
<Badge variant="primary" value={3}>
  Notificaciones
</Badge>

<Badge variant="success" value={10}>
  Mensajes
</Badge>

<Badge variant="danger" value={1}>
  Error
</Badge>
```

### Estilo

El componente Badge utiliza SCSS para el estilo, y puedes personalizar su apariencia modificando las variables SCSS. Las
variables de color disponibles son:

-   `--primary`
-   `--secondary`
-   `--success`
-   `--danger`
-   `--warning`
-   `--info`
-   `--default`

Puedes sobrescribir estas variables para cambiar los colores de la insignia y adaptarlos al diseño de tu proyecto.

### Patrones

El componente Badge sigue el patrón de creación de componentes reutilizables en React y utiliza variables CSS para
personalizar el estilo.

### Licencia

Este componente es de código abierto y está disponible bajo la Licencia MIT.

Siéntete libre de personalizar e integrar el componente Badge en tu proyecto según tus necesidades. Si tienes alguna
pregunta o necesitas más ayuda, no dudes en ponerte en contacto.
