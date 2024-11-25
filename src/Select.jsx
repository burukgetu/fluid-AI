import { useState } from 'react';
import Flag from 'react-world-flags';

function CountrySelect() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedFlag, setSelectedFlag] = useState('');

  const countries = [
    { code: 'US', name: 'United States' },
    { code: 'CA', name: 'Canada' },
    { code: 'GB', name: 'United Kingdom' },
    { code: 'IN', name: 'India' },
    { code: 'AU', name: 'Australia' },
    { code: 'DE', name: 'Germany' },
    { code: 'FR', name: 'France' },
    { code: 'IT', name: 'Italy' },
    { code: 'ES', name: 'Spain' },
    { code: 'BR', name: 'Brazil' },
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (countryCode, countryName) => {
    setSelectedCountry(countryName);
    setSelectedFlag(countryCode);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      {/* <label htmlFor="country" className="block text-sm font-medium text-gray-400 mb-2">
        Select a Country:
      </label> */}
      <div className="relative">
        <div
          className="cursor-pointer w-full py-2 bg-none border-b-2 border-b-gray-500 shadow-sm flex items-center justify-between"
          onClick={toggleDropdown}
        >
          <div className="flex items-center">
            {selectedFlag && (
              <Flag code={selectedFlag} style={{ width: 20, height: 20 }} className="mr-2 rounded-full object-cover" />
            )}
            <span>{selectedCountry || 'Select a country'}</span>
          </div>
          <svg
            className={`w-5 h-5 text-gray-300 transform ${isOpen ? 'rotate-180' : ''}`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
        {isOpen && (
          <ul className="absolute w-full bg-black border border-gray-300 rounded-lg shadow-lg mt-1 max-h-60 overflow-auto z-10 scrollbar-hidden">
            {countries.map((country) => (
              <li
                key={country.code}
                onClick={() => handleSelect(country.code, country.name)}
                className="flex items-center space-x-2 py-2 px-4 hover:bg-gray-100 hover:text-black cursor-pointer"
              >
                <Flag
                  code={country.code}
                  style={{ width: 20, height: 20 }}
                  className="mr-2 rounded-full object-cover"
                />
                <span>{country.name}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
      {/* <p className="mt-2 text-sm text-gray-500">Selected Country: {selectedCountry || 'None'}</p> */}
    </div>
  );
}

export default CountrySelect;
