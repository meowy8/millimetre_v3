// fetches user search results with query from database
export const fetchUserSearch = async (inputValue: string) => {
  try {
    const response = await fetch(
      `/api/users/userSearch?searchValue=${inputValue}`
    );
    const data = await response.json();
    // console.log(data);

    if (data.message === "Success") {
      return data.result;
    }
  } catch (error) {
    console.error(error);
  }
};

// fetches general user data
export const fetchUserData = async (username: string | string[]) => {
  try {
    const response = await fetch(`/api/users/user?username=${username}`);
    const data = await response.json();
    // console.log(data);

    // check if user is found
    if (data.message === "User not found") {
      return null;
    } else if (data.message === "Success") {
      return data.result;
    }
  } catch (error) {
    console.error(error);
  }
};

// updates user data
// userId is retrieved from session
export const updateUser = async (updatedUser, userId) => {
  try {
    const response = await fetch(`/api/users/user?userId=${userId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedUser),
    });

    if (!response.ok) {
      throw new Error(`Failed to update user: ${response.statusText}`);
    }

    const data = await response.json();
    return { success: true, user: data };
  } catch (error) {
    console.error("Error updating user:", error);
    return { success: false, message: error.message };
  }
};

// fetches user watchlist
export const fetchUserWatchlist = async (username: string | string[]) => {
  try {
    const response = await fetch(
      `/api/users/user/watchlist?username=${username}`
    );
    const data = await response.json();
    // console.log(data);

    // check if user is found
    if (data.message === "User not found") {
      return null;
    } else if (data.message === "Success") {
      return data.result;
    }
  } catch (error) {
    console.error(error);
  }
};

// updates user watchlist
// userId is retrieved from session
// film is the film object being added to the user watchlist
export const updateUserWatchlist = async (film, userId) => {
  try {
    await fetch(`/api/users/user/watchlist`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ film, userId }),
    });
  } catch (error) {
    console.error(error);
  }
};

// removes film from user watchlist
export const removeFromUserWatchlist = async (filmId, userId) => {
  await fetch("/api/users/user/watchlist", {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ filmId: filmId, userId }),
  });
};

// updates user password
export const updateUserPassword = async (
  userId,
  currentPassword,
  newPassword
) => {
  try {
    const res = await fetch("/api/auth/password", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId,
        currentPassword,
        newPassword,
      }),
    });
  } catch (error) {
    console.error(error);
  }
};

// creates new user
export const createUser = async (userData) => {
  const response = await fetch("/api/users/user", {
    method: "POST",
    body: JSON.stringify(userData),
  });
  return response;
};
