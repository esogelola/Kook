import axios from "axios";
class Github {
  async load() {
    return await axios
      .get("https://gh-pinned-repos-5l2i19um3.vercel.app/?username=esogelola")
      .then((res) => {
        return res;
      })
      .catch((err) => {
        console.log(err);
        return undefined;
      });
  }
}

const github = new Github();

export default github;
