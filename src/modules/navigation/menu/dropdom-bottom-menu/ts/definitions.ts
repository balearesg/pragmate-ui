export interface IPropsDropdowm {
    handleClick?: () => void;
    show: boolean;
    items?: Array<string>; 
    children?: React.ReactNode;
    isImage?: boolean; 
    title?: string; 
}