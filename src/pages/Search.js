import React, { useEffect, useReducer, useState } from "react";

import "../assets/service/css/search.css";
import InputStation from '../components/InputStation';
import PathResult from '../components/PathResult';
import axios from 'axios';

function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value
  };
};

const Search = () => {
  const [showResult, setShowResult] = useState("hidden");
  const [data, setData] = useState(null);
  const [url, setUrl] = useState("/search");
  const [type, setType] = useState("DISTANCE");
  const [state, dispatch] = useReducer(reducer, {
    source: "",
    target: "",
  });

  const { source, target } = state;

  const onChange = e => {
    dispatch(e.target);
  };

  const onClick = (e) => {
    e.preventDefault();
    searchPath(source, target);
    toggleHidden();
  }

  const searchPath = (source, target) => {
    const url = "/paths?source=" + source + "&target=" + target + "&type=" + type;
    setUrl(url);
  }

  const toggleHidden = () => {
    setShowResult("");
  }

  const alterType = (e) => {
    e.preventDefault();
    let updatedType;
    if (e.target.id === "distance") {
      updatedType="DISTANCE";
    } else {
      updatedType="DURATION"
    }
    setType(updatedType);
    setUrl("/paths?source=" + source + "&target=" + target + "&type=" + updatedType);
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
  }, [url]);

  useEffect(() => {
    return () => {
      setShowResult("hidden");
    };
  }, []);

  return (
    <>
      <div className="max-w-sm w-full lg:width-350px rounded bg-white shadow-lg px-6 pt-6 pb-2">
        <div className="font-bold text-xl mb-4 text-center">지하철 경로 검색</div>
        <InputStation source={source} target={target} onChange={onChange} onClick={onClick} toggleHidden={toggleHidden} url={url} searchPath={searchPath}/>
      </div>
      <PathResult showResult={showResult} data={data} type={type} alterType={alterType}/>
    </>
  );
};

export default Search;
