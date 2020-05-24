import React from "react";
import { Link } from 'react-router-dom';

const Home = props => (
  <div className="text-center">
    <img src="/service/images/main_logo.png" className="main-logo mx-auto"/>
    <p className="mt-2 text-gray-700">
      최적의 길을 찾아나가는 길찾기 앱을 통해 <br/>
      내 성장의 최단거리를 찾아가는 <strong>실습 프로젝트!</strong> <br/>
      제공되는 템플릿을 활용해 프로젝트를 완성해 보세요!
    </p>
    <ul className="text-blue-700">
      <li className="inline-block p-1">
        <Link to="/search" className="underline">경로 검색</Link>
      </li>
    </ul>
  </div>
);

export default Home;
