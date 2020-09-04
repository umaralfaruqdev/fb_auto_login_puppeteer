const puppeter = require('puppeteer');

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

(async () => {
    console.log('ok');
    const br = await puppeter.launch({ headless: false });
    const pg = await br.newPage();

    await pg.goto('https://web.facebook.com/', { waitUntil: 'networkidle2' });

    await new Promise((res) => {
        readline.question('Type username: ', (txt) => {
            pg.type('#email', txt);
            res();
        });
    })
        .then(() => {
            readline.question('Type password: ', async (txt) => {
                await pg.type('#pass', txt);
                await pg.click('#u_0_b');
            });
        });


})();
