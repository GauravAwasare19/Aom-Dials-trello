const cards = [
    {
      id: 'card-1',
      title: 'Add your items:',
      quantity:'Quantity:',
      material:'Material:',
      finishing:'Finishing',
    },

  ];
  
  const data = {
    lists: {
      'list-1': {
        id: 'list-1',
        title: 'Add your Lists',
        cards,
      },
    },
    listIds: [],
  };
  
  export default data;