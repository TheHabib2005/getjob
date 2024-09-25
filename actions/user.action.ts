"use server";

import { prisma } from "@/lib/prisma";
import { delay } from "@/utils";
import { cookies } from "next/headers";

export const saveUserDataInDb = async (user: any) => {
  // Implement database operations here

  const cookiesClient = cookies();

  try {
    const loggedInUser = await prisma?.user.findUnique({
      where: {
        email: user.email,
      },
    });

    if (loggedInUser) {
      cookiesClient.set(
        "user_token",
        `8737nb364267dfg876348576b583456$${loggedInUser.email}`,
        {
          maxAge: 60000,
        }
      );
      return {
        success: true,
        userData: {
          loggedInUser,
        },
      };
    }

    const newUser = await prisma.user.create({
      data: {
        email: user.email,
        username: user.username,
        imageUrl: user.imageUrl,
      },
    });
    cookiesClient.set(
      "user_token",
      `8737nb364267dfg876348576b583456$${newUser.email}`,
      {
        maxAge: 60000,
      }
    );
    return {
      success: true,
      userData: {
        newUser,
      },
    };
  } catch (error) {
    console.log(error);

    return {
      success: false,
      userData: null,
      error,
    };
  }
};

export const getUserDetailsByEmail = async (email: string) => {
  try {
    const user = await prisma.user.findUnique({ where: { email } });
    return {
      success: true,
      user,
    };
  } catch (error) {
    return {
      success: false,
      user: null,
    };
  }
};

export const logoutUser = async () => {
  const cookiesClient = cookies();
  cookiesClient.delete("user_token");
  await delay(2000);
  return {
    success: true,
    message: "user Logout successfully",
  };
};

export const userLoggedIn = () => {
  const cookiesClient = cookies();
  const isToken = cookiesClient.has("user_token");
  return isToken;
};

export const updateUserBio = async (bio: string) => {
  const currentUserEmail = cookies().get("user_token")?.value.split("$")[1];

  const findUser = await prisma.user.findUnique({
    where: { email: currentUserEmail },
  });

  if (!findUser) {
    return {
      success: false,
      message: "User not found",
    };
  }

  try {
    let updatedUser = await prisma.user.update({
      where: { email: currentUserEmail },
      data: {
        username: bio,
      },
    });
    return {
      success: true,
      message: "User bio updated successfully",
      updatedUser,
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "Failed to update user bio",
    };
  }
};
