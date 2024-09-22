export const delay = async (delay: number) => {
  return new Promise((reslove) => setTimeout(reslove, delay));
};

