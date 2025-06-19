import React, { useState } from 'react';
import { Input } from 'pragmate-ui/form';
import { Button } from 'pragmate-ui/components';

interface Item {
  type: string;
  name: string;
  label: string;
}

export /*bundle*/ function WiseFormWizard() {
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');
  const [template, setTemplate] = useState('');
  const [items, setItems] = useState<Item[]>([]);

  const addItem = () => setItems([...items, { type: 'text', name: '', label: '' }]);

  const updateItem = (index: number, key: keyof Item, value: string) => {
    const copy = [...items];
    copy[index][key] = value;
    setItems(copy);
  };

  const removeItem = (index: number) => setItems(items.filter((_, i) => i !== index));

  const next = () => step < 3 && setStep(step + 1);
  const back = () => step > 1 && setStep(step - 1);

  const result = {
    name,
    template: template
      .split(',')
      .map(v => v.trim())
      .filter(Boolean),
    items,
  };

  return (
    <div className="wise-form-wizard">
      {step === 1 && (
        <div className="wizard-step">
          <h3>Configuración general</h3>
          <Input type="text" label="Name" value={name} onChange={e => setName(e.target.value)} />
          <textarea
            placeholder="template values separated by comma"
            value={template}
            onChange={e => setTemplate(e.target.value)}
          />
          <Button variant="primary" onClick={next}>
            Siguiente
          </Button>
        </div>
      )}

      {step === 2 && (
        <div className="wizard-step">
          <h3>Items</h3>
          {items.map((item, index) => (
            <div className="wizard-item" key={index}>
              <Input type="text" value={item.type} onChange={e => updateItem(index, 'type', e.target.value)} placeholder="type" />
              <Input type="text" value={item.name} onChange={e => updateItem(index, 'name', e.target.value)} placeholder="name" />
              <Input type="text" value={item.label} onChange={e => updateItem(index, 'label', e.target.value)} placeholder="label" />
              <Button onClick={() => removeItem(index)}>Remove</Button>
            </div>
          ))}
          <Button variant="primary" onClick={addItem}>
            Add Item
          </Button>
          <div className="wizard-actions">
            <Button onClick={back}>Atrás</Button>
            <Button variant="primary" onClick={next}>
              Siguiente
            </Button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="wizard-step">
          <h3>Previsualización</h3>
          <pre>{JSON.stringify(result, null, 2)}</pre>
          <Button onClick={back}>Atrás</Button>
        </div>
      )}
    </div>
  );
}
