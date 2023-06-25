import React, { useState } from "react";
import { GoChevronDown, GoChevronUp } from "react-icons/go";

export default function ExpandablePanel({ header, children }) {
  // Using the usestate method to check if the panel is expanded or not
  const [isExpanded, setIsExpanded] = useState(false);


  const handleOnExpand = ()=>{
    if(isExpanded){
        setIsExpanded(false)
    }else{
        setIsExpanded(true)
    }
  }

  return (
    <div className="mb-2 border rounded">
      <div className="flex p-2 justify-between items-center ">
        {/* Header Div */}
        <div className="flex flex-row items-center justify-between">
          {header}
        </div>

        <div className="cursor-pointer" onClick={handleOnExpand}>{isExpanded ? <GoChevronUp/> : <GoChevronDown/>}</div>
        
      </div>

      {/* Children Div */}
      {isExpanded && <div className="p-2 border-t">{children}</div> }
    </div>
  );
}
