export function shortenTitle(title) {
  if (title.length > 40) {
    const croppedTitle = title.substring(0, 39);
    return `${croppedTitle}...`;
  }
  return title;
}

export function shortenDescription(description) {
  if (description.length > 150) {
    const croppedDescription = description.substring(0, 149);
    return `${croppedDescription}...`;
  }
  return description;
}
