import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Beranda extends Component {
  render() { 
		return (
			<div style={{width: '100%', margin: 'auto'}}>
				<Grid className="beranda-grid">
					<Cell col={12}>
						<img src="https://cdn.idntimes.com/content-images/post/20200822/kamen-rider-4eff588b6d23a89803b7374daf612240_600x400.png" alt="avatar" className="avatar-img" />

						<div className="banner-text">
							<h1>Belalang Tempur</h1>
							<hr/>
							<p>UI/UX Designer | Graphic Designer | HTML/CSS</p>

							<div className="social-links">
								<a href="http://www.facebook.com" rel="noopener noreferrer" target="_blank">
									<i className="fa fa-facebook-square" aria-hidden="true" />
								</a>

								<a href="http://www.twitter.com" rel="noopener noreferrer" target="_blank">
									<i className="fa fa-twitter-square" aria-hidden="true" />
								</a>

								<a href="http://www.github.com" rel="noopener noreferrer" target="_blank">
									<i className="fa fa-github-square" aria-hidden="true" />
								</a>

								<a href="http://www.linkedin.com" rel="noopener noreferrer" target="_blank">
									<i className="fa fa-linkedin-square" aria-hidden="true" />
								</a>

								<a href="http://www.youtube.com" rel="noopener noreferrer" target="_blank">
									<i className="fa fa-youtube-square" aria-hidden="true" />
								</a>

							</div>
						</div>
					</Cell>
				</Grid>
			</div>
		)
  }
}

export default Beranda;