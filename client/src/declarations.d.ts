declare module "@radix-ui/react-accordion";
declare module "@radix-ui/react-alert-dialog";
declare module "@radix-ui/react-toast";
declare module "swiper/react";
declare module "swiper/modules";
declare module "embla-carousel-react";
declare module "react-day-picker";
declare module "recharts";
declare module "gsap";
declare module "gsap/ScrollTrigger";
declare module "*.mp4" {
  const src: string;
  export default src;
}
declare module "*.webm" {
  const src: string;
  export default src;
}
declare module "*.svg" {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}
declare module "*.png" {
  const content: string;
  export default content;
}
declare module "*.jpg" {
  const content: string;
  export default content;
} 