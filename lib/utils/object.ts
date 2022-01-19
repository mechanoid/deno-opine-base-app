export const withoutUnset = (
  obj: Record<string, unknown>,
): Record<string, unknown> => {
  return Object.fromEntries(
    Object.entries(obj).filter(([_, v]) => v !== undefined),
  );
};
