import { Injectable } from '@nestjs/common';
import { Ollama } from "@langchain/ollama"

@Injectable()
export class CommonAiService { 
    public model:Ollama;

    constructor(){
        this.model=new Ollama({
            model:'gemma:2b',
            temperature:0.5,
            baseUrl:'http://localhost:11434'
        })
    }

    async chat(prompt:string){
        try{
            return await this.model.invoke(prompt);

        }catch(error:any){
          return `Error Connecting to Ollama ${error.message}`;
        }
    }
}
