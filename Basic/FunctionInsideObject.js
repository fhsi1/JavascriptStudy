// Putting a function inside an object

const dog = {
	name: 'dog',
	sound: 'bowwow',
	say: function say() {
		console.log(this.sound);
	}
};

dog.say();

// Furthermore
//  const dog = {
// 	name: 'dog',
// 	sound: 'bowwow!',
// 	say: function() {
//		console.log(this.sound);
//	}
//};

// dog.say();
