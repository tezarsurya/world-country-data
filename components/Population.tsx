import { useEffect, useState } from "react";

interface Population {
  total: number;
  country: any;
}

export default function Population({ total, country }: Population) {
  const [percent, setPercent] = useState("");

  useEffect(() => {
    setPercent(((country.population / total) * 100).toFixed(2));
  }, []);

  return (
    <div className="flex w-full my-2">
      <div className="flex w-1/5">{country.name}</div>
      <div className="flex flex-1 w-3/5">
        <span className="bg-orange-400" style={{ width: `${percent}%` }}></span>
      </div>
      <div className="flex pl-4 w-1/5">
        {[country.population].toLocaleString()}
      </div>
    </div>
  );
}
