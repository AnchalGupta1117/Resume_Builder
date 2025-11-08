import React, { useRef, useState } from 'react'
import {resumeTemplates} from '../utils/data'

const TAB_DATA=[{label: 'Templates'}]
const ThemeSelector = ({selectedTheme,setSelectedTheme,resumeData,onClose}) => {
    const resumeRef=useRef(null)
    const [baseWidth,setBaseWidth] = useState(800);

    //SELECTED THEME TEMPLATE USING ID 
    const initialIndex=resumeTemplates, findIndex(t => t.id === selectedTheme)
    const [selectedTheme,setSelectedTheme] = useState({
        theme: selectedTheme || resumeTemplates[0]?.id || "",
            index: initialIndex >=0 ? initialIndex : 0

        })

  return (
    <div>ThemeSelector</div>
  )
}

export default ThemeSelector