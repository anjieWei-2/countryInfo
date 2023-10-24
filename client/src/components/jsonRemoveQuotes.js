export const jsonRemoveQuotes = (data) => {
    const newObject = {};
  
    for (const key in data) {
      const unquotedKey = key.replace(/["']/g, '');
      newObject[unquotedKey] = data[key];
    }
  
    return newObject;
  };