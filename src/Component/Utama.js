import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Beranda from './Beranda/Beranda';
import Karya from './Karya/Karya'
import Kontak from './Kontak/Kontak';
import TentangSaya from './TentangSaya/TentangSaya';

const Utama = () => (
	<Switch>
		<Route exact path="/" component={Beranda} />
		<Route path="/beranda" component={Beranda} />
		<Route path="/tentangsaya" component={TentangSaya} />
		<Route path="/karya" component={Karya} />
		<Route path="/kontak" component={Kontak} />
	</Switch>
  )

export default Utama;