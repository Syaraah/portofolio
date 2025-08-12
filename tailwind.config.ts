import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./client/index.html", "./client/src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        chart: {
          "1": "var(--chart-1)",
          "2": "var(--chart-2)",
          "3": "var(--chart-3)",
          "4": "var(--chart-4)",
          "5": "var(--chart-5)",
        },
        sidebar: {
          DEFAULT: "var(--sidebar-background)",
          foreground: "var(--sidebar-foreground)",
          primary: "var(--sidebar-primary)",
          "primary-foreground": "var(--sidebar-primary-foreground)",
          accent: "var(--sidebar-accent)",
          "accent-foreground": "var(--sidebar-accent-foreground)",
          border: "var(--sidebar-border)",
          ring: "var(--sidebar-ring)",
        },
        blue: {
          100: "hsl(211.5789 51.3514% 92.7451%)",
          400: "hsl(213 93% 68%)",
          500: "hsl(213 94% 68%)",
          600: "hsl(203.8863 88.2845% 53.1373%)",
          700: "hsl(203 87% 48%)",
          800: "hsl(203 87% 43%)",
        },
        emerald: {
          100: "hsl(152 81% 96%)",
          600: "hsl(159.7826 100% 36.0784%)",
          700: "hsl(160 84% 32%)",
        },
        amber: {
          100: "hsl(48 100% 96%)",
          600: "hsl(42.0290 92.8251% 56.2745%)",
          700: "hsl(42 93% 52%)",
        },
        purple: {
          100: "hsl(270 100% 98%)",
          600: "hsl(262 83% 58%)",
          800: "hsl(262 83% 53%)",
        },
        yellow: {
          100: "hsl(55 92% 95%)",
          800: "hsl(45 93% 47%)",
        },
        green: {
          100: "hsl(149 80% 90%)",
          800: "hsl(147.1429 78.5047% 41.9608%)",
        },
        orange: {
          100: "hsl(34 100% 92%)",
          800: "hsl(24 70% 52%)",
        },
        rose: {
          100: "hsl(356 100% 97%)",
          600: "hsl(341.4894 75.2000% 50.9804%)",
        },
        indigo: {
          100: "hsl(226 100% 97%)",
          600: "hsl(239 84% 67%)",
        },
        slate: {
          50: "hsl(210 40% 98%)",
          300: "hsl(212 13% 65%)",
          500: "hsl(210 3.3898% 46.2745%)",
          600: "hsl(218 11% 65%)",
          700: "hsl(215 25% 27%)",
          800: "hsl(210 25% 7.8431%)",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        serif: ["var(--font-serif)"],
        mono: ["var(--font-mono)"],
        inter: ["Inter", "sans-serif"],
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        slideUp: {
          from: { transform: "translateY(30px)", opacity: "0" },
          to: { transform: "translateY(0)", opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fadeIn 0.6s ease-in-out",
        "slide-up": "slideUp 0.8s ease-out",
        "float": "float 3s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;
