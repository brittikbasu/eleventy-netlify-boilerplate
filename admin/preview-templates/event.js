import htm from "https://unpkg.com/htm?module";
import format from "https://unpkg.com/date-fns@2.0.0-alpha.2/esm/format/index.js?module";

const html = htm.bind(h);

// Preview component for a Post
const Event = createClass({
  render() {
    const entry = this.props.entry;

    return html `
    
      <main>
        <article>
          <h1>${entry.getIn(["data", "title"], null)}</h1>
          <p>
            <small>
              <time>${
                  format(
                    entry.getIn(["data", "date"], new Date()),
                    "DD MMM, YYYY"
                  )
                }</time>  
                <p> By :
              ${
                entry.getIn(["data", "organizer"], "")
                }
                </p>
            </small>
          </p>

          ${this.props.widgetFor("body")}
          <p>
            ${
              entry.getIn(["data", "tags"], []).map(
                tag =>
                  html`
                    <a href="#" rel="tag">${tag}</a>
                  `
              )
            }
          </p>
        </article>
      </main>
    `;
  }
});

export default Event;