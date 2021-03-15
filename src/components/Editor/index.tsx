import React from "react";
import { Editor as DraftEditor, EditorState, RichUtils } from "draft-js";

export class Editor extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty(),
    };
  }

  updateEditorState = (editorState: any) => {
    this.setState({ editorState });
  };

  makeBold = () => {
    this.updateEditorState(
      RichUtils.toggleInlineStyle(this.state.editorState, "BOLD")
    );
  };

  render() {
    return (
      <div>
        <button onClick={this.makeBold}>Bold</button>
        <DraftEditor
          placeholder="Здесь вводить текст"
          editorState={this.state.editorState}
          onChange={this.updateEditorState}
        />
      </div>
    );
  }
}
