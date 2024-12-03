import { useRef, useState } from "react";
import ViewDetailMenu from "./ViewDetailMenu";
import ViewDetailsModal from "./ViewDetailsModal";

export default function FlightSummaryGridMenu({ data }) {
  const [viewDetailOpen, setViewDetailOpen] = useState(false);
  const menuRef = useRef();

  return (
    <>
    <ViewDetailsModal
     open={viewDetailOpen}
     setOpen={setViewDetailOpen}
     data={data}
    />
      <ViewDetailMenu
        ref={menuRef}
        onViewDetail={() => setViewDetailOpen(true)}
      ></ViewDetailMenu>

     
    </>
  );
}
