"use client";
import React, { useContext } from "react";
import type { FC } from "react";
import type { AppState } from "./container.tsx";

type FormData = {
  imageData: string;
  imageType: string;
};

const defaultAppState: AppState = {
  createProductModal: false,
  onHandleCreateProductModal: (createProductModalParam: boolean) => {
    console.log(`Handling name: ${createProductModalParam}`);
  },
  filterNazov: "",
  onHandleFilterNazov: (filterNazovParam: string) => {
    console.log(`Handling name: ${filterNazovParam}`);
  },
  name: "",
  onHandleName: (name: string) => {
    console.log(`Handling name: ${name}`);
  },
  highlightedText: { area: "", text: "" },
  onHandleHighlightedText: ({ area, text }: { area: string; text: string }) => {
    console.log(`Handling highlighted text: ${area} ${text}`);
  },
  isCreateProductModalOpened: false,
  onHandleIsCreateProductModalOpened: (open: boolean) => {
    console.log(`Handling modal opening: ${open}`);
  },
  isEditProductModalOpened: false,
  onHandleIsEditProductModalOpened: (open: boolean) => {
    console.log(`Handling modal opening: ${open}`);
  },
  selectedCategory: "",
  onHandleSelectedCategory: (category: string) => {
    console.log(`Handling category select: ${category}`);
  },
  subSelectedCategory: "",
  onHandleSubSelectedCategory: (subCategory: string) => {
    console.log(`Handling subcategory select: ${subCategory}`);
  },
  subSubSelectedCategory: "",
  onHandleSubSubSelectedCategory: (subSubCategory: string) => {
    console.log(`Handling subsubcategory select: ${subSubCategory}`);
  },
  imageFormData: [],
  onHandleImageFormData: (formData: FormData[] | undefined) => {
    console.log("Handling image form data select:", formData);
  },
  url: "",
  onHandleURL: (url: string) => {
    console.log("Handling url:", url);
  }
};

const AppContext = React.createContext<AppState>(defaultAppState);

type Props = {
  value: AppState;
  children: React.ReactNode;
};

export const Provider: FC<Props> = ({ value, children }) => (
  <AppContext.Provider value={value}>{children}</AppContext.Provider>
);

export const useAppContainer = () => {
  return useContext(AppContext);
};