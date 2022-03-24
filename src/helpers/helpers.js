import songs from "../data/song.json"
import data from "../data/data.json"
import periods from "../data/periods.json"


export const getSong = (name) => {
  return songs[name]
}

export const getData = (index) => {
  return data[index]
}

export const getPeriod = (index) => {
  return periods[index]
}


const rgbToHex = (color) => {
  const rgb = color.slice(4, -1).split(', ')
  const r = rgb[0]
  const g = rgb[1]
  const b = rgb[2]
  return ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}


/**
 * Retourne la couleur dark ou light en fonction de bgColor.
 * bgColor doit être au format hexa : #112233.
 */
export const getTextColor = (bgColor, dark = "#363636", light = "#fafafa") => {
  const hexcolor = rgbToHex(bgColor)
  const r = parseInt(hexcolor.substr(0, 2), 16)
  const g = parseInt(hexcolor.substr(2, 2), 16)
  const b = parseInt(hexcolor.substr(4, 2), 16)
  const yiq = (r * 299 + g * 587 + b * 114) / 1000
  return yiq >= 48 ? dark : light
}