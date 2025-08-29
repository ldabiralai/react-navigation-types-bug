import {
  LinkingOptions,
  NavigatorScreenParams,
} from "@react-navigation/native";

export type RootStackParamList = {
  Tabs: NavigatorScreenParams<{
    Home: {
      Screen1: undefined;
      Screen2: NavigatorScreenParams<{
        ScreenA: undefined;
      }>;
    };
  }>;
};

const linking: LinkingOptions<RootStackParamList> = {
  config: {
    screens: {
      Tabs: {
        initialRouteName: "Home", // works
        screens: {
          Home: {
            initialRouteName: "Screen1", // errors with: Type 'string' is not assignable to type 'never'.
            screens: {
              Screen1: "screen-1",
              Screen2: {
                initialRouteName: "ScreenC", // just typed as `string`, should be ScreenC
                screens: {
                  ScreenC: "screen-c",
                },
              },
            },
          },
        },
      },
    },
  },
};
