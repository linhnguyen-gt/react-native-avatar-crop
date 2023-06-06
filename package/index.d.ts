import React from "react";
import { Size } from "src/utils";

export interface CropProps {
  source: { uri: string };
  cropShape?: "rect" | "circle";
  cropArea?: Size;
  borderWidth?: number;
  backgroundColor?: string;
  borderColor?: string;
  opacity?: number;
  width?: number;
  height?: number;
  maxZoom?: number;
  resizeMode?: "contain" | "cover";
}

export type CropRef = {
  onCrop: (quality?: number) => Promise<{
    uri: string;
    width: number;
    height: number;
  }>;
};

export default class Crop extends React.Component<CropProps> {
  onCrop: (quality?: number) => Promise<{
    uri: string;
    width: number;
    height: number;
  }>;
}
