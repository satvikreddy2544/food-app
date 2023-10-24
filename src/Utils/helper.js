export const filterData=(restaurants,searchText)=>{

  
    const filterData= restaurants.filter((rest)=> rest?.info?.name.toLowerCase().includes(searchText.toLowerCase()));
    return filterData;
  }