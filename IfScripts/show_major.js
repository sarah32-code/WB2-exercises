let studentName = "Betty";
let studentMajor = "ENG";

let majorTable = {
    "BIOL": { name: "Biology", office: "Science Bldg, Room 310" },
    "ENG": { name: "English", office: "Kerr Hall, Room 201" },
    "HIST": { name: "History", office: "Kerr Hall, Room 114" },
    "MKT": { name: "Marketing", office: "Westly Hall, Room 310" }
};

console.log("Student: " + studentName);
console.log("Major: " + majorTable[studentMajor].name);
console.log("Advising Location: " + majorTable[studentMajor].office);
