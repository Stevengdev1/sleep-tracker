const getSleepHours = day => {
  switch(day) {
    case 'monday':
      return 8;
      break;
    case 'tuesday':
      return 6;
      break;
    case 'wednesday':
      return 7;
      break;
    case 'thursday':
      return 5;
      break;
    case 'friday':
      return 8;
      break;
    case 'saturday':
      return 7;
      break;
    case 'sunday':
      return 8;
      break;
      default:
      return "Error";
  }
};

const getActualSleepHours = () => {
  return getSleepHours('monday') +
  getSleepHours('tuesday') +
  getSleepHours('wednesday') +
  getSleepHours('thursday') + 
  getSleepHours('friday') +
  getSleepHours('saturday') +
  getSleepHours('sunday');
}

const getIdealSleepHours = () => {
  const idealHours = 8;
  return (idealHours) * 7
}

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
  
  if (actualSleepHours === idealSleepHours) {
    console.log(`Congratulations! You've have gotten the perfect amount of sleep!`);
  } else if 
  (actualSleepHours > idealSleepHours) {
    console.log(`You've have gotten more sleep than you needed!`);
  } else if 
  (actualSleepHours < idealSleepHours) {
    console.log(`You should get more sleep`)
  } else {
    console.log(`Error! Check your sleep log`)
  }
}

calculateSleepDebt();