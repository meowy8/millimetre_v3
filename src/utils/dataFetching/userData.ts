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

export const fetchUserData = async (username: string | string[]) => {
  try {
    const response = await fetch(`/api/users/user?username=${username}`);
    const data = await response.json();
    // console.log(data);

    if (data.message === "User not found") {
      return null;
    } else if (data.message === "Success") {
      return data.result;
    }
  } catch (error) {
    console.error(error);
  }
};
