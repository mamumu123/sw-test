const fs = require('fs');

// File destination.txt will be created or overwritten by default.
const lotList = [];
for (let index = 1; index < 1000; index++) {
    const name = `/Users/linma/owner/sw-test/gallery/${index}.jpg`;
    fs.copyFile('/Users/linma/owner/sw-test/gallery/bountyHunters.jpg', name, (err) => {
        if (err) throw err;
    });
}

