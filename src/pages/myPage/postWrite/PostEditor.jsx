import React from "react";
import styled from "styled-components";
import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";

function PostEditor() {
  return (
    <Wrap>
      <SunEditor
        width="100%"
        height="454px"
        setOptions={{
          buttonList: [
            [
              "undo",
              "redo",
              "font",
              "fontSize",
              "formatBlock",
              //   "paragraphStyle",
              "blockquote",
              "bold",
              "underline",
              "italic",
              "strike",
              "subscript",
              "superscript",
              "fontColor",
              "hiliteColor",
              "textStyle",
              //   "removeFormat",
              "outdent",
              "indent",
              "align",
              "horizontalRule",
              "list",
              //   "lineHeight",
              "table",
              "link",
              "image",
              //   "video",
              //   "audio",
              //   "fullScreen",
              //   "showBlocks",
              //   "codeView",
              //   "preview",
              //   "print",
              //   "save",
              //   "template",
            ],
          ],
          resizing: false,
        }}
        setAllPlugins={true}
        // onChange={handleContentChange}
      />
    </Wrap>
  );
}

export default PostEditor;

const Wrap = styled.div`
  width: 100%;
  border-radius: 16px; /* 원하는 border-radius 값 */
  overflow: hidden;
  border: none;
`;
