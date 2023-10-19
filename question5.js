function vowelsRemoved(inputString) {
    return inputString.replace(/[aeiouAEIOU]/g, '');
  }
  
  
  const inputString = "Nesrine , Khouas";
  const result = vowelsRemoved(inputString);
  console.log(result);