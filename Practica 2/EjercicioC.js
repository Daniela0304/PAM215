const personas = [
    { nombre: "Dani", edad: 22 },
    { nombre: "Monse", edad: 19 },
    { nombre: "Luis", edad: 20 },
];

const personaLuis = personas.find(persona => persona.nombre === "Luis");

console.log(personaLuis);

personas.forEach(persona => {

    console.log(persona.nombre + " tiene " + persona.edad + " años.");
});

const totalEdades = personas.reduce((total, persona) => total + persona.edad, 0);

console.log("Suma total de edades: " + totalEdades);