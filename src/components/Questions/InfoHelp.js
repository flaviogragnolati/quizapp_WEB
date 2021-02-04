export const infoQuizModel = {
  title: {
    name: "title",
    label: "Titulo*",
    requiredErrorMsg: "Titulo is required",
    minErrorMsg: "Titulo must be >2 chars",
  },
  description: {
    name: "description",
    label: "Last name*",
    requiredErrorMsg: "description is required",
    minErrorMsg: "description must be >2 chars",
  },
};

const { title, description } = infoQuizModel;

export const initialState_Info = {
  [title.name]: "",
  [description.name]: "",
};
