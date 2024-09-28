"use client";

import React, { JSX } from "react";
import { Box, Grid } from "@mui/material";
import { useColorScheme } from "@mui/material/styles";

import { NoSsr } from "@/components/core/no-ssr";

const HEIGHT = 50;
const WIDTH = 50;

type Color = "dark" | "light";

export interface LogoProps {
  color?: Color;
  emblem?: boolean;
  height?: number;
  width?: number;
}

export function Logo({
  color = "dark",
  emblem,
  height = HEIGHT,
  width = WIDTH,
}: LogoProps): JSX.Element {
  let url: string;

  if (emblem) {
    url =
      color === "light"
        ? "/assets/logo-emblem.png"
        : "/assets/logo-emblem--dark.png";
  } else {
    url = color === "light" ? "/assets/logo.png" : "/assets/logo--dark.png";
  }

  return (
    <Grid sx={{ display: "flex", alignItems: "center" }}>
      <Box alt="logo" component="img" height={height} src={url} width={width} />
    </Grid>
  );
}

export interface DynamicLogoProps {
  colorDark?: Color;
  colorLight?: Color;
  emblem?: boolean;
  height?: number;
  width?: number;
}

export function DynamicLogo({
  colorDark = "light",
  colorLight = "dark",
  height = HEIGHT,
  width = WIDTH,
  ...props
}: DynamicLogoProps): JSX.Element {
  const { colorScheme } = useColorScheme();
  const color = colorScheme === "dark" ? colorDark : colorLight;

  return (
    <NoSsr
      fallback={<Box sx={{ height: `${height}px`, width: `${width}px` }} />}
    >
      <Logo color={color} height={height} width={width} {...props} />
    </NoSsr>
  );
}
