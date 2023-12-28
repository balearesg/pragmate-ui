export const implementation = `<Alert type={type}>
    <h3 className="alert__title-span">Esto es una alerta comun de tipo: success</h3>
</Alert>
`;

export const implementationSuccess = `
<Alert  
    message="this is a success message"
    title="title success"
    mode="success"
    show   
    isClose={true}
/>
`;

export const implementationError = `
<Alert   
    message="this is a error message"
    title="title error"
    mode="error"
    show
    isClose={true}   
/>
`;

export const implementationWaring = `
<Alert   
    message="this is a success warning"
    title="title warning"
    mode="warning"
    show
    isClose={false}
/>
`;

export const implementationInfo = `
<Alert   
    message="this is a info message"
    title="title info"
    mode="info"
    show 
    isClose={true}  
/>
`;
