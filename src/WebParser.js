// const fetch = require("node-fetch");
// const jsdom = require("jsdom");
import jsdom from 'jsdom';

const { JSDOM } = jsdom;
async function getSongs() {
    const songs = await fetch('https://www.azchords.com/a/adamsandler-tabs-113/odetomycar-tabs-205998.html',);

    const dom = new JSDOM(await songs.text());
    tabText = dom.window.document.querySelector('pre').textContent

    let eTabs = getFromBetween.get(tabText,"E|", "|");
    let BTabs = getFromBetween.get(tabText,"B|", "|");
    let GTabs = getFromBetween.get(tabText,"G|", "|");
    let DTabs = getFromBetween.get(tabText,"D|", "|");
    let ATabs = getFromBetween.get(tabText,"A|", "|");

    lines = [];
    for (let i = 0; i < BTabs.length; i++) {
        lines.push({
            "e" : eTabs[i*2],
            "B" : BTabs[i],
            "G" : GTabs[i],
            "D" : DTabs[i],
            "A" : ATabs[i],
            "E" : eTabs[(i-1)/2 + 1]
        })
    }

    return lines;
}

var getFromBetween = {
    results:[],
    string:"",
    getFromBetween:function (sub1,sub2) {
        if(this.string.indexOf(sub1) < 0 || this.string.indexOf(sub2) < 0) return false;
        var SP = this.string.indexOf(sub1)+sub1.length;
        var string1 = this.string.substr(0,SP);
        var string2 = this.string.substr(SP);
        var TP = string1.length + string2.indexOf(sub2);
        return this.string.substring(SP,TP);
    },
    removeFromBetween:function (sub1,sub2) {
        if(this.string.indexOf(sub1) < 0 || this.string.indexOf(sub2) < 0) return false;
        var removal = sub1+this.getFromBetween(sub1,sub2)+sub2;
        this.string = this.string.replace(removal,"");
    },
    getAllResults:function (sub1,sub2) {
        // first check to see if we do have both substrings
        if(this.string.indexOf(sub1) < 0 || this.string.indexOf(sub2) < 0) return;

        // find one result
        var result = this.getFromBetween(sub1,sub2);
        // push it to the results array
        this.results.push(result);
        // remove the most recently found one from the string
        this.removeFromBetween(sub1,sub2);

        // if there's more substrings
        if(this.string.indexOf(sub1) > -1 && this.string.indexOf(sub2) > -1) {
            this.getAllResults(sub1,sub2);
        }
        else return;
    },
    get:function (string,sub1,sub2) {
        this.results = [];
        this.string = string;
        this.getAllResults(sub1,sub2);
        return this.results;
    }
};

getSongs();