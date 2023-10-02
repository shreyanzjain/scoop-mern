import React, { useState, useEffect } from 'react';

function MultiSectionForm() {
  const [isUserMenuVisible, setUserMenuVisible] = useState(false);
  const [isHelpMenuVisible, setHelpMenuVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const toggleUserMenu = () => {
    setUserMenuVisible(!isUserMenuVisible);
  };

  const toggleHelpMenu = () => {
    setHelpMenuVisible(!isHelpMenuVisible);
  };

  const handleMenuItemClick = (e, sectionId) => {
    e.preventDefault();
    setActiveSection(sectionId);
    setHelpMenuVisible(false);
  };

  const handleScroll = () => {
    // Handle scrolling and updating the active section
    const sections = ['section1', 'section2', 'section3', 'section4', 'section5'];
    let currentSection = '';

    for (let i = 0; i < sections.length; i++) {
      const section = document.getElementById(sections[i]);
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
          currentSection = sections[i];
          break;
        }
      }
    }

    setActiveSection(currentSection);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="bg-gray-100 text-gray-900 tracking-wider leading-normal">
      <nav id="header" className="bg-white fixed w-full z-10 top-0 shadow">
      <div class="w-full container mx-auto flex flex-wrap items-center justify-between my-4">

        <div class="pl-4 md:pl-0">
            <a class="flex items-center text-yellow-600 text-base xl:text-xl no-underline hover:no-underline font-extrabold font-sans" href="#">
                <svg class="fill-current h-6 inline-block text-yellow-600 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M16 2h4v15a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V0h16v2zm0 2v13a1 1 0 0 0 1 1 1 1 0 0 0 1-1V4h-2zM2 2v15a1 1 0 0 0 1 1h11.17a2.98 2.98 0 0 1-.17-1V2H2zm2 8h8v2H4v-2zm0 4h8v2H4v-2zM4 4h8v4H4V4z" />
                </svg> Multi Section Form / Scrollspy
            </a>
        </div>

        <div class="pr-0 flex justify-end">

            <div class="flex relative inline-block float-right">

                <div class="relative text-sm">

                    <button id="userButton" class="flex items-center mr-3 shadow bg-yellow-700 hover:bg-yellow-500 focus:shadow-outline focus:outline-none text-white text-sm md:text-base font-bold py-2 px-4 rounded">
                        Menu
                        <svg class="pl-2 h-2 fill-current text-white" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129 129" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 129 129">
                            <g>
                                <path d="m121.3,34.6c-1.6-1.6-4.2-1.6-5.8,0l-51,51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l53.9,53.9c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2 0.1-5.8z" />
                            </g>
                        </svg>
                    </button>

                    <div id="userMenu" class="bg-white rounded shadow-md mt-2 mr-2 absolute mt-12 top-0 right-0 min-w-full overflow-auto z-30 invisible">
                        <ul class="list-reset">
                            <li><a href="#" class="px-4 py-2 block hover:bg-gray-400 no-underline hover:no-underline">My account</a></li>
                            <li><a href="#" class="px-4 py-2 block hover:bg-gray-400 no-underline hover:no-underline">Notifications</a></li>
                            <li>
                                <hr class="border-t mx-2 border-gray-400" />
                            </li>
                            <li><a href="#" class="px-4 py-2 block text-yellow-600 font-bold hover:bg-yellow-600 hover:text-white no-underline hover:no-underline">Logout</a></li>
                        </ul>
                    </div>
                </div>

            </div>

        </div>

</div>
      </nav>

      <div className="container w-full flex flex-wrap mx-auto px-2 pt-8 lg:pt-16 mt-16">
        {/* Sidebar */}
        <div className="w-full lg:w-1/5 px-6 text-xl text-gray-800 leading-normal">
          {/* Sidebar content */}
        </div>

        {/* Main content */}
        <section className="w-full lg:w-4/5">
          {/* Main content sections */}
        </section>

        {/* Back link */}
        <div className="w-full lg:w-4/5 lg:ml-auto text-base md:text-sm text-gray-600 px-4 py-24 mb-12">
          {/* Back link */}
        </div>
      </div>
    </div>
  );
}

export default MultiSectionForm;

