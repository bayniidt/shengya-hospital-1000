export const deploymentBasePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export function deploymentPath(path: string) {
  if (!path.startsWith("/") || path.startsWith("//")) return path;
  return `${deploymentBasePath}${path}`;
}
