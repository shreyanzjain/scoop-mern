import React from 'react'
import styled from "styled-components";
import { NavLink } from 'react-router-dom';

const Black = styled.div`
  text-align: justify;
`;

const LearnMore = () => {
    return (
      <div>
        <section class="text-gray-600 body-font">
          <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-col text-center w-full mb-20">
              <h1 class="text-3xl text-indigo-500 tracking-widest font-medium title-font mb-1">
                Scoop
              </h1>
              <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                Make Placements Hassle Free
              </h1>
              <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
                To simplify the process of campus placements for both students
                and the placement department.
              </p>
            </div>
            <div class="flex flex-wrap">
              <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                  Scoop
                </h2>
                <p class="leading-relaxed text-base mb-4">
                  <Black>
                    We have observed high data redundancy and improper data
                    management. We are trying to ease out this process.
                  </Black>
                </p>
              </div>
              <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                  For Students
                </h2>
                <p class="leading-relaxed text-base mb-4">
                  <Black>
                    Placement season implies 100s of forms for students. Our
                    system aims to eradicate this and smoothen the placement
                    process.
                  </Black>
                </p>
              </div>
              <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                  For Placement Team
                </h2>
                <p class="leading-relaxed text-base mb-4">
                  <Black>
                    Manage Companies coming to the college and college students
                    appearing for the placements efficiently.
                  </Black>
                </p>
              </div>
              <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                  For Companies
                </h2>
                <p class="leading-relaxed text-base mb-4">
                  <Black>
                    Find the overview of TSEC and hire students efficiently.
                    Lock dates and find open slots for placements. All at a
                    single place!
                  </Black>
                </p>
              </div>
            </div>
            
          </div>
        </section>
      </div>
    );
}

export default LearnMore