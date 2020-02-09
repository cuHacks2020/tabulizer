export async function getSong(url) {
    const songs = await fetch(url);
    const rawHtml = await songs.text();

    const regex = /[\n]+(\w[# ]?)\|?([:|]?[-—\d\/hpbimXxrs~\\|]{5,})/gm;

    const tabs = [];
    let read = 0;
    let results;
    while ((results = regex.exec(rawHtml)) !== null) {
        const note = results[1]
        const line = results[2];

        if (read < 6) {
            tabs.push({
                note,
                line: line.split('')
            });
        } else {
            const stringObj = tabs.find((string) => 
                string.note === note
            );

            if (!stringObj) {
                throw new Error('Failed to parse');
            }

            stringObj.line = [...stringObj.line, ...line.split('')];
        }
        read++;
    }

    if (tabs.length !== 6) {
        throw new Error('Failed to parse');
    }
    return tabs;
}