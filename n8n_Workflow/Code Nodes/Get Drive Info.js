const items = $input.all();

const audio = items.find(i => i.json.mimeType === 'audio/mpeg');
const image = items.find(i => i.json.mimeType === 'image/jpeg');

return [{
  json: {
    audioUrl: audio.json.webContentLink,
    imageUrl: image.json.webContentLink
  }
}];