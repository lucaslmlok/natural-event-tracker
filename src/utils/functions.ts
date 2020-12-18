export const getEventColor = (category: number | null): string => {
  switch (category) {
    case 8:
      return "#cc0000";
    case 10:
      return "#0067b0";
    default:
      return "#1f2937";
  }
};

export const timeout = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
