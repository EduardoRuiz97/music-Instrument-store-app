import InstrumentsListContainer from "@/components/InstrumentsListContainer/InstrumentsListContainer";

const InstrumentList = async({params}) => {



  const instumentList = await getInstrumentListData(params.instrument);


  return (
    <InstrumentsListContainer data={instumentList}/>
  )
};

export default InstrumentList;


export async function getInstrumentListData(selected) {
  const response = await fetch('https://instruments-364af-default-rtdb.firebaseio.com/instruments.json');

  if (!response.ok) {
    return;
  }

  await new Promise((resolve) => {
    setTimeout(resolve, 3000); // 3000 milliseconds (3 seconds)
  });

  const data = await response.json();

  const instrumentSelected = data.filter(item => item.instrument === selected);

  return instrumentSelected;
}