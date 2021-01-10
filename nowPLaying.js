async getSongInfo() {
   const url = "http://159.89.141.147:8000/status.xsl";
   const response = await fetch(url);
   const data = await response.json();
   var title;
   var station;
   console.log(data["icestats"]["source"]["title"]);
   if (data["icestats"]["source"][1]) {
     title = data["icestats"]["source"][1]["title"] === "Live" ? "•Live" :  data["icestats"]["source"][0]["title"];
     station = data["icestats"]["source"][1]["server_name"];
   } else {
     title = data["icestats"]["source"]["title"];
     station = data["icestats"]["source"]["server_name"];
   }

   this.setState({loading: false, title: title, station: station});
 }

 async componentDidMount() {
   await this.getSongInfo();
   this.interval = setInterval(() => { this.getSongInfo();}, 5000);
 }

 render() {
   let loading = "loading track info..."

   return (
     <div>
       <h3 className="TrackTitle">{this.state.loading ? loading : this.state.title}</h3>
       <StartButton />
       <h3 className="RadioName">{this.state.station}</h3>
     </div>
   )
 }
