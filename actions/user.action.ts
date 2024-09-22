import { delay } from "@/utils";

export const saveUserDataInDb = async () => {
  // Implement database operations here
  try {
    await delay(2000);
    return {
      success: true,
      userData: {
        username: "habib",
      },
    };
  } catch (error) {
    return {
      success: false,
      userData: null,
    };
  }
};
