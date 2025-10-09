import React, { useState } from 'react';
import { ReactSelect } from 'pragmate-ui/form/react-select';

export function Result() {
  const [selectedValue, setSelectedValue] = useState('option1');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div>
      <ReactSelect
        name="example"
        label="Select an option"
        value={selectedValue}
        options={[
          { value: 'option1', label: 'Option 1' },
          { value: 'option2', label: 'Option 2' },
        ]}
        onChange={handleChange}
      />
    </div>
  );
}