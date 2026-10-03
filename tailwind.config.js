// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,jsx,ts,tsx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         ja: {
//           red: "#D71920",
//           dark: "#171B22",
//           text: "#1F2937",
//           gray: "#6B7280",
//           light: "#F5F6F8",
//         },
//       },
//       boxShadow: {
//         soft: "0 10px 30px rgba(17, 24, 39, 0.08)",
//       },
//     },
//   },
//   plugins: [],
// };

//CLAUDE AI

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: { DEFAULT: '#C8102E', dark: '#A00D24', light: '#FDECEF' },
        ink: { DEFAULT: '#111827', soft: '#4B5563' },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      boxShadow: {
        card: '0 1px 2px rgba(16,24,40,.04), 0 8px 24px -12px rgba(16,24,40,.12)',
        'card-hover': '0 12px 32px -12px rgba(16,24,40,.25)',
      },
    },
  },
  plugins: [],
};