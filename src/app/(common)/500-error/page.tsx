import * as React from "react";
import type { Metadata } from "next";
import RouterLink from "next/link";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import { config } from "@/config";
import { paths } from "@/paths";
import Image from "next/image";
import { Grid, Stack, Typography } from "@mui/material";

export const metadata = {
  title: `Not found | ${config.site.name}`,
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
        <Box>
          <Image
            alt="Under development"
            src="/assets/error-500.png"
            width={100}
            height={100}
          />
        </Box>
        <Typography sx={{ textAlign: "center" }} variant="h3">
          500: Something went wrong.
        </Typography>
        <Typography sx={{ textAlign: "center" }} color="text.secondary" variant="body1">
          Please try again after sometime.
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
