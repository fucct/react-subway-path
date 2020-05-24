import React, { useEffect, useState } from "react";

import "../assets/service/css/search.css";
import InputStation from '../components/InputStation';
import PathResult from '../components/PathResult';
import axios from 'axios';


const Search = ({ location }) => {
  const [showResult, setShowResult] = useState("hidden");
  const [data, setData] = useState(null);
  const [url, setUrl] = useState("/search");
  const [type, setType] = useState("DISTANCE");

  const searchPath = (source, target, type) => {
    const url = "/paths?source=" + source + "&target=" + target + "&type=" + type;
    setUrl(url);
  }

  const toggleHidden = () => {
    setShowResult("");
  }

  const alterType = (e) => {
    if (e.target.id === "distance") {
      setType("DISTANCE");
    } else {
      setType("DURATION");
    }
  }

  useEffect(() => {
    if (url && url !== "/search") {
      const fetchData = async () => {
        try {
          const response = await axios.get(url);
          setData(response.data);
        }
        catch (e) {
          console.log(e);
        }
      };
      fetchData();
    }
  }, [url, type]);

  useEffect(() => {
    return () => {
      setShowResult("hidden");
    };
  }, []);

  return (
    <>
      <div className="max-w-sm w-full lg:width-350px rounded bg-white shadow-lg px-6 pt-6 pb-2">
        <div className="font-bold text-xl mb-4 text-center">지하철 경로 검색</div>
        <InputStation toggleHidden={toggleHidden} url={url} searchPath={searchPath} type={type}/>
      </div>
      <PathResult showResult={showResult} data={data} type={type} alterType={alterType}/>
    </>
  );
};

export default Search;
