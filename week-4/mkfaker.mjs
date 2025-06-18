import fs from "fs";
import { faker } from '@faker-js/faker';

const datrus = [];

for (let x = 0; x < 50; x++) {
    datrus.push({
        id: x,
        title: faker.music.songName(),
        desc: `${faker.music.artist()} | ${faker.music.genre()} | ${faker.music.album()}`,
        image: faker.image.avatarGitHub(), //faker.image.urlPicsumPhotos({ height: 500, width: 500 }),
    })
}

const ds = JSON.stringify(datrus, null, 4);
fs.writeFileSync("src/mockery.json", ds);