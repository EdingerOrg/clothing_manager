import { NavigationProp } from "@react-navigation/native";

type CustomNavigationType = Omit<NavigationProp<ReactNavigation.RootParamList>, "getState">

export default CustomNavigationType;