// Write your code here
import './index.css'

const AppItem = props => {
  const {appDetails} = props
  const {imageUrl, appName} = appDetails

  return (
    <li className="app-list">
      <img src={imageUrl} alt={appName} height="70px" width="70px" />
      <p className="name">{appName}</p>
    </li>
  )
}

export default AppItem
