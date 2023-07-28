import HomeBanner from '@/components/HomeBanner/HomeBanner';
import Policies from '@/components/HomeSections/Policies/Policies'
import Promos from '@/components/HomeSections/Promos/Promos'
import SliderSelector from '@/slideSelector';
import ItemSlide from '@/components/HomeSections/Slides/ItemSlide';
import AddContainer from '@/components/UI/AddContainer/AddContainer';
import Banner from '@/components/HomeSections/Banners/Banners';
import classes from '../../styles/home.module.css';



export default async function Home() {

  const instruments = await getData();

  const recentlyAddedArray = SliderSelector("recently", instruments);
  const bestSellings = SliderSelector("best-selling", instruments);
  const bestPrice = SliderSelector("best-price", instruments);

  return (
    <main>
      <section>
        <HomeBanner />
      </section>

      <section className={classes.responsive}>
        <Policies />
      </section>

      <section className={classes.responsive}>
        <Promos />
      </section>

      <section className={classes.responsive}>
        <ItemSlide info={recentlyAddedArray} id='new-arrivals'/>
        <AddContainer item={instruments} inst='bass'/>
      </section>

      <section className={classes.responsive}>
        <ItemSlide info={bestSellings} id={'best-sellings'}/>
        <AddContainer item={instruments} inst='pedal'/>
      </section>

      <section className={classes.responsive}>
        <ItemSlide info={bestPrice} id={'best-deals'}/>
      </section>

      <section>
        <Banner item={instruments}/>
      </section>

    </main>
  )
};


export async function getData() {
  const response = await fetch('https://instruments-364af-default-rtdb.firebaseio.com/instruments.json', { next: { revalidate: 10 } });

  if (!response.ok) {
    return;
  }

  return response.json();
}
