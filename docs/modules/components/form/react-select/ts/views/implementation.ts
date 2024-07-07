export const implementation = `
<ReactSelect
  name="example"
  label="Select an option"
  value="option1"
  options={[
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
  ]}
  onChange={(event) => console.log(event.target.value)}
/>`;