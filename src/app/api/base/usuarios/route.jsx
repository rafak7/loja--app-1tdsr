import {promises as fs} from "fs"
import { NextResponse } from "next/server";

const file = await fs.readFile(process.cwd() + "/src/app/api/base/data.json", "utf8");

export async function GET(){

    //PARSEANDO A BASE DE DADOS DOS USUÁRIOS
    const body = JSON.parse(file);

    //RETORNANDO UM STATUS.
    return NextResponse.json(body); 

}