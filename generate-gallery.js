/* im too lazy for this lmao */
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');


// EDIT THESE PATHS AS NEEDED BEFORE RUNNING
const imageFolder = path.join(__dirname, 'images', 'art', 'pyography');
const thumbFolder = path.join(__dirname, 'images', 'art', 'pyography', 'thumbnails')
const jsonOutputFile = path.join(__dirname, 'data', 'pyrography.json');

//Ensure the thumbnail directory exists
if (!fs.existsSync(thumbFolder)) {
    fs.mkdirSync(thumbFolder, { recursive: true });
}

async function generateGallery() {
    try {
        // Read all files in the target directory
        const files = fs.readdirSync(imageFolder);
        const validExtensions = ['.jpg', '.jpeg', '.png'];
    
        const imageFiles = files.filter(file => 
            validExtensions.includes(path.extname(file).toLowerCase()) && fs.lstatSync(path.join(imageFolder, file)).isFile()
        );
    
        // Map files directly into your simplified structure
        const artData = [];
    
        for (const filename of imageFiles) {
            const originalPath = path.join(imageFolder, filename);
            const thumbFilename = `thumb_${filename}`;
            const thumbPath = path.join(thumbFolder, thumbFilename);
    
            // If the thumbnail doesn't exist yet, compress and resize it automatically
            if (!fs.existsSync(thumbPath)) {
                await sharp(originalPath)
                .rotate()
                    .resize({
                        width: 160,
                        height: 160,
                        fit: 'cover',
                        position: 'center'
                    })
                    .jpeg({ quality: 75 }) // Compresses quality to drastically cut down file size
                    .toFile(thumbPath);
                console.log(`Created thumbnail for: ${filename}`);
            }
    
            // Save BOTH paths to your JSON
            artData.push({
                "thumbnail": `../images/art/pyography/thumbnails/${thumbFilename}`,
                "fullsize": `../images/art/pyography/${filename}`
            });
        }
    
        // Write the output to your art.json file with clean formatting
        fs.writeFileSync(jsonOutputFile, JSON.stringify(artData, null, 4));
        console.log(`Successfully mapped ${artData.length} images`);
    
    } catch (err) {
        console.error("Error reading directory or writing file:", err);
    }
}

generateGallery();
