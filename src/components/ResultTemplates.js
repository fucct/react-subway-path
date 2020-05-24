import React from 'react';
import PathTemplates from './PathTemplates';

function ResultTemplates({ result }) {
  let id = 1;
  function pathTemplate(name, index, lastIndex){
    if(index ===0 || index === lastIndex){
      if(index===lastIndex){
        return <><span className="mdi mdi-arrow-right-bold text-gray-500"/><span key={id++} className="font-bold">{name}</span></>
      }else{
        return <span key={id++} className="font-bold">{name}</span>
      }
    } else{
      return <><span className="mdi mdi-arrow-right-bold text-gray-500"/>
        <span key={id++} className="text-gray-600">{name}</span></>
    }
  }
  if (result) {
    return (
      <>
        <div className="px-2 py-4 border-b">
          <div className="w-full flex mb-3">
            <div className="inline-block w-1/2 border-r text-center">
              <div className="text-gray-600 text-sm">소요시간</div>
              <div>{result.duration}분</div>
            </div>
            <div className="inline-block w-1/2 text-center">
              <div className="text-gray-600 text-sm">거리</div>
              <div>{result.distance}km</div>
            </div>
          </div>
        </div>
        <div className="relative pt-3 pb-10">
          <div className="px-2 py-1 w-full flex">
            <div className="w-10/12 inline-block">
              {result.stations.map((station, index) => pathTemplate(station.name, index, result.stations.length-1))}
            </div>
          </div>
        </div>
      </>
    )
  }
  return false;
}

export default ResultTemplates;