import Head from "next/head";
import {
  calculatePopulation,
  topTenLanguage,
  topTenPopulation,
  totalCountry,
  totalLanguage,
} from "helpers/gather_stats";
import { GetServerSideProps } from "next";
import { countries_data } from "public/data/countries_data";
import { useEffect, useState } from "react";
import Population from "@/components/Population";
import Language from "@/components/Language";

export default function Home({ countries }: any) {
  const [countryTotal, setTotalCountry] = useState(0);
  const [worldPop, setWorldPop] = useState(0);
  const [topTenPop, setTopTenPop] = useState([{}]);
  const [totalLang, setTotalLang] = useState<any>({});
  const [topTenLang, setTopTenLang] = useState<any>([[]]);
  const [popDisplay, setPopDisplay] = useState(true);

  useEffect(() => {
    setTotalCountry(totalCountry(countries));
    setWorldPop(calculatePopulation(countries));
    setTopTenPop(topTenPopulation(countries));
    setTotalLang(totalLanguage(countries));
    setTopTenLang(topTenLanguage(countries));
  }, []);

  return (
    <div>
      <Head>
        <title>World Countries Data</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="flex flex-col items-center py-4 bg-slate-100 border-b-2 border-b-stone-300">
          <h1 className="text-4xl text-orange-400 tracking-wide">
            World Countries Data
          </h1>
          <span className="mt-2">
            Currenty, we have {countryTotal} countries
          </span>
        </div>
        <div className="flex justify-center items-center space-x-4 py-4">
          <button
            className="py-2 px-4 uppercase bg-orange-400 rounded-md shadow-lg hover:bg-orange-500 active:scale-95 transition-all ease-in-out duration-150"
            onClick={() => setPopDisplay(true)}
          >
            Population
          </button>
          <button
            className="py-2 px-4 uppercase bg-orange-400 rounded-md shadow-lg hover:bg-orange-500 active:scale-95 transition-all ease-in-out duration-150"
            onClick={() => setPopDisplay(false)}
          >
            Languages
          </button>
        </div>
        <div className="flex justify-center">
          <h5>
            {popDisplay
              ? "10 most populated countries in the world"
              : "10 most spoken languages in the world"}
          </h5>
        </div>
        <div className="flex flex-col items-center py-4 px-16 mx-8 mb-8 bg-slate-100 border-2 border-b-stone-300">
          {popDisplay ? (
            <>
              <div className="flex w-full my-2">
                <div className="flex w-1/5">World</div>
                <div className="flex flex-1 w-3/5">
                  <span className="flex-1 bg-orange-400 w-full"></span>
                </div>
                <div className="flex pl-4 w-1/5">
                  {worldPop.toLocaleString()}
                </div>
              </div>
              {topTenPop.map((country: any) => (
                <Population
                  total={worldPop}
                  country={country}
                  key={[country.capital].toString()}
                />
              ))}
            </>
          ) : (
            topTenLang.map((lang: any) => (
              <Language
                total={totalLang.total}
                lang={lang}
                key={lang[0].toString()}
              />
            ))
          )}
        </div>
      </main>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const countries = countries_data;

  return {
    props: {
      countries,
    },
  };
};
