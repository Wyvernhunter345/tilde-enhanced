const CONFIG = {
  /**
   * The category, name, key, url, search path, color, icon, and quicklaunch properties for your commands.
   * Icons must be added to "icons" folder and their values/names must be updated.
   * If none of the specified keys are matched, the '*' key is used.
   * Commands without a category don't show up in the help menu.
   * Update line 11 and 13 if you prefer using Google.
   */
  commands: [{
      name: 'google',
      key: '*',
      url: 'https://google.com',
      search: '/search?q={}'
    },
    {
      category: 'General',
      name: 'Mail',
      key: 'gm',
      url: 'https://gmail.com',
      search: '/#search/text={}',
      color: 'linear-gradient(135deg, #dd5145, #dd5145)',
      icon: 'mail',
      quickLaunch: true,
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
      name: 'Telegram',
      key: 'tg',
      url: 'https://web.telegram.org',
      color: '#5682a3',
      icon: 'telegram',
      quickLaunch: false,
    },
    {
      category: 'General',
      name: 'Messages',
      key: 'ms',
      url: 'https://messages.google.com',
      color: 'linear-gradient(135deg, #25D366, #128C7E, #075E54)',
      icon: 'msg',
      quickLaunch: false,
    },
    {
      category: 'General',
      name: 'Outlook',
      key: 'ou',
      url: 'https://outlook.office365.com/owa/?realm=endeavour.sa.edu.au&exsvurl=1&ll-cc=3081&modurl=0',
      color: '#7289da',
      icon: 'outlook',
      quickLaunch: false,
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
      name: 'Liam',
      key: 'lb',
      url: 'https://liambelgraver.com',
      search: '/search?q={}',
      color: '#212121',
      icon: 'lb',
      quickLaunch: true,
    },
    {
      category: 'Tech',
      name: 'dynadot',
      key: 'dd',
      url: 'https://www.dynadot.com/',
      search: '/search?q={}',
      color: '#212121',
      icon: 'dd',
      quickLaunch: true,
    },


    {
      category: 'Fun',
      name: 'YouTube',
      key: 'yt',
      url: 'https://youtube.com',
      search: '/results?search_query={}',
      color: 'linear-gradient(135deg, #cd201f, #cd4c1f)',
      icon: 'youtube',
      quickLaunch: false,
    },
    {
      category: 'Fun',
      name: 'Reddit',
      key: 're',
      url: 'https://reddit.com',
      search: '/search?q={}',
      color: 'linear-gradient(135deg, #FF8456, #FF4500)',
      icon: 'reddit',
      quickLaunch: false,
    },
    {
      category: 'Fun',
      name: 'Plex',
      key: 'px',
      url: 'https://app.plex.tv/desktop',
      color: 'linear-gradient(135deg, #E50914, #CB020C)',
      icon: 'plex',
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
      quickLaunch: false,
    },


    {
      category: 'Server',
      name: 'unRAID',
      key: 'un',
      url: 'https://leafandjam.duckdns.org',
      search: '/search?q={}&src=typed_query',
      color: 'linear-gradient(135deg, #1DA1F2, #19608F)',
      icon: 'unraid',
      quickLaunch: true,
    },
    {
      category: 'Server',
      name: 'Radarr',
      key: 'ra',
      url: 'https://leafandjam.duckdns.org/radarr',
      color: 'linear-gradient(45deg, #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d)',
      icon: 'radarr',
      quickLaunch: true,
    },
    {
      category: 'Server',
      name: 'Sonarr',
      key: 'so',
      url: 'https://leafandjam.duckdns.org/sonarr',
      search: '/search/results/all/?keywords={}',
      color: 'linear-gradient(135deg, #006CA4, #0077B5)',
      icon: 'sonarr',
      quickLaunch: true,
    },
    {
      category: 'Server',
      name: 'Qbit',
      key: 'qb',
      url: 'https://leafqbit.duckdns.org',
      color: 'linear-gradient(135deg, #FFF, #3F3F3F)',
      icon: 'qbit',
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
    g: ['g/issues', 'g/pulls', 'gist.github.com'],
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
  clockDelimiter: ' ',

  /**
   * Show a twenty-four-hour clock instead of a twelve-hour clock with AM/PM.
   */
  twentyFourHourClock: true,

  /**
   * File extension for icon images
   */
  iconExtension: 'png'
};
