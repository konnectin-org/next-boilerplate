"use client";

import "./globals.css";
import { darkTheme, lightTheme } from "./theme/themes";

import { ThemeProvider, CssBaseline, Switch, FormControlLabel } from "@mui/material";
import { ChangeEvent, useState } from "react";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  let [useDarkTheme, setUseDarkTheme] = useState(false);
  let [theme, setTheme] = useState(useDarkTheme ? darkTheme : lightTheme);

  const changeThemeHandler = (target: ChangeEvent, currentValue: boolean) => {
    setUseDarkTheme(currentValue);
    setTheme(currentValue ? darkTheme : lightTheme);
  };

  return (
    <html lang="en">
      <head>
        <title>Create Next App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <ThemeProvider theme={theme}>
        <body id="__next">
          <CssBaseline />
          <FormControlLabel
            control={
              <Switch
                checked={useDarkTheme}
                inputProps={{ "aria-label": "Dark Mode" }}
                onChange={(target, value) => changeThemeHandler(target, value)}
              ></Switch>
            }
            label="Dark Mode"
            labelPlacement="start"
          />
          {children}
        </body>
      </ThemeProvider>
    </html>
  );
}