export const info = {
    desktop:{
        images: {
            type: "directory",
            files: Array(41).fill().map((a, i) => require(`./assets/images/img_${i+1}.jpg`)),
            label: "Images"
        },
        certificates: {
            type: "directory",
            files: [],
            label: "Achievements"
        },
        my_git: {
            type: "link",
            ref: "https://github.com/yashdatir",
            label: "My Git"
        }
    },
    menu: {},
    info: {},
    about: {},
    games: {},
    settings: {},
    "/": {}
}