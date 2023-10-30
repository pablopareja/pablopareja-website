import { CSSProperties } from "react";

export interface IconProps {
  icon: {
    id: string;
    viewBox: string;
  };
  className?: string;
  style?: CSSProperties | undefined;
}
