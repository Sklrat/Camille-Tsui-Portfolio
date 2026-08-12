const fs = require('fs');
const path = require('path');

// 1. Set the exact folder path where your art images live
const imageFolder = path.join(__dirname, 'images', 'art', 'pyography');
// 2. Set the destination path for your JSON file
const jsonOutputFile = path.join(__dirname, 'data', 'pyrography.json');

try {
    // Read all files in the target directory
    const files = fs.readdirSync(imageFolder);
    
    // Filter to only include common image file types
    const validExtensions = ['.jpg', '.jpeg', '.png'];
    const imageFiles = files.filter(file => 
        validExtensions.includes(path.extname(file).toLowerCase())
    );

    // Map files directly into your simplified structure
    const artData = imageFiles.map(filename => {
        return {
            "image": `../images/art/pyography/${filename}`
        };
    });

    // Write the output to your art.json file with clean formatting
    fs.writeFileSync(jsonOutputFile, JSON.stringify(artData, null, 4));
    console.log(`Successfully mapped ${artData.length} images`);

} catch (err) {
    console.error("Error reading directory or writing file:", err);
}
