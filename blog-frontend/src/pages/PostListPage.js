import React from "react";
import HeaderContainer from "../containers/common/HeaderContainer.js";
import PostListContainer from "../containers/posts/PostListContainer.js";
import PaginationContainer from "../containers/posts/PaginationContainer.js";
const PostListPage = () => {
  return (
    <>
      <HeaderContainer />
      <PostListContainer />
      <PaginationContainer />
    </>
  );
};

export default PostListPage;
