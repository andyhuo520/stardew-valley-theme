/**
 * Stardew Valley Real-Time System
 * Handles automatic season switching, time-of-day effects, and weather
 */

(function() {
  'use strict';

  // Configuration
  const CONFIG = {
    autoSeason: true,
    autoTimeOfDay: true,
    weatherEnabled: true,
    updateInterval: 60000, // Update every minute
  };

  // Month to season mapping
  const SEASONS = {
    3: 'spring', 4: 'spring', 5: 'spring',
    6: 'summer', 7: 'summer', 8: 'summer',
    9: 'autumn', 10: 'autumn', 11: 'autumn',
    12: 'winter', 1: 'winter', 2: 'winter'
  };

  // Weather probabilities by season
  const WEATHER_PROBS = {
    spring: { rain: 0.3, cloudy: 0.3, sunny: 0.3, fog: 0.1 },
    summer: { sunny: 0.5, rain: 0.2, cloudy: 0.2, storm: 0.1 },
    autumn: { cloudy: 0.4, rain: 0.3, sunny: 0.2, fog: 0.1 },
    winter: { snow: 0.4, cloudy: 0.3, sunny: 0.2, fog: 0.1 }
  };

  class StardewRealTime {
    constructor() {
      this.root = document.documentElement;
      this.currentWeather = null;
      this.init();
    }

    init() {
      this.updateTimeAndSeason();
      this.updateWeather();

      // Update every minute
      setInterval(() => {
        this.updateTimeAndSeason();
      }, CONFIG.updateInterval);

      // Weather changes every 30 minutes
      setInterval(() => {
        this.updateWeather();
      }, 30 * 60 * 1000);
    }

    updateTimeAndSeason() {
      const now = new Date();
      const month = now.getMonth() + 1; // 1-12
      const hour = now.getHours(); // 0-23

      // Set data attributes for CSS selectors
      this.root.setAttribute('data-month', month);
      this.root.setAttribute('data-hour', hour);

      // Auto-switch season theme if enabled
      if (CONFIG.autoSeason) {
        this.applySeasonTheme(month);
      }

      // Apply time of day filter
      if (CONFIG.autoTimeOfDay) {
        this.applyTimeOfDay(hour);
      }
    }

    applySeasonTheme(month) {
      const season = SEASONS[month];
      if (!season) {return;}

      const themeName = `stardew-${season}`;
      const currentTheme = this.root.getAttribute('data-theme');

      // Only change if different and user hasn't manually selected
      if (currentTheme !== themeName && !this.root.hasAttribute('data-user-theme')) {
        this.root.setAttribute('data-theme', themeName);
        console.log(`[StardewRealTime] Auto-switched to ${season} theme`);
      }
    }

    applyTimeOfDay(hour) {
      // CSS handles this via [data-hour] selectors
      // This method can be extended for JavaScript-based effects
    }

    updateWeather() {
      if (!CONFIG.weatherEnabled) {return;}

      const month = parseInt(this.root.getAttribute('data-month')) || new Date().getMonth() + 1;
      const season = SEASONS[month];
      const probs = WEATHER_PROBS[season];

      if (!probs) {return;}

      // Random weather based on probabilities
      const rand = Math.random();
      let cumulative = 0;
      let selectedWeather = 'sunny';

      for (const [weather, prob] of Object.entries(probs)) {
        cumulative += prob;
        if (rand < cumulative) {
          selectedWeather = weather;
          break;
        }
      }

      this.currentWeather = selectedWeather;
      this.root.setAttribute('data-weather', selectedWeather);
      console.log(`[StardewRealTime] Weather changed to: ${selectedWeather}`);
    }

    // Manual controls
    setWeather(weather) {
      this.currentWeather = weather;
      this.root.setAttribute('data-weather', weather);
    }

    setSeason(season) {
      this.root.setAttribute('data-theme', `stardew-${season}`);
      this.root.setAttribute('data-user-theme', 'true');
    }

    enableAutoSeason() {
      this.root.removeAttribute('data-user-theme');
      this.updateTimeAndSeason();
    }
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      window.stardewRealTime = new StardewRealTime();
    });
  } else {
    window.stardewRealTime = new StardewRealTime();
  }

  // Expose for debugging
  window.StardewRealTime = StardewRealTime;
})();
