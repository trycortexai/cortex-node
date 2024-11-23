export const getObjectProperty = <T>(object: unknown, path: string): T => {
  const parts = path.split('.').map(p => p);
  let current: unknown = object;

  for (const part of parts) {
    if (current === null || typeof current !== 'object' || !(part in current)) {
      return undefined as T;
    }
    current = (current as Record<string | number, unknown>)[part];
  }

  return current as T;
};
