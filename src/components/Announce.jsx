import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

function Announce() {

  const [announceStyle, setAnnounceStyle] = useState(
    "bg-[#8a4af3] font-bold text-white flex items-center justify-center"
  );

  const handleClose = () => {
    setAnnounceStyle( announceStyle + ' hidden')
};

  return (
    <div className={announceStyle}>
      <h6>Grab your deal now it's 50% off this week.</h6>
      <CloseIcon  className="cursor-pointer" onClick={handleClose} />
    </div>
  );
}

export default Announce;
