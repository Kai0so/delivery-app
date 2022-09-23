const getSellers = async () => {
  const url = 'http://localhost:3001/users/sellers';
  const sellers = await fetch(url);
  const data = sellers.json();

  return data;
};

export default getSellers;
