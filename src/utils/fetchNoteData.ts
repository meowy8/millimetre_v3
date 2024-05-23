export const fetchUserNoteData = async (
  username: string | string[],
  noteId: string | string[] | null,
  limit: number | null
) => {
  try {
    const response = await fetch(
      `/api/v1/notes/userNotes?username=${username}&noteId=${noteId}&limit=${limit}`
    );
    const data = await response.json();
    // console.log(data);

    if (data.message === "Success") {
      return data.result;
    } else {
      return null;
    }
  } catch (error) {
    console.log(error);
  }
};
