import React, { useReducer } from 'react';
import { Link } from 'react-router-dom';

function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value
  };
}

function InputStation({toggleHidden, url, searchPath, type }) {
  const [state, dispatch] = useReducer(reducer, {
    source: "",
    target: "",
  });

  const { source, target } = state;

  const onChange = e => {
    dispatch(e.target);
  };


  const onClick = () => {
    searchPath(source, target, type);
    toggleHidden();
  }

  return (
    <form className="bg-white mb-4">
      <div className="flex flex-wrap mb-3">
        <div className="w-5/12 h-12 text-center text-gray-800">
          <input
            className="appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
            name="source"
            type="text"
            placeholder="출발역"
            onChange={onChange}
            value={source}
          />
        </div>
        <div className="w-2/12 h-12 text-center text-gray-800 flex justify-center items-center">
          <span className="mdi mdi-arrow-right-thick relative bottom-6px text-lg"/>
        </div>
        <div className="w-5/12 h-12 text-center text-gray-800">
          <input
            className="appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
            name="target"
            type="text"
            placeholder="도착역"
            onChange={onChange}
            value={target}
          />
        </div>
      </div>
      <Link to={`/search?source=${source}&${target}&type=${type}`}>
        <button type="submit" id="search-button"
                className="w-full text-sm bg-yellow-500 hover:bg-yellow-400 hover:text-gray-700 text-gray-800 font-bold py-2 px-4 rounded-sm"
                onClick={onClick}>
          검색
        </button>
      </Link>
    </form>
  );
}

export default InputStation;