// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, tabClicked, isTabActive} = props
  const {tabId, displayText} = tabDetails

  const activeTab = isTabActive ? 'active' : 'tabText'
  const line = isTabActive ? 'activeLine' : 'line'

  const onClickTab = () => {
    tabClicked(tabId)
  }

  return (
    <li className="tab-list">
      <button type="button" className={activeTab} onClick={onClickTab}>
        {displayText}
      </button>
      <hr className={line} />
    </li>
  )
}

export default TabItem
