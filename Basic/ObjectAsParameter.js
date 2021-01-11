// Receive Object as Parameter from function

// Example
// const ironMan = {
// 	name: 'Tony Stark',
// 	actor: 'Robert Downey Jr',
// 	alias: 'Iron Man'
//   };

//   const captainAmerica = {
// 	name: 'Steven Grant Rogers',
// 	actor: 'Christopher Robert Chritoris Evans',
// 	alias: 'CaptainAmerica'
//   };

//   console.log(ironMan);
//   console.log(captainAmerica);

const ironMan = {
	name: 'Tony Stark',
	actor: 'Robert Downey Jr',
	alias: 'Iron Man'
  };

  const captainAmerica = {
	name: 'Steven Grant Rogers',
	actor: 'Christopher Robert Chritoris Evans',
	alias: 'CaptainAmerica'
  };

  function print(hero) {
	const text = `${hero.alias}(${hero.name}) 역할을 맡은 배우는 ${
	  hero.actor
	} 입니다.`;
	console.log(text);
  }

  print(ironMan);
  print(captainAmerica);
