// Write your code here
import './index.css'

const LanguageFilterItem = props => {
  const {each, buttonClicked} = props
  const {id, language} = each
  const onclickLanguage = () => {
    buttonClicked(id)
  }
  return (
    <li className="li">
      <button type="button" className="button" onClick={onclickLanguage}>
        {language}
      </button>
    </li>
  )
}
export default LanguageFilterItem
