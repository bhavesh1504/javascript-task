const characters = [
    {
        name: 'Luke Skywalker',
        height: '172',
        mass: '77',
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: '202',
        mass: '136',
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: '150',
        mass: '49',
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: '188',
        mass: '84',
        eye_color: 'blue',
        gender: 'male',
    },
];


// // every() method.
// // 1. Does every character have blue eyes?
// let allBlueEyes = characters.every((e) => e.eye_color == 'blue');
// console.log(allBlueEyes);
// // 2. Does every character have mass more than 40?
// let massMore = characters.every((e) => e.mass > 40);
// console.log(massMore);
// // 3. Is every character shorter than 200?
// let shorterThan = characters.every((e) => e.height < 200);
// console.log(shorterThan);
// // 4. Is every character male?
// let everyCharacter = characters.every((e) => e.gender == 'male');
// console.log(everyCharacter);


// // some()method
// // 1. Is there at least one male character?
// let oneMale = characters.some((e) => e.gender == 'male');
// console.log(oneMale);
// // 2. Is there at least one character with blue eyes?
// let oneBlueEyes = characters.some((e) => e.eye_color == 'blue');
// console.log(oneBlueEyes);
// // 3. Is there at least one character taller than 210?
// let oneTaller = characters.some((e) => e.height > 210);
// console.log(oneTaller);
// // 4. Is there at least one character that has mass less than 50?
// let massLess = characters.some((e) => e.mass < 50);
// console.log(massLess);

// // filter()method
// // 1. Get characters with mass greater than 100
// let massGreater = characters.filter((e) => e.mass > 100);
// console.log(massGreater);
// // 2. Get characters with height less than 200
// let heightLess = characters.filter((e) => e.height < 200);
// console.log(heightLess);
// // 3. Get all male characters
// let allMales = characters.filter((e) => e.gender == 'male');
// console.log(allMales);
// // 4. Get all female characters
// let allfemales = characters.filter((e) => e.gender == 'female');
// console.log(allfemales);

// // map()method
// // 1. Get an array of all names
// let names = characters.map((e) => e.name);
// console.log(names);
// // 2. Get an array of all heights
// let heights = characters.map((e) => e.height);
// console.log(heights);
// // 3. Get an array of objects with just name and height properties
// let nameHeight = characters.map((e) => ({Name: e.name, Height: e.height}));
// console.log(nameHeight);
// // 4. Get an array of all first names
// let firstNames = characters.map((e) => e.name.split(" ")[0]);
// console.log(firstNames);


// sort()method
// 1. Sort by name
// let byName = characters.sort((a,b) => {
//     if(a.name < b.name)
//     return 1;
//         return -1;
// });
// console.log(byName);

// 2. Sort by mass
// let byMass = characters.sort((a,b) => b.mass - a.mass);
// console.log(byMass);
// 3. Sort by height
// let byHeight = characters.sort((a,b) => b.height - a.height);
// console.log(byHeight);
// // 4. Sort by gender
// let byGender = characters.sort((a,b) =>  {
//     if(a.gender == 'male')
//     return 1
//     return -1
// });
// console.log(byGender);

// // reduce()method
// // 1. Get the total mass of all characters
let totalMass = characters.reduce((acc,cur) => acc + parseInt(cur.mass) , 0);
console.log(totalMass);
// 2. Get the total height of all characters
let totalHeight = characters.reduce((acc,cur) => acc + parseInt(cur.height) , 0);
console.log(totalHeight);
// 3. Get the total number of characters in all the character names
let totalNames = characters.reduce((acc,cur) => acc + cur.name.length , 0);
console.log(totalNames);
// 4. Get the total number of characters by eye color (hint. a map of eye color to count)
let totalEyes = characters.reduce((acc,cur) => {
    let color = cur.eye_color
    if(acc[color]){
        acc[color]++;
    }else{
        acc[color] = 1;
        }
    return acc;
}, {});
console.log(totalEyes);


let arr = [1,2,4,5,6,7,8];
let numbers = arr.map(funn)

function funn(value,index,array){
    return value * 3;
}

console.log(numbers);



let txt='';
let number2=arr.forEach(funn1)
function funn1(value,index,array){
    txt+=" "+value;
    txt+=" "+index;
    txt+=" "+ array+"\n";
}
console.log(number2);
console.log(txt);




