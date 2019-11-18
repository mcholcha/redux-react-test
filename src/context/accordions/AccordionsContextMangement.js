/**
 * @author Mateusz Cholcha
 */


import React, { useState } from 'react'

export const AccordionsContext = React.createContext({
  isAllOpen: false,
  children: {},
  registerChild: () => {},
  unregisterChild: () => {},
  registerAllChildren: () => {},
  unregisterAllChildren: () => {},
  setChild: () => {},
  setAll: () => {}
})

export const AccordionsContextProvider = (props) => {

  const registerChild = key => {
    setState(prevState => {
      return {
        ...prevState,
        children: {
          ...prevState.children,
          [key]: prevState.isAllOpen
        }
      }
    })
  }

  const unregisterChild = key => {
    setState(prevState => {
      const children = {...prevState.children}
      delete children[key]

      return {
        ...prevState,
        isAllOpen: !Object.keys(children).map(key => children[key]).includes(false),
        children
      }
    })
  }

  const registerAllChildren = keys => {
    setState(prevState => {
      const children = {}

      keys.forEach(key => {
        children[key] = prevState.isAllOpen
      })

      return {
        ...prevState,
        children: children
      }
    })
  }

  const unregisterAllChildren = () => {
    setState(prevState => {
      return {
        ...prevState,
        isAllOpen: false,
        children: {},
      }
    })
  }

  const setChild = (key, isOpen) => {
    setState(prevState => {
      const children = {
        ...prevState.children,
        [key]: isOpen
      }

      return {
        ...prevState,
        isAllOpen: !Object.keys(children).map(key => children[key]).includes(false),
        children
      }
    })
  }

  const setAll = isOpen => {
    setState(prevState => {
      const children = {}

      Object.keys(prevState.children).forEach(key => {
        children[key] = isOpen
      })

      return {
        ...prevState,
        isAllOpen: isOpen,
        children: children
      }
    })
  }

  const initState = {
    isAllOpen: false,
    children: {},
    registerChild,
    unregisterChild,
    registerAllChildren,
    unregisterAllChildren,
    setChild,
    setAll
  }

  const [state, setState] = useState(initState)

  return (
    <AccordionsContext.Provider value={state}>
      {props.children}
    </AccordionsContext.Provider>
  )
}
