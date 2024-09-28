import * as React from "react";
import type { Metadata } from "next";
import Typography from "@mui/material/Typography";

import { config } from "@/config";
import { UpdatePasswordForm } from "@/components/dashboard/settings/update-password-form";
import { UpdateNameForm } from "@/components/dashboard/settings/update-name-form";
import { Grid, Stack } from "@mui/material";
// import { UpdateEmailForm } from "@/components/dashboard/settings/update-email-form";

export const metadata = {
  title: `Settings | ${config.site.name}`,
} satisfies Metadata;

export default function Page(): React.JSX.Element {
  return (
    <Stack sx={{ marginTop: "15px" }} spacing={3}>
      <Grid>
        <Typography variant="h4">Profile Setting</Typography>
      </Grid>
      <Grid container>
        <Grid xs={12} sx={{ padding: "10px" }} item>
          <UpdateNameForm />
        </Grid>
        {/* <Grid xs={12} sx={{ padding: "10px" }} item>
          <UpdateEmailForm />
        </Grid> */}
        <Grid xs={12} sx={{ padding: "10px" }} item>
          <UpdatePasswordForm />
        </Grid>
      </Grid>
    </Stack>
  );
}
