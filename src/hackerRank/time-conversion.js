const timeConversion = s => {
  const divideByTime = s.split(':');

  const hrs = divideByTime[0];
  const min = divideByTime[1];
  const sec = divideByTime[2].slice(0, 2);
  const checkAMPM = divideByTime[2].slice(2);

  let hours = Infinity;
  if (checkAMPM === 'AM') {
    hours = Number(hrs) === 12 ? 0 : hrs;
  } else {
    hours = Number(hrs) < 12 ? 12 + Number(hrs) : hrs;
  }

  return (
    (`${hours}`.length !== 1 ? hours : '0' + hours) + ':' + min + ':' + sec
  );
};

console.log(timeConversion('07:05:45PM'));
console.log(timeConversion('12:00:00PM'));
console.log(timeConversion('1:00:00PM'));
console.log(timeConversion('12:01:00PM'));
console.log(timeConversion('12:00:00AM'));
console.log(timeConversion('1:00:00AM'));
console.log(timeConversion('2:00:00AM'));
console.log(timeConversion('00:00:00PM'));
