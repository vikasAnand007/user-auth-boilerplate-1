"use client";

import React, { useEffect } from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  Grid,
} from "@mui/material";

import { useForm } from "react-hook-form";
import { z as zod } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import CustomButton from "@/components/common/custom-button";
import { PasswordInputField } from "@/components/form/inputFields";
import { useUpdatePasswordMutation } from "@/store/Features/auth/authApiSlice";
import { toast } from "react-toastify";
import { updatePasswordSchema } from "@/lib/validationSchema";

type Values = zod.infer<typeof updatePasswordSchema>;

const defaultValues = {
  password: "",
  newPassword: "",
} satisfies Values;

export function UpdatePasswordForm(): React.JSX.Element {
  const [updatePassword, { data: updateResponse, isLoading }] =
    useUpdatePasswordMutation<any>();
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<Values>({
    defaultValues,
    resolver: zodResolver(updatePasswordSchema),
  });

  const watcher = watch();
  const hasChange = watcher.password && watcher.newPassword;

  const submitHandler = async (data: Values) => {
    updatePassword(data);
  };

  useEffect(() => {
    if (updateResponse) {
      toast.success(updateResponse.message);
      reset({ password: "", newPassword: "" });
    }
  }, [updateResponse, reset]);

  return (
    <Card>
      <form onSubmit={handleSubmit(submitHandler)}>
        <CardHeader subheader="Change Password" title="Password" />
        <Divider />
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <PasswordInputField
                control={control}
                name="password"
                label="Current Password"
                errors={errors}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <PasswordInputField
                control={control}
                name="newPassword"
                label="New Password"
                errors={errors}
              />
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <CardActions>
          <CustomButton
            disabled={!hasChange || isLoading}
            loading={isLoading}
            type="submit"
            variant="contained"
          >
            Update
          </CustomButton>
        </CardActions>
      </form>
    </Card>
  );
}
