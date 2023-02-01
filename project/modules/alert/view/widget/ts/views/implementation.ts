export const implementation = `
import { useToastContext } from "@bgroup/ui/toast";
export function ImplementationAlert() {
<BeyondAlert  
    message="this is a success message"
    title="title success"
    mode="success"
    show={true}   
    isClose={true}
/>
  }
`;

export const implementationError = `
<BeyondAlert   
    message="this is a error message"
    title="title error"
    mode="error"
    show={true}
    isClose={true}   
/>
`;

export const implementationWaring = `
<BeyondAlert   
    message="this is a success warning"
    title="title warning"
    mode="warning"
    show={true}   
    isClose={false}
/>
`;

export const implementationInfo = `
<BeyondAlert   
    message="this is a info message"
    title="title info"
    mode="info"
    show={true} 
    isClose={true}  
/>
`;
