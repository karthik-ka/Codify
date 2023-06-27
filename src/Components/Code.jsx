import { useContext } from "react";
import { Box, styled } from "@mui/material";
import Editor from "./Editor";
import { DataContext } from "../Context/DataProvider";

const Container = styled(Box)`
  display: flex;
  background-color: #060606;
`;


const Code = ()=>{
  const { html, css, js, setHtml, setCss, setJs } = useContext(DataContext);
return (
  <Container>
    <Editor
      language="xml"
      displayName="HTML"
      icon= "／"
      color="#FF3C41"
      value={html}
      onChange={setHtml}
    />
    <Editor
      language="css"
      displayName="CSS"
      icon= "✱"
      color="#0EBEFF"
      value={css}
      onChange={setCss}
    />
    <Editor
      language="javascript"
      displayName="JS"
      icon="()"
      color="#FCD000"
      value={js}
      onChange={setJs}
    />
  </Container>
);
}
export default Code;
