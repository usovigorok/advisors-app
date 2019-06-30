const express = require('express');
const app = express();
const cors = require('cors')
const faker = require('faker');

app.use(cors());

function generateLanguages() {
    const variants = ['en', 'ru', 'fr', 'de', 'es'];

    let languages = [];
    const languageCount = faker.random.number({min: 1, max: 5});

    for (let i = 0; i < languageCount; i++) {
        const index = faker.random.number({min: 0, max: 4});
        languages.push(variants[index]);
    }

    return [...new Set(languages)];
}

function generateAdvisors() {
    const result = [];
    for (let i = 0; i < 10; i++) {
        result.push({
            id: faker.random.uuid(),
            name: faker.name.findName(),
            numberOfReviews: faker.random.number({min: 0, max: 10000}),
            status: faker.random.number({min: 0, max: 1}),
            languages: generateLanguages()
        });
    }
    return result;
}

app.get('/', function (req, res) {
    res.json({
        advisors: generateAdvisors()
    });
});

app.listen(5000, function () {
    console.log('Server listening on port 5000!');
});

