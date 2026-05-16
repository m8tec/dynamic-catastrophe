export function isColorDark(color: string): boolean {
    if (color.startsWith("#")) {
      const rgb = parseInt(color.slice(1), 16);
      var r = (rgb >> 16) & 0xff;
      var g = (rgb >> 8) & 0xff;
      var b = (rgb >> 0) & 0xff;

      var luma = 0.2126 * r + 0.7152 * g + 0.0722 * b;
      return luma < 128;
    }
    console.warn("Unknown color format, defaulting to dark:", color);
    return true;
  }