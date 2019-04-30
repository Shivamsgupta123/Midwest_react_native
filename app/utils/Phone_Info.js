import { Dimensions, Platform } from 'react-native';

const d = Dimensions.get("window");

export const IS_IPHONE_X = Platform.OS === "ios" && (d.height > 800 || d.width > 800) ? true : false;