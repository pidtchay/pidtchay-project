import en from "./en.json";
import ru from "./ru.json";
import { ILiterals } from "Model/Literals";

const langs = {
  en,
  ru
};

export const loadLang = (lang = "en"): ILiterals => {
  return langs[lang];
};
