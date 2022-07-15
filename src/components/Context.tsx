import React, { Component, createContext } from 'react'

interface State {
  currentSection: number
  setCurrentSection: (section: number) => void
}

const Context = createContext<State | null>(null)

class ContextProvider extends Component<any, State> {
  state = {
    currentSection: 0,
    setCurrentSection: (section: number) => {
      this.setState({ currentSection: section })
    },
  }

  handleScroll = () => {
    if (window.scrollY === 0) {
      this.setState({ currentSection: 0 })
    } else if (
      window.innerHeight + window.scrollY >=
      document.body.offsetHeight
    ) {
      this.setState({ currentSection: 4 })
    }
  }

  componentDidMount(): void {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount(): void {
    window.removeEventListener('scroll', this.handleScroll)
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

export { Context }
export default ContextProvider
