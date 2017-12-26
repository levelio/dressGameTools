// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.css';

export default class Home extends Component {

  handlerReloadWebView = () => {
    if (this.webView) {
      this.webView.reload()
    }
  }

  handlerReloadGender = gender => {
    if (this.webView) {
      this.webView.loadURL(`http://yangcong345.com/cosplay/index.html?gender=${gender}&from=my`)
    }
  }

  render() {
    return (
      <div className={styles.container} data-tid="container">
        <webview
          ref={ref => { this.webView = ref }}
          className={styles.dressGame}
          src="http://yangcong345.com/cosplay/index.html?gender=male&from=my" />
        <div className={styles.closet}>
          <div className="setting_form">
            <div className="form_title">操作：</div>
            <div>
              <button>脱掉全部</button>
              <button onClick={this.handlerReloadWebView}>重载人物</button>
            </div>
          </div>
          <div className="setting_form">
            <div className="form_title">性别：</div>
            <label htmlFor="gender_male">
              <input
                id="gender_male"
                type="radio"
                name="gender"
                value="male"
                onClick={() => this.handlerReloadGender('male')} /> 男
            </label>
            <label htmlFor="gender_female">
              <input
                id="gender_female"
                type="radio"
                name="gender"
                value="female"
                onClick={() => this.handlerReloadGender('female')} /> 女
            </label>
          </div>
          <div className="setting_form">
            <div className="form_title">服装列表</div>
            <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
              <li>6</li>
              <li>7</li>
              <li>8</li>
              <li>9</li>
              <li>10</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
