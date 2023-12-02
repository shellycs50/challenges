function count(string) {
    const len = string.length
    let dict = {};
    for (let i = 0; i < len; i++)
    {
      if ([string[i]] in dict)
        {
          dict[string[i]] += 1; 
        }
      else 
        {
          dict[string[i]] = 1;
        }
    }
    return dict;
    }