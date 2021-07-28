const names = ["YouTube","Twitter","Facebook","amezon"];

for(const n of names) {
    console.log(n);
}

const symbols = {
    yt : "youtube",
    ig : "instagram",
    fb : "facebook",
    lco : "parth",
};

for (const n in symbols) {
    console.log(`Key is: ${n} and value is: ${symbols[n]}`);
}