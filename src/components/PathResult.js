import React from 'react';
import ResultTemplates from './ResultTemplates';

function PathResult({ showResult, data, type, alterType }) {
  return (
    <div id="search-result-container"
         className="max-w-sm w-full lg:width-350px rounded bg-white shadow-lg p-6 relative border top"
         hidden={showResult}>
      <button
        id="favorite-button"
        className="favorite-button bg-yellow-500 mdi mdi-star-outline absolute text-white bg-transparent d-inline-block font-semibold py-2 px-3 hover:border-transparent rounded-full z-10"
      >
      </button>
      <ul className="flex border-b w-full">
        <li id="shortest-distance-tab" className="-mb-px w-2/4 active-tab tab-menu">
          <a className="w-full text-center inline-block py-2 px-4 font-semibold"
             id="distance" onClick={alterType} href="#">최단거리</a>
        </li>
        <li id="minimum-time-tab" className="-mb-px w-2/4 tab-menu">
          <a className="w-full text-center bg-white inline-block py-2 px-4 font-semibold"
             id="duration"
             onClick={alterType} href="#">최소시간</a>
        </li>
      </ul>
      <div id="search-result">
        <ResultTemplates result={data ? data : null} type={type}/>
      </div>
    </div>
  );
}

export default PathResult;