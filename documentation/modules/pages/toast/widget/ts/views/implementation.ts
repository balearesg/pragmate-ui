export const implementation = `
import { Toasts, toast } from 'pragmate-ui/toast';
export function View() {
    
    function toggleToast(): void {
         toast.info("This is a toast",);
    }
	return (
		<>
            <Toasts
                position={{
                    bottom: '2rem',
                    right: '2rem',
                }}
            />
            <Button
                className="btn btn-primary"
                onClick={toggleToast}
            >
                Show error Toast
            </Button>
        </>
	);
}
`;

export const implementation2 = `
import { Toasts, toast } from 'pragmate-ui/toast';
export function View() {
    
    function toggleToast(): void {
         toast.info("This is a toast",);
    }
	return (
		<>
        <Toasts
            position={{
                bottom: '2rem',
                right: '2rem',
            }}
        />
        </>
	);
}
`;

export const implementationSuccess = `
function toggleToast(): void {
    toast.success("This is a success toast",);
}
`;

export const implementationError = `
function toggleToast(): void {
    toast.error("This is a error toast",);
}
`;

export const implementationWaring = `
function toggleToast(): void {
    toast.waring("This is a waring toast",);
}
`;

export const implementationInfo = `
function toggleToast(): void {
    toast.info("This is a info toast",);
}
`;

export const implementationLoading = `
function toggleToast(): void {
    toast.loading("This is a loading toast",);
}
`;
