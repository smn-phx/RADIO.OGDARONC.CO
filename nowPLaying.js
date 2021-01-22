const audioUrl = 'http://audio.radio.ogdaronc.co/status-json.xsl'
async function getTrackName () {
  const response = await fetch( audioUrl );
  const data = await response.json();
  console.log(data.icestats.source[0].title);
  document.getElementById('TrackTitle').textContent = data.icestats.source[0].title;



}

const refreshTrack = setInterval(() => {
  getTrackName();
}, 30000);


getTrackName();
