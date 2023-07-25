export default function SliderSelector(criteria, data) {

  let resultArray;

  switch(criteria) {

    case "recently" :
    resultArray = {
      array: data?.filter(item => item.new === true),
      span: 'Recently Added',
      h2: 'New Arrivals',
      parag: 'Everything you may need for great sound! '
    }
    break;

    case "best-selling": 
    resultArray = {
      array: data?.filter(item => {
        if(item.instruments !== 'accesories' && item.rate === 9.7) {
          return item;
        }
      }).slice(0,10),

      span: 'Our choice for you',
      h2: 'Best-Selling Instruments',
      parag: 'Click on the image to open the product card with full description.'
    };
    break;

    case "best-price" : 
      resultArray = {
        array: data?.filter(item => {
          if(item.instruments !== 'accesories' && item.instruments !== 'pedal' && Number(item.price) < 300) {
            return item;
          }
        }).sort((a,b) => {
          const aPrice = Number(a.price).toFixed(2);
          const bPrice = Number(b.price).toFixed(2);
      
        return aPrice > bPrice;}).slice(0,10),
        span: 'Shop',
        h2: 'Best prices',
        parag: `Buy a musical instrument you've always dreamed of`
      };
    break;
  }

  return resultArray;
}
