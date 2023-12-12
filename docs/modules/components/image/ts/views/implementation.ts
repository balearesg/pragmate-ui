export const implementation = `
<Image 
    src="image url" 
    alt="alt image" 
/>;`;

export const implementationSource = `
const sources = [
    {
        media: "(max-width: 1280px)",
        srcSet: "image srcSet url"
    }
];
<Image
    src="image url"
    alt="image alt"
    sources={sources}
/>
`;

export const implementationError = `
<Image
src="https://images.freeimages.com/images/large-prews/19f/the-manor-1642006.jpg"
alt="Alt de la imagen"
sizeLoadingError={{
    width: "600px",
    height: "450px"
}}
onError={() => { }}
/>
`;
