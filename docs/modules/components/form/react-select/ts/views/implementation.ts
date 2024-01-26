export const implementation = `
const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]
export default function App() {
  const [selectedOption, setSelectedOption] = React.useState(null);

  return (
    <div className="App">
      <ReactSelect
        widget={widget}
        options={options}
      />
    </div>
  );
}
`;
