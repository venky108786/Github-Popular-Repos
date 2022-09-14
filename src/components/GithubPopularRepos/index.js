import './index.css'
import {Component} from 'react'
import LanguageFilterItem from '../LanguageFilterItem'
import RepositoryItem from '../RepositoryItem'

// eslint-disable-next-line no-unused-vars
const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

// Write your code here
class GithubPopularRepos extends Component {
  state = {list: [], lang: ''}

  componentDidMount() {
    this.fetchLanguage()
  }

  buttonClicked = value => {
    this.setState({lang: value})
  }

  fetchLanguage = async () => {
    const {lang} = this.state
    const url = `https://apis.ccbp.in/popular-repos?language=${lang}`
    const options = {
      method: 'GET',
    }
    const response = await fetch(url, options)
    const data = await response.json()
    const updateData = data.popular_repos.map(each => ({
      name: each.name,
      id: each.id,
      issuesCount: each.issues_count,
      forksCount: each.forks_count,
      starsCount: each.stars_count,
      avatarUrl: each.avatar_url,
    }))
    this.setState({list: updateData})
  }

  render() {
    const {list} = this.state
    return (
      <div className="main-bg">
        <h1 className="popular-heading">Popular</h1>
        <ul className="ul">
          {languageFiltersData.map(each => (
            <LanguageFilterItem each={each} key={each.id} />
          ))}
        </ul>
        <div>
          <ul className="card-container">
            {list.map(each => (
              <RepositoryItem
                each={each}
                key={each.id}
                buttonClicked={this.buttonClicked}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default GithubPopularRepos
