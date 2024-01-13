import {useEffect, useState} from 'react'

export const isStringInvalid = (text) => {
    return !text;
}

export const storeInLocalStorage = (key, value) => {
    localStorage.setItem(key, value)
    printInConsole(`${key} stored in local storage -- data = ${localStorage.getItem(key)}`)
}

export const fetchFromLocalStorage = (key) => {
    const fetchedData = localStorage.getItem(key)
    printInConsole(`fetchFromLocalStorage: ${key} = ${fetchedData}`)
    return fetchedData
}

export const clearLocalStorage = () => {
    window.localStorage.clear()
}

export const OutsideClick = (ref) => {
    const [isClicked, setIsClicked] = useState()
    useEffect(() => {
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                setIsClicked(true)
            } else {
                setIsClicked(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [ref])
    return isClicked
}

export const refreshBrowser = (reload = false) => {
    window.location.reload(reload)
}

export const isObjEmpty = (object) => {
    // if object null or no of keys is 0 => return true
    return !object || Object.keys(object).length === 0
}

export const isListEmpty = (list) => {
    // if list null or length is 0 => return true
    return !list || list.length === 0
}

export const isLoggedIn = () => {
    return !isStringInvalid(fetchFromLocalStorage('personId'))
}

export const logout = () => {
    clearLocalStorage()
    refreshBrowser()
}

export const formatTime = (obj) => {
    /*const inputDateString = event.startTime
    const inputDate = new Date(inputDateString)
    const options = {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        timeZoneName: 'short',
    }
    const formattedDate = new Intl.DateTimeFormat('en-US', options).format(inputDate)*/
    return obj.stringDateTime
}

export const getInitialLetter = (text) => {
    const splits = text && text.split(' ')
    return !isListEmpty(splits) ? splits.length >= 1 ?
        `${splits[0].substring(0, 1).toLocaleUpperCase()}${splits[splits.length - 1].substring(0, 1).toLocaleUpperCase()}`
        : splits[0].substring(0, 1).toLocaleUpperCase() : ''
}

export const navigateToNewTab = (url) => window.open(url)