import React from "react";

export default function Modal(props) {
  function closeModal() {
    props.closeModal();
  }

  return (
    <div className="modal" onClick={closeModal}>
      <div className="body" onClick={(e) => e.stopPropagation()}>
        {props.children}
      </div>
    </div>
  );
}
