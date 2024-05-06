import React, { useState } from 'react'

const useSearch = () => {
      const [input, setInputs] = useState({});

      const handleChange = (name, value) => {
        setInputs({ ...input, [name]: value });
      };
    return {
      handleChange,
      input,
      setInputs,
    };
}

export default useSearch