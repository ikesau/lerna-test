import { Grapher, URL } from "@ikesau/grapher";
import { GrapherConfig } from "@ikesau/owid-types";

// const title: GrapherConfig["title"] = null; // TypeError
const title: GrapherConfig["title"] = "I am a title";

import "./styles.scss";

export function serve() {
  console.log(Grapher());
  console.log(URL);
  console.log(title);
}

serve();
