function uniqueElement(array1, array2) {
    
    const mergedArray = array1.concat(array2);
    const uniqueArray = [...new Set(mergedArray)];
   
     return uniqueArray;
   }
   
   
   const array1 = [1, 2, 3, 4];
   const array2 = [3, 4, 5, 6];
   const result = uniqueElement(array1, array2);
   console.log(result);