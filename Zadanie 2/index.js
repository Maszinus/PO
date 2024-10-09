// Zadanie 1: Fixing the data
function fixData(badData) {
    return badData.map(([id, name, surname, email, age, cash]) => ({
        id,
        name,
        surname,
        email,
        age,
        cash
    }));
}

// Sample bad data
const badData = [
    [1, 'John', 'Doe', 'john@example.com', 30, 1000],
    [2, 'Jane', 'Doe', 'jane@example.com', 25, 500],
    [3, 'Bob', 'Smith', 'bob@example.com', 40, 2000],
    // ...
];

// Fixing the data
const fixedData = fixData(badData);

// Zadanie 2: Using the fixed data
// Calculate total cash
const totalCash = fixedData.reduce((acc, user) => acc + user.cash, 0);
console.log(`Total cash: ${totalCash}`);

// Calculate average age
const averageAge = fixedData.reduce((acc, user) => acc + user.age, 0) / fixedData.length;
console.log(`Average age: ${averageAge}`);

// Create an array of emails
const emails = fixedData.map(user => user.email);
console.log(`Emails: ${emails.join(', ')}`);