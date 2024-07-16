
export const activePageClass = (current_path, link_url) => {
    return current_path === link_url || current_path.startsWith(link_url + '/') ? 'shadow-lg shadow-red-950/40 text-white bg-red-950 hover:bg-red-300 hover:text-blue-950 rounded-lg' : 'drop-shadow-md text-blue-950 hover:bg-red-950 hover:text-white rounded-md opacity-60 hover:opacity-80';
}

export const activePageMobileClass = (current_path, link_url) => {
    return current_path === link_url || current_path.startsWith(link_url + '/') ? 'shadow-lg shadow-red-950/40 text-white '+website.dark_bg_hover+' hover:bg-red-300 hover:text-blue-950 rounded-lg' : 'drop-shadow-md block text-gray-100 hover:bg-red-950 opacity-60 hover:opacity-80';
}

// website
export const api = 'https://buwuleandmayiga.com/api/'


export let website = {
    name: 'Green Streets',
    shortname: 'GS',
    fullname: 'Green Streets',
    dark_bg: 'bg-teal-700',
    dark_bg_hover: 'bg-red-600',
    dark_text: 'text-teal-700',
    dark_text_hover: 'text-red-600',
}

export const website_links = [
    {
        name: "Home",
        url: "/",
    },
    {
        name: "Subscribe",
        url: "/people",
    },
    {
        name: "Traffic and Safety Tips",
        url: "/people",
    },
    {
        name: "Account Profile",
        url: "/people",
    },
]


export let transition_smoother = 'transition-all ease-in-out delay-150 duration-300'