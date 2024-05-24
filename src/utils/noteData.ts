import { FilmNotes } from "@/types/filmTypes";

export const fetchUserNoteData = async (
  username: string | string[],
  noteId: string | string[] | null,
  limit: number | null
) => {
  try {
    // fetch first 3 notes
    if (!noteId && limit) {
      const response = await fetch(
        `/api/v1/notes/userNotes?username=${username}&limit=${limit}`
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
        `/api/v1/notes/userNotes?username=${username}&noteId=${noteId}`
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
        `/api/v1/notes/userNotes?username=${username}`
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

export const postNote = async (noteData: FilmNotes) => {
  try {
    const response = await fetch("/api/v1/notes/filmNotes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(noteData),
    });
    const data = await response.json();
    // console.log(data);
  } catch (error) {
    console.log(error);
  }
};
