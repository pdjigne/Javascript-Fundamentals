// Basic JavaScript syntax
const variable = value;

// Control flow structures
if (condition) {
    // code to execute if condition is true
} else {
    // code to execute if condition is false
}

for (let i = 0; i < array.length; i++) {
    // code to execute for each element in the array
}

// Arrays and objects
const array = [element1, element2, element3];
const object = {
    key1: value1,
    key2: value2,
    key3: value3
};

// Functions
function functionName(parameter1, parameter2) {
    // code to execute
    return result;
}

// Loops and iteration
for (let i = 0; i < array.length; i++) {
    // code to execute for each element in the array
}

// Error handling
try {
    // code that may throw an error
} catch (error) {
    // code to handle the error
}

// Data transformation
const data = [
    {
        id: 1,
        avg: 80,
        assignment1: 90,
        assignment2: 85,
        assignment3: 95
    },
    {
        id: 2,
        avg: 75,
        assignment1: 80,
        assignment2: 70,
        assignment3: 85
    },
    {
        id: 3,
        avg: 90,
        assignment1: 95,
        assignment2: 90,
        assignment3: 85
    }
];

const transformedData = data.map((learner) => {
    const { id, avg, ...assignments } = learner;
    return {
        id,
        avg,
        ...assignments
    };
});

console.log(transformedData);