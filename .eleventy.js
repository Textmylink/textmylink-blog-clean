module.exports = function(eleventyConfig) {
  // Tell Eleventy to copy config.yml to the output folder
  eleventyConfig.addPassthroughCopy("src/admin/config.yml");

  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "_site"
    }
  };
};
