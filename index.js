const ordersArr = [4, 2, 1, 3];
const people = [
    { id: 1, name: "Максим" },
    { id: 2, name: "Николай" },
    { id: 3, name: "Ангелина" },
    { id: 4, name: "Виталий" }
];


const giveTalonsInOrder = function(patients,orders) {

    const objectIndexes = patients.reduce((acc, val) => {
        acc[val.id] = val;
        return acc;
    }, {});
const resultArr = orders.map(val => objectIndexes[val])

    console.log(resultArr)
}

giveTalonsInOrder(people, ordersArr)

