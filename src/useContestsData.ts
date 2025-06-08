import { useEffect, useState } from "react";
import { wins } from "./data/winnersTable";

  
  
  
  export const useContestsData = () => {

      const [dataReversed, setData] = useState(null);

      useEffect(() => {
          const rev = wins
          setData(rev);
        }, []);
    
    return dataReversed
    }

