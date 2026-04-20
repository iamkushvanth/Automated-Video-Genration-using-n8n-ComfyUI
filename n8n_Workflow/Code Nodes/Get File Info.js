const history = $input.first().json;
const promptId = Object.keys(history)[0];
const outputs = history[promptId].outputs;

// Find the node with audio output
const audioNode = Object.values(outputs).find(node => node.audio);
const audio = audioNode.audio[0];

return [{
  json: {
    filename: audio.filename,
    subfolder: audio.subfolder,
    type: audio.type
  }
}];