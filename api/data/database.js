let students = [
    { firstName: "John", lastName: "Smith", id: 1, degreeProgramID:1 },
    { firstName: "Emma", lastName: "Johnson", id: 2, degreeProgramID: 1 },
    { firstName: "Michael", lastName: "Brown", id: 3, degreeProgramID: 1 },
    { firstName: "Olivia", lastName: "Davis", id: 4, degreeProgramID: 2 },
    { firstName: "Erik", lastName: "Vasquez", id: 5, degreeProgramID: 2 }
];

let courses = [
    { id: 1, name: "JavaScript Grundlagen", ects: 5 },
    { id: 2, name: "Datenbanken", ects: 6 },
    { id: 3, name: "Algorithmen und Datenstrukturen", ects: 6 },
    { id: 4, name: "Webentwicklung", ects: 5 },
    { id: 5, name: "Software Engineering", ects: 6 },
    { id: 6, name: "Betriebssysteme", ects: 5 },
    { id: 7, name: "Computernetzwerke", ects: 5 },
    { id: 8, name: "Künstliche Intelligenz", ects: 6 },
    { id: 9, name: "IT-Sicherheit", ects: 5 },
    { id: 10, name: "Mobile App Entwicklung", ects: 5 }
];

let degreePrograms = [
    { id: 1, name: "Informatik Bachelor", totalEcts: 180 },
    { id: 2, name: "Wirtschaftsinformatik Bachelor", totalEcts: 180 },
    { id: 3, name: "Data Science Master", totalEcts: 120 }
];

// Module exports bestimmt was eine JavaScript datei nach Außen gibt damit eine andere Datei es mit require benuitzuen kann 
module.exports = {
    students,
    courses,
    degreePrograms
};