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

console.log(getActualSleepHours())

const getIdealSleepHours = () => {
  const idealHours = 8;
  return (idealHours) * 7
}

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();

  console.log(getIdealSleepHours())
  
  if (actualSleepHours === idealSleepHours) {
    console.log(`Congratulations! You've have gotten the perfect amount of sleep!`);
  } else if 
  (actualSleepHours > idealSleepHours) {
    console.log("You slept more than you needed! " + "You got " + (actualSleepHours - idealSleepHours) + " more hours of sleep this week.");
  } else if 
  (actualSleepHours < idealSleepHours) {
    console.log("You haven't slept enough " + "You need " + (idealSleepHours - actualSleepHours) + " more hours of sleep this week.");
  } else {
    console.log(`Error! Check your sleep log`);
  }

}

console.log(calculateSleepDebt())

const idealSleepHours = ['Jim', 'Bob', 'Charly', 'Tom'];
const actualSleepHours = ['Jim', 'Bob', 'Amanda'];
const mutualSleepHours = [];             ///////////still in progress to modify this code
for (let i = 0; i < idealSleepHours.length; i++) {
  for (let j = 0; j < actualSleepHours.length; j++) {
    if  idealSleepHours[i] === actualSleepHours[j]) {
      mutualFollowers.push idealSleepHours[i])
    }
  }
}
//eventually I would want to add the total amount of hours the user sleeps in a month  and then compare it to the total amount of hours in month so that it returns the percentage of sleep time in a month 

//then also in a whole year.