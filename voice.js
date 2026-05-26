const say = require("say");

const text = `
Hello jii...
Kaise ho aap...
Main AI hoon...
Aaj main yahan kisi aur ka kaam lekar aaya hoon...
Please... bas ek baar dil se sun lena...
`;

say.speak(text, undefined, 0.9, (err) => {
    if (err) {
        return console.error(err);
    }

    console.log("✅ Voice Played Successfully!");
});