import * as React from "react";
import type { Metadata } from "next";
import { config } from "@/config";
import { Grid, Stack, Typography } from "@mui/material";

export const metadata = {
  title: `Dashboard | ${config.site.name}`,
} satisfies Metadata;

export default function Page(): React.JSX.Element {
  return (
    <Grid
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100%",
      }}
    >
      <Stack
        sx={{
          alignItems: "center",
          maxWidth: "md",
        }}
        spacing={3}
      >
        <Grid sx={{ padding: "20px" }}>
          <Typography sx={{ textAlign: "center" }} variant="h3">
            Welcome to the dashboard
          </Typography>
        </Grid>
      </Stack>
    </Grid>
  );
}
