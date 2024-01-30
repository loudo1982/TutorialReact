"use client"

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import CountryList from '/app/component/countryList';

const CountryComponent = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        const fetchCountries = async () => {
          try {
            const response = await fetch('https://restcountries.com/v3.1/all');
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setCountries(data);
            console.log(data)
            
          } catch (error) {
            console.error('Error fetching countries:', error);
          }
        };
    
        fetchCountries();
      }, []);

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-4">List of Countries</h1>
      <CountryList countries={countries} sizeflag={150} />
      {/* <div className="flex flex-wrap justify-around">
        {countries.map((country) => (
          <div key={country.cca2} className=" bg-white shadow-lg rounded-md overflow-hidden m-4">
            <div className="px-6 py-4">
              <strong className="text-xl mb-2 block">{country.name.common}</strong>
              <p className="text-gray-700">{country.region}</p>
              <p className="mt-2">Capital: <strong>{country.capital}</strong></p>
            </div>
            <div className="px-6 py-4">
              <Image
                src={country.flags.png}
                width={150}
                height={150}
                alt={`Flag of ${country.name.common}`}
                className="w-full h-auto"
              />
            </div>
          </div>
        ))}
        </div> */}

        
    </div>
  );
};

export default CountryComponent;
