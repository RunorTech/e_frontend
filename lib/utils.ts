import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function trackScrollPositionY(callback: (scrollY: number) => void): void {
  window.addEventListener('scroll', () => {
      const scrollY: number = window.scrollY;
      callback(scrollY);  // Invoke the callback with the updated value
  });
};

    // trackScrollPositionY((scrollY: number) => {
    //     if (scrollY >= 60) {
    //       console.log(`Captured Scroll Y: ${scrollY}`);
    //     }
    //     // You can now store `scrollX` in another variable or perform an action
    // });