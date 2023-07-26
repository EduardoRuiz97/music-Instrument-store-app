export default function sorterSelector(criteria, data) {

  let resultArray;

  switch(criteria) {
    case "brand" :
    resultArray = data.sort((a,b) => {
      const aBrand = a.brand.toLowerCase();
      const bBrand = b.brand.toLowerCase(); 

      if (aBrand < bBrand) {
        return -1;
      }

      if (aBrand > bBrand) {
        return 1;
      }

      return 0;
    }).map(items => items);
    break;

    case "high":
      resultArray = data.sort((a,b) => {
        let aPrice = Number(a.price).toFixed(2);
        let bPrice = Number(b.price).toFixed(2);

        if (aPrice < bPrice) {
          return 1;
        }
  
        if (aPrice > bPrice) {
          return -1;
        }
  
        return 0;
      }).map(items => items);
    break;

    case "low":
      resultArray = data.sort((a,b) => {
        let aPrice = Number(a.price).toFixed(2);
        let bPrice = Number(b.price).toFixed(2);
        
        if (aPrice < bPrice) {
          return -1;
        }
  
        if (aPrice > bPrice) {
          return 1;
        }
  
        return 0;

      }).map(items => items);
    break;

    case "best":
    resultArray = data.sort((a,b) => {
      let aPrice = Number(a.rate).toFixed(1);
      let bPrice = Number(b.rate).toFixed(1);
      
      if (aPrice < bPrice) {
        return -1;
      }

      if (aPrice > bPrice) {
        return 1;
      }

      return 0;
      
    }).map(items => items);
    
    break;
  }


  return resultArray;

}