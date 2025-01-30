import React from "react";

export default function ButtonComponent({
  btnClass,
  btnIconAfter,
  btnIconBefore,
  btnName,
  onClick,
  disabled,
}) {
  return (
    <>
      <button
        type="button"
        className={`btn ${btnClass}`}
        onClick={onClick}
        disabled={disabled}
      >
        {btnIconBefore}
        {btnName}
        {btnIconAfter}
      </button>
    </>
  );
}
