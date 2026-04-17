import { readFile, writeFile, appendFile,mkdir} from "fs/promises";

const create_file = async (fileName, content) => {
    await writeFile(fileName, content);
    console.log("file created successfully");
};

create_file("vishal.c", "this is my new file")