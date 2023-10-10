import React from "react";
import Responsive from "../components/common/Responsive.js";
import EditorContainer from "../containers/write/EditorContainer.js";
import TagBoxContainer from "../containers/write/TagBoxContainer.js";
import WriteActionButtonsContainer from "../containers/write/WriteActionButtonsContainer.js";
import { Helmet } from "react-helmet-async";

const WritePage = () => {
  return (
    <Responsive>
      <Helmet>
        <title>글 작성하기 - REACTERS</title>
      </Helmet>
      <EditorContainer />
      <TagBoxContainer />
      <WriteActionButtonsContainer />
    </Responsive>
  );
};

export default WritePage;
