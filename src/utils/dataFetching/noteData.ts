import { FilmNotes } from "@/types/filmTypes";

// fetches user notes from database
// limit is used for small displays of notes or watched films
// includeContent depends on the note is to represent a logged film or the content of the note
export const fetchUserNoteData = async (
  username: string | string[],
  noteId: string | string[] | null,
  limit: number | null,
  includeContent: boolean
) => {
  try {
    // fetch first 3 notes
    if (!noteId && limit) {
      const response = await fetch(
        `/api/notes/userNotes?username=${username}&limit=${limit}&includeContent=${includeContent}`
      );
      const data = await response.json();
      // console.log(data);

      if (data.message === "Success") {
        return data.result;
      } else {
        return null;
      }
    }

    // fetch single note
    if (noteId && !limit) {
      const response = await fetch(
        `/api/notes/userNotes?username=${username}&noteId=${noteId}`
      );
      const data = await response.json();
      // console.log(data);

      if (data.message === "Success") {
        return data.result;
      } else {
        return null;
      }
    }

    /// fetch 3 recently watched
    if (includeContent && limit) {
      const response = await fetch(
        `/api/notes/userNotes?username=${username}&limit=${limit}&includeContent=${includeContent}`
      );
      const data = await response.json();
      // console.log(data);

      if (data.message === "Success") {
        return data.result;
      } else {
        return null;
      }
    }

    // fetch all user notes
    if (!noteId && !limit) {
      const response = await fetch(
        `/api/notes/userNotes?username=${username}&includeContent=${includeContent}`
      );
      const data = await response.json();
      // console.log(data);

      if (data.message === "Success") {
        return data.result;
      } else {
        return null;
      }
    }
  } catch (error) {
    console.log(error);
  }
};

// post user note to database
// username is retrieved from session
export const postNote = async (noteData: FilmNotes, username: string) => {
  try {
    const response = await fetch(`/api/notes/filmNotes?username=${username}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(noteData),
    });
    // const data = await response.json();
    // console.log(data);
  } catch (error) {
    console.log(error);
  }
};

// delete user note from database
// username is retrieved from session
export const deleteNote = async (noteId: string, username: string) => {
  try {
    const response = await fetch(
      `/api/notes/filmNotes?noteId=${noteId}&username=${username}`,
      {
        method: "DELETE",
      }
    );
    // const data = await response.json();
    // console.log(data);
  } catch (error) {
    console.log(error);
  }
};
