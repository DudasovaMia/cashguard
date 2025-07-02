import type { FC, JSX } from "react";
import { useEffect, useState } from "react";
import { Provider } from "./context";

type Highlight = {
  area: string;
  text: string;
};

type FormData = {
  imageData: string;
  imageType: string;
};

export type AppState = {
  createProductModal: boolean;
  onHandleCreateProductModal: (createProductModalParam: boolean) => void;
  filterNazov: string;
  onHandleFilterNazov: (filterNazovParam: string) => void;
  name: string;
  onHandleName: (name: string) => void;
  highlightedText: Highlight | undefined;
  onHandleHighlightedText: (highlightedText: Highlight) => void;
  isCreateProductModalOpened: boolean;
  onHandleIsCreateProductModalOpened: (open: boolean) => void;
  isEditProductModalOpened: boolean;
  onHandleIsEditProductModalOpened: (open: boolean) => void;
  selectedCategory: string;
  onHandleSelectedCategory: (category: string) => void;
  subSelectedCategory: string;
  onHandleSubSelectedCategory: (subCategory: string) => void;
  subSubSelectedCategory: string;
  onHandleSubSubSelectedCategory: (subSubCategory: string) => void;
  imageFormData: FormData[] | undefined;
  onHandleImageFormData: (formData: FormData[] | undefined) => void;
  url: string;
  onHandleURL: (url: string) => void;
};

type Props = {
  children: (props: AppState) => JSX.Element;
};

const Container: FC<Props> = ({ children }) => {
  const [createProductModal, setCreateProductModal] = useState<boolean>(false);
  const [filterNazov, setFilterNazov] = useState<string>("");
  const [name, setName] = useState<string>("nameee");
  const [highlightedText, setHighlightedText] = useState<
    Highlight | undefined
  >();
  const [isCreateProductModalOpened, setIsCreateProductModalOpened] =
    useState<boolean>(false);
    const [isEditProductModalOpened, setIsEditProductModalOpened] =
      useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [subSelectedCategory, setSubSelectedCategory] = useState<string>("");
  const [subSubSelectedCategory, setSubSubSelectedCategory] =
    useState<string>("");
  const [imageFormData, setImageFormData] = useState<FormData[] | undefined>()
  const [url, setUrl] = useState<string>("")

  const handleCreateProductModal = (createProductModalParam: boolean) => {
    setCreateProductModal(createProductModalParam);
  };

  const handleFilterNazov = (filterNazovParam: string) => {
    if (filterNazovParam.trim() !== "") {
      setFilterNazov(filterNazovParam);
    } else {
      setFilterNazov("");
    }
  };
  
  const handleName = (name: string) => {
    setName(name);
  };

  const handleHighlightedText = (highlight: Highlight) => {
    if (highlight) {
      setHighlightedText(highlight);
    }
  };

  const handleIsCreateProductModalOpened = (open: boolean) => {
    setIsCreateProductModalOpened(open);
  };

  const handleIsEditProductModalOpened = (open: boolean) => {
    setIsEditProductModalOpened(open);
  };

  const handleSelectedCategory = (category: string) => {
    setSelectedCategory(category);
  };

  const handleSubSelectedCategory = (subCategory: string) => {
    setSubSelectedCategory(subCategory);
  };

  const handleSubSubSelectedCategory = (subSubCategory: string) => {
    setSubSubSelectedCategory(subSubCategory);
  };

  const hanldeImageFormData = (formData: FormData[] | undefined) => {
    setImageFormData(formData)
  }

  const handleURL = (url: string) => {
    setUrl(url)
  }

  const appState: AppState = {
    createProductModal,
    onHandleCreateProductModal: handleCreateProductModal,
    filterNazov,
    onHandleFilterNazov: handleFilterNazov,
    name,
    onHandleName: handleName,
    highlightedText,
    onHandleHighlightedText: handleHighlightedText,
    isCreateProductModalOpened,
    onHandleIsCreateProductModalOpened: handleIsCreateProductModalOpened,
    isEditProductModalOpened,
    onHandleIsEditProductModalOpened: handleIsEditProductModalOpened,
    selectedCategory,
    onHandleSelectedCategory: handleSelectedCategory,
    subSelectedCategory,
    onHandleSubSelectedCategory: handleSubSelectedCategory,
    subSubSelectedCategory,
    onHandleSubSubSelectedCategory: handleSubSubSelectedCategory,
    imageFormData,
    onHandleImageFormData: hanldeImageFormData,
    url,
    onHandleURL: handleURL
  };

  return <Provider value={appState}>{children(appState)}</Provider>;
};

export default Container;