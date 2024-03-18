/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";

import { HomeIcon, AtSymbolIcon, HeartIcon, InformationCircleIcon, CreditCardIcon, BanknotesIcon, FireIcon, FaceSmileIcon, EnvelopeIcon, PuzzlePieceIcon, CommandLineIcon } from "@heroicons/react/24/outline";

// for later
// import { Context } from '../context';
 
function MainWrapper({ children, tabTitle }) {
  const DEFAULT_THEMES = ["halloween", "valentine"];

  const [selectedTheme, setSelectedTheme] = useState(
    JSON.parse(localStorage.getItem("selectedTheme")) || DEFAULT_THEMES[0]
  );

  useEffect(() => {
    localStorage.setItem("selectedTheme", JSON.stringify(selectedTheme));
  }, [selectedTheme]);

  const navTitle = "NodSafe";

  useEffect(() => {
    document.title = `${navTitle} - ${tabTitle}`;
  }, []);

  const themes = ["valentine", "halloween", "light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave", "retro", "cyberpunk", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee", "winter", "dim", "nord", "sunset"];
  
  return (
    <div className="drawer">
      <input id="sidebar" type="checkbox" className="drawer-toggle" /> 
      <div className="drawer-content flex flex-col">

        {/* Navbar */}
        <div className="navbar bg-base-200 h-16">

          {/* SideBar Toggle */}
          <div className="navbar-start">
            
            <label htmlFor="sidebar" aria-label="open sidebar" className="btn btn-square btn-outline border-none">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
            </label>

          </div>

          {/* Center Title */}
          <div className="navbar-center">

            <a className="btn btn-ghost text-xl hover:fill-current fill-none" href="/">
              <HeartIcon className="h-5 fill-inherit" />
              <span className="align-middle"> { navTitle } </span>
              <HeartIcon className="h-5 fill-inherit" />
            </a>

          </div>

          {/* Dark/Light Mode Toggle */}
          <div className="navbar-end">

            <label className="swap swap-rotate btn btn-circle btn-outline border-none">
              <input type="checkbox"
                className="theme-controller"
                value={DEFAULT_THEMES[0]}
                checked={selectedTheme === DEFAULT_THEMES[0]}
                onChange={() => setSelectedTheme(selectedTheme === DEFAULT_THEMES[0] ? DEFAULT_THEMES[1] : DEFAULT_THEMES[0])}
              />
              {/* sun icon */}
              <svg className="swap-off fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
              {/* moon icon */}
              <svg className="swap-on fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
            </label>

            {/* keep this with a small selection of themes and hide it in the sidebar on small screens or just keep it in the sidebar until a settings page/modal is needed*/}
            {
              /* eslint-disable-next-line no-undef */
              process.env.NODE_ENV === "development" ?
                <div className="dropdown dropdown-end">
                  <div tabIndex={0} role="button" className="btn m-1">
                  Theme
                    <svg width="12px" height="12px" className="h-2 w-2 fill-current opacity-60 inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048"><path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path></svg>
                  </div>
                  <div tabIndex={0} className="overflow-y-auto max-h-[calc(100vh-8rem)] menu dropdown-content z-[1] p-2 shadow-2xl bg-base-200 rounded-box w-72 mt-1">
                    <div className="grid grid-cols-1 gap-3 p-3">
                      {
                        themes.map((theme, index) => {
                          return <>
                            {index === 2 ? <div className="divider divider-primary"> Defaults </div> : null}
                            <label key={index}
                              className="btn btn-md text-sm btn-ghost outline-base-content justify-start bg-base-100 rounded-btn text-base-content w-full"
                              data-theme={theme}
                            >
                              
                              <input type="radio" name="theme-dropdown"
                                className="theme-controller hidden"
                                aria-label={theme} value={theme}
                                checked={theme === selectedTheme}
                                onChange={() => setSelectedTheme(theme)}
                              />
                              
                              <div className='flex flex-row justify-between items-center w-full h-full p-1' >
                                <input className="checkbox checkbox-primary" type="checkbox" checked={theme === selectedTheme} />
                                <div className="text-md self-center">
                                  {theme}
                                </div>
                                <div className="flex shrink-0 flex-wrap gap-1 h-4/6">
                                  <span className="bg-primary rounded-badge w-3" />
                                  <span className="bg-secondary rounded-badge w-3" />
                                  <span className="bg-accent rounded-badge w-3" />
                                  <span className="bg-neutral rounded-badge w-3" />
                                </div>
                              </div>
                            </label>
                          </>;
                        })
                      }
                    </div>
                  </div>
                </div> : null
            }
          
          </div>

        </div>

        {/* Page Content */}
        <div className="min-h-[calc(100dvh-8rem)] flex items-center justify-center text-center bg-base-100">
          <div className="m-4">
            {children}
          </div>
        </div>

        {/* Footer */}
        <footer className="footer footer-center bg-base-200 rounded select-none h-16">
          <aside>
            <span>
              <CommandLineIcon className="h-5 inline" /> <a href="https://github.com/AcidicNic/nodsafe" target="_blank" rel="noopener noreferrer">Open Source</a> - made with love <FaceSmileIcon className="h-5 inline" />
            </span>
          </aside>
        </footer>

      </div> 
      
      {/* SideBar */}
      <div className="drawer-side">
        <label htmlFor="sidebar" aria-label="close sidebar" className="drawer-overlay"></label> 
        <ul className="menu min-h-full bg-base-100 p-0 w-80">

          {/* SideBar Header */}
          <div className="navbar bg-base-200">
            {/* SideBar Hamburger Toggle */}
            <div className="flex-none">
              <label htmlFor="sidebar" aria-label="open sidebar" className="btn btn-square btn-outline border-none">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
              </label>
            </div>

            {/* SideBar Title */}
            <div className="flex-1">
              <a className="btn btn-ghost text-xl hover:fill-current fill-none" href="/">
                <HeartIcon className="h-5 fill-inherit" />
                { navTitle }
                <HeartIcon className="h-5 fill-inherit" />
              </a>
            </div>
          </div>

          {/* SideBar Menu */}
          <div className="p-4">
            {/* Home Btn */}
            <li>
              <a href="/">
                <InformationCircleIcon className="h-6 w-6"/>
                Home
              </a>
            </li>
            {/* --- Btn */}
            <li>
              <a href="/Section0">
                <HeartIcon className="h-6 w-6"/>
                Section0
              </a>
            </li>
            {/* --- Btn */}
            <li>
              <a href="/Section1">
                <FireIcon className="h-6 w-6"/>
                Section1
              </a>
            </li>
            {/* --- Btn */}
            <li>
              <a href="/Section2">
                <FaceSmileIcon className="h-6 w-6"/>
                Section2
              </a>
            </li>
          </div>

          

        </ul>
      </div>
    </div>
  );
}

export default MainWrapper;