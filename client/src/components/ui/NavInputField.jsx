import React, { useState } from 'react';

function InputField() {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <input 
      className="block w-full p-2 pl-10 text-sm font-poppins font-medium border-2 border-gray-300 rounded-lg bg-white  focus:outline-none focus:bg-[#EEEDFA]" 
      type="text"
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      style={{
        borderColor: isFocused ? '#7600bc' : '#dcdcdc',
      }}
      placeholder="Search..."
    />
  );
}

export default InputField;
