const CONFIG = {
  /**
   * The category, name, key, url, search path, color, icon, and quicklaunch properties for your commands.
   * Icons must be added to "icons" folder and their values/names must be updated.
   * If none of the specified keys are matched, the '*' key is used.
   * Commands without a category don't show up in the help menu.
   * Update line 11 and 13 if you prefer using Google.
   */
  commands: [{
      name: 'DuckDuckGo',
      key: '*',
      url: 'https://duckduckgo.com',
      search: '/?q={}'
    },
    {
      name: 'Google',
      key: 'gl',
      url: 'https://google.com',
      search: '/search?q={}',
      color: '#4284f4',
    },
    {
      name: 'Yandex',
      key: 'yd',
      url: 'https://yandex.com',
      search: '/search/?text={}',
      color: 'linear-gradient(135deg, #fc4423, #ffcc00)',
    },
    {
      category: 'General',
      name: 'Drive',
      key: 'dr',
      url: 'https://drive.google.com',
      search: '/drive/search?q={}',
      color: 'linear-gradient(135deg, #FFD04B, #1EA362, #4688F3)',
      icon: 'drive',
      quickLaunch: true,
    },
    {
      category: 'General',
      name: 'Canvas',
      key: 'cv',
        url: 'https://canvas.endeavour.sa.edu.au',
        color: '#e23e29',
      quickLaunch: true,
    },
    {
      category: 'General',
      name: 'Outlook',
      key: 'ou',
      url: 'https://outlook.office365.com/owa/?realm=endeavour.sa.edu.au&exsvurl=1&ll-cc=3081&modurl=0',
      color: '#7289da',
      icon: 'outlook',
      quickLaunch: true,
    },
        {
            category: 'General',
            name: 'Discord',
            key: 'dc',
            url: 'https://discordapp.com',
            color: '#7289da',
            icon: 'discord',
            quickLaunch: true,
        },
        {
            category: 'General',
            name: 'Translate',
            key: 'tr',
            url: 'https://translate.google.com/',
            search: '/#view=home&op=translate&sl=auto&tl=en&text={}',
            color: '#1a73e8',
            icon: 'translate',
            quickLaunch: true,
        },

    {
      category: 'Tech',
      name: 'GitHub',
      key: 'gh',
      url: 'https://github.com',
      search: '/search?q={}',
      color: 'linear-gradient(135deg, #2b2b2b, #3b3b3b)',
      icon: 'github',
      quickLaunch: true,
    },
    {
      category: 'Tech',
      name: '1337x',
      key: '13',
      url: 'https://1337x.to',
      search: '/search?q={}',
      color: 'linear-gradient(135deg, #53341C, #F48024)',
      icon: '1337x',
      quickLaunch: true,
    },
    {
      category: 'Tech',
      name: 'Cracked',
      key: 'cr',
      url: 'https://cracked.to',
      search: '/search?stories[query]={}',
      color: 'linear-gradient(135deg, #FF6600, #DC5901)',
      icon: 'cracked',
      quickLaunch: true,
    },
    {
      category: 'Tech',
      name: 'Codepen',
      key: 'cp',
      url: 'https://codepen.io',
      search: '/search?q={}',
      color: '#212121',
      icon: 'codepen',
      quickLaunch: true,
        },
        {
            category: 'Tech',
            name: 'Archive',
            key: 'ac',
            url: 'https://archive.org',
            search: '/search.php?query={}',
            color: '#fcf5e6',
            quickLaunch: true,
        },
        {
            category: 'Tech',
            name: 'DevDocs',
            key: 'dd',
            url: 'https://devdocs.io',
            color: 'linear-gradient(135deg, #33373A, #484949)',
            icon: 'devdocs',
            quickLaunch: true,
        },
        {
            category: 'Tech',
            name: 'Jisho',
            key: 'j',
            url: 'https://jisho.org/',
            search: '/search/{}',
            color: 'linear-gradient(135deg, #59da2a, #5b5b5c)',
            quickLaunch: true,
        },
        {
            category: 'Fun',
            name: 'Pokemon Showdown',
            key: 'p',
            url: 'https://play.pokemonshowdown.com/',
            color: 'linear-gradient(135deg, #E8EEFC, #D8DEEB)',
            icon: 'showdown',
            quickLaunch: false,
        },
    {
      category: 'Fun',
      name: 'YouTube',
      key: 'y',
      url: 'https://youtube.com',
      search: '/results?search_query={}',
      color: 'linear-gradient(135deg, #cd201f, #cd4c1f)',
      icon: 'youtube',
      quickLaunch: false,
        },
        {
            category: 'Fun',
            name: 'Lichess',
            key: 'l',
            url: 'https://lichess.org',
            search: '/@/{}',
            color: 'linear-gradient(135deg, #890E00, #954E86, #000052)'
        },
        

    {
      category: 'Fun',
      name: 'Reddit',
      key: 'r',
      url: 'https://reddit.com',
      search: '/search?q={}',
      color: 'linear-gradient(135deg, #FF8456, #FF4500)',
      icon: 'reddit',
      quickLaunch: true,
        },
        {
            
            category: 'Fun',
            name: 'Apple Music',
            key: 'am',
                url: 'https://music.apple.com/library/recently-added',
                search: '/search?term={}',
                color: '#EF2D46',
            icon: 'music',
            quickLaunch: true,
        },
        
    {
      category: 'Fun',
      name: 'Spotify',
      key: 'sp',
      url: 'https://open.spotify.com/',
      search: '/search/{}',
      color: '#1dd35e',
      icon: 'spotify',
      quickLaunch: true,
        },
        {
            category: 'Fun',
            name: 'Roms',
            key: 'rm',
            url: 'https://r-roms.github.io/',
            color: '#375a7f',
            quickLaunch: true,
        },
        {
            category: 'Fun',
            name: '4chan',
            key: '4c',
            url: 'https://4chan.org',
            color: 'linear-gradient(135deg, #ffccaa, #92c769)',
            icon: '4c',
            quickLaunch: true,
        },
        {
            category: 'Fun',
            name: 'Twitch',
            key: 'tw',
            url: 'https://www.twitch.tv',
            search: '/directory/game/{}',
            color: 'linear-gradient(135deg, #6441a5, #4b367c)',
            icon: 'twitch',
            quickLaunch: false,
        },
        {
            category: 'Fun',
            name: 'Steam Unlocked',
            key: 'su',
            url: 'https://steamunlocked.net',
            color: '#fe0000',
            search: '/?s={}',
            quickLaunch: true,
        },

        {
            category: 'Anime',
            name: 'Gelbooru',
            key: 'gb',
            url: 'https://gelbooru.com',
            color: 'linear-gradient(135deg, #006ffa, #005cd0)',
            icon: 'gb',
            search: '/index.php?page=post&s=list&tags={}',
            quickLaunch: true,
        },
        {
            category: 'Anime',
            name: 'Danbooru',
            key: 'db',
            url: 'https://danbooru.donmai.us',
            color: 'linear-gradient(135deg, #a9d4ff, #0077ff)',
            icon: 'db',
            search: '/posts?tags={}',
            quickLaunch: true,
        },
        {
            category: 'Anime',
            name: 'IQDB ',
            key: 'iq',
            url: 'https://iqdb.org',
            color: '#dbdbdb',
            icon: 'iq',
            quickLaunch: true,
        },

  ],

  /**
   * Get suggestions as you type.
   */
  suggestions: true,
  suggestionsLimit: 4,

  /**
   * The order and limit for each suggestion influencer. An "influencer" is
   * just a suggestion source. The following influencers are available:
   *
   * - "Commands" suggestions come from CONFIG.commands
   * - "Default" suggestions come from CONFIG.defaultSuggestions
   * - "DuckDuckGo" suggestions come from the duck duck go search api
   * - "History" suggestions come from your previously entered queries
   */
  influencers: [{
      name: 'Commands',
      limit: 2
    },
    {
      name: 'Default',
      limit: 4
    },
    {
      name: 'History',
      limit: 1
    },
    {
      name: 'DuckDuckGo',
      limit: 4
    },
  ],

  /**
   * Default search suggestions for the specified queries.
   */
  defaultSuggestions: {
    gh: ['g/issues', 'g/pulls', 'gist.github.com'],
    r: ['r/r/unixporn', 'r/r/startpages', 'r/r/webdev', 'r/r/technology'],
  },

  /**
   * Instantly redirect when a key is matched. Put a space before any other
   * queries to prevent unwanted redirects.
   */
  instantRedirect: false,

  /**
   * Open triggered queries in a new tab.
   */
  newTab: false,

  /**
   * Dynamic overlay background colors when command domains are matched.
   */
  colors: true,

  /**
   * Invert color theme
   */
  invertedColors: false,

  /**
   * Show keys instead of icons
   */
  showKeys: true,

  /**
   * Change how date and time is displayed
   */
  changeDateTime: false,

  /**
   * The delimiter between a command key and your search query. For example,
   * to search GitHub for potatoes, you'd type "g:potatoes".
   */
  searchDelimiter: ':',

  /**
   * The delimiter between a command key and a path. For example, you'd type
   * "r/r/unixporn" to go to "https://reddit.com/r/unixporn".
   */
  pathDelimiter: '/',

  /**
   * The delimiter between the hours and minutes on the clock.
   */
  clockDelimiter: ':',

  /**
   * Show a twenty-four-hour clock instead of a twelve-hour clock with AM/PM.
   */
  twentyFourHourClock: false,

  /**
   * File extension for icon images
   */
  iconExtension: 'png'
};
