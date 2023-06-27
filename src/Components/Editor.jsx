import {useState} from "react";
import { Box } from "@mui/material";
import "./Code";
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
import { Controlled as ControlledEditor } from "react-codemirror2";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/css/css";
import "codemirror/mode/javascript/javascript";

const Editor = (props) => {
  const {language, displayName, icon, color, value, onChange } = props;
  const [open, setOpen] = useState(true);

function handleChange(editor, data, value) {
  onChange(value);
}
  return (
    <Box className="main-container" style={open ? null : {flexGrow:0}}>
      <Box className="header">
        <Box className="heading">
          <Box
            className="icon-component"
            style={{
              background: color,
              placeContent: "center",
              marginRight: 10,
              height: 20,
              width: 20,
              display: "flex",
              borderRadius: 5,
              color: "#090908",
              fontSize:15,
              fontWeight: 500,
            }}
          >
            {icon}
          </Box>
          {displayName}
        </Box>
       <CloseFullscreenIcon fontSize="small" style={{alignSelf:"center"}} onClick={()=> setOpen(prevState => !prevState)}/>
      </Box>

      <ControlledEditor
        onBeforeChange={handleChange}
        value={value}
        options={{
          lineWrapping: true,
          lint: true,
          theme: "material",
          mode: language,
          lineNumbers: true,
        }}
      />

    </Box>
  );
};

export default Editor;
