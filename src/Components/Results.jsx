import { Box } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { DataContext } from '../Context/DataProvider'


const Results = () => {
    const [src , setSrc] = useState('');
    const {html, css, js} =useContext(DataContext);

    const srcDoc = `
        <html>
            <body>${html}</body>
            <style>${css}</style>
            <script>${js}</script>
        </html>
        `
        useEffect(()=>{
            const timeout = setTimeout(()=>{
                setSrc(srcDoc);
            },250);
            return() => clearTimeout(timeout)
        },[html,css,js])
  return (
    <Box>
        <iframe 
        srcDoc={srcDoc}
        title="output"
        sandbox="allow-script"
        frameBorder={0}
        width="100%"
        height="100%"
      />
    </Box>
  )
}

export default Results
