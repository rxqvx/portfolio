export type TBreakpoint = {
  width: number;
  itemsToShow: number;
}[];

export interface CarouselProps {
  // repos: Array<object>;
  breakPoints: TBreakpoint;
  children;
}
