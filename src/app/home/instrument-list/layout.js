"use client"

import InstrumentFilter from "@/components/UI/InstrumentFilter/Filter";
import { useRouter } from "next/navigation";
import classes from '../../../styles/InstrumentsList.module.css';



const InstrumentsPageLayout = async ({children}) => {

  const router = useRouter();

  const instruments = await getInstrumentsData();


  const selectInstrumentHandler = (instrument) => {
    router.push(`/home/instrument-list/${instrument}`)
  }


  return (
    <main className={classes.main}>

      <div>
        <InstrumentFilter onSelected={selectInstrumentHandler} data={instruments}/>
      </div>

      {children}
    </main>
  )
};

export default InstrumentsPageLayout;


export async function getInstrumentsData() {
  const response = await fetch('https://instruments-364af-default-rtdb.firebaseio.com/instruments.json');

  if (!response.ok) {
    return;
  }

  return response.json();
}
