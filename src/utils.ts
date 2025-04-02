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

export const setObjectProperty = <T>(
  obj: T,
  path: string,
  value: unknown,
): T => {
  const parts = path.split('.');
  const len = parts.length;

  let lastValue = obj as Record<string, unknown>;

  for (let i = 0; i < len; i++) {
    const isLastPart = i === len - 1;
    const currentPart = parts[i];

    if (isLastPart) {
      lastValue[currentPart] = value;
    } else {
      if (!(currentPart in lastValue)) {
        lastValue[currentPart] = {};
      } else if (
        typeof lastValue[currentPart] !== 'object' ||
        lastValue[currentPart] === null
      ) {
        lastValue[currentPart] = {};
      }

      lastValue = lastValue[currentPart] as Record<string, unknown>;
    }
  }

  return obj as T;
};
