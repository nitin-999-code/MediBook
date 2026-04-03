export function safeArray(data, fallback) {
  if (!Array.isArray(data) || data.length === 0) {
    return fallback;
  }
  return data;
}
