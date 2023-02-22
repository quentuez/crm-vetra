import React from "react";
import { useState } from "react";
import NavigationModalContent from "../NavigationModalContent/NavigationModalContent";

export default function Portal() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button onClick={() => setShowModal(true)}>
        Show modal using a portal
      </button>
      {showModal &&
        createPortal(
          <ModalContent onClose={() => setShowModal(false)} />,
          document.body
        )}
    </>
  );
}
