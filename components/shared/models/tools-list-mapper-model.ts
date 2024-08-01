import { ReactNode } from "react";

export interface ToolsListMapperModel {
  title: string;
  url: string;
  icon?: ReactNode;
  prefetch?: boolean;
}