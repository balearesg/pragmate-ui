import * as React from "react";
import { AlertModal } from "pragmate-ui/modal";
import { Button } from "pragmate-ui/components";
export function Results() {
  const [show, setShow] = React.useState(false);

  function handleModal() {
    setShow(!show);
  }

  return (
    <>
      <Button className="action-button" onClick={handleModal}>
        Display Modal!
      </Button>
      {show && (
        <AlertModal
          onConfirm={handleModal}
          className="beauty-modal"
          title="Title alert modal"
          text="text alert modal for a description"
          onClose={handleModal}
        />
      )}
    </>
  );
}
