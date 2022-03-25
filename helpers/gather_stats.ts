import { Country } from "../public/data/countries_data";

export const calculatePopulation = (data: Country) => {
  let populations = data.map((country) => country.population);

  let totalPop = populations.reduce((prev, curr) => prev + curr);

  return totalPop;
};

export const totalCountry = (data: Country) => {
  return data.length;
};

export const totalLanguage = (data: Country) => {
  let languages = data.map((country) => country.languages);

  let merged = new Set(languages.reduce((prev, curr) => prev.concat(curr)));

  let result: Array<string> = [];

  merged.forEach((lang) => {
    result.push(lang);
  });

  return { languages: result, total: result.length };
};

export const topTenPopulation = (data: Country) => {
  return data.sort((a, b) => b.population - a.population).slice(0, 10);
};

export const topTenLanguage = (data: Country) => {
  let languages = data.map((country) => country.languages);

  let merged = languages.reduce((prev, curr) => prev.concat(curr));

  let mostFrequent = merged.reduce((prev: any, curr: any) => {
    prev[curr] = (prev[curr] || 0) + 1;
    return prev;
  }, {});

  let sortable = [];

  for (let lang in mostFrequent) {
    sortable.push([lang, mostFrequent[lang]]);
  }

  return sortable.sort((a, b) => b[1] - a[1]).slice(0, 10);
};
