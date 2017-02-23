export const getAllBusinesses = (businesses) => (
  Object.keys(businesses).map(id => businesses[id])
);
