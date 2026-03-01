import { tags } from "../../constants";

import "./tabs.scss";

const Tabs = () => {
  return (
    <section className="tabs">
      <div className="container">
        <div className="tabs-container">
          {tags.map((tag) => (
            <button key={tag.id} title={tag.title}>
              {tag.title}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tabs;
