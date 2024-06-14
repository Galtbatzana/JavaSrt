
const name = "bayaraa";
const name1 = "delger";
const name2 = "urlee";
const name3 = "zolboo";

const position1 = [];

const names = ["bayaraa", "delger", "urlee", "zolboo"];

names.pop(""); // remove last
names.push("bold"); // add last 

console.log(names);

names.shift(); // remove first
names.unshift("sarnai"); // add first

console.log(names);

names[2]; // urlee

const she = "urlee";

const len = names.length;

for (let i = 0; i < len; i++) {
    if (names[i] === she) {
        console.log(i);
        break;
    }
}

const position = names.indexOf("urlee");
console.log(position);

const ages = [21, 33, 35, 16, 19, 12, 13];

// ages.findIndex(function()) dotoroo function tai baih yoestoi
const index = ages.findIndex(function(item) {
    return item < 18;
});
console.log(index);

const minors = ages.filter(function(item){
    return item < 18;
});
console.log(minors);
////////////////////////////////////////////////////////////////
const arrayNames = ["bayaraa","tsetsgee","anu","zolboo","galt","enkhbadrakh",
    "tselmeg","batzana","nyamsuren","saruul"];
        const ehner = ["tselmeg"];

for (let i = 0; i < arrayNames.length; i++) {
     if (arrayNames.charAt(0) === "b") {
        bgeerEhelsenNames = 
     }
    
}





