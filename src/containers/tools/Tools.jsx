import { htmlIcon, iconCss, iconJavascript, iconTailwindCss } from "../../assets"

const Tools = () => {
  return (
    <div className="section__padding section__margin flex">
        <img src={htmlIcon}/>
        <img src={iconCss}/>
        <img src={iconJavascript}/>
        <img src={iconTailwindCss}/>
    </div>
  )
}

export default Tools