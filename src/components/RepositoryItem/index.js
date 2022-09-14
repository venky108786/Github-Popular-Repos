// Write your code here
import './index.css'

const RepositoryItem = props => {
  const {each} = props
  // eslint-disable-next-line no-unused-vars
  const {id, name, issuesCount, forksCount, starsCount, avatarUrl} = each
  return (
    <li className="card">
      <img src={avatarUrl} alt={name} className="img" />
      <h1 className="card-head">{name}</h1>
      <p className="para">{starsCount} Stars</p>
      <p className="para">{forksCount} Forks</p>
      <p className="para">{issuesCount} Issues</p>
    </li>
  )
}
export default RepositoryItem
