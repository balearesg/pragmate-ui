export const implementation = `import { ButtonGroup, Button } from 'pragmate-ui/components';

function MyComponent() {

  return (
    <ButtonGroup orientation="column" size="tall">
      <Button>Button 1</Button>
      <Button>Button 2</Button>  
      <Button>Button 3</Button>
    </ButtonGroup>
  );

}`;


export const implementationDisabled = `
<ButtonGroup orientation="row" disabledIndexes={[1, 3, 5]} size="tall">
	<Button variant="primary">Button 1</Button>
	<Button variant="primary">Button 2</Button>
	<Button variant="primary">Button 3</Button>
	<Button variant="primary">Button 4</Button>
	<Button variant="primary">Button 5</Button>
	<Button variant="primary">Button 6</Button>
</ButtonGroup>
`