export function getYoutubeId(url: string) {
  // Regular expression patterns for different YouTube URL formats
  const patterns = [
    /youtu\.be\/([^?&/]+)/, // For "https://youtu.be/qUeud6DvOWI"
    /youtube\.com\/watch\?v=([^&]+)/, // For "https://www.youtube.com/watch?v=qUeud6DvOWI&t=3s"
    /youtube\.com\/embed\/([^?&/]+)/, // For "https://www.youtube.com/embed/qUeud6DvOWI"
  ];

  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) {
      return match[1];
    }
  }

  return null;
}
