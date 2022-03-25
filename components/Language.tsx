import React, { useEffect, useState } from "react";

interface Languange {
  total: number;
  lang: any;
}

function Language({ total, lang }: Languange) {
  const [percent, setPercent] = useState("");

  useEffect(() => {
    setPercent(((lang[1] / total) * 100).toFixed(2));
  }, []);

  return (
    <div className="flex w-full my-2">
      <div className="flex w-1/5">{lang[0]}</div>
      <div className="flex flex-1 w-3/5">
        <span className="bg-orange-400" style={{ width: `${percent}%` }}></span>
      </div>
      <div className="flex pl-4 w-1/5">{lang[1]}</div>
    </div>
  );
}

export default Language;
