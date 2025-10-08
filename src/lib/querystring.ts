export const getAll = (sp: URLSearchParams, key: string): string[] =>
  sp.getAll(key).flatMap(v => v.split(',')).filter(Boolean);

export const setAll = (sp: URLSearchParams, key: string, values: string[]) => {
  sp.delete(key);
  if (values.length) sp.set(key, values.join(','));
};

