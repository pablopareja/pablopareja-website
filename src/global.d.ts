// global.d.ts

interface Window {
  // Define the gtag function with its expected signature.
  gtag(command: string, trackingId: string, config: object): void;
  gtag(command: string, action: string, params: object): void;
}
