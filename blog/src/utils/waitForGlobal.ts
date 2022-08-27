const waitForGlobal = (key: string, callback: any) => {
  if (window?.[key]) {
    callback()
  } else {
    setTimeout(() => {
      waitForGlobal(key, callback)
    }, 100)
  }
}

export default waitForGlobal
