export const getSuperheros = state => state.superheros.items;
export const getFilter = state => state.superheros.filter;

export const getVisibleSuperheros = state => {
  const superheros = getSuperheros(state);
  const filter = getFilter(state);
  const normalizedFilter = filter.toLowerCase();

  return superheros.filter(superhero =>
    superhero.nickName.toLowerCase().includes(normalizedFilter),
  );
};
