import * as React from "react";
import { BeyondAlertModal } from "@bgroup/ui/modal";

export function Results() {
  const [show, setShow] = React.useState(false);

  function handleModal() {
    setShow(!show);
  }

  return (
    <>
      <button className="action-button" onClick={handleModal}>
        Display Modal!
      </button>
      {show && (
        <BeyondAlertModal
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
