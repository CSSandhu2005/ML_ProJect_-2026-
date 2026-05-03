import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

// Merge Tailwind classes
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Convert text to Title Case
export function titleCase(str: string) {
  return str
    .toLowerCase()
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
}

// Parse curl command → API config
export function parseCurlCommand(curl: string) {
  const result = {
    url: '',
    method: 'GET',
    headers: {} as Record<string, string>,
    body: null as any,
  }

  // URL
  const urlMatch = curl.match(/curl\s+['"]?(.*?)['"]?(?:\s|$)/)
  if (urlMatch) result.url = urlMatch[1]

  // Method
  const methodMatch = curl.match(/-X\s+(\w+)/)
  if (methodMatch) result.method = methodMatch[1]

  // Headers
  const headerMatches = [...curl.matchAll(/-H\s+['"](.*?)['"]/g)]
  headerMatches.forEach((h) => {
    const [key, value] = h[1].split(': ')
    result.headers[key] = value
  })

  // Body
  const bodyMatch = curl.match(/-d\s+['"](.*?)['"]/)
  if (bodyMatch) {
    try {
      result.body = JSON.parse(bodyMatch[1])
    } catch {
      result.body = bodyMatch[1]
    }
  }

  return result
}