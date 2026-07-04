import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "test-data", "registerData.json");
const fileContent = fs.readFileSync(filePath, "utf-8");

export const registerData = JSON.parse(fileContent);