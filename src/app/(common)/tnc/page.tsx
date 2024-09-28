import * as React from "react";
import type { Metadata } from "next";
import RouterLink from "next/link";
import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import { config } from "@/config";
import { paths } from "@/paths";
import { Grid, Stack, Typography } from "@mui/material";

export const metadata = {
  title: `Terms | ${config.site.name}`,
} satisfies Metadata;

export default function NotFound(): React.JSX.Element {
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
        <Typography sx={{ textAlign: "center" }} variant="h3">
          No terms and conditions!
        </Typography>
        <Button
          component={RouterLink}
          href={paths.common.home}
          startIcon={<ArrowBackIcon />}
          variant="contained"
        >
          Go back to home
        </Button>
      </Stack>
    </Grid>
  );
}
