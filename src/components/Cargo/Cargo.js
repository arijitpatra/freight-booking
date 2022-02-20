import { useState } from "react";

export const Cargo = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle((data) => !data);
  };

  return (
    <>
      {!toggle && <div onClick={handleToggle}>+ Add Cargo</div>}
      {toggle && <div>FORM</div>}
    </>
  );
};
