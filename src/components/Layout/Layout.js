import React, { Fragment } from 'react';

const layout = (props) => (
	<Fragment>
		<div>
			Toolbabr, SideDrawer, Backdrop
		</div>
		<main>
			{props.children}
		</main>
	</Fragment>
);

export default layout;