import express from 'express';
import * as dotenv from 'dotenv';
import { Configuration, OpenAIApi } from 'openai';

dotenv.config();//to make sure env variables are populated

const router = express.Router();

const configuration = new Configuration({
    apiKey: process.env.OPEN_API_KEY,
    });
    
const openai = new OpenAIApi(configuration);

router.route('/').get((req, res) => {
  res.status(200).json({ message: 'Hello from Runner!' });
});

router.route('/').post(async (req, res) => {
  try {
    const { prompt } = req.body;//this will come from front-end

    const aiResponse = await openai.createImage({
      prompt,
      n: 1,
      size: '1024x1024',
      response_format: 'b64_json',
    });

    const image = aiResponse.data.data[0].b64_json;
    res.status(200).json({ photo: image });//getting the image from backend and sending it to frontend
  } catch (error) {
    console.error(error);
    res.status(500).send(error?.response.data.error.message || 'Something went wrong');
  }
});

export default router;