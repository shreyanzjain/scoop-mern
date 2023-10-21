import React from 'react';

const peopleData = [
  {
    name: 'Person A',
    image: 'https://tse3.mm.bing.net/th?id=OIP.KXvVEm2ifS9a13dnMRigiwHaE8&pid=Api&P=0&h=180', // Replace with the actual image path
  },
  {
    name: 'Person B',
    image: 'https://tse3.mm.bing.net/th?id=OIP.KXvVEm2ifS9a13dnMRigiwHaE8&pid=Api&P=0&h=180', // Replace with the actual image path
  },
  {
    name: 'Person C',
    image: 'https://tse3.mm.bing.net/th?id=OIP.KXvVEm2ifS9a13dnMRigiwHaE8&pid=Api&P=0&h=180', // Replace with the actual image path
  },
  {
    name: 'Person D',
    image: 'https://tse3.mm.bing.net/th?id=OIP.KXvVEm2ifS9a13dnMRigiwHaE8&pid=Api&P=0&h=180', // Replace with the actual image path
  },
];

const ContactUs = () => {
  return (
    <div className="relative text-center mt-20"> {/* Increased top margin */}
      {/* <div className="text-4xl font-bold mb-10">About Us</div> Increased margin-bottom */}
      <div className="flex flex-wrap justify-center space-x-8 mb-8"> {/* Added margin-bottom */}
        {peopleData.map((person, index) => (
          <div
            key={index}
            className="border p-6 rounded-lg shadow-lg text-center transition transform hover:scale-105 flex flex-col items-center"
            style={{ width: '250px', marginBottom: '150px' }}
          >
            <div className="mb-4"> {/* Center the image vertically */}
              <img
                src={person.image}
                alt={person.name}
                className="w-40 h-40 rounded-full"
              />
            </div>
            <div className="font-bold text-xl">{person.name}</div>
          </div>
        ))}
      </div>
      <div className="absolute bottom-0 w-full text-4xl font-bold pb-4"> {/* Increased text size */}
        Contact us on{' '}
        <a href="mailto:xyz.email.com" className="text-blue-500">
          xyz.email.com
        </a>
      </div>
    </div>
  );
};

export default ContactUs;
