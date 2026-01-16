const { withProjectBuildGradle } = require('@expo/config-plugins');

module.exports = function withKotlinVersion(config) {
  return withProjectBuildGradle(config, (config) => {
    if (config.modResults.contents.includes('kotlinVersion')) {
      // Already modified
      return config;
    }

    // Add Kotlin version variable at the top of buildscript
    config.modResults.contents = config.modResults.contents.replace(
      /buildscript\s*{/,
      `buildscript {
    ext {
        kotlinVersion = '1.9.25'
    }`
    );

    // Update the Kotlin plugin dependency to use the variable
    config.modResults.contents = config.modResults.contents.replace(
      /classpath\("org\.jetbrains\.kotlin:kotlin-gradle-plugin:[^"]+"\)/,
      'classpath("org.jetbrains.kotlin:kotlin-gradle-plugin:$kotlinVersion")'
    );

    return config;
  });
};
