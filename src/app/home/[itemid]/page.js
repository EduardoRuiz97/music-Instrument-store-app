import ItemSlide from "@/components/HomeSections/Slides/ItemSlide";
import Description from "@/components/InstrumentDetails/Description/Description";
import Gallery from "@/components/InstrumentDetails/Gallery/Gallery";
import InstrumentInfo from "@/components/InstrumentDetails/InstrumentInfo/InstrumentInfo";
import Ranking from "@/components/InstrumentDetails/Ranking/Ranking";
import Reviews from "@/components/InstrumentDetails/Reviews/Reviews";
import { relatedSlideSelector } from "@/slideSelector";
import Link from "next/link";
import classes from '../../../styles/details.module.css';


export const metadata = {
  title: 'Melody Mart - Instrument details',
  description: 'Melody Mart instrument details page',
}



const DetailsPage = async ({params}) => {

  const data = await getItemDetails(params.itemid);
  const instrumentDetails = data.itemSelected;

  const relatedArray = relatedSlideSelector(instrumentDetails.brand, data.data);

  const relatedItems = {
    array: relatedArray,
    span: 'Our choice for you',
    h2: 'Related items',
    parag: 'See this items that could be interesting for you'
  }


  return (
    <main className={classes.main}>

      <div className={classes.navigation}>
        <Link href={'/home'}>Home</Link>/ <Link href={'/home/instrument-list/guitar'}>Instruments list</Link>/ <strong>{`${instrumentDetails.model}`}</strong>
      </div>

      <section className={`${classes.itemInfo} ${classes.section}`}>
        <Gallery selected={instrumentDetails}/>
        <InstrumentInfo selected={instrumentDetails}/>
      </section>

      <section className={` ${classes.section}`}>
        <Description selected={instrumentDetails} data={data.data}/>
        <ItemSlide info={relatedItems}/>
      </section>

      <section className={`${classes.reviews} ${classes.section}`}>
        <Reviews selected={instrumentDetails}/>
        <Ranking data={data.data}/>
      </section>

    </main>
  )
};

export default DetailsPage;

export async function getItemDetails(itemId) {

  const response = await fetch('https://instruments-364af-default-rtdb.firebaseio.com/instruments.json');
  
  if (!response.ok) {
    return;
  }

  await new Promise((resolve) => {
    setTimeout(resolve, 2000); // 3000 milliseconds (3 seconds)
  });

  const data = await response.json();

  const itemSelected = data.find(item => item.id === itemId);

  return {itemSelected, data};
}