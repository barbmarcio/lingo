import { auth } from "@clerk/nextjs"

const adminIds = [
  "user_2dk4einZCwKUU2x49Dqz9yxnt7s",
];

export const isAdmin = () => {
  const { userId } = auth();

  if (!userId) {
    return false;
  }

  return adminIds.indexOf(userId) !== -1;
};
