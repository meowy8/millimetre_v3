import { NextResponse } from "next/server";
import { OpenAI } from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req) {
  const { searchWords } = await req.json();
  console.log("searchWords", searchWords);

  const completion = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content:
          "use the words used in the user input to return in json format a list of 4 films that are related thematically, in genre, in style etc, to the words and give the title of the films along with their release date, a short non-spoiler synopsis under 100 words, three colours that would be associated with its themes and style in hex, along with 3 words related to the themes of the film. make sure that all films are inside a 'films' array and that each film has a 'title', 'release_date', 'synopsis' and a 'colors' and 'themes' array.",
        // `just return a test json of three films with their titles, release dates, short non-spoiler synopses and three colours, three words related to the themes of the film. all the date says is the word test.`,
      },
      { role: "user", content: searchWords },
    ],
  });

  if (!completion) {
    return NextResponse.json({ error: "No response from OpenAI" });
  }

  const content = JSON.parse(completion.choices[0].message.content);

  return NextResponse.json(content);
}
