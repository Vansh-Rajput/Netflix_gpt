import { Openkey } from './constants';

import { GoogleGenAI } from "@google/genai";

const openai = new GoogleGenAI({ apiKey:Openkey});

export default openai;