// Get invertedColors preference from cookies
CONFIG.invertedColors = localStorage.getItem('invertColorCookie') ?
  JSON.parse(localStorage.getItem('invertColorCookie')) :
  CONFIG.invertedColors;

// Get showKeys preference from cookies
CONFIG.showKeys = localStorage.getItem('showKeysCookie') ?
  JSON.parse(localStorage.getItem('showKeysCookie')) :
    CONFIG.showKeys;

// Get date & time preference from cookies
CONFIG.changeDateTime = localStorage.getItem('dateTimeCookie') ?
    JSON.parse(localStorage.getItem('dateTimeCookie')) :
        CONFIG.changeDatetime;

// Get 12-hour or 24-hour clock preference from cookies
CONFIG.twentyFourHourClock = localStorage.getItem('twentyFourHourCookie') ?
    JSON.parse(localStorage.getItem('twentyFourHourCookie')) :
        CONFIG.twentyFourHourClock;


const queryParser = new QueryParser({
  commands: CONFIG.commands,
  pathDelimiter: CONFIG.pathDelimiter,
  searchDelimiter: CONFIG.searchDelimiter,
});

const influencers = CONFIG.influencers.map(influencerConfig => {
  return new {
    Default: DefaultInfluencer,
    Commands: CommandsInfluencer,
    DuckDuckGo: DuckDuckGoInfluencer,
    History: HistoryInfluencer,
  } [influencerConfig.name]({
    defaultSuggestions: CONFIG.defaultSuggestions,
    limit: influencerConfig.limit,
    parseQuery: queryParser.parse,
    commands: CONFIG.commands
  });
});

const suggester = new Suggester({
  enabled: CONFIG.suggestions,
  influencers,
  limit: CONFIG.suggestionsLimit,
});

const help = new Help({
  commands: CONFIG.commands,
  newTab: CONFIG.newTab,
  suggester,
  invertedColors: CONFIG.invertedColors,
    showKeys: CONFIG.showKeys

});

const form = new Form({
  colors: CONFIG.colors,
  instantRedirect: CONFIG.instantRedirect,
  newTab: CONFIG.newTab,
  parseQuery: queryParser.parse,
  suggester,
  toggleHelp: help.toggle,
  quickLaunch: help.launch,
  categoryLaunch: help.launchCategory,
  invertedColors: CONFIG.invertedColors,
  showKeys: CONFIG.showKeys
});

new Clock({
  delimiter: CONFIG.clockDelimiter,
  toggleHelp: help.toggle,
    twentyFourHourClock: CONFIG.twentyFourHourClock,
    datetime: CONFIG.changeDateTime,
});

new datetime({
    toggleHelp: help.toggle,
});