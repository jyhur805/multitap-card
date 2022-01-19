import {
  LitElement,
  svg,
  html,
} from "https://unpkg.com/lit-element@2.0.1/lit-element.js?module";

class MultitapCard extends LitElement {
  static get properties() {
    return {
      hass: {},
      config: {},
    };
  }

  handleMore(en) {
    const e = new Event("hass-more-info", { bubbles: true, composed: true });
    e.detail = { entityId: en };
    this.dispatchEvent(e);
  }

  renderSVG() {
    const { usbs, switches, font_size } = this.config;

    const s1 = this.hass.states[switches[0]["entity"]];
    const s2 = this.hass.states[switches[1]["entity"]];
    const s3 = this.hass.states[switches[2]["entity"]];
    const s4 = this.hass.states[switches[3]["entity"]];

    const s1_name = switches[0]["name"];
    const s2_name = switches[1]["name"];
    const s3_name = switches[2]["name"];
    const s4_name = switches[3]["name"];

    // console.log(usbs[0]);
    const u1_name = usbs[0]["name"];
    const u2_name = usbs[1]["name"];

    return svg`
    <svg width="100%"
    height="100%" viewBox="0 0 601 619" version="1.1" xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/"
    style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5;">
    <rect id="Artboard1" x="0" y="0" width="600.026" height="618.371" style="fill:none;" />
    <circle cx="126.736" cy="225.459" r="5.332" style="fill:#79AFE9;" />
    <circle cx="126.736" cy="210.531" r="5.332" style="fill:#DD6462;" />
    <path d="M175.85,306.728l-0,270" style="fill:none;stroke:#fff;stroke-width:1.5px;" />
    <path d="M244.407,306.728l0,200" style="fill:none;stroke:#fff;stroke-width:1.5px;" />
    <path d="M314.247,306.728l0,130" style="fill:none;stroke:#fff;stroke-width:1.5px;" />
    <path d="M384.069,306.728l-0,60" style="fill:none;stroke:#fff;stroke-width:1.5px;" />
    <path d="M464.211,42.98l-0,130" style="fill:none; stroke:#fff;stroke-width:${
      u1_name != "" ? `1.5px` : `0px`
    };" />
    <path d="M490.253,112.98l-0,60" style="fill:none; stroke:#fff;stroke-width:${
      u2_name != "" ? `1.5px` : `0px`
    };" />
    <text @click="${() =>
      this.handleMore(
        switches[0]["entity"]
      )}" x="185.858px" y="574.876px" style="font-weight:500;font-size:${
      font_size !== undefined ? font_size : "24px"
    };fill:#fff;cursor: pointer;">${
      s1_name !== undefined ? s1_name : s1.attributes.friendly_name
    }</text>
    <text @click="${() =>
      this.handleMore(
        switches[1]["entity"]
      )}" x="253.85px" y="505.645px" style="font-weight:500;font-size:${
      font_size !== undefined ? font_size : "24px"
    };fill:#fff;cursor: pointer;">${
      s2_name !== undefined ? s2_name : s2.attributes.friendly_name
    }</text>
    <text @click="${() =>
      this.handleMore(
        switches[2]["entity"]
      )}" x="324.054px" y="435.898px" style="font-weight:500;font-size:${
      font_size !== undefined ? font_size : "24px"
    };fill:#fff;cursor: pointer;">${
      s3_name !== undefined ? s3_name : s3.attributes.friendly_name
    }</text>
    <text @click="${() =>
      this.handleMore(
        switches[3]["entity"]
      )}" x="392.618px" y="365.969px" style="font-weight:500;font-size:${
      font_size !== undefined ? font_size : "24px"
    };fill:#fff;cursor: pointer;">${
      s4_name !== undefined ? s4_name : s4.attributes.friendly_name
    }</text>
    <text x="470.885px" y="61.389px" style="font-weight:500;font-size:${
      font_size !== undefined ? font_size : "24px"
    };fill:#fff;">${u1_name !== undefined ? u1_name : "usb1"}</text>
    <text x="499.944px" y="132.099px" style="font-weight:500;font-size:${
      font_size !== undefined ? font_size : "24px"
    };fill:#fff;">${u2_name !== undefined ? u2_name : "usb2"}</text>
    <circle cx="173.49" cy="196.408" r="8.232" style="fill:${
      s1.state === "on" ? "#DD6462" : "#000"
    };" />
    <circle cx="242.638" cy="196.54" r="8.232" style="fill:${
      s2.state === "on" ? "#DD6462" : "#000"
    };" />
    <circle cx="311.662" cy="196.467" r="8.232" style="fill:${
      s3.state === "on" ? "#DD6462" : "#000"
    };" />
    <circle cx="380.936" cy="196.514" r="8.232" style="fill:${
      s4.state === "on" ? "#DD6462" : "#000"
    };" />
    <path
        d="M51.909,230.694l6.803,0l-0,-36.134c-0,-9.458 7.679,-17.138 17.138,-17.138l441.723,0c9.459,0 17.138,7.68 17.138,17.138l0,91.146c0,9.459 -7.679,17.138 -17.138,17.138l-441.723,0c-9.459,0 -17.138,-7.679 -17.138,-17.138l-0,-36.134l-6.803,0l0,-18.878Zm121.159,1.021c17.552,0 31.802,14.25 31.802,31.802c-0,17.551 -14.25,31.801 -31.802,31.801c-17.552,0 -31.801,-14.25 -31.801,-31.801c-0,-17.552 14.249,-31.802 31.801,-31.802Zm69.419,0c17.552,0 31.802,14.25 31.802,31.802c-0,17.551 -14.25,31.801 -31.802,31.801c-17.552,0 -31.802,-14.25 -31.802,-31.801c0,-17.552 14.25,-31.802 31.802,-31.802Zm69.103,0c17.552,0 31.801,14.25 31.801,31.802c0,17.551 -14.249,31.801 -31.801,31.801c-17.552,0 -31.802,-14.25 -31.802,-31.801c0,-17.552 14.25,-31.802 31.802,-31.802Zm68.91,0c17.552,0 31.802,14.25 31.802,31.802c-0,17.551 -14.25,31.801 -31.802,31.801c-17.551,0 -31.801,-14.25 -31.801,-31.801c-0,-17.552 14.25,-31.802 31.801,-31.802Zm-148.099,38.514c2.207,0 4,1.793 4,4c-0,2.208 -1.793,4.001 -4,4.001c-2.208,-0 -4.001,-1.793 -4.001,-4.001c0,-2.207 1.793,-4 4.001,-4Zm69.77,0c2.208,0 4.001,1.793 4.001,4c-0,2.208 -1.793,4.001 -4.001,4.001c-2.208,-0 -4,-1.793 -4,-4.001c-0,-2.207 1.792,-4 4,-4Zm-139.024,0c2.208,0 4,1.793 4,4c0,2.208 -1.792,4.001 -4,4.001c-2.208,-0 -4,-1.793 -4,-4.001c-0,-2.207 1.792,-4 4,-4Zm206.626,0c2.208,0 4.001,1.793 4.001,4c-0,2.208 -1.793,4.001 -4.001,4.001c-2.208,-0 -4,-1.793 -4,-4.001c-0,-2.207 1.792,-4 4,-4Zm98.924,-14.727l-8.62,0l-0,20.329l8.62,0l0,-20.329Zm26.795,0l-8.62,0l-0,20.329l8.62,0l0,-20.329Zm-241.737,-7.672c2.208,0 4,1.793 4,4c0,2.208 -1.792,4.001 -4,4.001c-2.208,-0 -4.001,-1.793 -4.001,-4.001c0,-2.207 1.793,-4 4.001,-4Zm137.372,0c2.208,0 4.001,1.793 4.001,4c-0,2.208 -1.793,4.001 -4.001,4.001c-2.207,-0 -4,-1.793 -4,-4.001c0,-2.207 1.793,-4 4,-4Zm-206.626,0c2.208,0 4.001,1.793 4.001,4c-0,2.208 -1.793,4.001 -4.001,4.001c-2.208,-0 -4,-1.793 -4,-4.001c-0,-2.207 1.792,-4 4,-4Zm139.024,0c2.208,0 4.001,1.793 4.001,4c-0,2.208 -1.793,4.001 -4.001,4.001c-2.207,-0 -4,-1.793 -4,-4.001c0,-2.207 1.793,-4 4,-4Zm-209,-49.733l-25.556,0l0,39.174l25.556,0l0,-39.174Zm12.211,22.029c2.943,0 5.332,2.39 5.332,5.333c0,2.943 -2.389,5.332 -5.332,5.332c-2.943,-0 -5.332,-2.389 -5.332,-5.332c-0,-2.943 2.389,-5.333 5.332,-5.333Zm0,-14.927c2.943,0 5.332,2.389 5.332,5.332c0,2.943 -2.389,5.333 -5.332,5.333c-2.943,-0 -5.332,-2.39 -5.332,-5.333c-0,-2.943 2.389,-5.332 5.332,-5.332Zm46.649,-17.395c4.802,0 8.701,3.899 8.701,8.702c0,4.802 -3.899,8.701 -8.701,8.701c-4.803,-0 -8.702,-3.899 -8.702,-8.701c0,-4.803 3.899,-8.702 8.702,-8.702Zm69.165,0c4.802,0 8.701,3.899 8.701,8.702c0,4.802 -3.899,8.701 -8.701,8.701c-4.803,-0 -8.702,-3.899 -8.702,-8.701c0,-4.803 3.899,-8.702 8.702,-8.702Zm69.165,0c4.802,0 8.701,3.899 8.701,8.702c-0,4.802 -3.899,8.701 -8.701,8.701c-4.803,-0 -8.702,-3.899 -8.702,-8.701c0,-4.803 3.899,-8.702 8.702,-8.702Zm69.164,0c4.803,0 8.702,3.899 8.702,8.702c-0,4.802 -3.899,8.701 -8.702,8.701c-4.802,-0 -8.701,-3.899 -8.701,-8.701c0,-4.803 3.899,-8.702 8.701,-8.702Z"
        style="fill:#fff;stroke:#fff;stroke-width:1px;" />
</svg>
    `;
  }

  renderCSS() {
    const { background_color, icon_size, image_size } = this.config;
    return html`
      <style>
        :host {
          display: flex;
          flex: 1;
          flex-direction: column;
        }
        ha-card {
          flex-direction: column;
          flex: 1;
          position: relative;
          padding: 0;
          border-radius: 4px;
          overflow: hidden;
        }
        .preview {
          background: ${background_color !== undefined
            ? background_color
            : "var(--ha-card-background)"};
          overflow: hidden;
          position: relative;
          padding: 16px;
        }
        .image {
          background: center / contain no-repeat;
          height: ${image_size !== undefined ? image_size : "300px"};
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .not-available {
          text-align: center;
          color: var(--text-primary-color);
          font-size: 16px;
        }
        .stats {
          border-top: 1px solid rgba(255, 255, 255, 0.2);
          display: flex;
          flex-direction: row;
          justify-content: space-evenly;
          color: var(--text-primary-color);
          margin-bottom: 7px;
        }
        .stats-block {
          text-align: center;
          border-right: 1px solid rgba(255, 255, 255, 0.2);
          flex-grow: 1;
          cursor: pointer;
          padding-top: 5px;
        }
        .stats-block:last-child {
          border: 0px;
        }
        .stats-subtitle {
          font-size: 14px;
        }

        .toolbar {
          background: ${background_color !== undefined
            ? background_color
            : "var(--ha-card-background)"};
          min-height: 30px;
          display: flex;
          flex-direction: row;
          justify-content: space-evenly;
          padding: 10px 0;
        }
        .toolbar ha-icon-button {
          flex-direction: column;
          width: ${icon_size !== undefined ? icon_size : "36px"};
          height: ${icon_size !== undefined ? icon_size : "36px"};
          --mdc-icon-size: ${icon_size !== undefined ? icon_size : "36px"};
          --mdc-icon-button-size: ${icon_size !== undefined
            ? icon_size
            : "36px"};
          opacity: 0.5;
        }
        .toolbar ha-icon-button.active {
          color: var(--primary-color);
          opacity: 1;
        }
        .toolbar ha-icon-button:first-child {
          margin-left: 5px;
        }
        .toolbar ha-icon-button:last-child {
          margin-right: 5px;
        }
      </style>
    `;
  }

  renderState() {
    const { switches } = this.config;
    const [domain, name] = switches[0]["entity"].split(".");
    const linkquality =
      this.hass.states[switches[0]["entity"]].attributes.linkquality;
    if (linkquality !== undefined) {
      return html`
        <ha-icon icon="mdi:zigbee" style="color: #FFFFFF;"></ha-icon>
        ${linkquality}
      `;
    } else {
      return html``;
    }
  }

  renderStats() {
    const { switches } = this.config;
    const buttons = switches.map(({ entity, name, icon }) => {
      const [domain, name_] = entity.split(".");
      const execute = () => {
        this.hass.callService(domain, "toggle", { entity_id: entity });
      };
      const className = this.hass.states[entity].state === "on" ? "active" : "";
      return html`
        <ha-icon-button
          title="${name !== undefined
            ? name
            : this.hass.states[entity].attributes.friendly_name}"
          class="${className}"
          @click="${execute}"
          ><ha-icon
            icon="${icon !== undefined ? icon : `mdi:power-plug-outline`}"
          ></ha-icon
        ></ha-icon-button>
      `;
    });
    return html`
      <div class="stats-block">
        <div class="toolbar">${buttons}</div>
      </div>
    `;
  }

  render() {
    return html`
      ${this.renderCSS()}
      <ha-card>
        <div class="preview">
          ${this.renderState()}
          <div class="image">${this.renderSVG()}</div>
        </div>
        <div class="stats">${this.renderStats()}</div>
      </ha-card>
    `;
  }

  setConfig(config) {
    if (!config.switches) {
      throw new Error("switches 4개 멀티탭을 지정하세요.");
    }
    this.config = config;
  }

  getCardSize() {
    return 2;
  }
}

customElements.define("multitap-card", MultitapCard);
