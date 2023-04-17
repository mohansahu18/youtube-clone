var nameList = [
    'Time', 'Past', 'Future', 'Dev',
    'Fly', 'Flying', 'Soar', 'Soaring', 'Power', 'Falling',
    'Fall', 'Jump', 'Cliff', 'Mountain', 'Rend', 'Red', 'Blue',
    'Green', 'Yellow', 'Gold', 'Demon', 'Demonic', 'Panda', 'Cat',
    'Kitty', 'Kitten', 'Zero', 'Memory', 'Trooper', 'XX', 'Bandit',
    'Fear', 'Light', 'Glow', 'Tread', 'Deep', 'Deeper', 'Deepest',
    'Mine', 'Your', 'Worst', 'Enemy', 'Hostile', 'Force', 'Video',
    'Game', 'Donkey', 'Mule', 'Colt', 'Cult', 'Cultist', 'Magnum',
    'Gun', 'Assault', 'Recon', 'Trap', 'Trapper', 'Redeem', 'Code',
    'Script', 'Writer', 'Near', 'Close', 'Open', 'Cube', 'Circle',
    'Geo', 'Genome', 'Germ', 'Spaz', 'Shot', 'Echo', 'Beta', 'Alpha',
    'Gamma', 'Omega', 'Seal', 'Squid', 'Money', 'Cash', 'Lord', 'King',
    'Duke', 'Rest', 'Fire', 'Flame', 'Morrow', 'Break', 'Breaker', 'Numb',
    'Ice', 'Cold', 'Rotten', 'Sick', 'Sickly', 'Janitor', 'Camel', 'Rooster',
    'Sand', 'Desert', 'Dessert', 'Hurdle', 'Racer', 'Eraser', 'Erase', 'Big',
    'Small', 'Short', 'Tall', 'Sith', 'Bounty', 'Hunter', 'Cracked', 'Broken',
    'Sad', 'Happy', 'Joy', 'Joyful', 'Crimson', 'Destiny', 'Deceit', 'Lies',
    'Lie', 'Honest', 'Destined', 'Bloxxer', 'Hawk', 'Eagle', 'Hawker', 'Walker',
    'Zombie', 'Sarge', 'Capt', 'Captain', 'Punch', 'One', 'Two', 'Uno', 'Slice',
    'Slash', 'Melt', 'Melted', 'Melting', 'Fell', 'Wolf', 'Hound',
    'Legacy', 'Sharp', 'Dead', 'Mew', 'Chuckle', 'Bubba', 'Bubble', 'Sandwich', 'Smasher', 'Extreme', 'Multi', 'Universe', 'Ultimate', 'Death', 'Ready', 'Monkey', 'Elevator', 'Wrench', 'Grease', 'Head', 'Theme', 'Grand', 'Cool', 'Kid', 'Boy', 'Girl', 'Vortex', 'Paradox'
];
export function randomNameGenerate() {
    return nameList[Math.floor(Math.random() * nameList.length)];
};


const messages = [
    "I'm not sure if I could handle it, to be honest.",
    "What's your favorite type of music?",
    "I enjoy listening to a variety of genres, but I particularly like rock and pop music.",
    "I prefer classical music, it's so relaxing and soothing.",
    "That's interesting, I don't know much about classical music.",
    "Would you like me to recommend some pieces for you to listen to?",
    "Sure, that would be great!",
    "What's your favorite movie of all time?",
    "That's a tough question. There are so many great movies out there!",
    "I really like The Godfather and The Shawshank Redemption.",
    "Those are both fantastic movies. I also love The Lord of the Rings trilogy.",
    "Oh yeah, those are classics!",
    "What's your favorite food?",
    "I love pizza, it's my all-time favorite.",
    "I'm more of a sushi person myself, I could eat it every day!",
    "That's cool, I've never been a big fan of sushi.",
    "Do you like to cook?",
    "Yes, I enjoy cooking. It's a great way to relax and unwind after a long day.",
    "I'm not much of a cook, I usually just order takeout or eat out.",
    "That's understandable, cooking can be time-consuming and sometimes stressful.",
    "What's your favorite book?",
    "I really enjoyed The Hitchhiker's Guide to the Galaxy by Douglas Adams.",
    "I'm doing well, thanks for asking!",
    "No, I haven't seen any good movies lately. Have you?",
    "I haven't seen anything good recently, unfortunately.",
    "I don't have any plans for the weekend yet. Do you have any suggestions?",
    "I was thinking about going for a hike, want to come with?",
    "I'm not sure yet, what kind of hike were you thinking?",
    "Let's meet at the trailhead at 9am.",
    "I love reading. I mostly enjoy science fiction and fantasy. How about you?",
    "I'm not much of a reader, I prefer watching movies.",
    "I mostly enjoy playing video games and practicing yoga. How about you?",
    "I like to go hiking and explore new places.",
    "Yes, I have a dog named Max. He's a golden retriever. Do you have any pets?",
    "We like to go for walks and play fetch in the park.",
    "No, I haven't tried skydiving. Have you?",
    "I enjoy listening to a variety of genres, but I particularly like rock and pop music. What about you?",
    "I prefer classical music, it's so relaxing and soothing.",
    "Yes, please!",
    "That's a tough question. There are so many great movies out there!",
    "I really like The Godfather and The Shawshank Redemption. What about you?",
    "I also love The Lord of the Rings trilogy.",
    "I love pizza, it's my all-time favorite. What about you?",
    "I'm more of a sushi person myself, I could eat it every day!",
    "Yes, I enjoy cooking. It's a great way to relax and unwind after a long day. Do you like to cook?",
    "I'm not much of a cook, I usually just order takeout or eat out.",
];


export function generateRandomMessage() {
    return messages[Math.floor(Math.random() * messages.length)];

}


export const numberFormatter = new Intl.NumberFormat("en-GB", {
    notation: "compact",
    compactDisplay: "short",
});


export const dateDiff = (x) => {
    let now = new Date().getTime();
    let postTime = new Date(x).getTime();
    let diff = (now - postTime) / 1000;
    const minute = 60;
    const hour = minute * 60;
    const day = hour * 24;
    const week = day * 7;
    const month = day * 30;
    const year = day * 365;

    if (diff < minute) {
        if (diff < 1 && diff > 0) {
            return "1 second ago";
        }
        if (diff >= 2) {
            return `${Math.floor(diff)} seconds ago`;
        }
    }

    if (diff > minute && diff < hour) {
        let interval = diff / minute;
        if (interval > 2) {
            return `${Math.floor(interval)} minutes ago`;
        } else {
            return "1 minute ago";
        }
    }

    if (diff > hour && diff < day) {
        let interval = diff / hour;
        if (interval >= 2) {
            return `${Math.floor(interval)} hours ago`;
        } else {
            return "1 hour ago";
        }
    }

    if (diff > day && diff < week) {
        let interval = diff / day;
        if (interval >= 2) {
            return `${Math.floor(interval)} days ago`;
        } else {
            return "1 day ago";
        }
    }

    if (diff > week && diff < month) {
        let interval = diff / week;
        if (interval >= 2) {
            return `${Math.floor(interval)} weeks ago`;
        } else {
            return "1 week ago";
        }
    }

    if (diff > month && diff < year) {
        let interval = diff / month;
        if (interval >= 2) {
            return `${Math.floor(interval)} months ago`;
        } else {
            return "1 month ago";
        }
    }

    if (diff > year) {
        let interval = diff / year;
        if (interval >= 2) {
            return `${Math.floor(interval)} years ago`;
        } else {
            return "1 year ago";
        }
    }
};



const timeFormat = (timer) => {
    const getSeconds = `0${timer % 60}`.slice(-2);
    const minutes = `${Math.floor(timer / 60)}`;
    const getMinutes = `0${parseInt(minutes) % 60}`.slice(-2);
    const getHours =
        Math.floor(timer / 3600) < 100
            ? `0${Math.floor(timer / 3600)}`.slice(-2)
            : `${Math.floor(timer / 3600)}`.slice(-3);
    return getHours > 0
        ? `${getHours > 0 && getHours}:${getMinutes}:${getSeconds}`
        : getMinutes > 9
            ? `${getMinutes}:${getSeconds}`
            : `${Number(getMinutes).toString()}:${getSeconds}`;
};



export const vidDuration = (duration) => {
    const pattern = /(?:([\d]+)D)?T(?:([\d]+)H)?(?:([\d]+)M)?(?:([\d]+)S)/;
    const groups = duration.match(pattern);
    if (groups !== null) {
        const days = groups[1] === undefined ? 0 : parseInt(groups[1]);
        const hours = groups[2] === undefined ? 0 : parseInt(groups[2]);
        const minutes = groups[3] === undefined ? 0 : parseInt(groups[3]);
        const seconds = groups[4] === undefined ? 0 : parseInt(groups[4]);
        const totalSeconds = days * 86400 + hours * 3600 + minutes * 60 + seconds;
        return timeFormat(totalSeconds);
    }
};

