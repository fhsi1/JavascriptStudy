// Object Unstructured Assiginment

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
	const { alias, name, actor } = hero;
	const text = `${alias}(${name}) 역할을 맡은 배우는 ${actor} 입니다.`;
	console.log(text);
  }

  print(ironMan);
  print(captainAmerica);

// Important Part
// const { alias, name, actor } = hero;

// Furthermore
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

//   function print({ alias, name, actor }) {
// 	const text = `${alias}(${name}) 역할을 맡은 배우는 ${actor} 입니다.`;
// 	console.log(text);
//   }

//   print(ironMan);
//   print(captainAmerica);
