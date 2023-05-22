import * as React from "react";
import { BeyondForm } from "@bgroup/ui/form";
import { BeyondInput } from "@bgroup/ui/form";
import { BeyondButton } from "@bgroup/ui/form";
import { BeyondModal } from "@bgroup/ui/modal";

export /* bundle */ function FormColorPicker({ show, handleModalColor }) {
  const [value, setValue] = React.useState("");
  function handleChange(event) {
    const { value: inputValue } = event.target;
    setValue(inputValue);
  }
  function handleSubmit(event) {
    //	...logic
  }

  if (!show) return false;
  return (
    <BeyondModal show className="beauty-modal" onClose={handleModalColor}>
      <BeyondForm onSubmit={handleSubmit} className="container-form-color">
        <BeyondInput
          type="color"
          name="name"
          label="Insert a text..."
          className="form-color__input"
          onChange={handleChange}
        />
        <BeyondInput
          type="color"
          name="name"
          label="Insert a text..."
          className="form-color__input"
          onChange={handleChange}
        />
        <BeyondInput
          type="color"
          name="name"
          label="Insert a text..."
          className="form-color__input"
          onChange={handleChange}
        />
        <BeyondInput
          type="color"
          name="name"
          label="Insert a text..."
          className="form-color__input"
          onChange={handleChange}
        />

        <BeyondButton className="btn btn-secondary form-color__button">
          Button secondary
        </BeyondButton>
      </BeyondForm>
    </BeyondModal>
  );
}
