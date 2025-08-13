/**
 * Script to concatenate all files of a specified extension in a given directory (including subdirectories)
 * into a single output file, saving it in a folder named "output".
 *
 * How It Works:
 * 1. The script takes three parameters:
 *    - `directoryPath` (required): The path to the directory containing the files.
 *    - `fileExtension` (required): The file extension to concatenate (without the dot).
 *    - `outputFileName` (optional): The name of the output file. Defaults to the base name of the input directory + the specified extension.
 * 2. It recursively scans the provided directory and its subdirectories for files with the specified extension.
 * 3. For each file found:
 *    - It adds a docblock-style comment at the beginning indicating the relative path of the file.
 *    - It appends the file's content after the comment.
 * 4. All concatenated content is saved into a folder named "output" (created if it does not exist).
 *
 * Example Usage:
 * Run this script with Node.js, providing the required arguments:
 *
 * ```bash
 * # Concatenate TypeScript files (default)
 * node index.js ./src ts
 *
 * # Concatenate SCSS files
 * node index.js ./src scss
 *
 * # Concatenate SCSS files with custom output name
 * node index.js ./src scss outputFile.scss
 *
 * # Concatenate JavaScript files
 * node index.js ./src js outputFile.js
 * ```
 *
 * - `./src` is the directory containing the files.
 * - `scss` is the file extension to concatenate (required).
 * - `outputFile.scss` is the name of the concatenated result file (optional).
 *
 * Result:
 * - The output file will be created at `./output/outputFile.scss` (or whatever extension you specify).
 * - If `outputFile.scss` is not provided, it defaults to `src.scss` (or `{dirname}.{extension}`).
 */

const fs = require('fs');
const path = require('path');

// Get directory path, file extension, and output file name from command line arguments
const directoryPath = process.argv[2];
const fileExtension = process.argv[3] || 'ts';
const outputFileName = process.argv[4] || `${path.basename(directoryPath)}.${fileExtension}`;

// Define the output folder and output file path
const outputFolder = path.join(__dirname, 'output');
const outputFilePath = path.join(outputFolder, outputFileName);

/**
 * Ensures the "output" folder exists, creating it if necessary.
 */
function ensureOutputFolder() {
	if (!fs.existsSync(outputFolder)) {
		fs.mkdirSync(outputFolder, { recursive: true });
	}
}

/**
 * Recursively retrieves all files with the specified extension from a given directory.
 *
 * @param {string} dirPath - The directory path to search for files.
 * @param {string} extension - The file extension to search for (without the dot).
 * @returns {string[]} - An array of full paths to files with the specified extension.
 */
function getAllFilesByExtension(dirPath, extension) {
	let files = [];
	const items = fs.readdirSync(dirPath, { withFileTypes: true });

	items.forEach(item => {
		const fullPath = path.join(dirPath, item.name);
		if (item.isDirectory()) {
			// Recursively search subdirectories
			files = files.concat(getAllFilesByExtension(fullPath, extension));
		} else if (item.isFile() && path.extname(item.name) === `.${extension}`) {
			files.push(fullPath);
		}
	});

	return files;
}

/**
 * Reads all files with the specified extension, prepends file path as a docblock comment, and concatenates the content.
 *
 * @param {string} dirPath - The directory containing the files.
 * @param {string} outputFilePath - The path where the concatenated output file will be saved.
 * @param {string} extension - The file extension being processed.
 */
function concatenateFilesWithDocblockComments(dirPath, outputFilePath, extension) {
	try {
		ensureOutputFolder();

		const files = getAllFilesByExtension(dirPath, extension);

		if (files.length === 0) {
			console.warn(`Warning: No .${extension} files found in ${dirPath}`);
			return;
		}

		let concatenatedContent = '';

		files.forEach(filePath => {
			const relativePath = path.relative(dirPath, filePath);
			const content = fs.readFileSync(filePath, 'utf8');
			concatenatedContent += `/**\n * File: ${relativePath}\n */\n${content}\n`;
		});

		fs.writeFileSync(outputFilePath, concatenatedContent);
		console.log(`${files.length} .${extension} files were successfully concatenated into ${outputFilePath}`);
	} catch (error) {
		console.error('Error processing files:', error.message);
	}
}

// Validate input and run the script
if (!directoryPath) {
	console.error('Error: Please provide a directory path as the first argument.');
	console.error('Usage: node index.js <directoryPath> <fileExtension> [outputFileName]');
	console.error('Example: node index.js ./src scss');
	console.error('Example: node index.js ./src scss outputFile.scss');
	process.exit(1);
}

if (!fileExtension) {
	console.error('Error: Please provide a file extension as the second argument.');
	console.error('Usage: node index.js <directoryPath> <fileExtension> [outputFileName]');
	console.error('Example: node index.js ./src scss');
	console.error('Example: node index.js ./src scss outputFile.scss');
	process.exit(1);
}

concatenateFilesWithDocblockComments(directoryPath, outputFilePath, fileExtension);
