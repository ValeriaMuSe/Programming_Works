let numbers = [12, 75, 150, 180, 145, 525, 50]

for(let i = 0; i <= 6; i++) {
    if(numbers[i] % 5 == 0 && numbers[i] > 150){
    console.log(numbers[i])
    }else if(numbers[i] > 500){
      console.log(numbers[i])
      break;
    }
  }