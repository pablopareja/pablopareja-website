"use client";

import { useMediaQuery } from "react-responsive";

interface ResponsiveProps {
  includeBiggerScreens?: boolean;
}

export function useResponsive() {
  const breakpoints = {
    xs: 0,
    sm: 768,
    md: 1000,
    lg: 1200,
  };

  const useXs = ({ includeBiggerScreens = false }: ResponsiveProps) =>
    useMediaQuery({
      minWidth: breakpoints.xs,
      ...(!includeBiggerScreens && { maxWidth: breakpoints.sm - 1 }),
    });

  const useSm = ({ includeBiggerScreens = false }: ResponsiveProps) =>
    useMediaQuery({
      maxWidth: breakpoints.sm,
      ...(!includeBiggerScreens && { maxWidth: breakpoints.md - 1 }),
    });

  const useMd = ({ includeBiggerScreens = false }: ResponsiveProps) =>
    useMediaQuery({
      minWidth: breakpoints.md,
      ...(!includeBiggerScreens && { maxWidth: breakpoints.lg - 1 }),
    });

  const useLg = ({ includeBiggerScreens = false }: ResponsiveProps) =>
    useMediaQuery({
      minWidth: breakpoints.lg,
      ...(!includeBiggerScreens && { minWidth: breakpoints.lg }),
    });

  return {
    useXs,
    useSm,
    useMd,
    useLg,
  };
}
