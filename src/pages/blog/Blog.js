import { React, memo } from "react";
import BlogText from "../../components/blogText/BlogText";
function Blog() {
  return (
    <div style={{ padding: "120px 0 80px" }}>
      <BlogText />
    </div>
  );
}

export default memo(Blog);
