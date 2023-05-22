import * as React from "react";
import { Form } from "@bgroup/ui/form";
import { Input } from "@bgroup/ui/form";
import { Button } from "@bgroup/ui/form";
import { Modal } from "@bgroup/ui/modal";
import { ErrorMessage } from "./error";

const allowedColors = ["#39A9DC", "#87C544", "#2D485A", "#002130"];

export /* bundle */ function FormColorPicker({ show, handleModalColor }) {
  const [value, setValue] = React.useState<string>(allowedColors[0]);
  const [error, setError] = React.useState<string | null>(null);
  const errorMessage = `Only color values are allowed ${allowedColors.join(
    ","
  )}`;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    const isValid = allowedColors.includes(newValue);

    if (isValid) {
      setValue(newValue);
      setError(null);
    } else {
      setValue(allowedColors[0]);
      setError(errorMessage);
    }
  };
  function handleSubmit(event) {
    //	...logic
  }

  if (!show) return false;
  return (
    <Modal show className="beauty-modal" onClose={handleModalColor}>
      <Form onSubmit={handleSubmit} className="container-form-color">
        <img
          className="form-color__img-icon"
          src="assets/circulo-de-color.png"
          alt="icon palet of color"
        />
        <Input
          type="color"
          name="color1"
          label="Insert a color..."
          className="form-color__input"
          onChange={handleChange}
          value={value}
        />
        <ErrorMessage error={error} />
        <Input
          type="color"
          name="color2"
          label="Insert a color..."
          className="form-color__input"
          onChange={handleChange}
          value={value}
        />
        <ErrorMessage error={error} />
        <Input
          type="color"
          name="color3"
          label="Insert a color..."
          className="form-color__input"
          onChange={handleChange}
          value={value}
        />
        <ErrorMessage error={error} />
        <Input
          type="color"
          name="color4"
          label="Insert a color..."
          className="form-color__input"
          onChange={handleChange}
          value={value}
        />
        <ErrorMessage error={error} />

        <Input
          type="color"
          name="color5"
          label="Insert a color..."
          className="form-color__input"
          onChange={handleChange}
          value={value}
        />
        <ErrorMessage error={error} />

        <Button className="btn btn-secondary form-color__button">
          accept color
        </Button>
      </Form>
    </Modal>
  );
}
