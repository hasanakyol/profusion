// Type definitions for our style system
type SpacingSystem = {
  section: string;
  container: string;
  card: string;
  button: string;
  gap: string;
}

type TypographySystem = {
  h1: string;
  h2: string;
  h3: string;
  body: string;
  small: string;
  caption: string;
}

// Consistent spacing system
export const spacing: SpacingSystem = {
  section: "pt-6 sm:pt-16 md:pt-16 pb-6 sm:pb-16 md:pb-16",
  container: "container mx-auto px-4 sm:px-6",
  card: "p-6 sm:p-8 rounded-2xl transition-all duration-300",
  button: "px-6 sm:px-8 py-2.5 sm:py-3",
  gap: "gap-4 sm:gap-6"
}

// Typography scale
export const typography: TypographySystem = {
  h1: "text-4xl sm:text-5xl md:text-6xl font-black tracking-tight",
  h2: "text-3xl sm:text-4xl font-extrabold tracking-tight",
  h3: "text-xl sm:text-2xl font-bold tracking-tight",
  body: "text-base sm:text-lg leading-relaxed",
  small: "text-sm sm:text-base",
  caption: "text-sm italic"
} 