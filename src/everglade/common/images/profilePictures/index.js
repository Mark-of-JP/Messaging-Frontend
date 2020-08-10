import bubble from './bubble.jpg'
import cup from './cup.jpg'
import deer from './deer.jpg'
import flower from './flower.jpg'
import hoops from './hoops.jpg'
import islands from './islands.jpg'
import snow from './snow.jpg'
import strawberries from './strawberries.jpg'
import tiles from './tiles.jpg'
import window from './window.jpg'

import { MarkJP as developerOne, Jakub as developerTwo } from '../developers'

const pictureInfo = {
    "default": {
        name: "Default",
        picture: deer,
        source: 'https://unsplash.com'
    },
    "bubble": {
        name: "Bubble",
        picture: bubble,
        source: 'https://unsplash.com'
    },
    "cup": {
        name: "Cup",
        picture: cup,
        source: 'https://unsplash.com'
    },
    "flower": {
        name: "Flower",
        picture: flower,
        source: 'https://unsplash.com'
    },
    "hoops": {
        name: "Hoops",
        picture: hoops,
        source: 'https://unsplash.com'
    },
    "islands": {
        name: "Islands",
        picture: islands,
        source: 'https://unsplash.com'
    },
    "snow": {
        name: "Snow",
        picture: snow,
        source: 'https://unsplash.com'
    },
    "strawberries": {
        name: "Strawberries",
        picture: strawberries,
        source: 'https://unsplash.com'
    },
    "tiles": {
        name: "Tiles",
        picture: tiles,
        source: 'https://unsplash.com'
    },
    "window": {
        name: "Window",
        picture: window,
        source: 'https://unsplash.com'
    },
    "developerOne": {
        name: "Mark JP Sanchez",
        picture: developerOne,
        source: 'Original Content'
    },
    "developerTwo": {
        name: "Jakub Wozniak",
        picture: developerTwo,
        source: 'Original Content'
    }
}

export function getProfilePictureInfo(pictureName) {
    if (pictureName in pictureInfo)
        return pictureInfo[pictureName]

    return pictureInfo['default']
}

export function getPictureKeys() {
    return Object.keys(pictureInfo)
}