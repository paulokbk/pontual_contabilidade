export const truncateString = (str, maxLength) => {
    if (str) {
      if (str.length > maxLength) {
        // eslint-disable-next-line
        return str.substring(0, maxLength - 3) + '...'
      }
      return str  
    }
}
