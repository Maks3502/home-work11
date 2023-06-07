// const logItems = function (array) {
//     for(let i = 0; i < array.length; i ++){
//       const index = i + 1;
//        console.log(`${index} - ${array[i]}`)
//     }
    
//   };
  
//   /*
//    * Виклич функції для перевірки працездатності твоєї реалізації.
//    */

//   logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);
//    logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);



//    завдання 2
// const calculateEngravingPrice = function (message, pricePerWord) {
//   const word = message.split(' ');
//   const wordlengt = word.length;
//   const totalPrice = wordlengt * pricePerWord;
//       return totalPrice;
//   };
  
//   /*
//    * Виклич функції для перевірки працездатності твоєї реалізації.
//    */
//   console.log(
//     calculateEngravingPrice(
//       'Proin sociis natoque et magnis parturient montes mus',
//       10,
//     ),
//   ); // 80
  
//   console.log(
//     calculateEngravingPrice(
//       'Proin sociis natoque et magnis parturient montes mus',
//       20,
//     ),
//   ); // 160
  
//   console.log(
//     calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40),
//   ); // 240
  
//   console.log(
//     calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20), ); // 120

    // завдання 3
    // const findLongestWord = function (string) {
    //   let wors = string.split(" ")
    //   let bigWord = wors[0];
    //     for(let i = 0; i < wors.length; i++){
    // if(wors[i].length > bigWord.length ){
    //   bigWord = wors[i];
      
    // }
    //   };
    //   return bigWord;
    // }
      /*
       * Виклич функції для перевірки працездатності твоєї реалізації.
      //  */
      // console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'
      
      // console.log(findLongestWord('Google do a roll')); // 'Google'
      
      // console.log(findLongestWord('May the force be with you')); // 'force'

    //   завдання 4
  //  const formatString = function (string) {
  //   let stringLength = string.length;
  //  if (stringLength < 40) {
  //   return string;
  //  }
  //  else if (stringLength > 40) {
  //   let newString =  string.slice(0, 40);
  //   newString = newString + "...";
  //   return newString;
    
  //  }
   
  // };
      
      /*
       * Виклич функції для перевірки працездатності твоєї реалізації.
       */
      console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
      // повернеться оригінальний рядок
      
      console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
      // повернеться форматований рядок
      
      console.log(formatString('Curabitur ligula sapien.'));
      // повернеться оригінальний рядок
      
      console.log(
        formatString(
          'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
        ),
      );
      // повернеться форматований рядок

    //   завдання 5
    const checkForSpam = function (message) {
    let responsible;
    const newMessage = message.toLowerCase();
  
    if (newMessage.includes("spam") || newMessage.includes("sale")) {
      responsible = true;
    } else {
      responsible = false;
    }
  
    return response;
  };
      
      /*
       * Викличи функції для перевірки працездатності твоєї реалізації.
       */
      console.log(checkForSpam('Latest technology news')); // false
      
      console.log(checkForSpam('JavaScript weekly newsletter')); // false
      
      console.log(checkForSpam('Get best sale offers now!')); // true
      
      console.log(checkForSpam('[SPAM] How to earn fast money?')); // true

    //   завдання 6
    
let input;
const numbers = [];
let total = 0;

while (true) {
  input = prompt('Введіть число');

  if (input === null) {
    break;
  }

  const number = Number(input);

  if (Number.isNaN(number)) {
    alert('не правильне число');
    continue;
  }

  numbers.push(number);
}

if (numbers.length > 0) {
  for (const number of numbers) {
    totalPrice += number;
  }

  console.log(`Загальна сума чисел дорівнює ${totalPrice}`);
}






