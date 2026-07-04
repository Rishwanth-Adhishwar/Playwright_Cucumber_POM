import fs from "fs";
import path from "path";
import { parse } from "csv-parse/sync";

export interface LoginReader {
    type: string;
    email: string;
    password: string;
}

export function readLoginData(): LoginReader[] {
    const filePath = path.join(process.cwd(), "test-data", "loginData.csv");
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    return parse(fileContent, { columns: true, skip_empty_lines: true, trim: true }) as LoginReader[];
}



