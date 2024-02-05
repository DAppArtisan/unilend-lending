import Carousal from "./carousal";
import "./styles/index.scss";
async function getPosts() {
  try {
    const response = await fetch(
      "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@unilend"
    );
    const posts = await response.json();
    return posts;
  } catch (error) {
    console.error("Error Fetching Blog Posts", error);
  }
}

export default async function Blogs() {
  const postsPromise = getPosts();
  const [posts] = await Promise.all([postsPromise]);
  return (
    <section className="padding-block-400 ">
      <div className="cta">
        <div className="container2 ">
          <div className="info-container">
            <h2 className="heading01">Blog and News</h2>
            <p className="secondary-heading01 padding-top-200">
              Any user can create any ERC20/ERC20 pool to begin lending and
              borrowing <br></br> for those assets, thereby making every digital
              asset productive.
            </p>
          </div>
          <Carousal posts={posts} />
        </div>
      </div>
    </section>
  );
}
