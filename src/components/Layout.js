import React from "react";
import Header from "./Header";
const Layout = ({ children }) => (
  <>
    <Header/>
    <div className="bg-gray-200 h-screen">
      <div className="flex justify-center items-center flex-col app-container md:py-10 lg:py-10 relative">
        {children}
      </div>
    </div>
  </>
);
export default Layout;