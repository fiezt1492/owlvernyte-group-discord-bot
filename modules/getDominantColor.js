// idea:  https://github.com/KamilKalfas/img-color

const temp = require('temp').track();
const download = require('download');
const Vibrant = require('node-vibrant')

const getDominantColor = url => {
    return new Promise((resolve, reject) => {
        const stream = temp.createWriteStream();
        download(url)
            .then(data => {
                stream.write(data);
                stream.end();
                Vibrant.from(stream.path).getPalette((err, palette) => {
                    if (err) {
                        reject(err);
                    }

                    resolve({ dColor: palette.Vibrant.hex })
                })
            })
            .catch(err => reject(err));
    });
}

module.exports = getDominantColor;