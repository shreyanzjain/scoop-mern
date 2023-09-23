import React from 'react';

const PlacementStats = () => {
    const batch_2023 = 'https://tsec.edu/wp-content/uploads/2023/08/Placement-of-the-Current-Final-Year-Students-Passing-in-July-2024-14th-August-2023.pdf'; 
    const batch_2022 = 'https://tsecadmission.org/pages/Placement%20of%20the%202022%20Batch.pdf'; 
    const batch_2021 = 'https://tsec.edu/wp-content/uploads/2020/10/Placement-of-Current-Final-Year-Students-passing-in-July-2021-Report-till-14th-October-2020.pdf'; 
    const batch_2020 = 'https://tsec.edu/wp-content/uploads/2023/08/Placement-of-the-Current-Final-Year-Students-Passing-in-July-2024-14th-August-2023.pdf'; 
    const batch_2019 = 'https://tsec.edu/wp-content/uploads/2023/08/Placement-of-the-Current-Final-Year-Students-Passing-in-July-2024-14th-August-2023.pdf'; 

    const openBatchLink = (link) => {
        window.open(link, '_blank');
      };

  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-8 lg:text-3xl">Placement Stats</h2>

        <div className="flex flex-wrap justify-center">
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 p-4">
            <div className="bg-gray-100 p-4 rounded-lg h-40 md:h-32 lg:h-40 flex flex-col justify-center">
              <p className="text-center font-bold text-lg h-1/2 cursor-pointer" onClick={() => openBatchLink(batch_2023)}>2023-2024</p>
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 p-4">
            <div className="bg-gray-100 p-4 rounded-lg h-40 md:h-32 lg:h-40 flex flex-col justify-center">
              <p className="text-center font-bold text-lg h-1/2 cursor-pointer" onClick={() => openBatchLink(batch_2022)}>2022-2023</p>
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 p-4">
            <div className="bg-gray-100 p-4 rounded-lg h-40 md:h-32 lg:h-40 flex flex-col justify-center">
              <p className="text-center font-bold text-lg h-1/2 cursor-pointer" onClick={() => openBatchLink(batch_2021)}>2021-2022</p>
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 p-4">
            <div className="bg-gray-100 p-4 rounded-lg h-40 md:h-32 lg:h-40 flex flex-col justify-center">
              <p className="text-center font-bold text-lg h-1/2 cursor-pointer" onClick={() => openBatchLink(batch_2020)}>2020-2019</p>
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 p-4">
            <div className="bg-gray-100 p-4 rounded-lg h-40 md:h-32 lg:h-40 flex flex-col justify-center">
              <p className="text-center font-bold text-lg h-1/2 cursor-pointer" onClick={() => openBatchLink(batch_2019)}>2019-2018</p>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default PlacementStats;
