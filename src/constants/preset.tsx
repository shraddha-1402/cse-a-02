import { ProjectData } from "../types/main";

export const projectDataPreset: ProjectData = {
  name: "name",
  type: "type",
  numberOfMembers: 4,
  cause: "cause",
  techUsed: ["tech1", "tech2"],
  guide: "guide",
  docFile: "docFile",
  pptFile: "pptFile",
  suggestionsByGuide: "suggestionsByGuide",
  approved: true,
  rules: {
    maxMembers: 4,
  },
  superGuide: "",
  suggestionsBySuperGuide: "",
};
export const projectDataPresetNull: ProjectData = {
  name: "",
  type: "",
  numberOfMembers: 1,
  cause: "",
  techUsed: [""],
  guide: "",
  docFile: "",
  pptFile: "",
  suggestionsByGuide: "",
  approved: false,
  rules: {
    maxMembers: 4,
  },
  superGuide: "",
  suggestionsBySuperGuide: "",
};
export const user = { name: "userName" };
