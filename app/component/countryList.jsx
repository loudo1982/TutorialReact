import React from 'react';
import Image from 'next/image';

const CountryList = ({ countries, sizeflag }) => (
  <div className="flex flex-wrap justify-around">
    {countries.map((country) => (
      <div key={country.cca2} className="bg-white shadow-lg rounded-md overflow-hidden m-4">
        <div className="px-6 py-4">
          <strong className="text-xl mb-2 block">{country.name.common}</strong>
          <p className="text-gray-700">{country.region}</p>
          <p className="mt-2">Capital: <strong>{country.capital}</strong></p>
        </div>
        <div className="px-6 py-4">
          <Image
            src={country.flags.png}
            width={sizeflag}
            height={sizeflag}
            alt={`Flag of ${country.name.common}`}
            className="w-full h-auto"
          />
        </div>
      </div>
    ))}
  </div>
);

export default CountryList;
