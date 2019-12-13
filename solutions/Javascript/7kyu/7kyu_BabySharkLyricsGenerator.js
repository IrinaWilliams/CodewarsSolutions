https://www.codewars.com/kata/baby-shark-lyrics-generator/train/javascript

function babySharkLyrics(){
    const arr = ["Baby shark", "Mommy shark", "Daddy shark", "Grandma shark", "Grandpa shark", "Let's go hunt"];
    return arr.map((name)=> `${name},${" doo".repeat(6)}\n`.repeat(3) + `${name}!\n`).join("") + "Run away,…";
}