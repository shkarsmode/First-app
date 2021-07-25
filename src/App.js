import React, {Component} from "react";
import "./App.css";
import "./styles/Content.css";
import Header from './components/Header';

const App = () => {  
  return (
    <div className='wrap'>
      <Header />
      
      <div className='wrap-center'>
         <div className='wrap-content'>

           <div className='menu-nav'>
             <ul>
             <a href='#'><li><svg fill="none" height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M5.84 15.63a6.97 6.97 0 008.32 0 8.2 8.2 0 00-8.32 0zM4.7 14.57a7 7 0 1110.6 0 9.7 9.7 0 00-10.6 0zM10 1.5a8.5 8.5 0 100 17 8.5 8.5 0 000-17zm-1.5 7a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0zm1.5-3a3 3 0 100 6 3 3 0 000-6z" fill="currentColor" fill-rule="evenodd"></path></svg>My profile</li></a>
               <a href='#'><li><svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><g id="newsfeed_outline_20__Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="newsfeed_outline_20__Icons-20/newsfeed_outline_20"><g id="newsfeed_outline_20__newsfeed_outline_20"><path opacity=".04" d="M0 0h20v20H0z"></path><path d="M13.08 2c1.44 0 2.14.13 2.86.52a3.7 3.7 0 011.54 1.54c.39.72.52 1.42.52 2.86v6.16c0 1.44-.13 2.14-.52 2.86a3.7 3.7 0 01-1.54 1.54c-.72.39-1.42.52-2.86.52H6.92c-1.44 0-2.14-.13-2.86-.52a3.7 3.7 0 01-1.54-1.54c-.39-.72-.52-1.42-.52-2.86V6.92c0-1.44.13-2.14.52-2.86a3.7 3.7 0 011.54-1.54C4.78 2.13 5.48 2 6.92 2h6.16zm3.42 6h-13v5.08c0 1.21.09 1.68.35 2.15.2.4.52.71.92.92.47.26.94.35 2.15.35h6.16c1.21 0 1.68-.09 2.15-.35.4-.2.71-.52.92-.92.26-.47.35-.94.35-2.15V8zm-3.42-4.5H6.92c-1.21 0-1.68.09-2.15.35-.4.2-.71.52-.92.92-.23.42-.33.82-.35 1.73h13a3.48 3.48 0 00-.35-1.73 2.2 2.2 0 00-.92-.92c-.47-.26-.94-.35-2.15-.35z" id="newsfeed_outline_20__Icon-Color" fill="currentColor" fill-rule="nonzero"></path></g></g></g></svg>News</li></a>
               <a href='#'><li><svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><g id="message_outline_20__Page-2" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="message_outline_20__message_outline_20"><path id="message_outline_20__Shape" opacity=".4" d="M0 0h20v20H0z"></path><path d="M6.83 15.75c.2-.23.53-.31.82-.2.81.3 1.7.45 2.6.45 3.77 0 6.75-2.7 6.75-6s-2.98-6-6.75-6S3.5 6.7 3.5 10c0 1.21.4 2.37 1.14 3.35.1.14.16.31.15.49-.04.76-.4 1.78-1.08 3.13 1.48-.11 2.5-.53 3.12-1.22zM3.24 18.5a1.2 1.2 0 01-1.1-1.77A10.77 10.77 0 003.26 14 7 7 0 012 10c0-4.17 3.68-7.5 8.25-7.5S18.5 5.83 18.5 10s-3.68 7.5-8.25 7.5c-.92 0-1.81-.13-2.66-.4-1 .89-2.46 1.34-4.35 1.4z" id="message_outline_20__Icon-Color" fill="currentColor" fill-rule="nonzero"></path></g></g></svg>Messenger</li></a>
               <a href='#'><li>Music</li></a>
             </ul>
           </div>

           <div className='content'>
             news, my page...
           </div>

         </div>
      </div>

    </div>
  );
};


export default App;
