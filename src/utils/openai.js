import { Openkey } from './constants';

import { GoogleGenAI } from "@google/genai";

const openai = new GoogleGenAI({ apiKey: process.env.REACT_APP_OPEN_KEY });

export default openai;