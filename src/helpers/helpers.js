import songs from "../data/song.json"
import data from "../data/data.json"


export const getSong = (name) => {
  return songs[name]
}

export const getData = (index) => {
  return data[index]
}