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
sizeLoading={{
    width: "600px",
    height: "450px"
}}
onError={() => { }}
/>
`;

export const implementationSourceWidth = `
const sources = [
    {
        minWidth: 500,
        maxWidth: 1280,
        srcSet: "https://th.bing.com/th/id/OIP.EvzGc57hkNpeXisvI_7rwgHaE8?w=276&h=185&c=7&r=0&o=5&pid=1.7"
    }
]
<Image
    src="image url"
    alt="image alt"
    sources={sources}
/>
`;