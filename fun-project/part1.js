// Use this file to implement Part One of your project
// eFarmony general helper functions

var animal;

var duck = { species: 'duck', tagline: 'Afflac', noises: ['quack', 'honk', 'sneeze', 'growl'] };
var horse = { relationships: {duck: 'enemy', cat: 'friend', chicken: '<3'}, species: 'horse', tagline: 'of course', noises: ['neigh', 'no', 'snort', 'stomp'] };
var cat = { species: 'cat', tagline: 'with Hat', noises: ['meow', 'prrrrr', 'sneeze', 'vomit'] };
var gerbil = { species: 'duck', tagline: 'muad\'dib', noises: ['...', 'scramble'] };

var myFriendList = ['duck'];
var farmyard = ['duck', 'horse', 'cat', 'gerbil'];

var objKeyPrinter = function (obj) {
	var returnString = '';

	returnString = Object.keys(obj).join(' ');

	return returnString;
}


var objValuePrinter = function (obj) {
	var returnString = '';

	_.each(obj, function(element, index, list){
		if (typeof element === 'string'){
			returnString = returnString + element + ' ';
		}
	});

	return returnString;
}



var arrValuePrinter = function (arr) {
	var returnString = '';

	_.each(arr, function(element, index, list){
			returnString = returnString + element + ' ';
	});
	
	return returnString;
}



// TODO: this whole function stinks, there has got to be a better way
// http://stackoverflow.com/questions/8511281/
// check-if-a-variable-is-an-object-in-javascript
var dataTypeChecker = function (list) {
	if (list === null){				 	
		return null;
	} else if (list === undefined){
		return 'undefined';
	} else if (_.isNaN(list)){
		return 'NaN';
	} else if (Array.isArray(list)){ 	// array test
		return 'array';
	} else if (typeof list === 'string'){	
		return typeof list;
	} else if (typeof list === 'number'){
		return typeof list;
	} else if (typeof list === 'boolean'){
		return typeof list;
	} else if (typeof list === 'undefined'){
		return typeof list;
	} else if (typeof list === 'function'){
		return typeof list;
	} else if (_.isObject(list)){  // arg this is ridiculous
		return 'object';
	} else {
		return null; 
	}
}





// New obj, or the old one?
var capitalizeVals = function (obj) {

	_.each(obj, function(element, index, list){
		if (typeof element === 'string'){
			list[index] = element.slice(0,1).toUpperCase() + element.slice(1);
		}
	});
	return obj;
}






var strCapitalizer = function (str) {
	var localArray = str.split(' ');
	
	_.each(localArray, function(element, index, list){
		list[index] = element.slice(0,1).toUpperCase() + element.slice(1)
	})

	return localArray.join(' ');
}






var unique = function (arr) {
	_.each(arr, function(element, index, list){
	//	if (arr.indexOf(element))
	// make a temp holder array that has all things we've seen so far
	// check to see if el is in temp array, if it is remove it
	//alternate is to split the array on the current element and see if indexOf(element) happens later in the array
	
	})

	






	// return _.uniq(arr); // laaaaaazy TODO: fix this on my own
}




var extend = function (firstObj, secondObj) {
	_.extend(secondObj, firstObj); // laaaaaaazy  TOD: fix this on my own 
}







// 1a: log animal personal data

var welcomeMessage = function (animalObj) {
	return  'Welcome, ' + strCapitalizer(animalObj['species']) + '!';
}



var profileData = function (animalObj) {
	var returnString = '';
	var noiseArray = animalObj['noises'];
	returnString += 'species: ' + animalObj['species'];
	returnString += ', tagline: ' + animalObj['tagline'];
	returnString += ', noises: ' + noiseArray.join(', ');

	return strCapitalizer(returnString);
}





// 1b: animal relationship data

var relationshipLogger = function (animalObj) {
	if (animalObj['relationships']){
		return animalObj['relationships'];
	} else {
		console.log('You have no relationships :(');
	}
}




var relationshipSpeciesPrej = function (speciesStr, animalObj) {
// possibilities are strings: '<3', 'friend', 'enemy'
// speciesStr can't be another animalObj in this version
	if (relationshipLogger(animalObj)){ // make sure it has relationships
// TODO: update this so that it can handle receiving two animalObj
		return strCapitalizer(speciesStr) + ' is a ' + animalObj['relationships'][speciesStr] + ' of ' + strCapitalizer(animalObj['species']);
	}
	return ;
}




var addFriend = function (speciesStr, animalObj) {
	if (relationshipLogger(animalObj)){
		animalObj['relationships'][speciesStr] = 'friend';
		console.log(speciesStr + ' and ' + animalObj.species + ' are friends now!');
	} else {
		animalObj['relationships'] = {};
		animalObj['relationships'][speciesStr] = 'friend';
		console.log(speciesStr + ' and ' + animalObj.species + ' are friends now!');
	}
}


var addMatch = function () {
	if (relationshipLogger(animalObj)){
		animalObj['relationships'][speciesStr] = '<3';
		console.log(speciesStr + ' and ' + animalObj.species + ' are in <3 now!');
	} else {
		animalObj['relationships'] = {};
		animalObj['relationships'][speciesStr] = '<3';
		console.log(speciesStr + ' and ' + animalObj.species + ' are in <3 now!');
	}
}






// Scenario 2: Browse Animals Page

// returns an array of animals not yet on <friendList>
var nonFriends = function (friendList) {
	var strangers = [];
	strangers = _.filter(farmyard, function(element, index, list){
		if (friendList.indexOf(element) < 0){
			return element;
		}
	});

	return strangers;
}



// Scenario 3: Search and Add Friends
// TODO: GO GO GO
var search = function (str) {
	var returnArray = [];

	// for each animal in farmyard
	_.each(farmyard, function(item, index, list){
		// turn the animalObj into a huge string, and do indexOf(str).
		var blobString = objKeyPrinter(item) + objValuePrinter(item);
			// if successful, put that animalObj into returnArray
				if (blobString.indexOf(str) > 0){
					returnArray.push(item)
				}
		
		}
	);

	return unique(returnArray);
}


// ensures that no friends in your friendslist are repeated. 
var search = function (friendList) {
	return unique(friendList);
}











// var search = function () {


// 	return ;
// }

// var search = function () {


// 	return ;
// }

// var search = function () {


// 	return ;
// }

