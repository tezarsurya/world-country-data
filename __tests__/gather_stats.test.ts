import { Country } from "../public/data/countries_data";
import {
  calculatePopulation,
  topTenLanguage,
  topTenPopulation,
  totalCountry,
  totalLanguage,
} from "../helpers/gather_stats";

const mock: Country = [
  {
    name: "Indonesia",
    languages: ["English", "Indonesia"],
    population: 700,
    region: "Southeast Asia",
    flag: "https://flagcdn.com/id.svg",
  },
  {
    name: "Malaysia",
    languages: ["English", "Melayu"],
    population: 500,
    region: "Southeast Asia",
    flag: "https://flagcdn.com/my.svg",
  },
];

describe("Count Country", () => {
  it("counts total country in array", () => {
    const total = totalCountry(mock);

    expect(total).toEqual(2);
  });
});

describe("World Population", () => {
  it("sums world population from countries data", () => {
    const total = calculatePopulation(mock);

    expect(total).toEqual(1200);
  });
});

describe("Total Language", () => {
  it("sums all language in countries data", () => {
    const total = totalLanguage(mock);

    expect(total).toEqual({
      languages: ["English", "Indonesia", "Melayu"],
      total: 3,
    });
  });
});

describe("Top 10 Population", () => {
  it("rank countries with most population", () => {
    const rank = topTenPopulation(mock);

    expect(rank).toEqual([
      {
        name: "Indonesia",
        languages: ["English", "Indonesia"],
        population: 700,
        flag: "https://flagcdn.com/id.svg",
        region: "Southeast Asia",
      },
      {
        name: "Malaysia",
        languages: ["English", "Melayu"],
        population: 500,
        flag: "https://flagcdn.com/my.svg",
        region: "Southeast Asia",
      },
    ]);
  });
});

describe("Top 10 Language", () => {
  it("rank top 10 languages", () => {
    const topTen = topTenLanguage(mock);

    expect(topTen).toEqual([
      ["English", 2],
      ["Indonesia", 1],
      ["Melayu", 1],
    ]);
  });
});
